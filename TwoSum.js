function twoSum(numbers, target) {
    // ...

    k = 2
    pair = []



    for (let i = 0; i<numbers.length ; i++){

        for (let j = 1 ; j<numbers.length ;j++){

            if(parseInt(numbers[i])+parseInt(numbers[j]) == target){

                if (i != j){

                    pair.push(i,j)

                }
            }
            
        }
    }
    return pair.slice(0,2)
}

function twoSum2(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}


console.log(twoSum([2,2,4],4))