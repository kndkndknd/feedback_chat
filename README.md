# 概要
node.js + socket.io + web audio apiを用いて接続したクライアントで音をだすやつです

# 2017年5月5日の改訂
## 概要
- お久しぶりです
- HOPKENでの矢代諭史とのデュオのためのセット
- だいぶインターフェースが変わってしまいましたが、音の出る仕組みは踏襲してます
## 主な変更
- 自分にとって死ぬほど使いづらかったコントロール用のページを廃し、クライアント画面でキーボード入力によって操作を行っています。
- Amazon Dash Buttonの信号を読み取って操作することも可能です。実行される機能の選択はランダムです。
- これまでの主機能だった複数端末間の音声、映像の送受信機能はVIDEO CHATという複数機能のうちのひとつとしてます
- それ以外にはFEEDBACK, SINEWAVE, WHITENOISE, CLICK, RECORD, PLAYBACK, LOOKBACK, LOOPBACKを追加してます。前からあった機能もあるかも。忘れた。
- あとたぶんES6にしてます

# 2016年4月29日の改訂
八広HIGHTIでの矢代諭史とのデュオのための改訂
Socket.ioを介さない内蔵マイクとスピーカーによるフィードバックのモードを追加
[Speak.js]("https://github.com/mattytemple/speak-js")を使用したテキスト読み上げモードの追加も行ったが演奏には使用しなかった

#2016年2月28日の改訂
UjeonggukでのChoi Joonyongとのデュオのための改訂
Chromeのアップデートに伴いGetUserMediaがhttp通信でできなくなったためHTTPS化しました。
ctrl.ejsからの操作でなくclient.ejsの操作でだいたいのことができるようにしています。

# 2015年11月29日の改訂
space dikeでの矢代諭史とのデュオのための改訂
1〜4の出力について音声ファイル以外に画像ファイルもインポート可能にしました。public/filesに入っているものをctrlから指定してインポートします
また、各端末で再生する内容を選択可能にしています

# 2015年10月24日の改訂
札幌LOGでのbikiとのデュオのための改訂
iOS、Androidは受信専用端末として使用可能にしました。
また、マイク入力とそれを蓄積したバッファ、WAVの出力頻度をスライダーで調整できるようにしています。

# 2015年9月28日の改訂
forestlimitでのaenとのデュオのための改訂
ビデオチャット機能を追加しました。
また、一定のBPMで再生できるようになっています。

# 2015年9月10日のライブセット
node.js + socket.io + web audio api + getUserMediaで各端末のマイクで拾った音をサーバ経由で送信し発音しています。
ルートドメインが発音するクライアント、"/ctrl"がマイクでの集音や発音のオフ・オン、サーバからの送信の仕方など制御するクライアントです。
フライングティーポットでの梅原貴久、竹下勇馬とのトリオのための作成
