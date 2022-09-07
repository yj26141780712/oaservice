import { Column, Entity, Index } from "typeorm";

@Index("PK__HrmResou__3213E83F058B31A8", ["id"], { unique: true })
@Entity("HrmResource", { schema: "dbo" })
export class HrmResource {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "loginid", nullable: true, length: 1000 })
  loginid: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 1000 })
  password: string | null;

  @Column("varchar", { name: "lastname", nullable: true, length: 1000 })
  lastname: string | null;

  @Column("char", { name: "sex", nullable: true, length: 1 })
  sex: string | null;

  @Column("char", { name: "birthday", nullable: true, length: 10 })
  birthday: string | null;

  @Column("int", { name: "nationality", nullable: true })
  nationality: number | null;

  @Column("int", { name: "systemlanguage", nullable: true })
  systemlanguage: number | null;

  @Column("char", { name: "maritalstatus", nullable: true, length: 1 })
  maritalstatus: string | null;

  @Column("varchar", { name: "telephone", nullable: true, length: 1000 })
  telephone: string | null;

  @Column("varchar", { name: "mobile", nullable: true, length: 1000 })
  mobile: string | null;

  @Column("varchar", { name: "mobilecall", nullable: true, length: 1000 })
  mobilecall: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 1000 })
  email: string | null;

  @Column("int", { name: "locationid", nullable: true })
  locationid: number | null;

  @Column("varchar", { name: "workroom", nullable: true, length: 1000 })
  workroom: string | null;

  @Column("varchar", { name: "homeaddress", nullable: true, length: 1000 })
  homeaddress: string | null;

  @Column("char", { name: "resourcetype", nullable: true, length: 1 })
  resourcetype: string | null;

  @Column("char", { name: "startdate", nullable: true, length: 10 })
  startdate: string | null;

  @Column("char", { name: "enddate", nullable: true, length: 10 })
  enddate: string | null;

  @Column("int", { name: "jobtitle", nullable: true })
  jobtitle: number | null;

  @Column("varchar", { name: "jobactivitydesc", nullable: true, length: 1000 })
  jobactivitydesc: string | null;

  @Column("int", { name: "joblevel", nullable: true })
  joblevel: number | null;

  @Column("int", { name: "seclevel", nullable: true })
  seclevel: number | null;

  @Column("int", { name: "departmentid", nullable: true })
  departmentid: number | null;

  @Column("int", { name: "subcompanyid1", nullable: true })
  subcompanyid1: number | null;

  @Column("int", { name: "costcenterid", nullable: true })
  costcenterid: number | null;

  @Column("int", { name: "managerid", nullable: true })
  managerid: number | null;

  @Column("int", { name: "assistantid", nullable: true })
  assistantid: number | null;

  @Column("int", { name: "bankid1", nullable: true })
  bankid1: number | null;

  @Column("varchar", { name: "accountid1", nullable: true, length: 1000 })
  accountid1: string | null;

  @Column("int", { name: "resourceimageid", nullable: true })
  resourceimageid: number | null;

  @Column("int", { name: "createrid", nullable: true })
  createrid: number | null;

  @Column("char", { name: "createdate", nullable: true, length: 10 })
  createdate: string | null;

  @Column("int", { name: "lastmodid", nullable: true })
  lastmodid: number | null;

  @Column("char", { name: "lastmoddate", nullable: true, length: 10 })
  lastmoddate: string | null;

  @Column("char", { name: "lastlogindate", nullable: true, length: 10 })
  lastlogindate: string | null;

  @Column("varchar", { name: "datefield1", nullable: true, length: 1000 })
  datefield1: string | null;

  @Column("varchar", { name: "datefield2", nullable: true, length: 1000 })
  datefield2: string | null;

  @Column("varchar", { name: "datefield3", nullable: true, length: 1000 })
  datefield3: string | null;

  @Column("varchar", { name: "datefield4", nullable: true, length: 1000 })
  datefield4: string | null;

  @Column("varchar", { name: "datefield5", nullable: true, length: 1000 })
  datefield5: string | null;

  @Column("float", { name: "numberfield1", nullable: true, precision: 53 })
  numberfield1: number | null;

  @Column("float", { name: "numberfield2", nullable: true, precision: 53 })
  numberfield2: number | null;

  @Column("float", { name: "numberfield3", nullable: true, precision: 53 })
  numberfield3: number | null;

  @Column("float", { name: "numberfield4", nullable: true, precision: 53 })
  numberfield4: number | null;

  @Column("float", { name: "numberfield5", nullable: true, precision: 53 })
  numberfield5: number | null;

  @Column("varchar", { name: "textfield1", nullable: true, length: 1000 })
  textfield1: string | null;

  @Column("varchar", { name: "textfield2", nullable: true, length: 1000 })
  textfield2: string | null;

  @Column("varchar", { name: "textfield3", nullable: true, length: 1000 })
  textfield3: string | null;

  @Column("varchar", { name: "textfield4", nullable: true, length: 1000 })
  textfield4: string | null;

  @Column("varchar", { name: "textfield5", nullable: true, length: 1000 })
  textfield5: string | null;

  @Column("tinyint", { name: "tinyintfield1", nullable: true })
  tinyintfield1: number | null;

  @Column("tinyint", { name: "tinyintfield2", nullable: true })
  tinyintfield2: number | null;

  @Column("tinyint", { name: "tinyintfield3", nullable: true })
  tinyintfield3: number | null;

  @Column("tinyint", { name: "tinyintfield4", nullable: true })
  tinyintfield4: number | null;

  @Column("tinyint", { name: "tinyintfield5", nullable: true })
  tinyintfield5: number | null;

  @Column("varchar", { name: "certificatenum", nullable: true, length: 1000 })
  certificatenum: string | null;

  @Column("varchar", { name: "nativeplace", nullable: true, length: 1000 })
  nativeplace: string | null;

  @Column("int", { name: "educationlevel", nullable: true })
  educationlevel: number | null;

  @Column("char", { name: "bememberdate", nullable: true, length: 10 })
  bememberdate: string | null;

  @Column("char", { name: "bepartydate", nullable: true, length: 10 })
  bepartydate: string | null;

  @Column("varchar", { name: "workcode", nullable: true, length: 1000 })
  workcode: string | null;

  @Column("varchar", { name: "regresidentplace", nullable: true, length: 1000 })
  regresidentplace: string | null;

  @Column("char", { name: "healthinfo", nullable: true, length: 1 })
  healthinfo: string | null;

  @Column("varchar", { name: "residentplace", nullable: true, length: 1000 })
  residentplace: string | null;

  @Column("varchar", { name: "policy", nullable: true, length: 1000 })
  policy: string | null;

  @Column("varchar", { name: "degree", nullable: true, length: 1000 })
  degree: string | null;

  @Column("varchar", { name: "height", nullable: true, length: 1000 })
  height: string | null;

  @Column("int", { name: "usekind", nullable: true })
  usekind: number | null;

  @Column("int", { name: "jobcall", nullable: true })
  jobcall: number | null;

  @Column("varchar", { name: "accumfundaccount", nullable: true, length: 1000 })
  accumfundaccount: string | null;

  @Column("varchar", { name: "birthplace", nullable: true, length: 1000 })
  birthplace: string | null;

  @Column("varchar", { name: "folk", nullable: true, length: 1000 })
  folk: string | null;

  @Column("varchar", { name: "residentphone", nullable: true, length: 1000 })
  residentphone: string | null;

  @Column("varchar", { name: "residentpostcode", nullable: true, length: 1000 })
  residentpostcode: string | null;

  @Column("varchar", { name: "extphone", nullable: true, length: 1000 })
  extphone: string | null;

  @Column("varchar", { name: "managerstr", nullable: true, length: 1000 })
  managerstr: string | null;

  @Column("int", { name: "status", nullable: true })
  status: number | null;

  @Column("varchar", { name: "fax", nullable: true, length: 1000 })
  fax: string | null;

  @Column("char", { name: "islabouunion", nullable: true, length: 1 })
  islabouunion: string | null;

  @Column("int", { name: "weight", nullable: true })
  weight: number | null;

  @Column("varchar", {
    name: "tempresidentnumber",
    nullable: true,
    length: 1000,
  })
  tempresidentnumber: string | null;

  @Column("char", { name: "probationenddate", nullable: true, length: 10 })
  probationenddate: string | null;

  @Column("int", { name: "countryid", nullable: true, default: () => "(1)" })
  countryid: number | null;

  @Column("char", { name: "passwdchgdate", nullable: true, length: 10 })
  passwdchgdate: string | null;

  @Column("int", { name: "needusb", nullable: true })
  needusb: number | null;

  @Column("varchar", { name: "serial", nullable: true, length: 1000 })
  serial: string | null;

  @Column("varchar", { name: "account", nullable: true, length: 1000 })
  account: string | null;

  @Column("varchar", { name: "lloginid", nullable: true, length: 1000 })
  lloginid: string | null;

  @Column("int", { name: "needdynapass", nullable: true })
  needdynapass: number | null;

  @Column("float", { name: "dsporder", nullable: true, precision: 53 })
  dsporder: number | null;

  @Column("int", { name: "passwordstate", nullable: true })
  passwordstate: number | null;

  @Column("int", { name: "accounttype", nullable: true })
  accounttype: number | null;

  @Column("int", { name: "belongto", nullable: true })
  belongto: number | null;

  @Column("varchar", { name: "dactylogram", nullable: true, length: 4000 })
  dactylogram: string | null;

  @Column("varchar", {
    name: "assistantdactylogram",
    nullable: true,
    length: 4000,
  })
  assistantdactylogram: string | null;

  @Column("int", { name: "passwordlock", nullable: true })
  passwordlock: number | null;

  @Column("int", { name: "sumpasswordwrong", nullable: true })
  sumpasswordwrong: number | null;

  @Column("varchar", { name: "oldpassword1", nullable: true, length: 1000 })
  oldpassword1: string | null;

  @Column("varchar", { name: "oldpassword2", nullable: true, length: 1000 })
  oldpassword2: string | null;

  @Column("varchar", { name: "msgStyle", nullable: true, length: 1000 })
  msgStyle: string | null;

  @Column("varchar", { name: "messagerurl", nullable: true, length: 1000 })
  messagerurl: string | null;

  @Column("varchar", { name: "pinyinlastname", nullable: true, length: 1000 })
  pinyinlastname: string | null;

  @Column("varchar", { name: "tokenkey", nullable: true, length: 1000 })
  tokenkey: string | null;

  @Column("varchar", { name: "userUsbType", nullable: true, length: 1000 })
  userUsbType: string | null;

  @Column("varchar", { name: "outkey", nullable: true, length: 1000 })
  outkey: string | null;

  @Column("varchar", { name: "adsjgs", nullable: true, length: 1000 })
  adsjgs: string | null;

  @Column("varchar", { name: "adgs", nullable: true, length: 1000 })
  adgs: string | null;

  @Column("varchar", { name: "adbm", nullable: true, length: 1000 })
  adbm: string | null;

  @Column("int", { name: "mobileshowtype", nullable: true })
  mobileshowtype: number | null;

  @Column("int", { name: "usbstate", nullable: true })
  usbstate: number | null;

  @Column("float", {
    name: "totalSpace",
    nullable: true,
    precision: 53,
    default: () => "(100)",
  })
  totalSpace: number | null;

  @Column("float", {
    name: "occupySpace",
    nullable: true,
    precision: 53,
    default: () => "(0)",
  })
  occupySpace: number | null;

  @Column("varchar", {
    name: "ecology_pinyin_search",
    nullable: true,
    length: 1000,
  })
  ecologyPinyinSearch: string | null;

  @Column("char", { name: "isADAccount", nullable: true, length: 1 })
  isAdAccount: string | null;

  @Column("varchar", { name: "accountname", nullable: true, length: 200 })
  accountname: string | null;

  @Column("int", { name: "notallot", nullable: true })
  notallot: number | null;

  @Column("int", { name: "beforefrozen", nullable: true })
  beforefrozen: number | null;

  @Column("varchar", { name: "resourcefrom", nullable: true, length: 100 })
  resourcefrom: string | null;

  @Column("varchar", { name: "isnewuser", nullable: true, length: 100 })
  isnewuser: string | null;

  @Column("varchar", { name: "haschangepwd", nullable: true, length: 10 })
  haschangepwd: string | null;

  @Column("datetime", { name: "created", nullable: true })
  created: Date | null;

  @Column("int", { name: "creater", nullable: true })
  creater: number | null;

  @Column("datetime", { name: "modified", nullable: true })
  modified: Date | null;

  @Column("int", { name: "modifier", nullable: true })
  modifier: number | null;

  @Column("datetime", { name: "passwordlocktime", nullable: true })
  passwordlocktime: Date | null;

  @Column("varchar", { name: "mobilecaflag", nullable: true, length: 10 })
  mobilecaflag: string | null;

  @Column("varchar", { name: "salt", nullable: true, length: 100 })
  salt: string | null;

  @Column("varchar", { name: "companystartdate", nullable: true, length: 10 })
  companystartdate: string | null;

  @Column("varchar", { name: "workstartdate", nullable: true, length: 10 })
  workstartdate: string | null;

  @Column("varchar", { name: "secondaryPwd", nullable: true, length: 1000 })
  secondaryPwd: string | null;

  @Column("int", { name: "useSecondaryPwd", nullable: true })
  useSecondaryPwd: number | null;

  @Column("char", {
    name: "classification",
    nullable: true,
    length: 1,
    default: () => "(3)",
  })
  classification: string | null;

  @Column("varchar", {
    name: "uuid",
    nullable: true,
    length: 100,
    default: () => "newid()",
  })
  uuid: string | null;

  @Column("varchar", { name: "passwordLockReason", nullable: true, length: 10 })
  passwordLockReason: string | null;

  @Column("numeric", {
    name: "companyworkyear",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  companyworkyear: number | null;

  @Column("numeric", {
    name: "workyear",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  workyear: number | null;

  @Column("varchar", { name: "DISMISSDATE", nullable: true, length: 10 })
  dismissdate: string | null;

  @Column("varchar", { name: "encKey", nullable: true, length: 200 })
  encKey: string | null;

  @Column("varchar", { name: "crc", nullable: true, length: 200 })
  crc: string | null;
}
