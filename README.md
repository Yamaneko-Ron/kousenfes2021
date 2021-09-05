# 高専祭Webアプリリポジトリ
[![GitHub issues](https://img.shields.io/github/issues/KikuchiTomo/kousenfes2021)](https://github.com/KikuchiTomo/kousenfes2021/issues)

## 概要
2021年度の産技高専の高専祭Webアプリリポジトリ．

### 規約
#### コメント
YARDを使用する。Sinatra用のWebアプリケーションファイルは基本的に機能ごとに`Class`を作成する 。
クラスのコメントは以下のように記述すること  
```ruby
#
# クラスの概要説明
# @author 作成者
#
```
名前の形式については、フルネーム日本語であること  
またエンドポイント・APIレベルでのコメントは可能用に入力値と出力値を記載する。例えば、erbファイルに渡すべき変数については、出力値として扱い、返される画面については、
APIの概要に記載すること。
```ruby
#
# API概要説明
# API詳細説明
# @param [型] 説明
# @return [型] 説明
#
```
メソッド内レベルのコメントは、基本的にその命令文の直前に記入すること。  
```ruby
# UserIDでユーザ情報をDBから取得
User.getInfo(user_id)
```
#### コーディング
##### 文法
コーディング規約については原則的にshugoを参照すること。[リンク](https://shugo.net/ruby-codeconv/codeconv.html)

##### 命名
命名規則は以下の通り
- グローバル変数 : `name_`のように末尾に`_`をつける
- メソッド : `getUserInfoFromDB`のように動詞+名詞+取得元など、冗長にすること。また、先頭小文字、それいこうの単語の先頭は大文字とする
- 変数 : `user_info`のように単語動詞は`_`で結合すること

## Git Pushの際のルール 
以下の記述されていないものに関しては`.gitignore`に記載済み

### バイナリファイル 
Git LFSを使用する。導入方法はサイトを参照すること。[リンク](https://git-lfs.github.com/)

### ディレクトリ
必須なディレクトリでも空の場合はcommitせずに、`Makefile`を使用し`make prepare`で生成すること。

## 使用方法
### サーバの起動
`make start`
### 停止
`make stop`
### Webサーバのみの再読み込み
`make reload`
### Webアプリサーバの再起動
`make hup`
### 必要パッケージの準備
`make prepare`

