export const getYoutubeEmbedUrl = (url: string) => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/))([^?&/]+)/,
  );

  return match ? `https://www.youtube.com/embed/${match[1]}` : "";
};

export const getCityTime = (timezone: string) => {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
};

export const getGMT = (timezone: string) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    timeZoneName: "longOffset",
  }).formatToParts(new Date());

  const offset = parts.find((part) => part.type === "timeZoneName")?.value;

  if (!offset || offset === "GMT") return "GMT+0";

  return offset.replace(/GMT([+-])0?(\d+)(?::00)?/, "GMT$1$2");
};

// Часы в списке городов идут по фиксированной шкале GMT+0…GMT+12,
// без перехода на летнее время
export const getTimeByOffset = (offsetHours: number) => {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: "UTC",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(Date.now() + offsetHours * 3600000));
};
