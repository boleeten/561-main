// 메인 페이지 더미 데이터 (Figma 561_메인 기준)

/** 이미지가 프레임보다 크거나 작게 배치된 경우의 위치(%) — Figma 크롭 값 그대로 */
export type Crop = { left: string; top: string; width: string; height: string };

export type MainBannerItem = {
  id: string;
  image: string;
  crop?: Crop;
  title: string[];
  desc: string;
};

export const mainBanners: MainBannerItem[] = [
  {
    id: "bearbrick",
    image: "/images/main-1.png",
    title: ["BEARBRICK ART EDITION"],
    desc: "프리즈 서울을 맞아 프레임 밖으로 나온 아트 에디션을 만나보세요",
  },
  {
    id: "pandora",
    image: "/images/main-2.png",
    crop: { left: "-7.98%", top: "-0.38%", width: "115.97%", height: "100.32%" },
    title: ["판도라의 새로운 컬렉션", "베스트 아이템 특별전"],
    desc: "판도라 60% OFF",
  },
  {
    id: "parajumpers",
    image: "/images/main-3.jpg",
    crop: { left: "-112.75%", top: "-4.17%", width: "347.94%", height: "123.93%" },
    title: ["26FW SEASON OFF"],
    desc: "파라점퍼스 윈터 시즌오프 30% OFF",
  },
  {
    id: "repetto",
    image: "/images/main-4.png",
    crop: { left: "-6.82%", top: "-14.42%", width: "115.18%", height: "115.1%" },
    title: ["REPETTO X YOHJI YAMAMOTO"],
    desc: "레페토가 제안하는 새로운 스타일",
  },
  {
    id: "porter",
    image: "/images/main-5.png",
    crop: { left: "-3.11%", top: "-4.51%", width: "109.2%", height: "104.47%" },
    title: ["YOSHIDA PORTER", "NEW ARRIVALS"],
    desc: "JJJJOUND 콜라보레이션",
  },
];

export type QuickMenuItem =
  | { id: string; label: string[]; type: "image"; image: string; crop?: Crop }
  | { id: string; label: string[]; type: "timesale" | "outlet" };

export const quickMenus: QuickMenuItem[] = [
  { id: "timesale", label: ["타임특가전"], type: "timesale" },
  {
    id: "ferragamo",
    label: ["페라가모", "타임피스"],
    type: "image",
    image: "/images/quick-ferragamo.jpg",
    crop: { left: "16.1%", top: "6.94%", width: "67.81%", height: "86.11%" },
  },
  { id: "women", label: ["여성의류"], type: "image", image: "/images/quick-women.jpg" },
  {
    id: "men",
    label: ["남성의류"],
    type: "image",
    image: "/images/quick-men.jpg",
    crop: { left: "6.23%", top: "6.3%", width: "87.54%", height: "87.54%" },
  },
  { id: "bag", label: ["백/슈즈"], type: "image", image: "/images/quick-bag.jpg" },
  {
    id: "watch",
    label: ["시계/주얼리"],
    type: "image",
    image: "/images/quick-watch.png",
    crop: { left: "0%", top: "-11.36%", width: "100%", height: "126.99%" },
  },
  {
    id: "life",
    label: ["라이프스타일"],
    type: "image",
    image: "/images/quick-life.jpg",
    crop: { left: "4.17%", top: "-8.21%", width: "91.67%", height: "116.41%" },
  },
  { id: "beauty", label: ["뷰티"], type: "image", image: "/images/quick-beauty.png" },
  { id: "outlet", label: ["아울렛"], type: "outlet" },
  {
    id: "parajumpers",
    label: ["파라점퍼스", "단독"],
    type: "image",
    image: "/images/quick-parajumpers.png",
    crop: { left: "10.66%", top: "0.79%", width: "77.5%", height: "98.42%" },
  },
  // 2페이지 (추가 퀵메뉴 — 기존 에셋 재사용)
  { id: "kids", label: ["키즈"], type: "image", image: "/images/cat-kids.png" },
  { id: "acc", label: ["잡화"], type: "image", image: "/images/cat-acc.png" },
  { id: "bearbrick", label: ["베어브릭", "아트 에디션"], type: "image", image: "/images/new-5.jpg" },
  { id: "kusmi", label: ["쿠스미티"], type: "image", image: "/images/sub-5.png" },
  { id: "jewelry", label: ["판도라", "특별전"], type: "image", image: "/images/new-2.jpg" },
];

