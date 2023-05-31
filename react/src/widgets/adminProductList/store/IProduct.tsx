export default interface adminProduct {
    id: number;
    name: string;
    price: number;
    img: string;
    product_info: Array<adminProductInfo>;
}
export interface adminProductInfo {
    id: number;
    title: string;
    value: string;
}