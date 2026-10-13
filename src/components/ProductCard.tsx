"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/data/main";
import CropImage from "./CropImage";
import styles from "./ProductCard.module.css";

// product-heart-28.svg와 동일한 경로 (찜 활성 상태용)
const HEART_PATH =
  "M21.9156 7.25695C20.0391 5.35879 17.0014 5.35879 15.1249 7.25695L13.9948 8.39992L12.8648 7.25695C10.9882 5.35879 7.95057 5.35879 6.07405 7.25695C4.19754 9.15511 4.19754 12.2371 6.07405 14.1352L9.24651 17.3498L14.0052 22.1667L21.9259 14.1454C23.8025 12.2473 23.8025 9.16526 21.9259 7.26711L21.9156 7.25695Z";

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className={styles.card}>
      <a href="#" className={styles.thumb}>
        <CropImage src={product.image} alt={product.name} crop={product.crop} sizes="(max-width: 1660px) 19vw, 292px" />
      </a>
      <button
        type="button"
        className={styles.heart}
        onClick={() => setLiked((v) => !v)}
        aria-pressed={liked}
        aria-label={`${product.name} 찜하기`}
      >
        {liked ? (
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
            <path d={HEART_PATH} fill="var(--point)" stroke="var(--point)" />
          </svg>
        ) : (
          <Image src="/icons/product-heart-28.svg" alt="" width={28} height={28} />
        )}
      </button>
      <a href="#" className={styles.info}>
        <strong className={styles.brand}>{product.brand}</strong>
        <span className={styles.name}>{product.name}</span>
        <span className={styles.price}>
          <span className={styles.num}>{product.price.toLocaleString("ko-KR")}</span>원
        </span>
      </a>
    </article>
  );
}
