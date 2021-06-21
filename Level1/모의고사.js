function solution(answers) {
    const guess = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]],
        results = [];

    // 각각의 찍는 방법 별로 맞춘 개수 반환
    for(const arr of guess) {
        const winCount = compareCycle(arr, answers); 
        results.push(winCount);
    }
    
    return whosWin(results);
}

// 찍어서 맞춘 개수 반환하는 함수
const compareCycle = (arr, answers) => {
    const arrLen = arr.length;
    const answersLen = answers.length;
    let winCount = 0, arrIdx = 0, ansIdx = 0;

    while(ansIdx !== answersLen) {
        if(arr[arrIdx] === answers[ansIdx]) winCount++;
        arrIdx++, ansIdx++;
        if(arrIdx === arrLen) arrIdx = 0;
    }

    return winCount;
}

// 가장 많이 맞춘 사람들 반환하는 함수
const whosWin = (results) => {
    const max = Math.max(...results);
    const winners = [];
    for(let i = 0; i < results.length; i++) {
        if(results[i] === max) winners.push(i+1);
    }
    return winners;
}
