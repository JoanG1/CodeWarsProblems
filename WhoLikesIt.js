function likes(names) {
    // TODO

    messages = ""
    i = names.length-2

    console.log(names)
    console.log(names.length-2)

    if (names.length == 0){

        messages = "no one likes this"
        console.log("here1")
    }if (names.length == 2){

        messages = names[0]+" and "+names[1]+" like this" 
        console.log("here2")

    }if (names.length > 3){

        messages = names[0]+", "+names[1]+" and "+ i +" more like this"
        console.log("here3")

    }if (names.length == 1){

        messages = names[0]+" likes this"
        console.log("here4")

    }if (names.length == 3){

        messages = names[0]+", "+names[1]+" and "+names[2]+" like this" 
        console.log("here2")

    }

    return messages
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
