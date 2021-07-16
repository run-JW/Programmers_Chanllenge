function solution(s){
    if (s.length === 0) return true;

    s = s.toLowerCase();

    const pNums = s.replace(/[^p]/g, '').length;
    const yNums = s.replace(/[^y]/g, '').length;
    
    if(pNums !== yNums) return false;

    return true;
}
