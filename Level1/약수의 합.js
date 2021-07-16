function solution(n) {
    if (n === 0) return 0;
    
    const numbers = [];
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) numbers.push(i);
    }
    
    return numbers.reduce((acc, sum) => acc += sum); 
}
