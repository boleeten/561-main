"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { popularKeywords } from "@/data/main";
import styles from "./GnbSearch.module.css";

const STORAGE_KEY = "561:recent-search";
const MAX_RECENT = 10;

function loadRecent(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string").slice(0, MAX_RECENT) : [];
  } catch {
    return [];
  }
}

function saveRecent(list: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // 저장 불가(시크릿 모드 등)여도 화면 동작은 유지
  }
}

export default function GnbSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [lastQuery, setLastQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setRecent(loadRecent());
  }, []);

  const close = (restoreFocus = true) => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  };

  // 열릴 때 입력창 포커스, 바깥 클릭·Esc로 닫기
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const search = (term: string) => {
    const keyword = term.trim();
    if (!keyword) {
      inputRef.current?.focus();
      return;
    }
    const next = [keyword, ...recent.filter((r) => r !== keyword)].slice(0, MAX_RECENT);
    setRecent(next);
    saveRecent(next);
    setLastQuery(keyword);
    setQuery("");
    // 검색 결과 페이지가 아직 없어 레이어만 닫음
    close();
  };

  const removeRecent = (term: string) => {
    const next = recent.filter((r) => r !== term);
    setRecent(next);
    saveRecent(next);
    inputRef.current?.focus();
  };

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="gnb-search-layer"
      >
        <span className={lastQuery ? styles.value : styles.placeholder}>
          {lastQuery || "검색어를 입력해 주세요."}
        </span>
        <span className={styles.triggerIcon}>
          <Image src="/icons/search-24.svg" alt="" width={24} height={24} />
        </span>
      </button>

      {open && (
        <div id="gnb-search-layer" className={styles.layer} role="dialog" aria-modal="false" aria-label="검색">
          <div className={styles.content}>
            <form
              className={styles.field}
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                search(query);
              }}
            >
              <label htmlFor="gnb-search-input" className="sr-only">
                검색어
              </label>
              <input
                ref={inputRef}
                id="gnb-search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="검색어를 입력해 주세요."
                autoComplete="off"
              />
              <button type="submit" className={styles.submit} aria-label="검색">
                <Image src="/icons/search-28.svg" alt="" width={28} height={28} />
              </button>
            </form>

            <div className={styles.keywords}>
              <section className={styles.recent} aria-labelledby="recent-title">
                <h3 id="recent-title" className={styles.title}>
                  최근 검색어
                </h3>
                {recent.length === 0 ? (
                  <p className={styles.empty}>최근 검색어가 없습니다.</p>
                ) : (
                  <ul className={styles.list}>
                    {recent.map((r) => (
                      <li key={r} className={styles.recentItem}>
                        <button type="button" className={styles.keyword} onClick={() => search(r)}>
                          {r}
                        </button>
                        <button
                          type="button"
                          className={styles.remove}
                          onClick={() => removeRecent(r)}
                          aria-label={`${r} 삭제`}
                        >
                          <Image src="/icons/close-16.svg" alt="" width={12} height={12} />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section className={styles.popular} aria-labelledby="popular-title">
                <div className={styles.popularHead}>
                  <h3 id="popular-title" className={styles.title}>
                    인기 검색어
                  </h3>
                  <span className={styles.time}>{popularKeywords.updatedAt}</span>
                </div>
                <ol className={styles.list}>
                  {popularKeywords.items.map((k, i) => (
                    <li key={k}>
                      <button type="button" className={styles.rankItem} onClick={() => search(k)}>
                        <span className={styles.rank}>{i + 1}</span>
                        <span className={styles.keywordText}>{k}</span>
                      </button>
                    </li>
                  ))}
                </ol>
              </section>
            </div>
          </div>

          <div className={styles.footer}>
            <button type="button" className={styles.close} onClick={() => close()} aria-label="검색 닫기">
              <Image src="/icons/close-16.svg" alt="" width={16} height={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
