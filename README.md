# 🎭 Identity V Fan Web App

第五人格（Identity V）のサバイバー・ハンター性能をまとめたファンサイトです。  
Next.js を使用して制作しています。

---

## デモ

https://daigozinkaku.vercel.app/

---

## 主な機能

- サバイバー検索機能
- ハンター性能紹介
- 外在特質 / 存在感ごとのスキル表示
- 画像表示対応
- ダークUIデザイン

---

## 🛠 使用技術

- Next.js (App Router)
- TypeScript
- CSS Modules
- Vercel（デプロイ））

---

## ディレクトリ構成

## ディレクトリ構成

```
app/
├─ page.tsx            # トップページ
├─ survivor/           # サバイバー機能
│  ├─ page.tsx         # 一覧
│  ├─ survivors.ts     # データ管理
│  └─ [id]/page.tsx    # 詳細ページ
│
├─ hunter/             # ハンター機能
│  ├─ page.tsx         # 一覧
│  ├─ hunters.ts       # データ管理
│  └─ [id]/page.tsx    # 詳細ページ
│
public/
├─ survivors/          # サバイバー画像
└─ hunters/            # ハンター画像
```

## ローカル起動方法

```bash
npm install
npm run dev
```
