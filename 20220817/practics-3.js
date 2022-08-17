let numberData = [444,23,2022,8,16,12,22];

// var max = Math.max.apply(null,numberData);
// console.log(max);

// 444가 23보다 크면 참. 444가 2022보다 크면 거짓. 444가 8보다 크면 참. 444가 16보다 크면 참. 444가 12보다 크면 참. 444가 22보다 크면 참. 
// 444보다 크면 반복 

// if(numberData[0]>numberData[1]){
//   console.log(true);
// }
// if(numberData[0]>numberData[2]){
//   console.log(false);
// }

// pseudo 1. 나 배열에 있는 값을 조회할거야 ->반복문

let saveValue = 0;
for(let i = 0; i<numberData.length; i++){
  // 2. 값을 비교하고 싶어 ===, !==
  // 3. 큰거 >,<
  if(numberData[i]>numberData[i+1]){
    // 444           23
    console.log('앞에 있는 수가 값이 더 큽니다.');
    
    saveValue = numberData[i];
    // 0             444
    console.log(saveValue);
    // 444
    
    if(saveValue > numberData[i+2]){
      saveValue = 0;
    } else{
      saveValue  = numberData[i+2];
    }
    console.log(saveValue)
    // saveValue > numberData[i+2];
    //   444         2022
    // saveValue = numberData[i+2];
    // console.log(saveValue);
    

  } else{
    console.log("뒤에 있는 수가 더 큽니다");
  }

}