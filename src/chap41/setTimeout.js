
setTimeout(() => console.log(`JUNO`,1000));
setTimeout(name => console.log(`Hi! ${name}.`),1000,'JUNO');//1초 후 콜백함수 호출, JUNO가 인수로 전달
setTimeout(() => console.log(`Hello!`)); //두번째인수 delay를 생략하면 기본값 0이 지정됨