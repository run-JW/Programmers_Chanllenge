const solution = (n) => {
    const answer = n.toString().split('').reverse();
    
    for (let i = 0; i < answer.length; i++) {
        answer[i] = parseInt(answer[i]);
    }
    
    return answer;
}
