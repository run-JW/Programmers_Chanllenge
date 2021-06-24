// Best case가 가장 적은 수를 먼저 골랐을 때 나온다고 생각.
// 오름차순 정렬한 뒤, 앞의 것부터 예산을 차감한 카운트 수를 반환
const solution = (d, budget) => {
    let count = 0;
    d.sort((a, b) => a - b);
    while(true) {
        budget -= d.shift();
        if(budget > 0) count++;
        else if(budget === 0) {
            count++
            return count;
        }
        else return count;
    }
}
