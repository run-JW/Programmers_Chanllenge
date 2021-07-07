const solution = (x, n) => {
    const answer = [];
    const constant = x;
    let el = 0;
    for(let i = 0; i < n; i++) {
        answer.push(el += x);
    }
    return answer;
};
