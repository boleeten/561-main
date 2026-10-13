import Image from "next/image";
import { footerLinks } from "@/data/main";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <ul className={styles.links}>
          {footerLinks.map((l) => (
            <li key={l}>
              <a href="#">{l}</a>
            </li>
          ))}
        </ul>

        <hr className={styles.hr} />

        <div className={styles.body}>
          <div className={styles.company}>
            <p className={styles.name}>(주)스타럭스</p>
            <address className={styles.info}>
              <p className={styles.row}>
                <span>대표이사 : 안종훈</span>
                <span>(우)06115 서울시 강남구 삼성동 561</span>
              </p>
              <p className={`${styles.row} ${styles.wide}`}>
                <span>사업자등록번호 : 120-86-24028</span>
                <span>통신판매업신고 : 강남 - 04364호</span>
                <a href="#" className={styles.textBtn}>
                  사업자정보확인
                  <Image src="/icons/arrow-right-12.svg" alt="" width={12} height={12} />
                </a>
              </p>
              <p>개인정보보호책임자 : 추보람 561_cs@starluxe.co.kr</p>
              <p>Copyright ⓒ 561 ALL RIGHTS RESERVED.</p>
            </address>
          </div>

          <div className={styles.cs}>
            <div className={styles.csTop}>
              <p className={styles.csTitle}>
                <span>고객센터</span>
                <a href="tel:1688-5501" className={styles.tel}>
                  1688 - 5501
                </a>
              </p>
              <a href="mailto:561_cs@starluxe.co.kr" className={styles.mail}>
                561_cs@starluxe.co.kr
              </a>
              <div className={styles.buttons}>
                <a href="#" className={styles.btn}>
                  1:1문의
                </a>
                <a href="#" className={styles.btn}>
                  자주 묻는 질문
                </a>
              </div>
            </div>
            <div className={styles.app}>
              <div className={styles.appText}>
                <p className={styles.appTitle}>561 APP 다운</p>
                <p className={styles.appDesc}>스마트폰으로 QR코드 스캔</p>
              </div>
              <Image src="/images/qr.png" alt="561 앱 다운로드 QR코드" width={60} height={60} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
