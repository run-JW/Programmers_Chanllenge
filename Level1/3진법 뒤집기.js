const solution = (n) => {
    const ternary = [];
    let remainder = 0;
    let answer = 0;

    // 3진법으로 쪼개기
    while(n > 0) {
        remainder = n % 3;
        n = Math.floor(n / 3);
        ternary.push(remainder);
    }
    
    // 뒤집기
    ternary.reverse();

    // 10진수 변환
    for(let i = 0; i < ternary.length; i++) {
        answer += ternary[i] * (3 ** i);    
    }

    return answer;
}
