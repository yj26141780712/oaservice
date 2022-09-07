
import { imageSize } from 'image-size';

export function getUploadFileEntity(file: Express.Multer.File, userId: number) {
    let height = 0;
    let width = 0;
    if (file && file.mimetype.startsWith('image')) { //图片计算宽和高
        const size = imageSize(file.path);
        height = size.height;
        width = size.width;
    }
    return {
        filename: file.originalname,
        filesize: file.size,
        suffix: file.mimetype.split('/')[1],
        mimetype: file.mimetype,
        updater: userId,
        creater: userId,
        filepath: file.path,
        height,
        width
    }
}

export function remoteAddressToIp(address: string) {
    const last = address.lastIndexOf(':');
    return last > 0 ? address.substring(last + 1) : address;
}