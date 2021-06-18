function solution(nums) {
    let primeNumCount = 0;      // 소수 카운터

    for(let i = 0; i < nums.length - 2; i++) {
        const val1 = nums[i];
        for(let j = i + 1; j < nums.length - 1; j++) {
            const val2 = nums[j];
            for(let k = j + 1; k < nums.length; k++) {
                const val3 = nums[k];
                const num = val1 + val2 + val3;

                if(checkPrimeNum(num)) primeNumCount++;
            }
        }
    }
    return primeNumCount;
}

// 소수 판별 함수
const checkPrimeNum = (num) => {

    if(num <= 1) return false;
    if(num === 2) return true;

    for(let i = 2; i < num / 2; i++) {
        if(num % i === 0) return false;
    }
    return true;
}
