import { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  url: string;
  className?: string;
}

// Instagram's /embed page draws its own white header (profile row) and footer
// ("more on Instagram") around the media. It is cross-origin, so none of it can
// be styled from here — instead the iframe is oversized and pulled up so only
// the media area shows through the wrapper.
const HEADER_CROP = 60; // px of the embed hidden above the top edge
const CHROME_HEIGHT = 140; // extra iframe height, pushing the footer past the bottom edge
const SIDE_BLEED = 24; // extra iframe width; scales the media up so the crop has slack

const InstagramEmbed = ({ url, className }: Props) => {
  const { t } = useTranslation();
  const embedUrl = useMemo(() => {
    const match = url.match(/instagram\.com\/reel\/([^/?]+)/);

    if (!match) return "";

    return `https://www.instagram.com/reel/${match[1]}/embed`;
  }, [url]);

  if (!embedUrl) {
    return <div>{t("invalidInstagramLink")}</div>;
  }

  return (
    <div
      className={`relative overflow-hidden bg-black aspect-[4/5] ${className ?? ""}`}
    >
      <iframe
        src={embedUrl}
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="absolute border-0"
        style={{
          top: -HEADER_CROP,
          left: -SIDE_BLEED / 2,
          width: `calc(100% + ${SIDE_BLEED}px)`,
          height: `calc(100% + ${CHROME_HEIGHT}px)`,
        }}
      />
    </div>
  );
};

export default InstagramEmbed;
