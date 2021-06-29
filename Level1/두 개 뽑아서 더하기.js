/**
* 1. Set 콜렉션 생성
* 2. 이중 반복을 통한 배열에서 두 수를 뽑아 덧셈
* 3. Set -> array로 바꾸기 위해 전개(spread) 연산자(...) 사용 후 오름차순 정렬.
*/

const solution = (numbers) => {
    const set = new Set();
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            set.add(numbers[i] + numbers[j]);
        }
    }
    return [...set].sort((a, b) => a - b);
};
