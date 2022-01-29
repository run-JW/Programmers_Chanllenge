function solution(id_list, report, k) {
    const realReport = Array.from(new Set(report))
                            .join(' ')
                            .split(' ');
    const dataCenter = {};
    const successedReporters = [];
    
    while (realReport.length) {
        const crimer = realReport.pop();
        const reporter = realReport.pop();
        
        if (!dataCenter[`${crimer}`])
            dataCenter[`${crimer}`] = [];
        
        dataCenter[`${crimer}`].push(reporter);
    }
    
    for (const crimer of Object.keys(dataCenter)) {
        if (crimer.length >= k) {
            successedReporters.push(...crimer);
        }
    }
    
}
