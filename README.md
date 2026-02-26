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
.
├─ app/
│  ├─ api/
│  ├─ hunter/
│  │  ├─ [id]/
│  │  ├─ hunter.module.css
│  │  ├─ hunters.ts
│  │  └─ page.tsx
│  ├─ survivor/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ lib/
│  └─ microcms.ts
├─ public/
│     ├─ hunter/...
│     ├─ survivor/...
├─ .env.local
├─ .eslintrc.json
├─ .gitignore
├─ next-env.d.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ README2.md
└─ tsconfig.json
```

## ローカル起動方法

```bash
npm install
npm run dev
```