export type SubBannerItem = {
  id: string;
  /** 여러 장이면 아래→위 순서로 겹쳐서 표시 */
  images: { src: string; crop?: Crop }[];
  title: string;
  subtitle: string;
  brands: string;
};

export const subBanners: SubBannerItem[] = [
  {
    id: "winter-men",
    images: [{ src: "/images/sub-1.png" }],
    title: "겨울 스타일링 for men",
    subtitle: "561에서 만나보는 익스클루시브 아이템",
    brands: "TACH CLOTHING, GCDS, GUESS USA",
  },
  {
    id: "lucky",
    images: [{ src: "/images/sub-2.png" }],
    title: "2026 LUCKY ITEM",
    subtitle: "새해를 여는 행운의 아이템",
    brands: "판도라, 킨키로봇, 레스포색",
  },
  {
    id: "parajumpers",
    images: [
      {
        src: "/images/sub-3a.png",
        crop: { left: "-8.64%", top: "-6.48%", width: "123.2%", height: "110.01%" },
      },
      {
        src: "/images/sub-3b.jpg",
        crop: { left: "-25.3%", top: "-6.44%", width: "150.6%", height: "112.44%" },
      },
    ],
    title: "브랜드 스토리, 파라점퍼스",
    subtitle: "파라점퍼스의 아웃도어 스타일링",
    brands: "파라점퍼스",
  },
  {
    id: "skin",
    images: [{ src: "/images/sub-4.png" }],
    title: "건한 피부에 쉼을 주는 순간",
    subtitle: "건강한 피부 관리의 시작",
    brands: "아뽀",
  },
  {
    id: "tea",
    images: [{ src: "/images/sub-5.png" }],
    title: "따뜻한 겨울 루틴",
    subtitle: "당신의 일상에 온기를 더해줄 유기농 티",
    brands: "쿠스미티",
  },
];

export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  image: string;
  /** 지정 시 썸네일 안에서 여백을 두고 배치 (기본: cover) */
  crop?: Crop;
};

export const newItems: Product[] = [
  { id: "n1", brand: "CATH KIDSTON", name: "스몰 북백 - 크리스마스 하우스", price: 48000, image: "/images/new-1.png" },
  { id: "n2", brand: "CATH KIDSTON", name: "스몰 북백 - 크리스마스 하우스", price: 48000, image: "/images/new-2.jpg" },
  { id: "n3", brand: "CATH KIDSTON", name: "스몰 북백 - 크리스마스 하우스", price: 48000, image: "/images/new-3.png" },
  { id: "n4", brand: "CATH KIDSTON", name: "조미료병 세트 - 폴라 베어 디어", price: 68000, image: "/images/new-4.png" },
  {
    id: "n5",
    brand: "CATH KIDSTON",
    name: "에이프런 앞치마 - 크리스마스 딧시",
    price: 58000,
    image: "/images/new-5.jpg",
    crop: { left: "4.45%", top: "5.5%", width: "91.1%", height: "89%" },
  },
];

const mdCrops: Crop[] = [
  { left: "7.19%", top: "7.18%", width: "85.62%", height: "85.64%" },
  { left: "4.79%", top: "4.78%", width: "90.41%", height: "90.44%" },
  { left: "-2.05%", top: "9.03%", width: "104.11%", height: "81.94%" },
  { left: "4.79%", top: "4.78%", width: "90.41%", height: "90.44%" },
  { left: "6.85%", top: "6.84%", width: "86.3%", height: "86.33%" },
  { left: "7.53%", top: "7.52%", width: "84.93%", height: "84.96%" },
  { left: "6.85%", top: "6.84%", width: "86.3%", height: "86.33%" },
  { left: "6.85%", top: "6.84%", width: "86.3%", height: "86.33%" },
  { left: "6.85%", top: "6.84%", width: "86.3%", height: "86.33%" },
  { left: "6.85%", top: "6.84%", width: "86.3%", height: "86.33%" },
];

