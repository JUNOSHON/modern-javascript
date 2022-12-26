const promise = new Promise((resolve,reject) => {

    if(true){ //비동깅 처리가 성공하면
        resolev('result');
    }
    else{//실패하면
        reject('fail')
    }

});