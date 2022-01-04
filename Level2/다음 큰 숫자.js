function getOnes(string) {
    return string.match((/1/g) || []).length;
}

function solution(n) {
    const countOne = getOnes(n.toString(2));
    
    while(true) {
        n++;
        if (countOne === getOnes(n.toString(2)))
            break;
    }
    return n;
}
