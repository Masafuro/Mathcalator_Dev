
res = []; //getCSVとconvertCSVtoArrayで共通使用
function getCSV(filename){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", "./data/"+filename , true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行

    req.onload = function(){
	convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
return res;
}

function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

    for(var i=0;i<tmp.length;++i){
        res[i] = tmp[i].split('\:');
    }
}


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

function generate(){

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
