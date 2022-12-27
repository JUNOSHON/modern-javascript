const requestData1 = () =>
    new Promise(resolve => setTimeout(() => resolve(1),3000));



const requestData2 = () =>
     new Promise(resolve => setTimeout(() => resolve(2),2000));

const requestData3 = () =>
     new Promise(resolve => setTimeout(() => resolve(1),1000));

/*
const res = [];
requestData1()
    .then(data => {
        res.push(data);
        return requestData2();
    })
    .then(data => {
        res.push(data);
        return requestData3();
    })
    .then(data => {
        res.push(data);
        console.log(res);
    })
    .catch(cosole.error);
*/
Promise.all([requestData1(),requestData2(),requestData3()]) //세 개의 비동기를 병렬로 처리 [1,2,3] 약 3초 소요
    .then(console.log)
    .catch(console.error);