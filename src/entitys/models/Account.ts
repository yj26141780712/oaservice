import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("account_PK", ["id"], { unique: true })
@Entity("account", { schema: "dbo" })
export class Account {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "account", length: 20 })
  account: string;

  @Column("varchar", { name: "password", length: 20 })
  password: string;

  @Column("datetime", { name: "create_time", default: () => "getdate()" })
  createTime: Date;

  @Column("datetime", { name: "update_time", default: () => "getdate()" })
  updateTime: Date;
}
