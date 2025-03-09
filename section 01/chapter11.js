//함수
//호이스팅 => 끌어올리다 라는 뜻
//자바스크립트는 함수 선언부가 호출보다 밑에 있어도 상관X
//호이스팅 때문이다. 내부적으로 알아서 끌어올려서 실행한다.
function getArea(width, heigth) {
    function another() {
        console.log("another");
    }

    another();
    let area = width * heigth;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30,20);
console.log(area2);

