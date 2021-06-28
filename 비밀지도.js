const solution = (n, arr1, arr2) => {

    arr1 = toBinary(n, arr1);                         // 각 배열의 수를 2진수로 변환
    arr2 = toBinary(n, arr2);

    const answer = makeSecretMap(n, arr1, arr2);     // 비밀지도 만들기 함수

    return answer;
};

// 2진수 변환 함수
const toBinary = (n, arr) => {
    for(let i = 0; i < n; i++) {
        arr[i] = arr[i].toString(2);
    }
    return arr;
};

// 비밀지도 만들기 함수
const makeSecretMap = (n, arr1, arr2) => {
    const secretMap = [];
    for(let i = 0; i < n; i++) {                                      // 반복문 : 각각의 arr1, arr2에 있는 이진수들을 비교하기 위해 사용
        let tempMap = "";                                             // tempMap String 변수는 지도 부분을 담는 변수, 지도가 갖춰지면 secretMap 배열에 담는다.
        if(arr1[i].length !== arr2[i].length) {                       // 만약 길이가 다르면, 큰 수의 앞부분을 slice 시켜, 길이를 같게 한다.  
            const lenDif = Math.abs(arr1[i].length - arr2[i].length);
            if(arr1[i].length > arr2[i].length) {
                tempMap += arr1[i].slice(0, lenDif);
                arr1[i] = arr1[i].slice(lenDif, arr1[i].length);
            } else {
                tempMap += arr2[i].slice(0, lenDif);
                arr2[i] = arr2[i].slice(lenDif, arr2[i].length);
            }
        }

        for(let j = 0; j < arr1[i].length; j++) {                    // 2중 반복문 : 각 요소들 간 비교, 둘 중
            if(arr1[i][j] === "1" || arr2[i][j] === "1") {
                tempMap += "1";
            } else {
                tempMap += "0";
            }
        }
        while(tempMap.length !== n) tempMap = '0' + tempMap;         // String의 길이가 n의 크기와 다르면 앞을 0으로 채워서 숫자를 맞춘다.
        tempMap = tempMap.replace(/[1]/g, "#").replace(/[0]/g, " ")  // 1 -> #, 0 -> " "로 변환하여 배열에 담는다.
        secretMap.push(tempMap);
    }
    return secretMap;
};
