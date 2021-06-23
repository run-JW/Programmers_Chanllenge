function solution(new_id) {
    const regex = /[^a-z0-9_.-]/g;
    let result = new_id.toLowerCase().replace(regex, "").replace(/\.{2,}/g, ".").replace(/\.$/, "");
    if(result[0] === ".") result = result.slice(1); // slice(1, result.length -1) 하면 테스트 실패함

    if(result === "") result = "a";

    if(result.length >= 16) result = result.slice(0, 15).replace(/\.$/, "");

    if(result.length <= 2) {
        while(result.length !== 3) {
            result += result[result.length - 1];
        }
    } 

    return result;
}
