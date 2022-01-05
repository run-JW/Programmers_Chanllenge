function solution(n) {
    let start = 1, count = 0;
    while (start <= n) {
        let total = 0;
        for (let i = start; total <= n; i++) {
            total += i;
            if (total === n) {
                count++;
                break;
            }
        }
        start++;
    }
    
    return count;
}
