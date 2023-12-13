const datos={'a':1,'b':2,'c':3};

Object.entries(datos).forEach(([clave,valor])=>{
    console.log(`${clave}:${valor}`);
})
for(const valores in datos){
    console.log(`${valores}:${datos[valores]}`)
}