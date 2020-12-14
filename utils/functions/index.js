const MAX_REPETITION = 3;
// Recibe el arreglo de todas las citas de un dia y regresa un arreglo con las horas que ya se han repetido 3 veces
export function citasRepetidas(arrayCitas){
    //Ordenar el arreglo por la hora
    arrayCitas.sort(function(a,b){
        if(a.time < b.time){
            return -1;
        }
        else if(a.time > b.time){
            return 1;
        }
        else return 0;
    })

    return mostrarRepeticiones(arrayCitas)
}

function mostrarRepeticiones(arrayCitas){
    
    var repetidos = [];
    
    var cont = 1    
    for (var i = 0; i<arrayCitas.length-1;i++){
        
        if( arrayCitas[i+1].time == arrayCitas[i].time ){
            cont ++;
            if(cont >= MAX_REPETITION){
                repetidos.push(arrayCitas[i].time)
            }
        }
        else {
            cont = 1
        }
    }
    return repetidos

    
}
