function solution(n, left, right) {
  
  // let arr = [];
  
  //1트
  // for (let i = 0; i < n; i++) {//행
  //   //행마다 빈 배열 push
  //   arr.push([]);
  //
  //   for (let j = 0; j < n; j++) { //열
  //     if (j <= i) {
  //
  //       arr[i].push(i + 1);
  //       // console.log(arr);
  //     } else {
  //
  //       arr[i].push(j + 1);
  //     }
  //   }
  // }
  
  //2트
  // let arr = new Array(n);
  // for (let i = 0; i < n; i++) {
  //   arr[i] = new Array(n);
  //
  //   for (let j = 0; j < n; j++) {
  //     if (j <= i) {
  //
  //       arr[i][j] = i + 1;
  //     } else {
  //
  //       arr[i][j] = j + 1;
  //     }
  //   }
  // }
  
  //3트
  const arr = Array.from({length: n}, (_, i) =>
    Array.from({length: n}, (_, j) => (j <= i ? i + 1 : j + 1)),
  );
  
  
  const flatmap = arr.flat(n);
  
  let answer = flatmap.slice(left, right + 1);
  
  console.log(answer);
  
  
  return answer;
}

solution(3, 2, 5);
