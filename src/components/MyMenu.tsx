import Image from "next/image";
import { currentUser } from "@/data/main";
import styles from "./GnbDropdown.module.css";

const won = (n: number) => `${n.toLocaleString("ko-KR")}원`;

/** 마이페이지 아이콘 + hover/focus 시 나오는 마이 레이어 (로그인 / 비로그인) */
export default function MyMenu({ iconClassName }: { iconClassName?: string }) {
  const u = currentUser;
  const rows = u
    ? [
        { label: "561포인트", value: won(u.point561) },
        { label: "멤버십 포인트", value: won(u.membershipPoint) },
        { label: "쿠폰", value: String(u.coupon) },
        { label: "상품후기", value: String(u.review) },
      ]
    : [];

  return (
    <div className={`${styles.item} ${styles.my}`}>
      <a href="#" className={iconClassName} aria-label="마이페이지" aria-haspopup="true">
        <Image src="/icons/mypage-28.svg" alt="" width={28} height={28} />
      </a>
      <div className={styles.dropdown}>
        <ul className={`${styles.box} ${u ? styles.myLogin : ""}`}>
          {u ? (
            <>
              <li className={styles.name}>{u.name}님</li>
              <li>
                <a href="#" className={styles.link}>
                  주문/배송조회
                </a>
              </li>
              {rows.map((r) => (
                <li key={r.label}>
                  <a href="#" className={`${styles.link} ${styles.row}`}>
                    <span className={styles.rowLabel}>{r.label}</span>
                    <span className={styles.rowValue}>{r.value}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className={styles.link}>
                  회원정보관리
                </a>
              </li>
            </>
          ) : (
            ["주문/배송조회", "561포인트", "멤버십 포인트", "쿠폰", "상품후기", "회원정보관리"].map((l) => (
              <li key={l}>
                <a href="#" className={styles.link}>
                  {l}
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
