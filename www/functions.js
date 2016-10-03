

function getCSV(filename){

    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "./data/"+filename , true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    req.onload = function(){
      var str = req.responseText;
      var tmp = str.split("\n");
      for(var i=0;i<tmp.length;++i){
          result[i] = tmp[i].split('\:');
      }
    }

  }

function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    // 改行を区切り文字として行を要素とした配列を生成
}


function random(min,max){
  return Math.floor( Math.random() * (max + 1 - min) ) + min ;
}

function datatoint(n){
    if (n === null){
        n = 0;
    }
    n = parseInt(n);
    return n;
}

function generate(){

  var N = datatoint(result[0][0]);
  var data = random(1,N);

  variable = [];
  variable = result[data][4].split(",");
  equation = result[data][2];


  var maxData = result[data][1];
  var i;
  for(i=5;i<=maxData;i++){
  eval(result[data][i]);
  }

  for(i=0;i<variable.length;i++){
      equation = equation.replace(new RegExp(variable[i],"g"),eval(variable[i]));
  }

  ans = eval(result[data][3]);

}
