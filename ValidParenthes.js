function validParentheses(parens) {
    // your code here ..

    if (0 <= parens.length <= 100 ){
        open = 0
        close = 0

        par = parens.split("")

        if ( parens[0] != ")"){

        
            par.forEach(element => {

                console.log(open)
            
                if (open == -1){

                    return false

                }else{

                    if (element == "("){

                        open++
                    }else{
        
                        open--
                    }
                }

                
            });

            if (open == 0){

                return true
            }

        }
        
        return false

    }
return false
}


console.log(validParentheses("()()"))