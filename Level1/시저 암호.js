function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += " ";
        } else {
            let upIdx = upper.indexOf(s[i]);
            if (upIdx >= 0) {
                upIdx += n;
                if (upIdx > 25) {
                    upIdx -= 26;
                }
                answer += upper[upIdx];
            } else {
                let lowIdx = lower.indexOf(s[i]);
                if (lowIdx >= 0) {
                    lowIdx += n;
                    if (lowIdx > 25) {
                        lowIdx -= 26;
                    }
                    answer += lower[lowIdx];
                }
            }
        }
        
    }
    return answer;
}
