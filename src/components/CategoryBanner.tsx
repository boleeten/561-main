import Image from "next/image";
import { categoryBanners } from "@/data/main";
import styles from "./CategoryBanner.module.css";

export default function CategoryBanner() {
  return (
    <section className="container" aria-label="카테고리">
      <ul className={styles.grid}>
        {categoryBanners.map((c) => (
          <li key={c.id}>
            <a href="#" className={styles.card}>
              <Image src={c.image} alt="" fill sizes="(max-width: 1660px) 25vw, 374px" />
              <span className={styles.dim} aria-hidden />
              <span className={styles.label}>{c.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
