function solution(brown, yellow) {
    const answer = [];

    const total = brown + yellow;
    let width;
    let height = 3;
    let i = 2;

    while (true) {
        width = (brown - i) / 2;
        if (total === width * height) {
            answer.push(width);
            answer.push(height);
            break;
        }
        i += 2;
        height++;
    }

    return answer;
}
