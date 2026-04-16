import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',      // 静的ファイル(outフォルダ)を生成する設定
  images: {
    unoptimized: true,   // エックスサーバー等で画像を表示するために必須
  },
}

export default nextConfig