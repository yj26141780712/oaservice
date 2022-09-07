import { registerAs } from "@nestjs/config";

export interface DatabaseConfig {
    type: 'mysql' | '';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    timezone: string;
    charset: string;
}

// registerAs !!!
export default registerAs('DatabaseConfig', (): DatabaseConfig => ({
    type: <any>process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    timezone: process.env.DATABASE_TIMEZONE,
    charset: process.env.DATABASE_CHARSET,
}));