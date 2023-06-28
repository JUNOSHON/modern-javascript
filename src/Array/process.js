function solution(priorities, location) {
  
  let priorities2 = priorities;
  
  
  priorities2.sort((a,b) => { // 사본배열 정렬 완료
    return b-a;
  })
  
  if(priorities2[0] === priorities[location]){
    console.log(1);
  }
  
  console.log(priorities);
  
  
  
  let answer = 0;
  return answer;
}


solution([2, 1, 3, 2], 2);
