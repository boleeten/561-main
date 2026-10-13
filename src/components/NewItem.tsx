"use client";

import Image from "next/image";
import { useState } from "react";
import { newItems } from "@/data/main";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import styles from "./NewItem.module.css";

export default function NewItem() {
  const [offset, setOffset] = useState(0);
  const n = newItems.length;
  // 한 칸씩 순환 롤링
  const visible = newItems.map((_, i) => newItems[(i + offset) % n]);
  const go = (d: number) => setOffset((o) => (o + d + n) % n);

  return (
    <section className={`container ${styles.section}`} aria-labelledby="new-item-title">
      <SectionTitle id="new-item-title">NEW ITEM</SectionTitle>
      <div className={styles.listWrap}>
        <ul className={styles.list}>
          {visible.map((p) => (
            <li key={p.id}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
        <button type="button" className={`${styles.roll} ${styles.prev}`} onClick={() => go(-1)} aria-label="이전 상품">
          <Image src="/icons/rolling-left-20.svg" alt="" width={20} height={20} />
        </button>
        <button type="button" className={`${styles.roll} ${styles.next}`} onClick={() => go(1)} aria-label="다음 상품">
          <Image src="/icons/rolling-right-20.svg" alt="" width={20} height={20} />
        </button>
      </div>
    </section>
  );
}
