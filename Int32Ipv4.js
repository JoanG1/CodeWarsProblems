function int32ToIp(int32){
    //...

    valorBinario = ""

    int32.split(".").forEach(element => {

        console.log(element)

        for ( j = 0; j < 8; j++){

            if (element % 2 == 0) {

                valorBinario += 0;

            }else{

                valorBinario += 1;

            }

            element /= 2;

        }
        
    });

    console.log(valorBinario)
    
  }


  console.log(int32ToIp("128"))