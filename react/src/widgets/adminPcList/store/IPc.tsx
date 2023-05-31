export default interface adminPc {
    id: number;
    pc_info: Array<adminPcInfo>;
}
export interface adminPcInfo {
    id: number;
    title: string;
    value: string;
}