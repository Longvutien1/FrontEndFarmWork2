import instance from "./instance";


export const listProduct:any = () => {
    const url = `/products`;
    return instance.get(url);
}

export const add:any = (product:any) => {
    const url = `/products`;
    return instance.post(url, product);
}   

export const upload = (base64Image: string) => {
    const url = "/upload"
    return instance.post(url, {data: base64Image})
}