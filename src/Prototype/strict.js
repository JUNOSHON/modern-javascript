'use strict'

var name = 'juno';
console.log(window.name); //strict 모드에서 전역객체 선언 불가능
const x = {
  a:'1', //strictmode에서 객체 내 중복 선언 불가능
  // a:'1',
}

// console.log(010); 8진수 이스케이프 표현 불가능
console.log(0x1);