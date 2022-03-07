function solution(number, k) {
    const processedString = number.split('').sort((a, b) => a - b);
    const tempArr = [];
    console.log(processedString);
    
    for (let i = k; i < processedString.length; i++) {
        tempArr.push(processedString[i]);
    }
    return tempArr.join('');
}

