function solution(bridge_length, weight, truck_weights) {
    const onBridge = [];
    let seconds = 0;
    const info = [];
    
    truck_weights.forEach((el) => {
        const data = {};
        data[`${el}`] = bridge_length;
        info.push(data);
    });
    
    while (info.length || onBridge.length) {
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
