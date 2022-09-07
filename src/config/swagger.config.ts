import { registerAs } from '@nestjs/config';

export interface EnvSwaggerOptions {
    title: string;
    setupUrl: string;
    desc?: string;
    prefix: string;
    version: string;
}

export default registerAs(
    'EnvSwaggerOptions',
    (): EnvSwaggerOptions => ({
        title: process.env.SWAGGER_UI_TITLE,
        desc: process.env.SWAGGER_UI_DESC,
        version: process.env.SWAGGER_API_VERSION,
        setupUrl: process.env.SWAGGER_SETUP_PATH,
        prefix: process.env.SWAGGER_ENDPOINT_PREFIX,
    }),
);
