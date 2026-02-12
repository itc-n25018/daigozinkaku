"use client"; // クライアントサイドでの動き（クリックなど）を有効にします

import { useState } from "react";

// キャラクターデータの型定義
type Skill = {
  name: string;
  description: string;
};

type Character = {
  name: string;
  skills: Skill[];
};

export default function Home() {
  // 画面の状態管理: 'home' | 'survivor' | 'hunter'
  const [view, setView] = useState<"home" | "survivor" | "hunter">("home");

  // サンプルデータ（ここにどんどん追加できます）
  const survivors: Character[] = [
    {
      name: "幸運児",
      skills: [
        {
          name: "幸運児",
          description: "箱を開ける前に中身を願うことができる。",
        },
      ],
    },

    {
      name: "医師",
      skills: [
        {
          name: "薬剤精通",
          description: "自己治療の速度が上昇し、負傷を何度も治療できる。",
        },
      ],
    },

    {
      name: "弁護士 (おすすめサバイバー)",
      skills: [
        { name: "辛抱", description: "地図の耐久値が100%上昇する。" },
        { name: "無情な心", description: "恐怖の一撃が発生しない。" },
      ],
    },
  ];

  const hunters: Character[] = [
    {
      name: "復讐者",
      skills: [
        {
          name: "パペット",
          description: "パペットの出したところに移動できる。",
        },
      ],
    },

    {
      name: "道化師",
      skills: [
        {
          name: "ロケット",
          description: "ダッシュ。",
        },
      ],
    },
  ];

  // キャラクターリストを表示するコンポーネント
  const CharacterList = (characters: Character[], title: string) => (
    <div style={{ width: "90%", maxWidth: "600px" }}>
      <h2 style={{ borderBottom: "2px solid #d4af37", paddingBottom: "10px" }}>
        {title}
      </h2>
      <div style={{ marginTop: "20px" }}>
        {characters.map((char, index) => (
          <div
            key={index}
            style={{
              marginBottom: "20px",
              padding: "15px",
              backgroundColor: "#26221c",
              borderRadius: "5px",
              borderLeft: "4px solid #d4af37",
            }}
          >
            <h3 style={{ margin: "0 0 5px 0" }}>{char.name}</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#b8962d",
                fontWeight: "bold",
              }}
            >
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={() => setView("home")}
        style={{
          marginTop: "20px",
          color: "#d4af37",
          background: "none",
          border: "1px solid #d4af37",
          padding: "5px 15px",
          cursor: "pointer",
        }}
      >
        戻る
      </button>
    </div>
  );

  return (
    <main
      style={{
        backgroundColor: "#1a1a1a",
        color: "#d4af37",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "serif",
        padding: "20px",
      }}
    >
      {/* --- ホーム画面 --- */}
      {view === "home" && (
        <>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
            Identity V Fan
          </h1>
          <div
            style={{
              border: "2px solid #d4af37",
              padding: "2rem",
              borderRadius: "10px",
              backgroundColor: "#26221c",
              textAlign: "center",
            }}
          >
            <p>エウリュディケ荘園へようこそ。</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              <button onClick={() => setView("survivor")} style={buttonStyle}>
                サバイバーの日記
              </button>
              <button onClick={() => setView("hunter")} style={buttonStyle}>
                ハンターの日記
              </button>
            </div>
          </div>
        </>
      )}

      {/* --- リスト画面 --- */}
      {view === "survivor" && CharacterList(survivors, "サバイバー")}
      {view === "hunter" && CharacterList(hunters, "ハンター名簿")}
    </main>
  );
}

// 共通ボタンスタイル
const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#d4af37",
  color: "#1a1a1a",
  border: "none",
  cursor: "pointer",
  fontWeight: "bold" as const,
};
