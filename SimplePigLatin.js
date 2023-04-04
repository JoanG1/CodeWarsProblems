function pigIt(str){
    //Code here

    string = []

    str.split(" ").forEach(element => {

        string.push(element.slice(1,element.length)+ element.slice(0,1) + (element.charCodeAt(element.length-1)>65 && element.charCodeAt(element.length-1)<122 ? "ay" : ""  ))

    
    })


    console.log(string.join(" "))
    return string.join(" ")
   

  }


pigIt("O tempora o mores !")