function solution(priorities, location) {
    let tracker = location;
    let counter = 0;
    while (priorities.length) {
        if(checkPriorities(priorities)) {
            if (tracker === 0) {
                counter++;
                return counter;
            }
            tracker--;
            counter++;
            priorities.shift();
        } else {
            if (tracker === 0) {
                tracker = priorities.length - 1;
            } else {
                tracker--;
            }
            priorities.push(priorities.shift());
        } 
    }
    return 0;
}

function checkPriorities(priorities) {
    const priority = priorities[0];
    for (let i = 1; i < priorities.length; i++) {
        if (priority < priorities[i]) {
            return false;
        }
    }
    return true;
}
