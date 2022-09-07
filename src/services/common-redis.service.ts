import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CommonRedisService {

    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    }

    /**
     * @Description: 封装设置redis缓存的方法
     * @param key {String} key值
     * @param value {String} key的值
     * @param seconds {Number} 过期时间
     * @return: Promise<any>
     */
    public async set(key: string, value: any, seconds?: number): Promise<any> {
        value = JSON.stringify(value);
        if (!seconds) {
            await this.cacheManager.set(key, value);
        } else {
            await this.cacheManager.set(key, value, { ttl: seconds });
        }
    }


    /**
     * @Description: 设置获取redis缓存中的值
     * @param key {String}
     */
    public async get(key: string): Promise<any> {
        let data: string = await this.cacheManager.get(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }

    /**
     * @Description: 根据key删除redis缓存数据
     * @param key {String}  
     * @return:
     */
    public async del(key: string): Promise<any> {
        await this.cacheManager.del(key);
    }

    /**
     * @Description: 清空redis的缓存
     * @param {type} 
     * @return:
     */
    public async flushall(): Promise<any> {
        await this.cacheManager.reset();
    }
}



