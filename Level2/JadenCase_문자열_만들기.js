const solution = s => {
    const datas = s.split(' ');
    const processedDatas = [];

    datas.forEach(el => {
        if (/[^a-zA-Z]/.test(el[0])) {
            processedDatas.push(el.toLowerCase());
        } else {
            processedDatas.push(el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase());
        }
    });

    return processedDatas.join(' ');
}
