exports.min = function min (array) {
  if ( array === undefined || array.length === 0){
    return 0;
  }
  let min = array[0];
  for (let v of array){
    if (min >= v){
      min = v;
    }
  }
  return min;
}

exports.max = function max (array) {
  if ( array === undefined || array.length === 0){
    return 0;
  }
  let max = array[0];
  for (let v of array){
    if (max <= v){
      max = v;
    }
  }
  return max;
}

exports.avg = function avg (array) {
  if ( array === undefined || array.length === 0){
    return 0;
  }
  let res = 0;
  for (let v of array){
    res += v;
  }
  return res / array.length;
}