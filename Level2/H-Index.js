function solution(citations) {
    const sortedArr = citations.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr.length - i) return sortedArr[i]
    }
    return sortedArr[0];
}
