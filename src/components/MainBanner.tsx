"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { mainBanners } from "@/data/main";
import CropImage from "./CropImage";
import styles from "./MainBanner.module.css";

const AUTOPLAY_MS = 5000;
const n = mainBanners.length;
// 무한 루프를 위해 3벌 렌더링, 가운데 벌에서 시작 (Figma: 2번째 배너가 첫 번째 칸)
const slides = [...mainBanners, ...mainBanners, ...mainBanners];
// CSS transition 시간과 동일
const TRANSITION_MS = 600;
// 가운데 벌 범위 [n, 2n)로 정규화
const normalize = (p: number) => n + (((p - n) % n) + n) % n;

export default function MainBanner() {
  const [pos, setPos] = useState(n + 1);
  const [animate, setAnimate] = useState(true);
  const [playing, setPlaying] = useState(true);

  const go = useCallback((delta: number) => {
    setAnimate(true);
    // 연속 클릭으로 범위를 벗어나 있으면 먼저 가운데 벌 기준으로 이동
    setPos((p) => (p >= 2 * n || p < n ? normalize(p) : p) + delta);
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [playing, go, pos]);

  // 경계를 넘으면 전환이 끝난 뒤 애니메이션 없이 가운데 벌로 되돌림
  useEffect(() => {
    if (pos >= n && pos < 2 * n) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setPos(normalize);
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [pos]);

  useEffect(() => {
    if (animate) return;
    // 위치 점프가 먼저 그려진 뒤 transition을 다시 켜기 위해 2프레임 대기
    let id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => setAnimate(true));
    });
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // 시작 상태(pos = n + 1)를 1번째로 표시
  const current = (((pos - 1) % n) + n) % n;

  return (
    <section className={styles.section} aria-roledescription="carousel" aria-label="메인 배너">
      <div className={`container ${styles.viewport}`}>
        <ul
          className={styles.track}
          style={{
            transform: `translateX(calc(${-pos} * 100% / 3))`,
            transition: animate ? undefined : "none",
          }}
        >
          {slides.map((b, i) => {
            const visible = i >= pos && i < pos + 3;
            return (
              <li key={`${b.id}-${i}`} className={styles.slide} aria-hidden={!visible}>
                <a href="#" tabIndex={visible ? 0 : -1} className={styles.card}>
                  <CropImage
                    src={b.image}
                    alt=""
                    crop={b.crop}
                    sizes="(max-width: 1660px) 34vw, 527px"
                    priority={i >= n && i < 2 * n}
                    objectPosition="bottom"
                  />
                  <span className={styles.dim} aria-hidden />
                  <span className={styles.text}>
                    <strong className={styles.title}>
                      {b.title.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </strong>
                    <span className={styles.desc}>{b.desc}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`container ${styles.controls}`}>
        <div className={styles.progress} aria-hidden>
          <span
            className={styles.bar}
            style={{ width: `${100 / n}%`, transform: `translateX(${current * 100}%)` }}
          />
        </div>
        <p className="sr-only" aria-live="polite">
          {current + 1} / {n}
        </p>
        <div className={styles.buttons}>
          <button type="button" className={styles.ctrl} onClick={() => go(-1)} aria-label="이전 배너">
            <Image src="/icons/arrow-left-20.svg" alt="" width={20} height={20} />
          </button>
          <span className={styles.sep} aria-hidden />
          <button type="button" className={styles.ctrl} onClick={() => go(1)} aria-label="다음 배너">
            <Image src="/icons/arrow-right-20.svg" alt="" width={20} height={20} />
          </button>
          <button
            type="button"
            className={styles.ctrl}
            onClick={() => setPlaying((v) => !v)}
            aria-label={playing ? "자동재생 정지" : "자동재생 시작"}
          >
            {playing ? (
              <Image src="/icons/pause-20.svg" alt="" width={20} height={20} />
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M6.5 4.5L15 10L6.5 15.5V4.5Z" stroke="#191919" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
