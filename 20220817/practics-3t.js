let numberData = [444, 23, 2022, 9, 16, 12, 22];

// work : 배열이 숫자가 무엇인지 모르는 상태로 가정하는 것이 훈련에 좋음
// work : 가장 기초적인 제어부터 구현 
// work : 당연한 것 위주로 시작

// programmin standard library 절차지향, 명령기반 프로그램
let data = 0;
for(let i = 0; i < numberData.length; i++){
  if(numberData[i]>numberData[i+1]){
    if(data < numberData[i]) {
      data = numberData[i];
      console.log(i + "번째입니다.")
    }
    
  }
}

console.log(data);

// javascript 선언형 프로그램

let data1 = Math.max(...numberData);
console.log(data1);

