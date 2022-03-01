class Player {
    constructor() {
        this.curPos = {
            x: 0,
            y: 0
        }
        this.record = new Set();
    }
    
    get recordLength() {
        return [...this.record].length / 2;
    }
    
    moveUp() {
        if (this.curPos.y !== 5) {
            const from = `(${this.curPos.x}, ${this.curPos.y})`;
            this.curPos.y += 1;
            const to = `(${this.curPos.x}, ${this.curPos.y})`;
            const result1 = `${from}->${to}`;
            const result2 = `${to}->${from}`;
            
            this.record.add(result1);
            this.record.add(result2);
        }
    }
    
    moveDown() {
        if (this.curPos.y !== -5) {
            const from = `(${this.curPos.x}, ${this.curPos.y})`;
            this.curPos.y -= 1;
            const to = `(${this.curPos.x}, ${this.curPos.y})`;
            const result1 = `${from}->${to}`;
            const result2 = `${to}->${from}`;
            
            this.record.add(result1);
            this.record.add(result2);
        }
    }
    
    moveLeft() {
        if (this.curPos.x !== -5) {
            const from = `(${this.curPos.x}, ${this.curPos.y})`;
            this.curPos.x -= 1;
            const to = `(${this.curPos.x}, ${this.curPos.y})`;
            const result1 = `${from}->${to}`;
            const result2 = `${to}->${from}`;
            
            this.record.add(result1);
            this.record.add(result2);
        }
    }
    
    moveRight() {
        if (this.curPos.x !== 5) {
            const from = `(${this.curPos.x}, ${this.curPos.y})`;
            this.curPos.x += 1;
            const to = `(${this.curPos.x}, ${this.curPos.y})`;
            const result1 = `${from}->${to}`;
            const result2 = `${to}->${from}`;
            
            this.record.add(result1);
            this.record.add(result2);
        }
    }
}

function solution(dirs) {
    const player = new Player();
    
    dirs.split('').forEach(el => {
        switch(el) {
            case 'U':
                player.moveUp();
                break;
            case 'D':
                player.moveDown();
                break;
            case 'R':
                player.moveRight();
                break;
            case 'L': 
                player.moveLeft();
                break;
        }
    });
    
    return player.recordLength;
}
