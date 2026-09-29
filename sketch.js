let lista = [2, 3, 0, , 9, null, 821, 421, "", 89, -32, 2, 2, 2, 2, 22,2222];

function Limpiar (lista){

  for ( let i = 0; i<lista.length; i++){
    if( lista[i] == null||lista[i]=="" ) {
            lista.splice (i,1)
            i--;
          } 
  for ( let j = i+1 ; j<lista.length; j++){
          if (lista[i] == lista[j]){
        lista.splice (j,1);
            j--;
      }
    }
  }
  return lista;
}

console.log(Limpiar(lista));