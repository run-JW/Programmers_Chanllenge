# 동물 보호소에 들어온 동물 중 가장 최근에 들어온 동물을 조회
# 가장 최근, 가장 늦게의 경우는 MAX 함수나 MIN 함수를 이용하여 조회하면 해결된다.

SELECT MAX(DATETIME) as max_date 
FROM ANIMAL_INS;
