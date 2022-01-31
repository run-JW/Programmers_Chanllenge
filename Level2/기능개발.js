function solution(progresses, speeds) {
    const counts = [];
    
    for (let i = 0; i < progresses.length; i++) {
        const progress = progresses[i];
        const speed = speeds[i];
        
        const count = getCount(progress, speed);
        counts.push(count);
    }
    
    const result = getDeliveryVolumes(counts);
    
    return result;
}

function getCount(progress, speed) {
    let count = 0;
    while (progress < 100) {
        progress += speed;
        count++;
    }
    return count;
}

function getDeliveryVolumes(counts) {
    const output = [];
    if (!counts.length) return output;
    let count = 1;
    let temp = counts[0];
    for (let i = 1; i < counts.length; i++) {
        if (temp < counts[i]) {
            count++;
        } else {
            output.push(count);
            temp = counts[i];
            count = 1;
        }
    }
    return output;
}
