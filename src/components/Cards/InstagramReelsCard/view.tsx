import { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  url: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const InstagramEmbed = ({
  url,
  width = "100%",
  height = 700,
  className,
}: Props) => {
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
    <iframe
      src={embedUrl}
      width={width}
      height={height}
      frameBorder="0"
      scrolling="no"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
      className={className}
    />
  );
};

export default InstagramEmbed;
