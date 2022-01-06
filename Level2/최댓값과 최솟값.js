function solution(s) {
    const strArr = s.split(' ')
    const [min, max] = [Math.min(...strArr), Math.max(...strArr)];
    return `${min} ${max}`
}
