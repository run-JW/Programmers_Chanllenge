/**
* 배열의 요소 중 divisor와 나눴을 때 나머지가 0인 요소만 반환하는 함수
* 1.반복문으로 나머지가 0인 것들만 answer 배열에 push
* 2.만약 answer의 길이가 0이면 -1를 넣어 반환, 아니면 오름차순 정렬해서 반환한다.
*
* @param {Array} arr Array of numbers
* @param {Number} divisor 나누는 숫자
* @returns {Array} answer Array of numbers
*/
const solution = (arr, divisor) => {
    const answer = [];

    for(const val of arr) {
        if(val % divisor === 0) answer.push(val);
    }
    answer.length === 0 ? answer.push(-1) : answer.sort((a, b) => a - b);
    return answer;
};
