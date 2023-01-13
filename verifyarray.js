function subArray(array, subarray) {
    let indiceMenor = 0;
 
    for (let i = 0; i < array.length; i++) {
    if (array[i] === subarray[indiceMenor]) {
            indiceMenor++;
 
            if (indiceMenor === subarray.length) break;
        }
  }
 
    return indiceMenor === subarray.length;
