/*
Promise.race([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
])
    .then(console.log)//3
    .catch(console.log);
*/
Promise.race([
        new Promise((_,reject) => setTimeout(() => reject(new Error('Error 1')),3000)),
        new Promise((_,reject) => setTimeout(() => reject(new Error('Error 2')),2000)),
        new Promise((_,reject) => setTimeout(() => reject(new Error('Error 3')),1000)),
])
        .then(console.log)//3
        .catch(console.log);