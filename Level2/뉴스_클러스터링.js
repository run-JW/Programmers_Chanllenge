/**
* 유사도 계산하는 함수
* @param {String} str1 비교할 문자열1
* @param {String} str2 비교할 문자열2
* @return {Number} answer 유사도
*/
const solution = (str1, str2) => {
    let answer = 0;
    const map1 = sliceStr(str1);
    const map2 = sliceStr(str2);
    let temp1 = 0, temp2 = 0;
    let intersection = 0, union = 0;

    if(map1.size === 0 && map2.size === 0) return 65536;
    else {
        for(const [key, value] of map1) {
            if(map2.has(key)) intersection += Math.min(value, map2.get(key));
            temp1 += value;
        }
    
        for(const value of map2.values()) temp2 += value;

        union = temp1 + temp2 - intersection;
        answer = Math.floor((intersection / union) * 65536);
    }
    return answer;
};

/**
* 문자 length 2 길이로 Map에 잘라넣는 함수
* @param {String} str 유사도를 비교할 문자열 중 하나
* @return {Map} map Key: 추출된 길이 2의 문자열, Value : 개수
*/
const sliceStr = (str) => {
    const map = new Map();
    const regExp = /[a-zA-Z]/;
    let temp = "";
    str = str.toLowerCase();
    for(let i = 0; i < str.length - 1; i++) {
        if (regExp.test(str[i]) + regExp.test(str[i+1]) === 2) {
            temp = str.slice(i, i+2);
            map.has(temp) ? map.set(temp, map.get(temp) + 1) : map.set(temp, 1);
        }
    }
    return map;
};
