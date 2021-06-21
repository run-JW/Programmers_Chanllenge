function solution(numbers, hand) {
    const phone = initPhone();
    const leftPos = phone.get('*'), rightPos = phone.get('#');
    let history = "";

    history = isLeftRight(phone, numbers, leftPos, rightPos, hand ,history);

    return history;
}

const initPhone = () => {
    let phoneMap = new Map();
    phoneMap.set(1, [0, 0]).set(2, [0, 1]).set(3, [0, 2])
            .set(4, [1, 0]).set(5, [1, 1]).set(6, [1, 2])
            .set(7, [2, 0]).set(8, [2, 1]).set(9, [2, 2])
            .set('*', [3, 0]).set(0, [3, 1]).set('#', [3, 2]);

    return phoneMap;
}

const isLeftRight = (phone, numbers, leftPos, rightPos, hand, history) => {
    for(const number of numbers) {
        if(number >= 1 && number <= 3) {
            leftPos = phone.get(number);
            history += 'L'
        } else if(number >= 7 && number <= 9) {
            rightPos = phone.get(number);
            history += 'R';
        } else {
            const temp = phone.get(number);
            if(Math.abs((leftPos[0] - temp[0]) + Math.abs(leftPos[1] - temp[1])) < Math.abs((rightPos[0] - temp[0]) + Math.abs(rightPos[1] - temp[1]))) {
                leftPos = phone.get(number);
                history += 'L';
            } else if (Math.abs((leftPos[0] - temp[0]) + Math.abs(leftPos[1] - temp[1])) > Math.abs((rightPos[0] - temp[0]) + Math.abs(rightPos[1] - temp[1]))) {
                rightPos = phone.get(number);
                history += 'R';
            } else if(hand === "left") {
                leftPos = phone.get(number);
                history += 'L';
            } else {
                rightPos = phone.get(number);
                history += 'R';
            }
        }
    }
    
    return history
}
