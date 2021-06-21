function solution(nums) {
    const pick = nums.length / 2;  // 고를 수 있는 폰켓몬 수
    const set = new Set();          // SET 객체 선언
  
    for(const num of nums) set.add(num);  // 배열 Set에 담아
  
    return (pick < set.size) ? pick : set.size;   // 결정
}
