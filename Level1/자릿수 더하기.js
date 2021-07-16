// 1자리 수일 때는 string으로 반환되서 따로 조건문으로 나눴다.
const solution = n => n > 0 && n < 10 ? n : n.toString().split('').reduce((acc, sum) => acc = parseInt(acc) + parseInt(sum));
