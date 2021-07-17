function solution(n) {
    const arr = n.toString().split('').sort((a, b) => {
        if (a < b) return ;
        if (a === b) return 0;
        if (a > b) return -1;
    });
    
    return parseInt(arr.join(''));
}
