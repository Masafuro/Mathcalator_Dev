﻿数道-Mathcalator-
==========================================

数学の問題を自動生成し、スコアなどを記録するスマホ用のプラットフォーム。Dance Dance Revolution ライクな数学問題集を目指す

##独自関数:functions.jsで呼び出される独自関数  
* random(min,max)：乱数をmin~maxの間で取得
* datatoint(n); データをintの数字にする。データがnullの時は0にする。
* load(); データを読み込んで式の生成、各定義式の計算、変数生成、解答の生成を行う。
配列生成、任意のcsvからのデータ取得、式の生成
' result = [];　'
' result = getCSV("test5.csv"); '
' setTimeout(load,100); '


##CSV構造: 
* ' を区切り文字とする。
* 3:データ量(1):表示問題(2):解答式(3):置換変数(4):定義式(5):定義式(6):定義式(7):定義式(8):定義式(9):定義式(10)  
先頭は行数を。1列目にはその行の列数を。例えば、定義式(6)まであれば、6。10以上定義式を増やしても構わない。解答式は変数で与えればよい。evalするので式でも可のはず。




