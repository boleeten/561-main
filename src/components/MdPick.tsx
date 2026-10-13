"use client";

import Image from "next/image";
import { useState } from "react";
import { mdPickBrands, mdPickProducts } from "@/data/main";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import styles from "./MdPick.module.css";

const TOTAL_PAGES = 4;

export default function MdPick() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(0);

  // 더미 데이터: 탭/페이지마다 순서만 바꿔서 표시
  const shift = (tab * 3 + page * 5) % mdPickProducts.length;
  const items = mdPickProducts.map((_, i) => mdPickProducts[(i + shift) % mdPickProducts.length]);

  const selectTab = (i: number) => {
    setTab(i);
    setPage(0);
  };

  return (
    <section className={`container ${styles.section}`} aria-labelledby="md-pick-title">
      <SectionTitle id="md-pick-title">MD’s PICK</SectionTitle>

      <div role="tablist" aria-label="브랜드" className={styles.tabs}>
        {mdPickBrands.map((b, i) => (
          <button
            key={b}
            type="button"
            role="tab"
            id={`md-tab-${i}`}
            aria-selected={tab === i}
            aria-controls="md-panel"
            className={`${styles.tab} ${tab === i ? styles.active : ""}`}
            onClick={() => selectTab(i)}
          >
            <span>{b}</span>
          </button>
        ))}
      </div>

      <div role="tabpanel" id="md-panel" aria-labelledby={`md-tab-${tab}`} className={styles.panel}>
        <ul className={styles.grid}>
          {items.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>

        <div className={styles.pagination}>
          <button
            type="button"
            className={styles.pageBtn}
            onClick={() => setPage((p) => (p - 1 + TOTAL_PAGES) % TOTAL_PAGES)}
            aria-label="이전 페이지"
          >
            <Image src="/icons/arrow-left-20.svg" alt="" width={20} height={20} />
          </button>
          <p className={styles.count} aria-live="polite">
            <span>{page + 1}</span>
            <span>/</span>
            <span>{TOTAL_PAGES}</span>
          </p>
          <button
            type="button"
            className={styles.pageBtn}
            onClick={() => setPage((p) => (p + 1) % TOTAL_PAGES)}
            aria-label="다음 페이지"
          >
            <Image src="/icons/arrow-right-20.svg" alt="" width={20} height={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
