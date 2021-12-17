class Cache {
    constructor(cacheSize) {
        this._cache = [];
        this._cacheSize = cacheSize;
        this._totalTime = 0;
    }
    
    readData(data) { 
        if (this._cacheSize === 0) {
            this.cacheMiss();
            return;
        }
        
        const processedData = data.toLowerCase();
        const cacheIndex = this._cache.indexOf(processedData);
        // 캐시 내에 데이터가 있는가?
        if (cacheIndex !== -1) {
            if (this._cache.length === 1 || cacheIndex === this._cacheSize - 1) {
                this.cacheHit();
            } else {
                this._cache.splice(cacheIndex, 1);
                this._cache.push(processedData);
                this.cacheHit();
            }    
        } else {
            // 데이터가 없으면 꽉 차있는지 확인한다.
            if (this.isFull()) {
                this._cache.shift();
                this._cache.push(processedData);
                this.cacheMiss();
            }
            else {
                this._cache.push(processedData);
                this.cacheMiss();
            }
        }
    }
    
    isFull() {
        return (this._cache.length === this._cacheSize) ? true : false;
    }
    
    cacheHit() {
        this._totalTime += 1;
    }
    
    cacheMiss() {
        this._totalTime += 5;
    }
    
    getTotalTime() {
        return this._totalTime;
    }
}

function solution(cacheSize, cities) {
    const newCache = new Cache(cacheSize);
    
    for (const city of cities) {
        newCache.readData(city);
    }
    
    return newCache.getTotalTime();
}


