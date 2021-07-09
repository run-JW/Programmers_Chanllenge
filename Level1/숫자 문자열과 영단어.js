/**
* 영단어를 숫자로 바꾸어 반환하는 함수
* @param {String} s 숫자와 영단어로 이루어진 문자열
* @return {Number} answer 변환된 숫자
*/
const solution = (s) => {
    const map = new Map();
    const answer = [];
    let temp = "";
    
    // 1. Map 콜렉션에 정보를 다 담습니다.
    map.set("zero", 0).set("one", 1).set("two", 2)
       .set("three", 3).set("four", 4).set("five", 5)
       .set("six", 6).set("seven", 7).set("eight", 8)
       .set("nine", 9);
     
    // 4. 문자열 다 돌 때까지 반복
    for(const value of s) {
        // 2. 해당 문자가 숫자인지 판단 -> 숫자면 answer 배열에 Insert
        if (/[0-9]/.test(value)) {
            answer.push(value);
        }
        // 3. 문자라면 temp에 쌓았다가, map의 Key가 됬다면, Value값 배열에 Insert
        else {
            temp += value;
            if(map.has(temp)) {
                answer.push(map.get(temp));
                temp = "";
            }
        }
    }
    // 5. 배열을 join 메소드를 이용해 합쳐준 뒤, String -> Number로 형변환하여 return.
    return parseInt(answer.join(""));
};
