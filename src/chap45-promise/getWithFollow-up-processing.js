//비동기 함수 get 을 후속처리를 이용해 구현

const promiseGet = url =>{
    return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status ===200){
            resolve(JSON.parse(xhr.response));//응답이 성공적이면 resolve 함수 호출
        }
        else{
            reject(new Error(xhr.status));//실패하면 reject 호출
             }
         };
    });
};

promiseGet('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => console.log(res));//뭐지,,왜 인수 한개만받음 생략 가능하다는 얘기도 없는데ㅠㅠ
    .catch(err => console.error(err));//얜 뭐임 왜 try쓰라함 아니 그리고 프로미스 함수는 이렇게 들여쓰기로 후속 처리 메서드쓸수있는건가
    .finally(() => console.log('bye'));//ㅋㅋ이젠 모르겠다.
