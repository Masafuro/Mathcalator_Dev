function random(min,max){
  return Math.floor( Math.random() * (max + 1 - min) ) + min ;
}

function datatoint(n){
    if (n == null){
        n = 0;
    }
    n = parseInt(n);
    return n;
}