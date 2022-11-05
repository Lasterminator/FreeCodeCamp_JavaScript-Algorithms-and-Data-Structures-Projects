function convertToRoman(num) {
    const romanConversion = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
   
    const romanConversionArr = [];
   
    for (let i in romanConversion){
      const currentLetter = Object.keys(romanConversion).find(numeral => romanConversion[numeral] === romanConversion[i]);
      while(num >= romanConversion[i]){
        if (num >= romanConversion[i]){
          romanConversionArr.push(currentLetter);
          num -= romanConversion[i];
        }
      }
    }
   
    return romanConversionArr.join('');
    
   }
   
   console.log(convertToRoman(95));