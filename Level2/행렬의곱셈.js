function solution(arr1, arr2) {
    const answer = [];

    for (let i = 0; i < arr1.length; i++) {
        const tempArr = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let tempVal = 0;
            for (let k = 0; k < arr2.length; k++) {
                tempVal += arr1[i][k] * arr2[k][j];
            }
            tempArr.push(tempVal); 
        }
        answer.push(tempArr);
    }

    return answer;
}
