//1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환을 하는 것

let num = 10;
let str = "20";

const result = num +str;    
//숫자형인 num이 문자열을 +로 만나면서 묵시적 형 변환이 일어난다.

//2. 명시적 형 변환
// -> 프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시한다.
// -> 문자열 => 숫자
let str1 = "10";
let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2); 
//숫자만 포함되어 있지 않은 문자열의 형변환시에는 parseInt를 사용한다.
//숫자가 앞쪽으로 나와있는 경우에 사용한다!

// -> 숫자 => 문자열
let num1 = 20;
let numToStr1 = String(num1);

