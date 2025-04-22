// //common json module 이용하기기

// // const {moduleData} = require("./math");
// // console.log(moduleData)
// // console.log(moduleData.add(1,2))
// // console.log(moduleData.sub(1,2))

// //구조분해할당으로 받아오기
// // const { add, sub } = require("./math");
// // console.log(add(1, 2));
// // console.log(sub(1, 2));

// //ES module로 가져오기
// import { add, sub } from "./math.js"; //반드시 확장자까지 써야한다!
// console.log(add(1, 2));
// console.log(sub(1, 2));

// import mul from "./math.js"; //Default 값을 불러올 땐 {} X , 그리고 이름을 바꿔서 가져올 수 있다.

// // import mul {add, sub} from "./math.js"
// // 같은 경로를 가진 곳에서 불러올 땐 합칠 수 있음.

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
