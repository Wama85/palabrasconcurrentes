function ocurrencia(palabra){
    const contarpalabra={};
    const oraciones=palabra.split(' ')
    if (palabra !='')
  {
      oraciones.forEach((oracion)=>{
        contarpalabra[oracion]=(contarpalabra[oracion] || 0) + 1 ;
      });
  
      return contarpalabra;
  }
  return {};
    
  }
  export default ocurrencia;