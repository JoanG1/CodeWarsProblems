function generateHashtag (str) {

    string = null
    tam = 0;

    
        str.split("").forEach(ele => {
            console.log(ele)

            if (ele !== "" && ele !== " "){

                string = "#"
                console.log(tam)
                tam ++;
            }
        })

        if (string !== null && tam <140){

            str.split(" ").forEach(element => {

                console.log (element)

                string +=  element.slice(0,1).toUpperCase()+element.slice(1, element.length)
                
            });

            return string

        }

    return false
}

console.log (generateHashtag ("code" + " ".repeat(140) + "wars"))