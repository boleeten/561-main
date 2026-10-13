import Image from "next/image";
import Link from "next/link";
import BrandMenu from "./BrandMenu";
import GnbSearch from "./GnbSearch";
import { gnbCategories, gnbMenus, gnbUtils } from "@/data/main";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.promo}>NEW MEMBER OFFER 신규회원 20% 할인쿠폰 혜택</div>

      <div className={styles.gnb}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.top}>
            <div className={styles.left}>
              <Link href="/" className={styles.logo} aria-label="561 홈">
                <Image src="/icons/logo.svg" alt="561" width={42.13} height={26.1383} priority />
              </Link>
              <GnbSearch />
            </div>
            <ul className={styles.utils}>
              {gnbUtils.map((u) => (
                <li key={u}>
                  <a href="#">{u}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.bottom}>
            <nav aria-label="카테고리">
              <ul className={styles.menu}>
                {gnbCategories.map((c) => (
                  <li key={c}>
                    <a href="#">{c}</a>
                  </li>
                ))}
                <li className={styles.divider} aria-hidden />
                <li>
                  <BrandMenu buttonClassName={styles.brand} />
                </li>
                {gnbMenus.map((m) => (
                  <li key={m}>
                    <a href="#" className={m === "561EXCLUSIVE" ? styles.point : undefined}>
                      {m}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.actions}>
              <a href="#" className={styles.iconBtn} aria-label="찜">
                <Image src="/icons/heart-28.svg" alt="" width={28} height={28} />
              </a>
              <a href="#" className={styles.iconBtn} aria-label="마이페이지">
                <Image src="/icons/mypage-28.svg" alt="" width={28} height={28} />
              </a>
              <a href="#" className={styles.iconBtn} aria-label="장바구니 12개">
                <span className={styles.bag}>
                  <Image src="/icons/bag-28.svg" alt="" width={28} height={28} />
                  <span className={styles.badge} aria-hidden>
                    12
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
