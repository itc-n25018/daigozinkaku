"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./survivor.module.css";
import { survivors as allSurvivors } from "./survivors";

export default function SurvivorPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allSurvivors;

    return allSurvivors.filter((s) => {
      const name = (s.name ?? "").toLowerCase();
      const id = (s.id ?? "").toLowerCase();
      return name.includes(q) || id.includes(q);
    });
  }, [query]);

  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backButton}>
        ← トップに戻る
      </Link>

      <h1 className={styles.title}>サバイバー性能紹介</h1>

      <div className={styles.searchRow}>
        <input
          className={styles.searchInput}
          type="text"
          value={query}
          placeholder="サバイバーを検索（名前 / id）"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <p className={styles.count}>
        {filtered.length} / {allSurvivors.length} 件
      </p>

      <div className={styles.grid}>
        {filtered.map((s) => (
          <Link
            key={s.id}
            href={`/survivor/${s.id}`}
            className={styles.cardLink}
          >
            <div className={styles.card}>
              <div className={styles.imageArea}>
                {s.image ? (
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.noImage}>NO IMAGE</div>
                )}
              </div>
              <h2 className={styles.name}>{s.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
