// // function returnFalse(){
// //     console.log("False 함수");
// //     return false;
// // }

// // function returnTrue(){
// //     console.log("True 함수");
// //     return true;
// // }

// //Truthy & Falsy 활용

// function returnFalse(){
//     console.log("False 함수");
//     return undefined;
// }

// function returnTrue(){
//     console.log("True 함수");
//     return 10;
// }

// //단락평가 때문에 false만 출력됨 => 앞이 False => 뒤에 값이 뭐가 오든 False => True함수에 접근 X
// console.log(returnFalse() && returnTrue());

// //단락평가 때문에 True만 출력됨 => 앞이 True => 뒤에 값이 뭐가 오든 True => False 함수에 접근 X
// console.log(returnTrue() || returnFalse());


//단락 평가 활용 사례
function printName(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음"); //person의 값이 있음 => 뒤로 접근 X => 이름 출력력
}

printName({name : "박용규"});