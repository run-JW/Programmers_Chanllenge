const solution = (n, m) => {
    const answer = [];
    const gcdValue = gcd(n, m);
    
    answer.push(gcdValue);
    answer.push(n * m / gcdValue);
    
    return answer;
};

const gcd = (n, m) => {
    if(m === 0) return n;
    else return gcd(m, n % m);
};
