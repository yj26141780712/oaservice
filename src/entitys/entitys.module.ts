import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './models/Account';
import { HrmResource } from './models/HrmResource';
const list = [
    Account,
    HrmResource
];

@Module({
    imports: [TypeOrmModule.forFeature(list)],
    exports: [TypeOrmModule.forFeature(list)]
})
export class EntitysModule { }
