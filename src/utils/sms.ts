import * as https from 'https';
import * as url from 'url';
import * as querystring from 'querystring';
import * as crypto from 'crypto';
import * as util from 'util';

//必填,请参考"开发准备"获取如下数据,替换为实际值 位置应用管理
const realUrl = 'https://rtcsms.cn-north-1.myhuaweicloud.com:10743/sms/batchSendSms/v1' //APP接入地址+接口访问URI
const appKey = '58As8umXSHgT9kY3nz7LPo8ZS2GA' //APP_Key
const appSecret = 'T1mny6wg7ZuG6Y6BzOo5641Vcyq4' //APP_Secret

const sender = '8820122323386' //国内短信签名通道号或国际/港澳台短信通道号

//条件必填,国内短信关注,当templateId指定的模板类型为通用模板时生效且必填,必须是已审核通过的,与模板类型一致的签名名称
//国际/港澳台短信不用关注该参数
const signature = '易力加' //签名名称

//选填,短信状态报告接收地址,推荐使用域名,为空或者不填表示不接收状态报告
const statusCallBack = ''

/**
 * 构造请求Body体
 *
 * @param sender
 * @param receiver
 * @param templateId
 * @param templateParas
 * @param statusCallBack
 * @param signature | 签名名称,使用国内短信通用模板时填写
 * @returns
 */
function buildRequestBody(sender: string, receiver: string, templateId: string, templateParas: string, statusCallBack: string, signature: string) {
  if (null !== signature && signature.length > 0) {
    return querystring.stringify({
      from: sender,
      to: receiver,
      templateId: templateId,
      templateParas: templateParas,
      statusCallback: statusCallBack,
      signature: signature,
    })
  }

  return querystring.stringify({
    from: sender,
    to: receiver,
    templateId: templateId,
    templateParas: templateParas,
    statusCallback: statusCallBack,
  })
}

/**
 * 构造X-WSSE参数值
 *
 * @param appKey
 * @param appSecret
 * @returns
 */
function buildWsseHeader(appKey: string, appSecret: string) {
  const time = new Date(Date.now()).toISOString().replace(/.[0-9]+\Z/, 'Z') //Created
  const nonce = crypto.randomBytes(64).toString('hex') //Nonce
  const passwordDigestBase64Str = crypto
    .createHash('sha256')
    .update(nonce + time + appSecret)
    .digest('base64') //PasswordDigest

  return util.format(
    'UsernameToken Username="%s",PasswordDigest="%s",Nonce="%s",Created="%s"',
    appKey,
    passwordDigestBase64Str,
    nonce,
    time
  )
}

// 请求Body,不携带签名名称时,signature请填null

const getTemplateId = (type: string) => {
  let templateId = ''
  switch (type) {
    case '1':
      templateId = '2efb23e978a541679a03ddca0545e095' // 注册
      break
    case '2':
      templateId = '498af4b878a84d2e90cb1d49b77df851' // 登录
      break
    case '3':
      templateId = '6d0861007980415ba091cee0baeae7a3' // 重置密码
      break
  }
  return templateId;
}

const sendVcode = (type: string, phone: string, code: string): Promise<any> => {
  const receiver = `+86${phone}`
  const templateParas = `["${code}"]`
  const templateId = getTemplateId(type)
  const body = buildRequestBody(sender, receiver, templateId, templateParas, statusCallBack, signature)
  const urlobj = url.parse(realUrl) //解析realUrl字符串并返回一个 URL对象
  const options = {
    host: urlobj.hostname, //主机名
    port: urlobj.port, //端口
    path: urlobj.pathname, //URI
    method: 'POST', //请求方法为POST
    headers: {
      //请求Headers
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'WSSE realm="SDP",profile="UsernameToken",type="Appkey"',
      'X-WSSE': buildWsseHeader(appKey, appSecret),
    },
    rejectUnauthorized: false, //为防止因HTTPS证书认证失败造成API调用失败,需要先忽略证书信任问题
  }
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      res.setEncoding('utf8') //设置响应数据编码格式
      res.on('data', (d) => {
        resolve(d)
      })
    })
    req.on('error', (e) => {
      reject(e.message)
    })
    req.write(body) //发送请求Body数据
    req.end() //结束请求
  })
}

export { sendVcode };


