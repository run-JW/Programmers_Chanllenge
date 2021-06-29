/**
* 2016년(윤년 o) 월, 일 넣으면 요일 구하는 함수
*
* 1.Map 객체 키 값으로 인덱스 숫자, value 값으로 요일을 넣는다.
* 2.Date 객체를 2016년, a - 1월 b - 1일로 설정한다. -1 하는 이유는 인덱스가 0부터 시작하기 때문
* 3.getDay() 메소드를 통해 요일 인덱스 값을 얻은 뒤, map에서 value 값을 반환한다.
*
* @param {Number} a 월
* @param {Number} b 일
* @returns {String} 요일
*/
const solution = (a, b) => {
    const map = new Map([
        [0, 'MON'], [1, 'TUE'], [2, 'WED'],
        [3, 'THU'], [4, 'FRI'], [5, 'SAT'],
        [6, 'SUN']
    ]);
    const date = new Date(2016, a - 1, b - 1);
    
    return map.get(date.getDay());
};
