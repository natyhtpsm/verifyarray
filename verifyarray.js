// Name: Nathália Pimentel de Assis
//University: University of Brasilia
//Bachelor student in eletronic engineering course
//Date: November 4th 2022 


function subArray(array, subarray) {
    let indiceMenor = 0;
 
    for (let i = 0; i < array.length; i++) {
    if (array[i] === subarray[indiceMenor]) {
            indiceMenor++;
 
            if (indiceMenor === subarray.length) break;
        }
  }
 
    return indiceMenor === subarray.length;
}
