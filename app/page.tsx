import React from 'react';
import { client } from '../src/libs/client'; 

type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

export default async function HomePage() {
  let posts: Blog[] = [];
  try {
    const data = await client.get({ 
      endpoint: 'blog', 
      queries: { limit: 10 } 
    });
    posts = data.contents;
  } catch (error) {
    console.error('microCMSの取得に失敗しました。', error);
  }

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      {/* HERO SECTION - インラインスタイルで色を確実に固定 */}
      <section 
        style={{ backgroundColor: '#0ABAB5' }} 
        className="relative min-h-[60vh] flex items-center justify-center text-white px-4 py-20"
      >
        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-block px-4 py-1 bg-white/20 rounded-full mb-6 text-sm font-bold border border-white/30">
            2026年最新：都島区エリア解析
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
            都島区の空気を変える。<br/>
            地域No.1の品質を。
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            MIYAKOJIMA AI COREが150社以上のデータを徹底解析。<br />
            あなたに最適なプロのクリーニングを一瞬で見つけ出します。
          </p>
        </div>
      </section>

      {/* TRUST SECTION - 標準的な角丸(rounded-3xl)に変更 */}
      <section className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "AI適正価格診断", d: "都島区のリアルな相場から適正価格を算出。" },
            { t: "地域密着No.1", desc: "京橋・野江エリアの優良業者のみを厳選。" },
            { t: "節電予測", d: "清掃後の電気代削減額をAIがシミュレーション。" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{item.t}</h3>
              <p className="text-gray-500 text-sm">{item.d || item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">最新のエアコン解析レポート</h2>
          <div className="w-16 h-1 bg-[#0ABAB5] mx-auto mt-4"></div>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-3xl border border-gray-100 shadow-md p-8 hover:shadow-lg transition-shadow">
                <div className="text-[#0ABAB5] text-xs font-bold mb-2">
                  {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{post.title}</h3>
                <div 
                  className="text-gray-600 text-sm line-clamp-3 mb-6"
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
                <div className="text-[#0ABAB5] font-bold text-sm">Read More →</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">記事を読み込み中です...</p>
        )}
      </section>

      <footer className="bg-gray-900 text-gray-500 py-12 text-center text-sm">
        <p>&copy; 2026 MIYAKOJIMA AI CORE</p>
      </footer>
    </div>
  );
}