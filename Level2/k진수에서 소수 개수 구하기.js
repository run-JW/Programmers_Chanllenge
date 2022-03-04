function solution(n, k) {
    const processedArr = reverseAndCutArrZero(processNToK(n, k));
    console.log(processedArr)
    const result = checkPrimeNumAndGetResult(processedArr);
    return result;
}

function processNToK(n, k) {
    const stack = [];
    let num = n;

    while (num !== 0) {
        stack.push(num % k);
        num = Math.trunc(num / k);
    }

    return stack;
}

function reverseAndCutArrZero(arr) {
    return arr.reverse().join('').split(/0+/);
}

function checkPrimeNumAndGetResult(arr) {
    let count = 0;
    
    arr.forEach(el => {
        if (el !== '') {
            if (isPrime(Number(el))) {
                count += 1;
            }
        } 
    });
    
    return count;
}

function isPrime(num) {
    if (num === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
