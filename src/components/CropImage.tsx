import Image from "next/image";
import type { Crop } from "@/data/main";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  crop?: Crop;
  priority?: boolean;
  objectPosition?: string;
};

/** 부모(position: relative) 영역을 채우는 이미지. crop이 있으면 Figma 크롭 위치 그대로 배치 */
export default function CropImage({ src, alt, sizes, crop, priority, objectPosition }: Props) {
  if (crop) {
    return (
      <span style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <span style={{ position: "absolute", ...crop }}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "fill" }} />
        </span>
      </span>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: "cover", objectPosition }}
    />
  );
}
