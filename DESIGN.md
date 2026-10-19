# 561 메인 — Design Style Guide (Apple 스타일)

> Source: `apple-design.md` "Product-tile whiteout" (참고 사이트 https://www.apple.com/)
> 원문은 [`docs/design-history/apple-design-source.md`](docs/design-history/apple-design-source.md)에 그대로 보관합니다.
> 이전 가이드(Figma 561_메인)는 [`docs/design-history/DESIGN-figma-561.md`](docs/design-history/DESIGN-figma-561.md)에 있고, 코드 전체는 `backup/design-figma-561` 브랜치에 백업되어 있습니다.

---

## 0. 원칙

- 흰색(`#FFFFFF`)과 오프화이트(`#F5F5F7`) 면이 기본. 구조는 테두리가 아니라 면 색과 글자 굵기로 만든다.
- 블루(`#0071E3` / `#0066CC`)는 **버튼과 링크에만** 쓴다. 제목, 배경, 아이콘을 블루로 칠하지 않는다.
- 콘텐츠 패널과 상품 이미지는 **직각(radius 0), 그림자 없음**. 그림자는 드롭다운처럼 떠 있는 레이어에만.
- 컨트롤(버튼, 검색창, 탭)은 **알약형(radius 980px)**.
- 모션은 짧고 담백하게: `0.32s cubic-bezier(0.4, 0, 0.6, 1)`. 튕기는 이징 금지.

## 1. 레이아웃

| 항목 | 값 |
|---|---|
| 콘텐츠 컨테이너 | 1280 ~ 1580px 가변 (기존 유지: 쇼핑몰 상품 그리드 폭 때문) |
| 섹션 사이 간격 | 110px |
| 그리드 gap (가이드 기준) | 12px, 기존 상품 그리드 간격은 유지 |
| 패널 내부 여백 (가이드 기준) | 일반 밴드 53–60px, 다크 밴드 56–63px |

## 2. 컬러

| 토큰 | HEX | 용도 |
|---|---|---|
| `--text-default` | `#1D1D1F` | 제목, 본문 (near-black ink) |
| `--text-sub` | `#424245` | 보조 텍스트, GNB 메뉴 |
| `--text-body` | `#6E6E73` | 설명, 플레이스홀더 |
| `--text-disable` | `#86868B` | 캡션, 비활성 |
| `--bg-white` | `#FFFFFF` | 페이지, 카드 |
| `--bg-light` | `#F5F5F7` | 오프화이트 패널, 푸터, 칩/원형 버튼 바탕 |
| `--bg-black` / `--bg-promo` | `#000000` | 다크 패널, 상단 프로모션 띠 |
| `--line-soft` / `--line-default` | `#E8E8ED` | 연한 구분선, 버튼 hover |
| `--line-button` / `--line-input` / `--line-divider` | `#D2D2D7` | 구분선 |
| `--accent` (= `--point`) | `#0071E3` | 알약 버튼 채움/테두리, 강조 메뉴, 포커스 링 |
| `--accent-hover` | `#0076DF` | 버튼 hover |
| `--link` | `#0066CC` | 본문 링크 |
| `--link-on-dark` | `#2997FF` | 다크 패널 위 링크 |

## 3. 타이포그래피

- 본문: `SF Pro Text` → 시스템 폰트 → 한글은 `Pretendard`
- 제목: `SF Pro Display` → 시스템 폰트 → `Pretendard`
- 본문 line-height `1.47`, 제목 line-height `1.1`, 제목 자간 `-0.02em`

| 역할 | 크기 / 굵기 | 사용처 |
|---|---|---|
| headline-md | 56 / 600 | 히어로급 제목 (필요 시) |
| label-md | 40 / 600 | 섹션 타이틀 (신상소식, MD's PICK) |
| display | 34 / 600 | 메인배너 카드 타이틀 |
| body-lg | 28 / 400 | 큰 부제 |
| body | 17 / 400 | 문단 (쇼핑몰 특성상 상품 정보는 기존 14–15px 유지) |

## 4. 형태

| 토큰 | 값 | 용도 |
|---|---|---|
| `--radius-control` | `980px` | 버튼, 검색창, 칩 탭 |
| `--radius-card` | `8px` | 퀵메뉴 썸네일, 드롭다운 하단 모서리 |
| `--radius-panel` | `0` | 배너, 상품 이미지, 패널 |
| `--shadow-float` | `rgba(0,0,0,0.22) 3px 5px 30px` | 드롭다운 등 떠 있는 레이어 전용 |

## 5. 컴포넌트

- **GNB**: 상단 고정(sticky), `rgba(245,245,247,0.8)` + `backdrop-filter: saturate(1.8) blur(20px)` 글래스. 메뉴는 Regular 400, 강조 메뉴(561EXCLUSIVE)는 블루.
- **검색창**: 흰색 알약형, 테두리 없음.
- **버튼 (기본)**: `#0071E3` 채움 + 흰 글자, 알약형, 높이 44 (히어로) / 36 (본문 중간), hover `#0076DF`.
- **버튼 (아웃라인)**: 투명 + `#0071E3` 1px 테두리와 글자, 알약형. 푸터의 1:1문의/자주 묻는 질문에 적용 (hover 시 블루 채움).
- **버튼 (라이트)**: `#F5F5F7` 채움 + 검정 글자. 다크 패널 위에서만 블루 버튼 대신 사용.
- **칩 탭**: `#F5F5F7` 바탕 알약, 활성은 `#1D1D1F` 채움 + 흰 글자 (신상소식, MD's PICK).
- **스와이퍼/페이지네이션 화살표**: `#F5F5F7` 원형, hover `#E8E8ED`.
- **패널/배너**: 직각, 그림자 없음. 그라데이션은 이미지 하단 딤 같은 요소 단위 스크림으로만.
- **푸터**: `#F5F5F7` 배경.

## 6. 가드레일

- 패널과 상품 이미지를 둥글게 만들지 않는다.
- 블루를 제목, 배경, 아이콘에 쓰지 않는다.
- 라이트 알약과 블루 알약을 섞어 쓰지 않는다: 다크 패널 → 라이트, 밝은 패널 → 블루.
- 그림자는 떠 있는 레이어에만.
- 이탤릭 강조는 제목당 한 단어까지만.

## 7. 원복 방법

이전 디자인(Figma 561_메인)으로 되돌리려면 아래 중 하나를 사용합니다.

```bash
# 1) 이 변경을 머지했다면: 머지 커밋을 되돌리기
git revert -m 1 <머지 커밋>

# 2) 백업 브랜치 상태로 디자인 파일만 되돌리기
git checkout backup/design-figma-561 -- DESIGN.md src/app/globals.css src/components
git rm -r --cached docs/design-history 2>/dev/null; rm -rf docs/design-history
```
