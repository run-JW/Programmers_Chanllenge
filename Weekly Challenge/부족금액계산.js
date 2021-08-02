function solution(price, money, count) {
    let curPrice = price;
    for (let i = 0; i < count; i++) {
        money -= curPrice;
        curPrice += price;
    }
    return money >= 0 ? 0 : -money;
}
