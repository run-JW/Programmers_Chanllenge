function solution(left, right) {
    let result = 0;
    while(left <= right) {  // left가 right까지 갈때까지 약수를 구한다.
        const divisorBox = []
        for(let i = 1; i <= left; i++) {
            if(left % i === 0) divisorBox.push(i); // 약수 값 push()
        }
        (divisorBox.length % 2 === 0) ? result += left : result -= left; // 약수 값이 짝수면 + 홀수면 -
        left++;
    }
    return result;
}