const mdNames: [string, number][] = [
  ["스몰 북백 - 크리스마스 하우스", 48000],
  ["조미료병 세트 - 폴라 베어 디어", 68000],
  ["스몰 북백 - 크리스마스 하우스", 48000],
  ["스몰 북백 - 크리스마스 하우스", 48000],
  ["에이프런 앞치마 - 크리스마스 딧시", 58000],
  ["스몰 북백 - 크리스마스 하우스", 48000],
  ["조미료병 세트 - 폴라 베어 디어", 68000],
  ["스몰 북백 - 크리스마스 하우스", 48000],
  ["스몰 북백 - 크리스마스 하우스", 48000],
  ["에이프런 앞치마 - 크리스마스 딧시", 58000],
];

export const mdPickProducts: Product[] = mdNames.map(([name, price], i) => ({
  id: `md${i + 1}`,
  brand: "CATH KIDSTON",
  name,
  price,
  image: `/images/md-${i + 1}.png`,
  crop: mdCrops[i],
}));

export const mdPickBrands = [
  "PARAJUMPERS",
  "KINKI ROBOT",
  "RESPORTSAC",
  "MARCO’S CHOCOLATE",
  "KUSMI TEA",
  "PANDORA",
];

export const categoryBanners = [
  { id: "men", label: "남성", image: "/images/cat-men.png" },
  { id: "women", label: "여성", image: "/images/cat-women.png" },
  { id: "watch", label: "시계/주얼리", image: "/images/cat-watch.png" },
  { id: "bag", label: "가방", image: "/images/cat-bag.png" },
  { id: "acc", label: "잡화", image: "/images/cat-acc.png" },
  { id: "life", label: "라이프스타일", image: "/images/cat-life.png" },
  { id: "kids", label: "키즈", image: "/images/cat-kids.png" },
  { id: "beauty", label: "뷰티", image: "/images/cat-beauty.png" },
];

export const gnbCategories = ["여성", "남성", "가방", "시계 / 주얼리", "잡화", "뷰티", "라이프스타일", "키즈"];
export const gnbMenus = ["베스트", "신상품", "기획전", "아울렛", "에디토리얼", "561EXCLUSIVE", "이벤트"];
export const gnbUtils = ["로그인", "회원가입", "고객센터", "최근본상품"];

export const footerLinks = [
  "회사소개",
  "561소개",
  "이용약관",
  "개인정보처리방침",
  "청소년보호방침",
  "입점/제휴문의",
  "대량구매",
];

// 검색 레이어 — 인기 검색어 (더미)
export const popularKeywords = {
  updatedAt: "10.12 15:00:00",
  items: ["레스포색", "판도라", "UDF MLB X PEANUTS", "캐스키드슨", "파우치", "파라점퍼스", "베어브릭", "산드리옹", "판도라 참", "타이맥스"],
};

// GNB 브랜드 레이어 — 알파벳순 (5열 고정, 세로 방향으로 채움)
export const brands = [
  "AIPPO", "BY FAR", "BRISTON", "BRIC'S", "COQ", "CAREL", "CELLCOSMET", "CATH KIDSTON",
  "DROLE DE MONSIEUR", "EMDIRUSA", "FAUX PAS PARIS COSMETIC", "FAMILY FIRST", "FENG CHEN WANG", "FERRAGAMO", "Gc", "GUESS USA",
  "GUESS", "GCDS", "ILSE JACOBSEN", "JustOverTheTop", "KWAY", "KUSMITEA", "KEEN", "KINKI ROBOT",
  "KNDX", "LANCASTER", "LESPORTSAC", "MARCO'S CHOCOLATE", "OLIVIA BURTON", "PARAJUMPERS", "PAULA CANOVAS DEL VAS", "PANDORA",
  "PORTER", "PHIPPS", "REPETTO", "SELF-PORTRAIT", "SUNNEI", "TIMEX", "TACH CLOTHING", "VILEBREQUIN",
];
