function solution(bridge_length, weight, truck_weights) {
    const onBridge = [];
    let seconds = 0;
    
    while (truck_weights.length || onBridge.length) {
        seconds++;
        if (onBridge.length) {
            const curWeight = onBridge.reduce(sum);
            if (curWeight + truck_weights[0] <= weight) {
                onBridge.push(truck_weights.shift());
            }
        } else {
            onBridge.push(truck_weights.shift());
        }
        if (onBridge.reduce(sum) + truck_weights[0] <= weight) {
            onBridge.push(truck_weights.shift());
        }
        if (seconds % bridge_length === 0)
            onBridge.shift();
    }
    
    return seconds;
}
    
const sum = (x, y) => x + y;
