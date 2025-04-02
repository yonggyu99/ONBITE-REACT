//1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //Big Integer 아주아주 큰 숫자를 저장하는 값

// if(!f1){
//     console.log("Falsy");
// }

//2. Truthy 한 값
// => 7가지의 Falsy 한 값들을 제외한 나머지 모든 값들

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// if(t5){
//     console.log("Truthy");
//}


//3. 활용 사례

function printName(person){
    if(!person){
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person;
printName(person);