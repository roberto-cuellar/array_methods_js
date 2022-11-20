const estudiantes = ["beto","juan","lorena"]; // Lista de estudiantes
const notaEstudiantes = [4,3,2]; // Lista de las notas de cada estudiante
const nombreBusqueda = "LORENA".toLowerCase(); // Nombre del estudiante a buscar

for(let i=0;i<estudiantes.length;i++){
    const nombreActual = estudiantes[i];
    if(nombreBusqueda == nombreActual){
        console.log("Estudiante "+nombreBusqueda,", su nota es: ",notaEstudiantes[i]);
    }
}




