function solution(A,B){
    const processedA = A.sort((a, b) => a - b).reverse();
    const processedB = B.sort((a, b) => a - b);
    let result = 0;
    
    while (processedA.length) {
        result += processedA.pop() * processedB.pop();
    }
    
    return result;
}
