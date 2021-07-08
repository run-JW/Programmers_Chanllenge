function solution(arr) {
    let min = (arr[0] === undefined) ? -1 : arr[0]
    let minIdx = -1;
    if(min === -1) return [-1];
    for(let i = 1; i < arr.length; i++) {
        if(min > -1 && min > arr[i]) {
            min = arr[i];
            minIdx = i;
        }
    }
    arr.splice(minIdx, 1);
    if(arr.length === 0) return [-1];
    return arr;
}
