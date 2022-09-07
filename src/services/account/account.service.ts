import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { instanceToPlain } from 'class-transformer';
import { Account } from 'src/entitys/models/Account';
import { ObjectType } from 'src/types/obj.type';
import { Repository } from 'typeorm';
import { CommonJwtService } from '../common-jwt.service';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(Account)
        private accountRespository: Repository<Account>,
        private commonJwtService: CommonJwtService) {

    }

    /**
    * 密码登录
    * @param query 
    * @returns 
    */
    async loginByPassword(query: ObjectType) {
        const { account, password } = query;
        console.log(account, password);
        let check: Account = await this.accountRespository.createQueryBuilder('u')
            .where('u.account = :account', { account: account })
            .getOne();
        if (check) {
            console.log(check);
            if (check.password === password) {
                const obj = instanceToPlain(check);
                const token = await this.commonJwtService.createToken(obj, 1);
                const refreshToken = await this.commonJwtService.createToken(obj, 2);
                return { data: { token, refreshToken } };
            } else {
                throw new HttpException('账号或者密码不正确', HttpStatus.BAD_REQUEST);
            }
        } else {
            throw new HttpException('账号未注册！', HttpStatus.BAD_REQUEST)
        }
    }
}
