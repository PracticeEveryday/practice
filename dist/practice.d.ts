declare const log: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
declare const products: {
    name: string;
    price: number;
}[];
declare let names: any[];
declare let prices: any[];
declare const map: (f: {
    (p: any): any;
    (arg0: any): any;
}, iter: {
    name: string;
    price: number;
}[]) => any[];
