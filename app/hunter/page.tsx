import Link from "next/link";
import Image from "next/image";
import styles from "./hunter.module.css";
import { hunters } from "./hunters";

export default function HunterPage() {
  return (
    <main className={styles.main}>
      <Link href="/" className={styles.backLink}>
        ← TOPへ戻る
      </Link>

      <h1 className={styles.title}>ハンター性能紹介</h1>

      <div className={styles.grid}>
        {hunters.map((h) => (
          <Link key={h.id} href={`/hunter/${h.id}`} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.imageArea}>
                {h.image ? (
                  <Image
                    src={h.image}
                    alt={h.name}
                    fill
                    sizes="240px"
                    className={styles.image}
                    priority={false}
                  />
                ) : null}
              </div>

              <h2 className={styles.name}>{h.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
