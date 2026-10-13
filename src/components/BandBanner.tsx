"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./BandBanner.module.css";

// Figma 띠배너 이미지 (552:27578, 791:6107)
const bands = [
  { src: "/images/band.png", alt: "TRENDING NOW 지금 가장 주목받는 아이템", dark: false },
  // 검정 배경 배너: 인디케이터를 밝은 색으로 반전
  { src: "/images/band-2.png", alt: "561 OUTLET 이슈 브랜드를 할인가로 만나보세요", dark: true },
];

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
    <section className={`container ${styles.band}`} aria-roledescription="carousel" aria-label="띠배너">
      {bands.map((b, i) => (
        <a
          key={b.src}
          href="#"
          className={`${styles.img} ${i === index ? styles.current : ""}`}
          aria-hidden={i !== index}
          tabIndex={i === index ? 0 : -1}
        >
          <Image src={b.src} alt={b.alt} fill sizes="1580px" />
        </a>
      ))}

      <button type="button" className={`${styles.roll} ${styles.prev}`} onClick={() => go(-1)} aria-label="이전 배너">
        <Image src="/icons/rolling-left-20.svg" alt="" width={20} height={20} />
      </button>
      <button type="button" className={`${styles.roll} ${styles.next}`} onClick={() => go(1)} aria-label="다음 배너">
        <Image src="/icons/rolling-right-20.svg" alt="" width={20} height={20} />
      </button>

      <div className={`${styles.indicator} ${bands[index].dark ? styles.onDark : ""}`}>
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
