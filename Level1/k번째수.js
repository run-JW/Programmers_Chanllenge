// for..of 문을 돌며, 배열을 잘라 정렬 후, object[2]의 인덱스 값에 해당하는 요소 반환
function solution(array, commands) {
    let result = [];
    for(const object of commands) {
        const cuttedArr = array.slice(object[0] - 1, object[1]);
        cuttedArr.sort((a, b) => a - b); // a-b 오름차순 정렬
        const data = (cuttedArr[object[2] - 1]);
        result.push(data);
    }

    return result;
}
