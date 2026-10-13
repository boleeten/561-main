"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { subBanners } from "@/data/main";
import CropImage from "./CropImage";
import styles from "./SubBanner.module.css";

const STEP = 336 + 24; // 카드 폭 + gap

export default function SubBanner() {
  const listRef = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: number) => listRef.current?.scrollBy({ left: dir * STEP, behavior: "smooth" });

  return (
    <section className={`container ${styles.section}`} aria-label="기획전">
      <div className={styles.nav}>
        <button type="button" className={styles.btn} onClick={() => scroll(-1)} disabled={edge.start} aria-label="이전">
          <Image src="/icons/arrow-left-16.svg" alt="" width={16} height={16} />
        </button>
        <button type="button" className={styles.btn} onClick={() => scroll(1)} disabled={edge.end} aria-label="다음">
          <Image src="/icons/arrow-right-16.svg" alt="" width={16} height={16} />
        </button>
      </div>

      <ul ref={listRef} className={styles.list} onScroll={update}>
        {subBanners.map((b) => (
          <li key={b.id} className={styles.card}>
            <a href="#">
              <span className={styles.img}>
                {b.images.map((img) => (
                  <CropImage key={img.src} src={img.src} alt="" crop={img.crop} sizes="336px" />
                ))}
              </span>
              <span className={styles.text}>
                <span className={styles.head}>
                  <strong className={styles.title}>{b.title}</strong>
                  <span className={styles.body}>{b.subtitle}</span>
                </span>
                <span className={styles.brands}>{b.brands}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
