function* genFunc() {
    yield 1;
    yield 2;
    yield 3;
}



const genertor = genFunc();

console.log(generator.next());//yield1 vcalue 프로퍼티에 할당, done 프로퍼티는 false
console.log(generator.next());//yield2 vcalue 프로퍼티에 할당, done 프로퍼티는 false
console.log(generator.next());//yield3 value 프로퍼티에 할당, done프로퍼티는 false
console.log(generator.next()); //남은 yield 표현식이 없음, 제너레이터 함수 마지막까지 실행