module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error();
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '--discard-next':
        if(i === arr.length - 1)
          arr.splice(i, 1);
        else if(arr[i + 2] !== '--double-prev'){
            arr.splice(i, 2);
            i--;
        }
        break;
      case '--discard-prev':
        if(i === 0){
          arr.splice(i, 1);
          i--;
        }else{
          arr.splice(i - 1, 2);
          i -= 2;
        }
        break;
      case '--double-next':
        if(i === arr.length - 1)
          arr.splice(i, 1);
        else
          arr.splice(i, 1, arr[i + 1]);
        break;
      case '--double-prev':
        if(i === 0){
          arr.splice(i, 1);
          i--;
        }else{
          if(arr[i - 2] === '--discard-next'){
            arr.splice(i - 2, 3, arr[i - 1]);
            i -= 3;
          }else
            arr.splice(i, 1, arr[i - 1]);
        }
        break;
      default:
        break;
    }
  }
  return arr;
};
