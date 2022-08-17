let numberData = [444, 23, 2022, 9, 16, 12, 22];

let data = 0;
for(let i = 0; i<numberData.length; i++){
  if(numberData[i]<numberData[i+1]){
    // 444              23
    // 23        <     2022
    // 2022              9
    // 9         <      16
    if(data<numberData[i]){
      // 0      23
      // 23       9
      data = numberData[i];

      if(data>numberData[i]){
        
      }

      data = numberData[i];
      // 0       23
    }
    
  }
}

