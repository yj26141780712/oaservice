import { registerAs } from "@nestjs/config";

export interface UploadConfig {
    path: string;
    download: string;
}

export default registerAs('UploadConfig', (): UploadConfig => ({
    path: process.env.UPLOAD_SAVE_PATH,
    download: process.env.DOWNLOAD_URL
}));