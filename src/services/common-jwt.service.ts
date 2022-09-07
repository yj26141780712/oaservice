import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

enum JwtType {
    token = 1,
    refreshToken = 2
}

const TokenSecret = 'AABB';
const RefreshTokenSecret = 'AABBCC';

@Injectable()
export class CommonJwtService {

    constructor(private readonly jwtService: JwtService) {
    }

    async createToken(payload: any, type: JwtType) {
        try {
            const secret = type === JwtType.token ? TokenSecret : RefreshTokenSecret;
            const expiresIn = type === JwtType.token ? '2h' : '1440h';
            const token = await this.jwtService.signAsync(payload, { secret, expiresIn });
            return token;
        } catch (err) {
            throw err;
        }
    }

    async checkToken(token: string, type: JwtType) {
        try {
            const secret = type === JwtType.token ? TokenSecret : RefreshTokenSecret;
            const payload = await this.jwtService.verifyAsync(token, { secret });
            return payload;
        } catch (err) {
            throw err;
        }
    }


}
