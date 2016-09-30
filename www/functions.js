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

function load(){

  var N = datatoint(result[0][0]);
  var data = random(1,N);

  var maxData = result[data][1];

  var i;
  for(i=5;i<=maxData;i++){
  eval(result[data][i]);
  }

  variable = [];
  variable = result[data][4].split(",");
  equation = result[data][2]
  ans = eval(result[data][3]);


  for(i=0;i<variable.length;i++){
      equation = equation.replace(new RegExp(variable[i],"g"),eval(variable[i]));
  }


}
