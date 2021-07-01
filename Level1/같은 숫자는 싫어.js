/**
* 연이어 같은 숫자가 있으면 제거해서 출력하는 함수
*  - 반복문을 돌며 이전 값과 같지 않으면 answer에 push하여 반환한다.
* @param {Array} arr Array of numbers
* @returns {Array} answer Array of numbers
*/
const solution = (arr) => {
    const answer = [];
    let preVal = -1;

    for(const val of arr) {
        if(val !== preVal) answer.push(val);
        preVal = val;
    }

    return answer;
};
