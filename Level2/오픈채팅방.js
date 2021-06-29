/**
* 오픈채팅방
* @param {Array} record Array of string
* @returns {Array} answer Array of string
*/
const solution = (record) => {
    const answer = [];
    const regExp = new RegExp("[A-Za-z0-9+]", "g");
    const map = new Map();
    let temp = "";

    while (record.length !== 0) {
        const instruction = record.shift().split(" ");                // 1. 명령어 / ID / 닉네임 분리.

        switch (instruction[0]) {                                     // 2. 명령어에 따라 메시지를 answer 배열에 넣어줌. -> 이 과정(Enter, Change)에서 Map 객체에 (id, Nickname) Set됨.
            case 'Enter':                                             // 키가 중복되면 value가 업데이트 되므로 'Change'마다 id의 Nickname 갱신 가능.
                map.set(instruction[1], instruction[2]);
                temp = `${instruction[1]}님이 들어왔습니다.`;
                answer.push(temp);
                break;
            case 'Change':
                map.set(instruction[1], instruction[2]);
                break;
            case 'Leave':
                temp = `${instruction[1]}님이 나갔습니다.`;
                answer.push(temp);
                break;                                               // 3. 명령어가 끝날 때까지 반복.
        } 
    }
    for (let i = 0; i < answer.length; i++) {                        
        temp = answer[i].match(regExp).join("");                      // 4. answer 문자열의 id 부분을 temp string 변수에 담음
        answer[i] = map.get(temp) + answer[i].replace(regExp, "");    // 5. answer[i] 부분에 temp + id부분을 지운 나머지 문자열을 더하여 할당
    }                                                                 // 6. answer 길이만큼 반복.
    return answer;
};
