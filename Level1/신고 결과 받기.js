function solution(id_list, report, k) {
    const realReport = Array.from(new Set(report))
                            .join(' ')
                            .split(' ');
    const dataCenter = {};
    const successedReporters = [];
    const result = [];
    
    while (realReport.length) {
        const crimer = realReport.pop();
        const reporter = realReport.pop();
        
        if (!dataCenter[`${crimer}`])
            dataCenter[`${crimer}`] = [];
        
        dataCenter[`${crimer}`].push(reporter);
    }
    
    for (const crimer of Object.keys(dataCenter)) {
        if (dataCenter[`${crimer}`].length >= k) {
            successedReporters.push(crimer);
        }
    }
    
    for (const user of id_list) {
        let count = 0;
        for (const crimer of successedReporters) {
            if (dataCenter[`${crimer}`].includes(user)) count++;
        }
        result.push(count);
    }
    
    return result;
}
