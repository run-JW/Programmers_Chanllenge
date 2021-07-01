const solution = (str1, str2) => {
    let answer = 0;
    const arr1 = sliceStr(str1);
    const arr2 = sliceStr(str2);

    console.log(arr1);
    console.log(arr2);

    


    /** 
    const totalLen = arr1.length + arr2.length;
    const set = new Set(arr1);

    while(arr2.length !== 0) set.add(arr2.pop());

    (set.size === arr1.length) ?
    answer = 65536 :
    answer = ((totalLen - set.size) / set.size) * 65536;
    */
    return answer;
};

const sliceStr = (str) => {
    const arr = [];
    const regExp = /[a-zA-Z]/;
    str = str.toLowerCase();
    for(let i = 0; i < str.length - 1; i++) {
        if (regExp.test(str[i]) + regExp.test(str[i+1]) === 2)
            arr.push(str.slice(i, i+2));
    }
    return arr;
};

// val 0~1 so * 65536 if there's not compare then val 1 val = 교 / 합
//console.log(solution("FRANCE", "french"));  // 16384
//console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
//console.log(solution("E=M*C^2", "e=m*c^2"));    // 65536
