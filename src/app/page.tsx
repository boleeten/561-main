import BandBanner from "@/components/BandBanner";
import CategoryBanner from "@/components/CategoryBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainBanner from "@/components/MainBanner";
import MdPick from "@/components/MdPick";
import News from "@/components/News";
import QuickMenu from "@/components/QuickMenu";
import SubBanner from "@/components/SubBanner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.top}>
          <MainBanner />
          <QuickMenu />
          <SubBanner />
        </div>
        <BandBanner />
        <News />
        <MdPick />
        <CategoryBanner />
      </main>
      <Footer />
    </>
  );
}
