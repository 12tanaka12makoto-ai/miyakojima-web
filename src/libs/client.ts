import { createClient } from 'microcms-js-sdk';

// 環境変数を使わず、直接あなたの情報を書き込みます
export const client = createClient({
  serviceDomain: 'aircon', // 例: 'my-project' ( .microcms.io は不要)
  apiKey: 'kqsDNnBlKKo2Gs4AOx9BqqntO9AqVrl5SDlN',           // 新しく発行したAPIキーをここに直接貼る
});