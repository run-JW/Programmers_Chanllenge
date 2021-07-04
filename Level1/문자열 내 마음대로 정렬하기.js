const solution = (strings, n) => {
    strings.sort((a, b) => {
        const compareA = a[n];
        const compareB = b[n];
        if(compareA > compareB) return 1;
        if(compareA < compareB) return -1;
        if(compareA === compareB) {
            if(a > b) return 1;
            if(a < b) return -1;
            if(a === b) return 0;
        }
    }); 
    return strings;
};
