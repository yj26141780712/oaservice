import { sep as pathSep } from 'path';

export function pathToUrl(filepath: string, urlPrefix: string) {
    if (filepath) {
        const arr = filepath.split(pathSep);
        return `${urlPrefix}/${arr[arr.length - 2]}/${arr[arr.length - 1]}`;
    }
    return '';
}

function changeFileToUrl(obj: any, key: string, urlPrefix: string) {
    if (obj[key] && obj[key].filepath) {
        const arr = obj[key].filepath.split(pathSep);
        obj[key] = {
            id: obj[key].id,
            name: obj[key].filename,
            url: `${urlPrefix}/${arr[arr.length - 2]}/${arr[arr.length - 1]}`,
        }
    }
}

function changetFilesToUrl(obj: any, key: string, urlPrefix: string) {
    if (obj[key] && Array.isArray(obj[key])) {
        obj[key] = obj[key].map((image: any) => {
            const arr = image.filepath.split(pathSep);
            return {
                id: image.id,
                name: image.filename,
                url: `${urlPrefix}/${arr[arr.length - 2]}/${arr[arr.length - 1]}`,
            }
        });
    }
}

export function HospitalPathToUrl(items: any, urlPrefix: string) {
    items.forEach((x: any) => {
        if (x['coverImage']) {
            const arr = x['coverImage'].filepath.split(pathSep);
            x['coverImage'] = {
                id: x['coverImage'].id,
                name: x['coverImage'].filename,
                url: `${urlPrefix}/${arr[arr.length - 2]}/${arr[arr.length - 1]}`,
            }
        }
        if (x['images'] && Array.isArray(x['images'])) {
            x['images'] = x['images'].map(image => {
                const arr = image.filepath.split(pathSep);
                return {
                    id: image.id,
                    name: image.filename,
                    url: `${urlPrefix}/${arr[arr.length - 2]}/${arr[arr.length - 1]}`,
                }
            });
        }
    });
}

export function docterPhotoToUrl(items: any, urlPrefix: string) {
    items.forEach((x: any) => {
        changeFileToUrl(x, 'photo', urlPrefix);
    });
}

export function imageToUrl(items: any, urlPrefix: string, key: string) {
    items.forEach((x: any) => {
        changeFileToUrl(x, key, urlPrefix);
    });
}

export function videoToUrl(items: any, urlPrefix: string) {
    items.forEach((x: any) => {
        changeFileToUrl(x, 'cover', urlPrefix);
        changeFileToUrl(x, 'video', urlPrefix);
    });
}

export function attachmentToUrl(items: any, urlPrefix: string) {
    const key = 'filepath';
    items.forEach((obj: any) => {
        if (obj[key]) {
            const arr = obj[key].split(pathSep);
            obj.url = `${urlPrefix}/${arr[arr.length - 2]}/${arr[arr.length - 1]}`
        }
    });
}

export function productPathToUrl(items: any, urlPrefix: string) {
    items.forEach((x: any) => {
        if (x['coverImage']) {
            changeFileToUrl(x, 'coverImage', urlPrefix);
        }
        if (x['images'] && Array.isArray(x['images']) && x['images'].length > 0) {
            changetFilesToUrl(x, 'images', urlPrefix)
            const arr = new Array(x['images'].length);
            const ids = x.imageIds.split(',');
            ids.forEach((id: number, index: number) => {
                arr[index] = x['images'].find((y: any) => y.id == id);
            });
            x['images'] = arr;
        }
    });
}

export function orderPathToUrl(items: any, urlPrefix: string) {
    items.forEach((x: any) => {
        if (x.orderProduct && Array.isArray(x.orderProduct)) {
            x.orderProduct.forEach((p: any) => {
                if (p.productImage) {
                    const arr = p.productImage.split(pathSep);
                    p.productImage = `${urlPrefix}/${arr[arr.length - 2]}/${arr[arr.length - 1]}`
                }
            });
        }
    });
}