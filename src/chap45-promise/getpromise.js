const promiseGet = url =>{
    return new Promise((resolve,reject)=>{
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

promiseGet('https://jsonplaceholder.typicode.com/posts/1');