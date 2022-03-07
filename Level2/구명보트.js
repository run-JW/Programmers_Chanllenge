function solution(people, limit) {
    const sortedPeople = people.sort((a, b) => a - b);
    let count = 0;
    let leftPointer = 0;
    let rightPointer = sortedPeople.length - 1;
    
    while (leftPointer <= rightPointer) {
        if (leftPointer === rightPointer) {
            count++;
            break;
        }
        
        const thin = sortedPeople[leftPointer];
        const heavy = sortedPeople[rightPointer];
        
        if (thin + heavy > limit) {
            rightPointer -= 1;    
        } else {
            leftPointer += 1;
            rightPointer -= 1;
        }
        
        count++;
    }
    return count;
}
