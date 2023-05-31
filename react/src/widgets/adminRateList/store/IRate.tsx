export default interface adminRate {
    id: number;
    title: string;
    price: number;
    img: string;
    rates: Array<adminRateDate>;
}
export interface adminRateDate {
    id: number;
    date: string;
}