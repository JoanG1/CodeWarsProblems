function narcissistic(value) {
  // Code me to return true or false

  flag = false
  sum = 0
  count = 0
    
  let myFunc = num => Number(num);
  
  let intArr = Array.from(String(value), myFunc);
  
  console.log(intArr);

  intArr.forEach(element => {

  sum += Math.pow(element, intArr.length)
  
  });

  if(sum === value){

  flag = true

  }

  console.log(flag)
  return flag
}

//narcissistic(7)
