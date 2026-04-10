import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Astro v6からの新しい武器

const yatai = defineCollection({
  // 【新ルール】loader を使ってデータの場所を指定します
  loader: glob({ 
    pattern: '**/[^_]*.md', 
    base: "src/content/yatai"
  }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    profit_tip: z.string(),
    description: z.string(),
  }),
});

// コレクションをエクスポート
export const collections = { yatai };