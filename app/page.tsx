"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Identity V Fan</h1>

      <div className={styles.card}>
        <p>エウリュディケ荘園へようこそ。</p>

        <div className={styles.buttonGroup}>
          <button
            className={styles.button}
            onClick={() => router.push("/survivor")}
          >
            サバイバー性能紹介
          </button>

          <button
            className={styles.button}
            onClick={() => router.push("/hunter")}
          >
            ハンター性能紹介
          </button>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}
      >
        <a
          href="https://www.identityv.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
          style={{ width: "260px" }}
        >
          <div className={styles.card}>
            <div className={styles.imageArea}>
              <div className={styles.noImage}>公式サイトへ</div>
            </div>
            <h2 className={styles.name}>
              第五人格 公式<br></br>ホームページ
            </h2>
          </div>
        </a>
      </div>
    </main>
  );
}
