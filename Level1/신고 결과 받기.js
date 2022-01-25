function solution(id_list, report, k) {
    const realReport = Array.from(new Set(report))
                            .join(' ')
                            .split(' ');
    const dataCenter = {};
    
    while (realReport.length) {
        const crimer = realReport.pop();
        const reporter = realReport.pop();
        
        if (!dataCenter[`${crimer}`])
            dataCenter[`${crimer}`] = [];
        
        dataCenter[`${crimer}`].push(reporter);
    }
    
    
}
