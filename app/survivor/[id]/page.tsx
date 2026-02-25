import Image from "next/image";
import Link from "next/link";
import styles from "./detail.module.css";
import { survivors } from "../survivors";
import type { Highlight, Trait, Survivor } from "../survivors";

function renderWithHighlights(text: string, highlights?: Highlight[]) {
  if (!highlights || highlights.length === 0) return text;

  let nodes: (string | JSX.Element)[] = [text];

  for (const h of highlights) {
    const next: (string | JSX.Element)[] = [];
    for (const n of nodes) {
      if (typeof n !== "string") {
        next.push(n);
        continue;
      }

      const parts = n.split(h.text);
      for (let i = 0; i < parts.length; i++) {
        next.push(parts[i]);
        if (i !== parts.length - 1) {
          next.push(
            <span
              key={`${h.text}-${i}`}
              style={{ color: h.color, fontWeight: 800 }}
            >
              {h.text}
            </span>,
          );
        }
      }
    }
    nodes = next;
  }

  return nodes;
}

export default function SurvivorDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const survivor = survivors.find((s) => s.id === params.id) ?? null;

  if (!survivor) {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>サバイバーが見つかりません</h1>
        <Link href="/survivor" className={styles.backLink}>
          ← 一覧へ戻る
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Link href="/survivor" className={styles.backLink}>
        ← 一覧へ戻る
      </Link>

      <h1 className={styles.title}>{survivor.name}</h1>

      <div className={styles.layout}>
        <div className={styles.imageWrap}>
          {survivor.image ? (
            <Image
              src={survivor.image}
              alt={survivor.name}
              fill
              className={styles.image}
            />
          ) : (
            <div className={styles.noImage}>NO IMAGE</div>
          )}
        </div>

        <section className={styles.skills}>
          <h2 className={styles.sectionTitle}>外在特質</h2>

          <ul className={styles.skillList}>
            {survivor.traits.map((trait, i) => (
              <li key={`${trait.name}-${i}`} className={styles.skillItem}>
                <div className={styles.skillName}>{trait.name}</div>

                <p className={styles.skillDesc}>
                  {renderWithHighlights(trait.description, trait.highlight)}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
