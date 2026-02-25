import Image from "next/image";
import Link from "next/link";
import styles from "./detail.module.css";
import { hunters } from "../hunters";

export default function HunterDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const h = hunters.find((x) => x.id === params.id);

  if (!h) {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>ハンターが見つかりません</h1>
        <Link href="/hunter" className={styles.backLink}>
          ← 一覧へ戻る
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Link href="/hunter" className={styles.backLink}>
        ← 一覧へ戻る
      </Link>

      <h1 className={styles.title}>{h.name}</h1>

      <div className={styles.layout}>
        <div className={styles.imageWrap}>
          {h.image ? (
            <Image src={h.image} alt={h.name} fill className={styles.image} />
          ) : (
            <div className={styles.noImage}>NO IMAGE</div>
          )}
        </div>

        <section className={styles.skills}>
          <h2 className={styles.sectionTitle}>特質</h2>

          <ul className={styles.skillList}>
            {h.skills.map((skill, i) => (
              <li key={i} className={styles.skillItem}>
                <div className={styles.skillName}>{skill.name}</div>
                <p className={styles.skillDesc}>{skill.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
