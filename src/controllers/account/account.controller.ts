import { Controller, Get, Query } from '@nestjs/common';
import { AccountService } from 'src/services/account/account.service';
import { ObjectType } from 'src/types/obj.type';


@Controller('account')
export class AccountController {


    constructor(private accountService: AccountService) {

    }

    @Get('/loginByPassword')
    login(@Query() query: ObjectType) {
        return this.accountService.loginByPassword(query);
    }
}
