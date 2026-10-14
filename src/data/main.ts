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

export type NewsProduct = {
  id: string;
  brand: string;
  name: string;
  price: number;
  /** 할인 전 가격 (지정 시 할인율 + 취소선 원가 노출) */
  originalPrice?: number;
  image: string;
};

export type NewsItem = {
  id: string;
  image: string;
  brand?: string;
  title: string;
  desc: string;
  products: NewsProduct[];
  /** ISO 날짜 (YYYY-MM-DD) */
  date: string;
  likes: number;
};

export const newsItems: NewsItem[] = [
  {
    id: "marcos",
    image: "/images/news-1.jpg",
    brand: "MARCO'S CHOCOLATE",
    title: "브랜드 오리지널 스토리, 마르코스 초콜릿",
    desc: "마르코스 초콜릿으로 만드는 프리미엄 디저트 레시피 등 A to Z를 심층 소개합니다.",
    products: [
      { id: "m1", brand: "MARCO'S CHOCOLATE", name: "다크초코 보리건빵 통건빵 420g (35gx12봉)", price: 32000, image: "/images/news-1-1.jpg" },
      { id: "m2", brand: "MARCO'S CHOCOLATE", name: "쿠앤크초코 보리건빵 통건빵 420g (35gx12봉)", price: 32000, image: "/images/news-1-2.jpg" },
      { id: "m3", brand: "MARCO'S CHOCOLATE", name: "녹차초코 보리건빵 통건빵 420g (35gx12봉)", price: 32000, image: "/images/news-1-3.jpg" },
    ],
    date: "2024-01-18",
    likes: 0,
  },
  {
    id: "holiday",
    image: "/images/news-2.jpg",
    title: "리뷰세이, 홀리데이 기프트",
    desc: "호불호 없는 연말 선물! 561 마케터가 추천하는 홀리데이 기프트를 확인해 보세요.",
    products: [
      { id: "h1", brand: "MARCO'S CHOCOLATE", name: "녹차초코 보리건빵 통건빵 420g (35gx12봉)", price: 32000, image: "/images/news-2-1.jpg" },
      { id: "h2", brand: "KUSMITEA", name: "유기농 화이트 벨리니 90g 메탈틴", price: 62000, image: "/images/news-2-2.jpg" },
      { id: "h3", brand: "KINKI ROBOT", name: "1000% BEARBRICK GARFIELD Flocky Ver.", price: 1180000, image: "/images/news-2-3.jpg" },
    ],
    date: "2023-12-07",
    likes: 0,
  },
  {
    id: "parajumpers",
    image: "/images/news-3.jpg",
    brand: "PARAJUMPERS",
    title: "시즈널 컬렉션, 파라점퍼스",
    desc: "파라점퍼스 뉴 시즌 컬렉션 룩북을 시즈널 컬렉션에서 제일 먼저 만나보세요!",
    products: [
      {
        id: "p1",
        brand: "PARAJUMPERS",
        name: "여성 숏 다운 자켓 세시-Sun Kissed (24WMPWPUPD31PJ0710)",
        price: 545000,
        originalPrice: 1090000,
        image: "/images/news-3-1.jpg",
      },
      {
        id: "p2",
        brand: "PARAJUMPERS",
        name: "남성 롱 후드 자켓 하야테-Black (24WMPMJKBL02PJ0541)",
        price: 845000,
        originalPrice: 1690000,
        image: "/images/news-3-2.jpg",
      },
      { id: "p3", brand: "PARAJUMPERS", name: "유니섹스 다운 크로스 바디백 호보-Rosmary (24WMPABAB01PJ0710)", price: 339000, image: "/images/news-3-3.jpg" },
    ],
    date: "2024-12-05",
    likes: 0,
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

// GNB 카테고리 8개 + 서브메뉴 (여성은 Figma 기준, 나머지는 더미)
export const gnbCategories: { label: string; sub: string[] }[] = [
  { label: "여성", sub: ["니트웨어", "드레스", "스윔웨어", "스커트", "라운지웨어", "액티브웨어", "재킷 & 코트", "탑"] },
  { label: "남성", sub: ["니트웨어", "셔츠", "티셔츠", "팬츠", "라운지웨어", "액티브웨어", "재킷 & 코트", "수트"] },
  { label: "가방", sub: ["토트백", "숄더백", "크로스백", "백팩", "클러치", "여행가방", "지갑"] },
  { label: "시계 / 주얼리", sub: ["시계", "목걸이", "팔찌", "반지", "귀걸이", "참"] },
  { label: "잡화", sub: ["모자", "스카프", "벨트", "선글라스", "양말", "우산"] },
  { label: "뷰티", sub: ["스킨케어", "메이크업", "향수", "바디케어", "헤어케어"] },
  { label: "라이프스타일", sub: ["홈데코", "키친", "푸드", "티 & 커피", "문구", "토이"] },
  { label: "키즈", sub: ["아우터", "상의", "하의", "원피스", "신발", "액세서리"] },
];
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

// 마이페이지 아이콘 hover 레이어 (더미 로그인 상태 — null이면 비로그인 레이어)
export const currentUser: { name: string; point561: number; membershipPoint: number; coupon: number; review: number } | null = {
  name: "성현식",
  point561: 20000,
  membershipPoint: 20000,
  coupon: 0,
  review: 0,
};
