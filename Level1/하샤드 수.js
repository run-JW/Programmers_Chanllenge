function solution(x) {
    const sum = x.toString().split('').reduce((acc, val) => acc = parseInt(acc) + parseInt(val));
    return x % sum === 0 ? true : false;
}
