import { registerAs } from "@nestjs/config";

export interface TimConfig {
    SDKAppID: number;
    SECRETKEY: string;
    DAYS: number;
}

// registerAs !!!
export default registerAs('TimConfig', (): TimConfig => ({
    SDKAppID: Number(process.env.TIM_SDKAppID),
    SECRETKEY: process.env.TIM_SECRETKEY,
    DAYS: Number(process.env.TIM_DAYS)
}));