// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

//만약 return이 Promise라면 해당 Promise를 반환한다.

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "박용규",
        id: "yonggyu",
      });
    }, 1500);
  });
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData(){
    const data = await getData();
    console.log(data);
}

printData();