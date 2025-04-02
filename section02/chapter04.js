//1. Spread 연산자
// => Spared : 흩뿌리다, 펼치다
// => 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];  // ...이 Spread 연산자

let obj1 = {
    a : 1,
    b : 2,
};

let obj2 = {
    ...obj1,
    c : 3,
    d : 4,
};


function funcA(p1, p2, p3){
    console.log(p1, p2, p3);
}

funcA(...arr1);


//2. Rest 매개변수
//=> Rest 는 나머지, 나머지 매개변수

function funcB(one, ...rest){    //한 방에 함수를 호출하는 모든 인수들이 배열 형태로 저장됨.
                                // Rest 매개변수의 이름은 아무거나 설정해도 되고, 뒤에는 다른 매개변수가 더 올 수 없다.
                                // (남은 것을 다 받아오는 것이기 때문)
    console.log(rest);
}

funcB(...arr1);