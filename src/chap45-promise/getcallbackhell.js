const get = url => { //url을 인자로 받는 get 함수 생성
    const xhr = new XMLHttpRequest(); //
    xhr.open('GET',url);//인수로 받은 url에 GET으로 요청
    xhr.send();//요청 전송

    xhr.onload = () =>{
        if(xhr.status == 200){

            return JSON.parse(xhr.respone); //서버의 응답을 반환
        }
        
            console.error(`${xhr.status} ${xhr.statusText}`);
        
    };
};

const response = get('https://jsonplaceholder.typiconde.co,/posts/1');//id가 1인 post 취득
console.log(response);