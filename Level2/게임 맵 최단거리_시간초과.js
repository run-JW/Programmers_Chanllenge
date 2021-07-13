function solution(maps) {
    const [n, m] = [maps.length, maps[0].length];

    let searchQueue = [[0, 0]];
    const searched = [];
    let depth = 1;

    while (searchQueue.length) {
        let queueSize = searchQueue.length;

        for(let i = 0; i < queueSize; i++) {
            const curPos = searchQueue.shift();
            if (searched.indexOf(curPos) === -1) {
                if(curPos[0] === n - 1 && curPos[1] === m - 1) {
                    return depth;
                }
                searchQueue = searchQueue.concat(checkRoute(maps, curPos[0], curPos[1], searched));
                searched.push(curPos);
            }
        }
        depth++;
    }
    return -1;
}

function checkRoute(maps, x, y, searched) {
    const tempList = [];
    const routeList = [];
    const [n, m] = [maps.length, maps[0].length];
    if (x < n - 1)
        if (maps[x + 1][y] === 1) tempList.push([x + 1, y]);
    if (y < m - 1)
        if (maps[x][y + 1] === 1) tempList.push([x, y + 1]);
    if (x > 0)
        if (maps[x - 1][y] === 1) tempList.push([x - 1, y]);
    if (y > 0)
        if (maps[x][y - 1] === 1) tempList.push([x, y - 1]);
    
    for (let i = 0; i < tempList.length; i++) {
        let isChecked = false;
        for (let j = 0; j < searched.length; j++) {
            if(JSON.stringify(tempList[i]) === JSON.stringify(searched[j])) {
                isChecked = true;
            }
        }
        if (isChecked === false) routeList.push(tempList[i]);
    }

    return routeList;
}
