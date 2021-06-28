const solution = (N, stages) => {

    const failArr = new Array(N+1).fill(0);                           // 배열 failArr에서 인덱스는 스테이지이고, 값은 죽은 횟수로서 활용된다.
    const players = stages.length;                                    // 플레이어 수
    const results = [];                                               // solution 함수 반환할 값 배열 선언

    for(const value of stages) {                                      // 반복문 : failArr 값 설정
        failArr[value - 1]++;
    }

    const failRate = getFailRate(failArr, players);                   // getFailRate 함수를 통해 failRate 배열에 각 스테이지 별 실패율 값 설정
                                                                      // failRate[인덱스 : 스테이지, 값 : 실패율]
    for(let i = 0; i < N; i++) {                                      
        const max = Math.max(...failRate);
        results.push(failRate.indexOf(max) + 1);                      // 반복문 : 실패율 최대값을 구한 뒤, 해당 인덱스를 results 배열에 넣는다.
        failRate[failRate.indexOf(max)] = -1;                         //         그리고, 넣은 값과 안 넣은 값을 구분해주기 위해 넣은 값은 -1로 바꿔준다.
    }
    return results;
};

const getFailRate = (failArr, players) => {
    let gameOver = 0;                                                 // 현재 실패한 사람 수
    const failRate = [];                                              // 실패율을 담을 배열 failRate

    for(let i = 0; i < failArr.length - 1; i++) {
        if(players - gameOver === 0) failRate.push(0);                // 반복문 : 만약, 플레이어 수와 현재 실패한 사람 수가 같다면, 해당 스테이지 실패율은 0
        else {
            failRate.push(failArr[i] / (players - gameOver));          // 해당 스테이지에서 실패한 사람 / 생존자
            gameOver += failArr[i];
        }   
    }
    return failRate;
};
