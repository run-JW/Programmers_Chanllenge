// 배열 내에 [1, 0] 부분을 [10]으로 바꾸는 함수
const findTen = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === "1" && arr[i+1] === "0") {
            arr[i] = "10";
            arr.splice(i+1, 1);
        }    
    }
    return arr;
}

const solution = (dartResult) => {
    const scores = [];
    const tokens = findTen(dartResult.split(""));

    let totalScore = 0;
    let scoreIdx = -1;

    // 토큰에 따른 연산 수행
    for(let i = 0; i < tokens.length; i++) {

        switch(tokens[i]) {
            case 'S':
                scores[scoreIdx] **= 1;
                break;
            case 'D':
                scores[scoreIdx] **= 2;
                break;
            case 'T':
                scores[scoreIdx] **= 3;
                break;
            case '*':
                if(scoreIdx < 0) scores[scoreIdx] *= 2;
                else {
                    scores[scoreIdx - 1] *= 2, scores[scoreIdx] *= 2;
                }
                break;
            case '#':
                scores[scoreIdx] = -scores[scoreIdx];
                break;
            default:
                scores.push(parseInt(tokens[i]));
                scoreIdx++;
                break;
        }
    }

    // 점수 담아놓은 배열 합 구하기
    totalScore = scores.reduce((prev, curr) => prev + curr);

    return totalScore;
}
