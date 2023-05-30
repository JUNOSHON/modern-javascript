// const circle = {
//   radius: 5,
//   get() {
//     return 2* this.radius;
//   }
// }

function Circle(radius) {
  this.radius = radius; //객체 리터럴 메서드 내부에서의 this는 메서드를 호출한 객체를 가리킨다.
}
Circle.prototype.get = function (){
  return 2* this.radius; //this는 생성자 함수가 미래에 생성할 인스턴스를 가리킨다.
}
const circle1 = new Circle(5); //일반함수 Circle에 new가 붙었으므로 생성자 함수로 동작

console.log(circle1.get());