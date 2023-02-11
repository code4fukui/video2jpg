# video2jpg

フォトグラメトリ「[フォトグラメソッド](https://github.com/code4fukui/photogra-method)」用に、カレントディレクトリの動画ファイル(mov/mp4)をすべて連番静止画(2コマ/秒)変換するプログラム

## usage

```sh
deno run -A https://code4fukui.github.io/video2jpg/video2jpg.js
```

fps = 4 (default 2)
```sh
deno run -A https://code4fukui.github.io/video2jpg/video2jpg.js 4
```

## install

install [Deno](https://deno.land/)

```sh
brew install ffmpeg
```

```sh
deno install -A https://code4fukui.github.io/video2jpg/video2jpg.js
```

or on local
```sh
deno install -A video2jpg.js
```

## dependencies

[ffmpeg](https://ffmpeg.org/) (sample)
```sh
ffmpeg -r 2 -qmin 1 -q 1 -f image2 s2-%06d.jpg -i IMG_0541.MOV
```
