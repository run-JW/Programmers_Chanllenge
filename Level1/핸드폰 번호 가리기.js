function solution(phone_number) {
    const clockingNum = phone_number.length - 4;
    const backNum = phone_number.slice(-4);

    let answer = "";

    for (let i = 0; i < clockingNum; i++) {
        answer += '*';
    }

    answer += backNum;

    return answer;
}
