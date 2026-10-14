"use client";

import Image from "next/image";
import { useState } from "react";
import { newsItems, type NewsItem, type NewsProduct } from "@/data/main";
import SectionTitle from "./SectionTitle";
import styles from "./News.module.css";

// product-heart-28.svg와 동일한 경로 (찜 활성 상태용)
const HEART_PATH =
  "M21.9156 7.25695C20.0391 5.35879 17.0014 5.35879 15.1249 7.25695L13.9948 8.39992L12.8648 7.25695C10.9882 5.35879 7.95057 5.35879 6.07405 7.25695C4.19754 9.15511 4.19754 12.2371 6.07405 14.1352L9.24651 17.3498L14.0052 22.1667L21.9259 14.1454C23.8025 12.2473 23.8025 9.16526 21.9259 7.26711L21.9156 7.25695Z";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "2024-01-18" → "Jan.18.2024"
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]}.${d}.${y}`;
}

function NewsProductRow({ product }: { product: NewsProduct }) {
  const { originalPrice, price } = product;
  const rate = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <a href="#" className={styles.product}>
      <span className={styles.productThumb}>
        <Image src={product.image} alt={product.name} fill sizes="80px" style={{ objectFit: "cover" }} />
      </span>
      <span className={styles.productInfo}>
        <strong className={styles.productBrand}>{product.brand}</strong>
        <span className={styles.productName}>{product.name}</span>
        <span className={styles.productPrice}>
          {rate > 0 && <em className={styles.rate}>{rate}%</em>}
          <span>{price.toLocaleString("ko-KR")}원</span>
          {originalPrice && <del className={styles.original}>{originalPrice.toLocaleString("ko-KR")}</del>}
        </span>
      </span>
    </a>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  const [liked, setLiked] = useState(false);
  const likes = item.likes + (liked ? 1 : 0);

  return (
    <article className={styles.card}>
      <a href="#" className={styles.hero}>
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 1660px) 31vw, 480px" style={{ objectFit: "cover" }} />
      </a>
      <button
        type="button"
        className={styles.heart}
        onClick={() => setLiked((v) => !v)}
        aria-pressed={liked}
        aria-label={`${item.title} 좋아요`}
      >
        {liked ? (
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
            <path d={HEART_PATH} fill="var(--point)" stroke="var(--point)" />
          </svg>
        ) : (
          <Image src="/icons/product-heart-28.svg" alt="" width={28} height={28} />
        )}
      </button>

      <a href="#" className={styles.head}>
        {item.brand && <span className={styles.brand}>{item.brand}</span>}
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.desc}>{item.desc}</p>
      </a>

      <ul className={styles.products}>
        {item.products.map((p) => (
          <li key={p.id}>
            <NewsProductRow product={p} />
          </li>
        ))}
      </ul>

      <footer className={styles.meta}>
        <time dateTime={item.date}>{formatDate(item.date)}</time>
        <span className={styles.likes} aria-label={`좋아요 ${likes}개`}>
          <svg width="12" height="12" viewBox="0 0 28 28" aria-hidden>
            <path
              d={HEART_PATH}
              fill={liked ? "var(--point)" : "none"}
              stroke={liked ? "var(--point)" : "currentColor"}
              strokeWidth="2.4"
            />
          </svg>
          {likes}
        </span>
      </footer>
    </article>
  );
}

export default function News() {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="news-title">
      <SectionTitle id="news-title">신상소식</SectionTitle>
      <ul className={styles.list}>
        {newsItems.map((item) => (
          <li key={item.id}>
            <NewsCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
