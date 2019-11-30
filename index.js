var arr1 = [];
function iterativeLog(array){
  array.forEach((element, index) =>{
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  arr1.forEach(callback);
}

function doToArray(ar, callback){
  ar.forEach(callback);
}
