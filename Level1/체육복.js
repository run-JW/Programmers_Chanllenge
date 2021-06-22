function solution(n, lost, reserve) {
    const status = [];

    for(let i = 0; i < n; i++) {
        status.push(1);
    }

    for(const poolStu of lost) {
        status[poolStu - 1] -= 1;
    }

    for(const richStu of reserve) {
        status[richStu - 1] += 1;
    }
    
    for(let i = 0; i < n - 1; i++) {
        const cur = status[i];
        const next = status[i+1];

        if(cur === 0 && next === 2) {
            status[i] += 1;
            status[i+1] -= 1;
  
        } else if(cur === 2 && next === 0) {
            status[i] -= 1;
            status[i+1] += 1;
   
        }
    }

    const result = status.filter(stat => stat === 1 || stat === 2);
    const students = result.length;

    return students;
}
