function isValidWalk(walk) {
    //insert brilliant code here

    CoordenadaX = 0
    CoordenadaY = 0

    if (walk.length == 10){

    walk.forEach(element => {

        if(element == "n"){

            CoordenadaY++

        }if (element == "s"){

            CoordenadaY--

        }if (element == "w"){

            CoordenadaX--

        }if(element == "e"){
            
            CoordenadaX++
        }
        
    });


    if (CoordenadaX == 0 && CoordenadaY == 0){

        return true
    }

    return false

    }

    return false
}

