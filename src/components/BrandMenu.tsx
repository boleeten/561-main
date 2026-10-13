"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { brands } from "@/data/main";
import styles from "./BrandMenu.module.css";

const COLUMNS = 5;
// 5열 고정, 세로 방향으로 채움 (40개 초과 시 열당 행 수 증가)
const rows = Math.max(8, Math.ceil(brands.length / COLUMNS));
const columns = Array.from({ length: COLUMNS }, (_, c) => brands.slice(c * rows, (c + 1) * rows));

/** GNB '브랜드' 버튼 + 전체 폭 브랜드 레이어. 레이어는 가장 가까운 position 조상(.gnb) 기준으로 배치 */
export default function BrandMenu({ buttonClassName }: { buttonClassName?: string }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!layerRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={buttonClassName}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="gnb-brand-layer"
      >
        브랜드
        <Image src={open ? "/icons/arrow-up-12.svg" : "/icons/arrow-down-12.svg"} alt="" width={12} height={12} />
      </button>

      {open && (
        <div ref={layerRef} id="gnb-brand-layer" className={styles.layer} role="region" aria-label="브랜드 목록">
          <div className={`container ${styles.inner}`}>
            <div className={styles.columns}>
              {columns.map((col, i) => (
                <ul key={i} className={styles.column}>
                  {col.map((b) => (
                    <li key={b}>
                      <a href="#" className={styles.brand} onClick={() => setOpen(false)}>
                        {b}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <a href="#" className={styles.all} onClick={() => setOpen(false)}>
              브랜드 전체보기
              <Image src="/icons/arrow-right-12.svg" alt="" width={12} height={12} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
