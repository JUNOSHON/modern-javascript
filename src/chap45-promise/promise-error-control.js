const wrongUrl1 = 'https://jsonplaceholder.typicode.com/XXX/1';

promiseGet(wrongUrl1).then( //부적절한 url, 에러가 발생한다
    res => console.log(res),
    err => console.error(err)
);

const wrongUrl2 = 'https://jsonplaceholder.typicode.com/XXX/1';

promiseGet(wrongUrl2)
    .then(res => console.log(res))
    .catch(err => console.error(err));//내부적으로 then(undefined,onRejected)가 호출된다.