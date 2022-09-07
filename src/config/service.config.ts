import { registerAs } from "@nestjs/config";

export interface ServiceConfig {
    host: string;
    name: string;
    prefix: string;
    secret: string;
    refreshSecret: string;
    static:string
}

export default registerAs('ServiceConfig', (): ServiceConfig => ({
    host: process.env.SERVER_LISTENER_PORT,
    name: process.env.SERVER_NAME,
    prefix: process.env.PREFIX,
    secret: process.env.SECRET,
    refreshSecret: process.env.REFRESH_SECRET,
    static:process.env.SERVER_STATIC
}));