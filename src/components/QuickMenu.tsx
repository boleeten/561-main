"use client";

import Image from "next/image";
import { useState } from "react";
import { quickMenus } from "@/data/main";
import CropImage from "./CropImage";
import styles from "./QuickMenu.module.css";

const PER_PAGE = 10;
const pageCount = Math.ceil(quickMenus.length / PER_PAGE);

function TimeSaleBadge() {
  return (
    <span className={`${styles.thumb} ${styles.timesale}`}>
      <Image className={styles.ring} src="/icons/timesale-ellipse.svg" alt="" width={127.778} height={127.778} />
      <Image className={`${styles.tick} ${styles.tickTop}`} src="/icons/timesale-tick.svg" alt="" width={2.55556} height={12.7778} />
      <Image className={`${styles.tick} ${styles.tickLeft}`} src="/icons/timesale-tick.svg" alt="" width={2.55556} height={12.7778} />
      <Image className={`${styles.tick} ${styles.tickRight}`} src="/icons/timesale-tick.svg" alt="" width={2.55556} height={12.7778} />
      <span className={styles.badgeText}>
        TIME
        <br />
        SALE
      </span>
    </span>
  );
}

function OutletBadge() {
  return (
    <span className={`${styles.thumb} ${styles.outlet}`}>
      <span className={styles.badgeText}>
        70%
        <br />
        OFF
      </span>
    </span>
  );
}

export default function QuickMenu() {
  const [page, setPage] = useState(0);
  const isFirst = page === 0;
  const isLast = page === pageCount - 1;

  return (
    <nav className={`container ${styles.wrap}`} aria-label="퀵메뉴">
      <div className={styles.viewport}>
        <ul className={styles.list} style={{ transform: `translateX(calc(${-page} * (100% + 30px)))` }}>
          {quickMenus.map((m, i) => {
            const hidden = Math.floor(i / PER_PAGE) !== page;
            return (
              <li key={m.id} inert={hidden} aria-hidden={hidden}>
                <a href="#" className={styles.item}>
                  {m.type === "timesale" && <TimeSaleBadge />}
                  {m.type === "outlet" && <OutletBadge />}
                  {m.type === "image" && (
                    <span className={styles.thumb}>
                      <CropImage src={m.image} alt="" crop={m.crop} sizes="92px" />
                    </span>
                  )}
                  <span className={styles.label}>
                    {m.label.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      {!isFirst && (
        <button
          type="button"
          className={`${styles.roll} ${styles.prev}`}
          onClick={() => setPage((p) => p - 1)}
          aria-label="이전 퀵메뉴"
        >
          <Image src="/icons/arrow-right-32.svg" alt="" width={32} height={32} />
        </button>
      )}
      {!isLast && (
        <button
          type="button"
          className={`${styles.roll} ${styles.next}`}
          onClick={() => setPage((p) => p + 1)}
          aria-label="다음 퀵메뉴"
        >
          <Image src="/icons/arrow-right-32.svg" alt="" width={32} height={32} />
        </button>
      )}
      <p className="sr-only" aria-live="polite">
        {page + 1} / {pageCount} 페이지
      </p>
    </nav>
  );
}
