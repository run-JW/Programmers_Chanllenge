const reduce = (a, ...args) => a.reduce(...args);
const plus = (x, y) => x + y;
const getMean = arr => reduce(arr, plus) / arr.length;
const getScores = arr => reduce(arr, (acc, score) => acc += getGrade(score), '');

function getGrade(score) {
    if (score >= 90) return 'A';
    else if (score >= 80) return 'B';
    else if (score >= 70) return 'C';
    else if (score >= 50) return 'D';
    else return 'F'
}

function solution(scores) {
    const averages = [];

    for (let i = 0; i < scores[0].length; i++) {
        const tempArr = [];
        let min = 100, max = 0, special = 0;
        for (let j = 0; j < scores.length; j++) {
            if (i === j) special = scores[j][i];
            else {
                if (min > scores[j][i]) min = scores[j][i];
                if (max < scores[j][i]) max = scores[j][i];
                tempArr.push(scores[j][i]);
            }
        }
        if (!(special < min || special > max)) tempArr.push(special);
        averages.push(getMean(tempArr));
    }
    return getScores(averages);
}
