let numberData = [444, 23, 2022, 9, 16, 12, 22];

// console.log(numberData);

let data = 5000;
for(let i = 0; i<numberData.length; i++){
  if(numberData[i]<numberData[i+1]){
    // 444            23
    // 23        <      2022
    // 2022              9
    // 9          <      16
    // 12          <      22
    if(data>numberData[i]){
      // 5000    23
      // 23     9
      // 9       12
      data = numberData[i];
      // 5000     23  
      // 23        9

      console.log(i + "번째입니다.");
    }
  }
} 
console.log(data);
// 23
// 9
// 12

// let data는 그냥 그릇같은 역할임. 5000이 되면 알고리즘 오류 날 수 있기 때문에 추가로 세부적인 if 조건을 걸어주는 것이 좋음 
