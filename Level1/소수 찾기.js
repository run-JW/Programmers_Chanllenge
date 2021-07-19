function solution(num) {
    let arr = [];
    let count = 0;

    for (let i = 2; i <= num; i++) {
        if (arr[i] === true) continue;

        for (let j = i * 2; j <= num; j+= i) {
            arr[j] = true;
        }
    }

    for (let i = 2; i <= num; i++) {
        if (arr[i] !== true) count++;
    }

    return count;
}
