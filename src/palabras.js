function ocurrencia(frase){
  const resultado={};
  const oracion=frase.split(' ');
  if(frase !=''){
  for(let i=0;i<oracion.length;i++){
    const palabra=oracion[i];
  
  if(resultado[palabra]){
    resultado[palabra]++;
  }
  else{
    resultado[palabra]=1;
  }
}
}
  return resultado;
   
    
  }
  export default ocurrencia;