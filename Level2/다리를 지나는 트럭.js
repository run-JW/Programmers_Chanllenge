class Bridge {
    constructor(weight, length) {
        this._weight = weight;
        this._queue = [];
        this._timeCount = 0;
        this._weightSum = 0; 
        
        this.length = length;
    }

    set length(n) {
        for (let i = 0; i < n; i++) {
            this._queue.push(0);
        }
    }

    get timeCount() {
        return this._timeCount;
    }

    get weightSum() {
        return this._weightSum;
    }

    onTruck(truck) {
        this._queue.shift();
        this._queue.push(truck);
        this._weightSum += truck;
        this._timeCount++;
    }

    runTime() {
        const outTruck = this._queue.shift();
        this._weightSum -= outTruck;
        this._queue.push(0);
        this._timeCount++;
    }

    weightCheck() {
        return (this._weightSum <= this._weight) ? true : false;
    }
}

function solution(bridge_length, weight, truck_weights) {
    const bridge = new Bridge(weight, bridge_length);

    while (truck_weights.length || bridge.weightSum) {
        if (bridge.weightCheck() && truck_weights.length) {
            bridge.onTruck(truck_weights.shift());
        } else {
            bridge.runTime();
        }
    }

    return bridge.timeCount;
}
