# 動画ファイルの配置場所

このフォルダに動画ファイルを配置してください。

## 使用方法

```astro
<video autoplay muted loop playsinline>
  <source src="/videos/your-video.mp4" type="video/mp4" />
  <source src="/videos/your-video.webm" type="video/webm" />
</video>
```

## ファイル形式

- **MP4**: 最も互換性が高い（推奨）
- **WebM**: ファイルサイズが小さいが、Safariの対応が限定的

## ファイルサイズの注意

動画ファイルは大きくなりがちです。以下の点に注意：

1. **圧縮**: 可能な限り圧縮してください
2. **解像度**: 必要以上に高解像度にしない
3. **長さ**: 必要最小限の長さに

## 大きなファイルの場合

動画ファイルが非常に大きい場合（10MB以上）は、以下の選択肢も検討：

- **YouTube/Vimeo**: 外部ホスティング
- **Cloudflare Stream**: CDN経由の動画配信
- **Vercel Blob Storage**: Vercelのストレージサービス
