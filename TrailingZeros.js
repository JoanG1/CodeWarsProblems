function zeros (n) {
    // your code here 

    count = 0

    if (n < 0){

        return -1
    }
    
    for (let i = 5; Math.floor(n / i) >= 1; i *= 5){

        count += Math.floor(n / i)
    }

    return count

   
}

  console.log(zeros(30))