function solution(brown, yellow) {
    const answer = [];

    const total = brown + yellow;
    let width = 3;
    let height = 3;

    while (true) {
        if (total === width * height) {
            if (yellow / (height - 2) !== width - 2) {
                height++;
                width = height;
                continue;
            }
            answer.push(width);
            answer.push(height);
            break;
        }

        if (total < width * height) {
            height++;
            width = height;
        }

        width++;
    }

    return answer;
}
