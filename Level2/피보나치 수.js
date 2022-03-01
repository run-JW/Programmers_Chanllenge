function solution(n) {
    let fiboVal = BigInt(0);

    let fibo1 = BigInt(0);
    let fibo2 = BigInt(1);

    for (let i = 2; i <= n; i++) {
        fiboVal = fibo1 + fibo2;
        fibo1 = fibo2;
        fibo2 = fiboVal;
    }
    
    return Number(fiboVal % BigInt(1234567));
}
