
let nota = 0;
alert('A continuación ingrese las notas de cada trimestre para calcular el promedio y evaluar si el estudiante esta aprobado.');
for(let i=0;i<3;i++){
    nota +=  parseInt(prompt('ingrese la nota del trimestre ' + (i+1))); 
}
let notaPromedio = nota / 3;
if(notaPromedio >= 7 ){
    alert('El estudiante aprobó la materia con un promedio de: ' + notaPromedio);
}else{
    alert('El estudiante desaprobó la materia con un promedio de: ' + notaPromedio);
}