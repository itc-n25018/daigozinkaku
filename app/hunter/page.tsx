"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./hunter.module.css";
import { hunters } from "./hunters";

export default function HunterPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return hunters;

    // ✅ 名前のみで検索
    return hunters.filter((h) => (h.name ?? "").toLowerCase().includes(q));
  }, [query]);

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backButton}>
        ← トップに戻る
      </Link>

      <h1 className={styles.title}>ハンター性能紹介</h1>

      {/* 🔎 名前検索のみ */}
      <div className={styles.searchWrap}>
        <input
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ハンター名で検索（例：リッパー）"
        />
        {query && (
          <button className={styles.clearButton} onClick={() => setQuery("")}>
            クリア
          </button>
        )}
      </div>

      <p className={styles.count}>
        {filtered.length} / {hunters.length} 件
      </p>

      <div className={styles.grid}>
        {filtered.map((h) => (
          <Link key={h.id} href={`/hunter/${h.id}`} className={styles.card}>
            {h.image ? (
              <div className={styles.imageWrap}>
                <Image
                  src={h.image}
                  alt={h.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 240px"
                  className={styles.image}
                />
              </div>
            ) : (
              <div className={styles.imagePlaceholder}>No Image</div>
            )}

            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{h.name}</h2>

              {/* id表示 完全削除 */}
              <p className={styles.meta}>
                外在特質: {h.skills?.length ?? 0} / 存在感:{" "}
                {h.presence?.length ?? 0}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
