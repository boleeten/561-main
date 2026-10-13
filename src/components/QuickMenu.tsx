import Image from "next/image";
import { quickMenus } from "@/data/main";
import CropImage from "./CropImage";
import styles from "./QuickMenu.module.css";

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
  return (
    <nav className={`container ${styles.wrap}`} aria-label="퀵메뉴">
      <ul className={styles.list}>
        {quickMenus.map((m) => (
          <li key={m.id}>
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
        ))}
      </ul>
      <a href="#" className={styles.more} aria-label="카테고리 전체보기">
        <Image src="/icons/arrow-right-32.svg" alt="" width={32} height={32} />
      </a>
    </nav>
  );
}
