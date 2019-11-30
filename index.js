function iterativeLog(array){
  array.forEach((element, index) =>{
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  array.forEach(callback);
}

function doToArray(ar, callback){
  ar.forEach(callback);
}
