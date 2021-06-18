function solution(lotto, win_nums) {
    let zeroCount, winCount, bestRank, worstRank;

    // 0을 최대한 빠르게 세기 위해 정렬
    lotto = lotto.sort();
    win_nums = win_nums.sort();

    zeroCount = checkZero(lotto);

    // 0을 제거하여 좀 더 빠른 비교를 하기 위해 없애줌
    while(lotto[0] === 0) {
        lotto.shift();
    }

    winCount = compareArr(lotto, win_nums);

    bestRank = rankChecker(winCount + zeroCount);
    worstRank = rankChecker(winCount); 

    return [bestRank, worstRank];
}

// 0의 개수 체크 함수. 정렬이 되어 있다고 가정.
const checkZero = (check_arr) => {
    let count = 0;
    for (const value of check_arr) {
        if(value === 0)
            count++;
        else break;
    } 
    return count;
}

// 당첨번호가 있는지 확인하는 함수
const compareArr = (arr1, arr2) => {
    let winCount = 0;

    for(const val1 of arr1) {
        for(const val2 of arr2) {
            if(val1 === val2) {
                winCount++;
                break;
            }
        }
    }
    return winCount;
}

// 몇 위인지 확인하는 함수
const rankChecker = (winCount) => {
    let rank = 0;
    switch (winCount) {
        case 6:
            rank = 1;
            break;
        case 5:
            rank = 2;
            break;
        case 4:
            rank = 3;
            break;
        case 3:
            rank = 4;
            break;
        case 2:
            rank = 5;
            break;
        default:
            rank = 6;
    }

    return rank;
}
