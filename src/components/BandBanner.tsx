"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./BandBanner.module.css";

// Figma에는 띠배너 이미지가 1장만 있어 동일 이미지로 3장 구성 (인디케이터 3개 기준)
const bands = ["/images/band.png", "/images/band.png", "/images/band.png"];

export default function BandBanner() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const go = (d: number) => setIndex((i) => (i + d + bands.length) % bands.length);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % bands.length), 4000);
    return () => clearInterval(t);
  }, [playing, index]);

  return (
    <section className={`container ${styles.band}`} aria-roledescription="carousel" aria-label="TRENDING NOW">
      <a href="#" className={styles.img}>
        <Image src={bands[index]} alt="TRENDING NOW 지금 핫한 브랜드 아이템" fill sizes="1580px" />
      </a>

      <button type="button" className={`${styles.roll} ${styles.prev}`} onClick={() => go(-1)} aria-label="이전 배너">
        <Image src="/icons/rolling-left-20.svg" alt="" width={20} height={20} />
      </button>
      <button type="button" className={`${styles.roll} ${styles.next}`} onClick={() => go(1)} aria-label="다음 배너">
        <Image src="/icons/rolling-right-20.svg" alt="" width={20} height={20} />
      </button>

      <div className={styles.indicator}>
        <ol className={styles.dots}>
          {bands.map((_, i) => (
            <li key={i}>
              <button
                type="button"
                className={i === index ? styles.active : undefined}
                onClick={() => setIndex(i)}
                aria-label={`${i + 1}번째 배너`}
                aria-current={i === index}
              />
            </li>
          ))}
        </ol>
        <button
          type="button"
          className={styles.pause}
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "자동재생 정지" : "자동재생 시작"}
        >
          {playing ? (
            <Image src="/icons/pause-16.svg" alt="" width={16} height={16} />
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M5 3.5L12.5 8L5 12.5V3.5Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
