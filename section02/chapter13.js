function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업을 실행하는 함수
    // => executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num 이 숫자가 아닙니다.");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// //then 메서드
// // => 그 후에 (promise가 성공 했을 때만 시행)
// //catch 메서드
// // then 의 실패 버전 메서드
// //두개를 연결하는것을 chaining
// promise.then((value)=>{
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });
