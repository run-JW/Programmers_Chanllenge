function solution(s) {
    let count = 0;
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            count = 0;
        } else {
            if (count % 2 === 1) {
                answer += s[i].toLowerCase();
                count++;
            } else {
                answer += s[i].toUpperCase();
                count++;
            }
        }
    }
    return answer;
}
