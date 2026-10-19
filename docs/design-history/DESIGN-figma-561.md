# 561 메인 — Design Style Guide

> Source: Figma `메인` / `561_메인 (2560px)` (node `552:27431`)
> https://www.figma.com/design/sxaWVhwOBbAUYcuRMjRTED/메인?node-id=552-27431
>
> 이 문서는 Figma 변수(Variables)와 각 섹션의 디자인 컨텍스트에서 추출했습니다.
> 토큰 이름은 Figma 변수명을 그대로 따릅니다. `정의X`라고 표시된 값은 Figma에 정식 토큰으로 정의되지 않은 값입니다.

---

## 1. 레이아웃 & 그리드

| 항목 | 값 |
|---|---|
| 디자인 캔버스 | 2560px |
| 콘텐츠 컨테이너 | **1280 ~ 1580px** 가변, 가운데 정렬 (디자인 기준 1580, 2560 캔버스에서 좌우 490px) |
| 상품 리스트 폭 | 1572px (NEW ITEM, MD's PICK) |
| 전체폭(full-bleed) 요소 | 상단배너, GNB 배경, 푸터 배경 |

### 섹션 간 수직 간격

| 구간 | 간격 |
|---|---|
| 메인배너 → 캐러셀 컨트롤 | 24px |
| 메인배너 영역 → 퀵메뉴 | 60px |
| 퀵메뉴 → 서브배너 | 60px |
| 주요 섹션 사이 (서브배너 → 띠배너 → NEW ITEM → MD's PICK → 카테고리배너) | **110px** |
| 마지막 섹션 → 푸터 | 180px |
| 섹션 타이틀 → 콘텐츠 | 36px (NEW ITEM), 18px (MD's PICK 타이틀 → 탭 → 그리드) |

### 그리드 패턴

| 컴포넌트 | 아이템 크기 | 열 | 가로 gap | 세로 gap |
|---|---|---|---|---|
| 메인배너 카드 | 526 × 701 | 3 + 양옆 잘림 (캐러셀) | 0 | – |
| 퀵메뉴 | 92 × 92 + 라벨 | 10 | 30px | – |
| 서브배너 | 336 (이미지 336×450) | 4.x (슬라이드) | 24px | – |
| 상품카드 | 292 (이미지 292×371) | 5 | 28px | 36px |
| 카테고리배너 | 374 × 476 | 4 | 28px | 40px |

---

## 2. 컬러

### 텍스트
| 토큰 | HEX | 용도 |
|---|---|---|
| `Text/default` | `#191919` | 기본 본문, 타이틀, 가격, 활성 탭 |
| `Text/sub` | `#505050` | GNB 카테고리, 상품명, 보조 텍스트 |
| `Text/body` | `#767676` | 설명, 플레이스홀더, 비활성 탭, 유틸 링크 |
| `Text/disable` | `#999999` | 비활성, 안내 캡션 |
| `Text/white` | `#FFFFFF` | 이미지 위 텍스트 |

### 배경
| 토큰 | HEX | 용도 |
|---|---|---|
| `BG/white` | `#FFFFFF` | 페이지, GNB, 버튼 |
| `BG/light` | `#F8F8FA` | 푸터 |
| `BG/Black` | `#191919` | 다크 배경 |
| (정의X) | `#000000` | 상단 프로모션 띠배너, 캐러셀 진행바 |

### 라인 / 보더
| 토큰 | HEX | 용도 |
|---|---|---|
| `Line/strong` | `#191919` | 활성 탭 밑줄 (2px) |
| `Line/button` | `#D4D4D8` | 버튼, 스와이퍼 버튼 테두리 |
| `Line/#eceff2_정의X` | `#ECEFF2` | GNB 하단 보더, 캐러셀 트랙 |
| `Line/#eeeeee_정의X` | `#EEEEEE` | 푸터 구분선 |
| (정의X) | `#DADDE0` | 검색창 테두리, 세로 구분선 |

### 아이콘
| 토큰 | HEX |
|---|---|
| `Icon/default` | `#191919` |
| `Icon/sub` | `#505050` |
| `Icon/light` | `#D4D4D8` (상품카드 찜 하트, 인디케이터 비활성) |
| `Icon/white` | `#FFFFFF` |

### 포인트
| 토큰 | HEX | 용도 |
|---|---|---|
| `Point/Point` | `#740DFC` | 강조 메뉴 (GNB `561EXCLUSIVE`), 브랜드 포인트 |

### 오버레이 / 딤
| 용도 | 값 |
|---|---|
| 이미지 썸네일 틴트 | `rgba(24, 26, 29, 0.03)` (이미지 위 전체 덮기) |
| 메인배너 하단 딤 | `linear-gradient(180deg, rgba(0,0,0,0) → rgba(0,0,0,0.2))`, 높이 비율 526:280 |
| 카테고리배너 하단 딤 | `linear-gradient(180deg, rgba(6,6,6,0) → rgba(6,6,6,0.5))`, 높이 비율 374:286 |
| 롤링 버튼 배경 | `rgba(0,0,0,0.2)` (좌) / `rgba(0,0,0,0.3)` (우) |

### 퀵메뉴 특수 배지 (일러스트 타일)
| 배지 | 배경 |
|---|---|
| TIME SALE | `linear-gradient(180deg, #00996E → #E4D9C7)`, radius 10.22px |
| 70% OFF | `#A10A0A` 단색, radius 10.22px |

---

## 3. 타이포그래피

- **Font family**: `Pretendard` (Regular 400 / SemiBold 600)
- 퀵메뉴 배지: Figma는 `Monarcha Bold Italic`이지만 사용하지 않고 Pretendard 800 italic(line-height 1.02)으로 대체
- **Line-height**: 모든 스타일 `1.4`
- **Letter-spacing**: 한글(KR) 스타일 `-2%` (예: 14px → `-0.28px`), 영문(EN) 스타일 `0`
- Figma 스타일명에서 `Bd`는 SemiBold(600)를 뜻합니다 (Bold가 아님).

### PC
| 토큰 | Size | Weight | Letter-spacing | 사용처 |
|---|---|---|---|---|
| `PC/Title/KR_28_Bd` | 28 | 600 | -2% | 섹션 타이틀 (NEW ITEM, MD's PICK), 메인배너 타이틀 |
| `PC/Title/KR_28_Rg` | 28 | 400 | -2% | – |
| `PC/Title/KR_22_Bd` | 22 | 600 | -2% | 푸터 회사명, 고객센터 번호 |
| `PC/Title/KR_18_Rg` | 18 | 400 | -2% | 카테고리배너 라벨 |
| `PC/Title/KR_16_Rg` | 16 | 400 | -2% | 상단 프로모션 띠배너 |
| `PC/Title/EN_16_Bd` | 16 | 600 | 0 | 탭 (활성) |
| `PC/Title/EN_16_Rg` | 16 | 400 | 0 | 탭 (비활성) |
| `PC/Body/KR_15_Rg` | 15 | 400 | -2% | 상품명, 배너 설명, 서브배너 브랜드 |
| `PC/Body/KR_14_Bd` | 14 | 600 | -2% | 상품카드 브랜드명 |
| `PC/Body/KR_14_Rg` | 14 | 400 | -2% | 퀵메뉴 라벨, 푸터 본문, 서브배너 서브카피 |
| `PC/Btn/KR_14_Bd` | 14 | 600 | -2% | GNB 카테고리 메뉴 |
| `PC/Btn/KR_13_Bd` | 13 | 600 | -2% | 텍스트 버튼 (사업자정보확인) |
| `PC/Btn/KR_13_Rg` | 13 | 400 | -2% | GNB 유틸 링크, 검색 플레이스홀더 |
| `PC/Btn/EN_13_Rg` | 13 | 400 | 0 | 이메일 등 영문 |
| `PC/Btn/KR_12_Rg` | 12 | 400 | -2% | 작은 버튼 (1:1문의) |
| `PC/Caption/KR_13_Rg` | 13 | 400 | -2% | 캡션 |

### MO (이 페이지에서도 사용됨)
| 토큰 | Size | Weight | 사용처 |
|---|---|---|---|
| `MO/Title/KR_24_Bd` | 24 | 600 | 서브배너 타이틀 |
| `MO/Title/KR_16_Rg` | 16 | 400 | 페이지네이션 숫자 |

### 기타 (토큰 없음)
- 상품 가격 숫자: 18px / SemiBold / letter-spacing 0, 단위 "원": 14px Regular
- 장바구니 뱃지 숫자: 9px Regular, white

---

## 4. 형태 (Radius, Border, Size)

| 항목 | 값 |
|---|---|
| 검색 입력창 | 300 × 38, border 1px `#DADDE0`, radius **4px** |
| 퀵메뉴 썸네일 | 92 × 92, radius **8px** (특수 배지는 10.22px) |
| 상품 썸네일 | 292 × 371, **직각 (radius 0)** — Figma 설명의 R28은 적용하지 않음 |
| 버튼 (Line_gray, 26) | 높이 26, padding 0 12px, border 1px `#D4D4D8`, radius 0. Figma 설명: "라운드 적용 시 R 8px (H 40 이하)" |
| 스와이퍼 버튼 | 32 × 32 정사각 2개를 붙여 배치 (겹침 -1px), border 1px `#D4D4D8`, 아이콘 16 |
| 구분 점 (GNB 유틸) | 2 × 2, `#D4D4D8`, 원형 |
| 세로 구분선 | 1px × 20 (GNB, `#DADDE0`) / 1px × 16 (캐러셀) / 1px × 10 (푸터, `#EEEEEE`) |
| 그림자 | 사용 안 함 |

---

## 5. 아이콘

- 라인 스타일 아이콘. 크기: **12 / 16 / 20 / 24 / 28 / 32**
- 클릭 영역: 아이콘 크기와 별도로 **36 × 36** (GNB 아이콘), **32 × 20** (캐러셀 컨트롤), **40 × 40** (페이지네이션), **32 × 48** (퀵메뉴 화살표)
- 사용된 아이콘: Search(24), Heart(28), Mypage(28), Shopping bag(28, 숫자 뱃지 포함), Arrow Down(12), Arrow Left/Right(16·20·32), Player pause(16·20)
- Figma 컴포넌트 중 `Line/…` 접두어 아이콘(예: `Line/검색`, `Line/하트`)에는 **"❌ 사용하지 마세요 ❌"** 설명이 달려 있으니, 현재 인스턴스에 연결된 아이콘 에셋을 그대로 쓰세요.

---

## 6. 컴포넌트 스펙

### 6.1 상단 프로모션 배너
- 높이 32, 배경 `#000`, 텍스트 가운데 정렬 `PC/Title/KR_16_Rg`, `Text/white`

### 6.2 GNB (총 높이 114)
- 배경 white, 하단 보더 1px `#ECEFF2`
- **1단 (62px, 하단정렬, padding-bottom 2px)**: 왼쪽에 로고(42×32), 32px 띄우고 검색창. 오른쪽 유틸 링크는 gap 6, 사이사이 2px 점, `KR_13_Rg`, `Text/body`
- **2단 (52px, padding-bottom 8px)**: 왼쪽 카테고리 메뉴는 gap 24, `PC/Btn/KR_14_Bd`, `Text/sub`
  - 메뉴 순서: 여성 · 남성 · 가방 · 시계/주얼리 · 잡화 · 뷰티 · 라이프스타일 · 키즈 | 브랜드▾ · 베스트 · 신상품 · 기획전 · 아울렛 · 에디토리얼 · **561EXCLUSIVE** (`Point/Point`) · 이벤트
  - 오른쪽 아이콘 3개는 36×36 버튼, gap 8 (찜 / 마이페이지 / 장바구니)

### 6.3 메인배너 캐러셀
- 카드 526×701, 배경 이미지 cover
- 텍스트: 하단에서 60px, 좌우 56px, gap 12
  - 타이틀 `PC/Title/KR_28_Bd` white
  - 설명 `PC/Body/KR_15_Rg` white
- 컨트롤 바 (높이 20): 진행 트랙 2px `#ECEFF2` 위에 활성 바 2px `#000` (200px)을 얹고, 24px 띄워 [◀ | ▶ ⏸] 배치

### 6.4 퀵메뉴
- 1280px 폭에 10개, gap 30, 오른쪽에 32px 화살표
- 아이템: 썸네일 92×92 r8 + 이미지 틴트, 8px 아래 라벨 `PC/Body/KR_14_Rg`, `Text/default`, 가운데 정렬, 최대 2줄

### 6.5 서브배너 (기획전 카드)
- 상단 오른쪽에 스와이퍼 버튼, 20px 아래 카드 리스트 (gap 24)
- 카드: 이미지 336×450 → 16px → 텍스트 블록 (gap 10)
  - 타이틀 `MO/Title/KR_24_Bd` `Text/default`
  - 6px 아래 서브카피 `PC/Body/KR_14_Rg` `Text/body`
  - 브랜드 목록 `PC/Body/KR_15_Rg` `Text/body`

### 6.6 띠배너 (TRENDING NOW)
- 1580×150 이미지
- 좌우 롤링 버튼 32×56 (top 47), 아이콘 20 white
- 하단 인디케이터 (top 116): 점 46×10 + 일시정지 18

### 6.7 섹션 타이틀
- `PC/Title/KR_28_Bd`, `Text/default`, 가운데 정렬 (예: "NEW ITEM", "MD's PICK")

### 6.8 상품카드 (`PC_전시/해상도1580`)
- 폭 292, 세로 gap 18
- 썸네일 292×371, 오른쪽 위 8px 위치에 찜 하트(28, `Icon/light`)
- 정보 영역 (padding-right 32, gap 2)
  - 브랜드 `PC/Body/KR_14_Bd` `Text/default`
  - 상품명 `PC/Body/KR_15_Rg` `Text/sub`, 1줄 말줄임
  - 14px 아래 가격 행 (높이 28): 숫자 18 SemiBold, 2px 띄우고 "원" 14 Regular, `Text/default`

### 6.9 라인 탭 (`46LineTab`)
- 높이 46, 탭 컨테이너 좌우 padding 16, 내부 padding 12px 2px
- 활성: `PC/Title/EN_16_Bd` `Text/default` + 하단 2px `Line/strong`
- 비활성: `PC/Title/EN_16_Rg` `Text/body`
- 탭 목록은 가운데 정렬

### 6.10 페이지네이션
- [◀ 40×40] · 28px · "1 / 4" (`KR_16_Rg`, gap 2) · 28px · [▶ 40×40]

### 6.11 카테고리배너
- 374×476 이미지, 하단 그라데이션 딤
- 라벨: 좌우 24, 하단 기준 `PC/Title/KR_18_Rg` white

### 6.12 푸터 (`PC_Footer`)
- 배경 `BG/light`, padding 30px 0 60px, 내부 gap 30
- 링크 행 (gap 24, 1px×10 `#EEEEEE` 구분선): 회사소개 · 561소개 · 이용약관 · 개인정보처리방침 · 청소년보호방침 · 입점/제휴문의 · 대량구매
- 1px `#EEEEEE` 가로 구분선
- 왼쪽: 회사명 `KR_22_Bd`, 20px 아래 사업자 정보 (`KR_14_Rg`, gap 8), "사업자정보확인 >" 텍스트 버튼
- 오른쪽 (오른쪽 정렬): "고객센터 1688-5501" `KR_22_Bd`, 이메일 `EN_13_Rg` `Text/sub`, 버튼 [1:1문의][자주 묻는 질문] (gap 2), 앱 다운 문구와 QR 60×60

---

## 7. CSS 변수 (구현용)

```css
:root {
  /* Text */
  --text-default: #191919;
  --text-sub: #505050;
  --text-body: #767676;
  --text-disable: #999999;
  --text-white: #ffffff;

  /* Background */
  --bg-white: #ffffff;
  --bg-light: #f8f8fa;
  --bg-black: #191919;
  --bg-promo: #000000;

  /* Line */
  --line-strong: #191919;
  --line-button: #d4d4d8;
  --line-input: #dadde0;
  --line-soft: #eceff2;
  --line-divider: #eeeeee;

  /* Icon */
  --icon-default: #191919;
  --icon-sub: #505050;
  --icon-light: #d4d4d8;
  --icon-white: #ffffff;

  /* Point */
  --point: #740dfc;

  /* Overlay */
  --thumb-tint: rgba(24, 26, 29, 0.03);
  --dim-banner: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%);
  --dim-category: linear-gradient(180deg, rgba(6, 6, 6, 0) 0%, rgba(6, 6, 6, 0.5) 100%);

  /* Typography */
  --font-base: "Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
  --lh: 1.4;
  --ls-kr: -0.02em;
  --ls-en: 0;
  --fw-regular: 400;
  --fw-semibold: 600;

  /* Layout */
  --container: 1580px;
  --section-gap: 110px;
  --footer-gap: 180px;

  /* Radius */
  --radius-input: 4px;
  --radius-thumb: 8px;
}
```

---

## 8. 구현 결정 사항 (확정)

1. **상품 썸네일 모서리**: 직각(radius 0)으로 구현합니다.
2. **정의되지 않은 컬러**(`#DADDE0`, `#ECEFF2`, `#EEEEEE`, `#000`): 임시 변수(`--line-input`, `--line-soft`, `--line-divider`, `--bg-promo`)로 사용합니다.
3. **Monarcha 폰트**: 사용하지 않습니다. 퀵메뉴 배지(TIME SALE, 70% OFF)는 Pretendard 800 italic으로 대체합니다.
4. **반응형**: 콘텐츠 폭은 **1280 ~ 1580px**입니다. `clamp(1280px, 100% - 80px, 1580px)`로 계산하고, `body`의 `min-width`는 1280px입니다.
   - 상품(5열)과 카테고리(4열) 그리드는 컬럼 폭이 비율로 줄어듭니다.
   - 서브배너는 336px 고정 카드의 가로 슬라이드입니다.
   - 메인배너는 컨테이너 1/3 폭 카드 3장에 좌우 peek가 붙습니다.
5. `Guide / …` 인스턴스는 간격과 클릭영역을 표시하는 주석용이므로 구현하지 않습니다.
