# IkedaToui_portfolio

##  へびゲーム
####  目的・動機
一定時間での繰り返し処理について理解を深めるために作成しました
#### 難しかった所
方向キーを押したときの、ヘビのいる位置やヘビの向いている方向、ヘビの体の長さなどをどのように認識させるか悩みました。
#### どのように解決したか
ヘビの体がある位置を配列で管理し、ヘビが進む速度や向いている方向を変数に記録することで解決しました。
#### 工夫したこと
ヘビの頭が次に移動する位置を、配列のindex番号で識別することでgameoverの処理を実現しました。
#### 学習したこと
最終的にはsetTimeout()の処理になりましたが、作っている途中でsetInterval()についても触れたので、一定時間置きの繰り返し処理について知識を深めました。
    
## マインスイーパー
#### 目的・動機
ネット上でのjs練習などを見てみると、多くの人が作成していたので自分の力を試すために作りました。
#### 難しかった所
一番難しかったのは、開いたマスが何もないマスだった場合、その周りのマスを識別して開いていく処理です。
#### どのように解決したか
再帰関数を使用し、周りのマスがすべて開けられなくなるまで処理を繰り返すことで解決しました。
#### 工夫したこと
「爆弾が入っているか」や「周りに爆弾がいくつ隣接しているか」などマスの情報を、class名を使って識別する事で処理を楽にしました。
#### 学習したこと
再帰関数を使用する事で、for文やwhile文に頼らない繰り返し処理を実現しました。

## オセロ
#### 目的・動機
へびゲームやマインスイーパーでの知識を応用して、オセロ盤を作成しました。
#### 難しかった所
 駒を置いた際、「そもそも駒が置けるマスなのか」を識別する処理と、相手駒に挟まれた際に駒の色を変える処理が難しかったです。
#### どのように解決したか
マインスイーパーの再帰関数の応用で、クリックしたマスの周囲を確認して解決しました。
#### 工夫したこと
x軸y軸の情報をすべてのマス(div)に設定することで、管理がしやすくなっています。
変数で白と黒のターンを入れ替える事で、一つの関数で二人分の処理をかきました。
#### 学習したこと
分岐処理が多いプログラムだったので、論理的思考能力が身につきました。

## ライト
#### 目的・動機
サイトの中で明暗の表現をしてみたくなり作成しました。
#### 難しかった所
マウスの位置とライトを連動させる処理を作るのが難所でした。
#### どのように解決したか
画面のサイズとマウスの位置から%を割り出し、cssを動的に変更することで解決しました。
#### 工夫したこと
画像のスイッチの位置と当たり判定を合わせるため、画像のサイズからスイッチのサイズを%で割り出しました。
#### 学習したこと
暗闇の中のライトを表現するため、background: radial-gradient();について学びました。

## 限界しりとり
#### 目的・動機
自分が愛用しているゲームアプリで、自分でも作ってみたくなりました。
#### 難しかった所
普通のしりとりと違いターンごとの制限があるので、入力した文字が制限に当てはまるかを確かめる処理が難所でした。
#### どのように解決したか
全ての通りに対応したif文を用意し、一つの関数にまとめる事で分かりやすくまとまったプログラムに仕上げました。
#### 工夫したこと
小文字の「ゃ」を「や」として認識するために、配列であらかじめデータを用意しました。
#### 学習したこと
slice()などの処理を多用したので、JavaScriptでの文字列の扱いついて知見を得ることが出来ました。

## ポケモン図鑑
#### 目的・動機
API課題のために検索していたところ、ポケモンに関するAPIを見つけたので作成しました。
#### 難しかった所
最初のレンダリングの際に、useStateの中身が入っておらずエラーが出てしまいました。
#### どのように解決したか
useEffectについて理解を深め使用することで克服しました
#### 工夫したこと
APIが海外で作られたものだったので、日本語で使えるように日本語名に変換するAPIと関数を作成しました。
#### 学習したこと
APIだけでなくreactのフックも使用したため、調べて学ぶことが出来ました。

## 商品ページphp
#### 目的・動機
PHPの勉強を行い、どれだけ力が着いたか確認するために作成しました。
#### 難しかった所
入力されたデータを複数ページを跨いで使用する方法が、理解するのに時間がかかりました。
#### どのように解決したか
session等のデータ管理や、その使い方について学ぶことで解決していきました。
#### 工夫したこと
exitを使い、エラー発生や不正ページ読み込みなどの際の処理を作りました。
#### 学習したこと
データ入力に必要なformのtypeに注意しながら作ることで、ユーザーにより使いやすい入力フォームの作り方を学びました。

