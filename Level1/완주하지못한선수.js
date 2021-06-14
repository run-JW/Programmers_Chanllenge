function solution(participant, completion) {
    participant.sort();
    completion.sort();

    while(completion.legnth !== 0) {
        let el = participant.pop();
        if(el !== completion.pop())
            return el;
    }
}
