const reduce = (a, ...args) => a.reduce(...args);
const plus = (x, y) => x + y;

function solution(numbers) {
    const origin = [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9];
    
    while (numbers.length) {
        const num = numbers.pop();
        const findNum = origin.findIndex(el => el === num);
        origin.splice(findNum, 1);
    }
    
    return reduce(origin, plus);
}
