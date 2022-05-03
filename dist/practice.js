"use strict";
const log = console.log;
const products = [
    { name: "반팔티", price: 15000 },
    { name: "긴팔티", price: 20000 },
    { name: "핸드폰케이스", price: 15000 },
    { name: "후드티", price: 30000 },
    { name: "바지", price: 25000 },
];
let names = [];
for (const a of products) {
    names.push(a.name);
}
let prices = [];
for (const a of products) {
    prices.push(a.price);
}
log(names);
log(prices);
const map = (f, iter) => {
    let names = [];
    for (const a of iter) {
        names.push(f(a));
    }
    return names;
};
log(map((p) => p.name, products));
log(map((p) => p.price, products));
