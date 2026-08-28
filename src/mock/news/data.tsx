import Images from "@/assets/images";

export interface News {
  id: number;
  title: {
    uz: string;
    ru: string;
    en: string;
  };
  date: string;
  images: string[];
  image: string;
  description: {
    uz: string;
    ru: string;
    en: string;
  };
  video: string | null;
  youtubeVideo: string;
  year?: string;
}

export const newsMock: News[] = [
  {
    id: 1,

    title: {
      uz: "AUTODOC Holding rahbariyati jamoani Qurbon hayiti bilan tabrikladi",
      ru: "Руководство AUTODOC Holding поздравило команду с Курбан-хайитом",
      en: "",
    },

    date: "27.05.2026",

    images: [
      Images.news1$1,
      Images.news1$2,
      Images.news1$3,
      Images.news1$4,
      Images.news1$5,
    ],

    image: Images.news1$1,

    description: {
      uz: `2026-yil 27-may kuni Qurbon hayiti munosabati bilan AUTODOC Holding ta’sischisi va raisi Sardor Shuxratovich xodimlar uchun samimiy va ko‘tarinki ruhdagi videotabrik tayyorladi.

Bayram kunlari xorijda bo‘lishiga qaramay, Sardor Shuxratovich jamoani e’tiborsiz qoldirmadi va tabrikni oldindan yozib oldi. Bu AUTODOC Holding korporativ madaniyatining muhim tamoyillaridan birini — qayerda bo‘lishingizdan qat’i nazar, jamoa bilan doimiy muloqot va yaqin aloqani saqlash muhimligini yana bir bor namoyon etdi.

Kuchli jamoani nafaqat umumiy maqsadlar, balki o‘zaro e’tibor, hurmat va ochiq muloqot ham birlashtiradi.

Videotabrikni havola orqali tomosha qilishingiz mumkin.`,

      ru: `27 мая 2026 года, в честь праздника Курбан-хайит, учредитель и председатель AUTODOC Holding Сардор Шухратович подготовил для сотрудников тёплое и необычное видеопоздравление.

Несмотря на то, что в праздничные дни Сардор Шухратович находился за рубежом, он заранее записал видео, чтобы лично поздравить команду. Это ещё раз отражает один из важных принципов корпоративной культуры AUTODOC Holding: где бы вы ни находились, важно сохранять связь с сотрудниками и поддерживать постоянную коммуникацию внутри команды.

Сильную команду объединяют не только общие цели, но и взаимное внимание, уважение и открытое общение.

Посмотреть видеопоздравление можно по ссылке.`,
      en: "",
    },

    video: null,

    youtubeVideo: "https://youtu.be/fBSoL0y2DeA?si=jZGuZKI0ZuVcvFFD",
  },
  {
    id: 2,

    title: {
      uz: "AUTODOC Holding jamoasi Sardor Shuxratovichni Qurbon hayiti bilan tabrikladi",
      ru: "Команда AUTODOC Holding поздравила Сардора Шухратовича с Курбан-хайитом",
      en: "",
    },

    date: "07.05.2026",

    images: [Images.news2$1],

    image: Images.news2$1,

    description: {
      uz: `Qurbon hayiti munosabati bilan AUTODOC Holding xodimlari Holding ta’sischisi va raisi Sardor Shuxratovichni bayram bilan samimiy tabrikladilar.

Jamoa o‘zining ezgu tilaklarini bildirib, Sardor Shuxratovichga mustahkam sog‘liq, oilaviy farovonlik, xotirjamlik hamda barcha tashabbus va maqsadlarida muvaffaqiyat tiladi.

Bunday an’analar AUTODOC Holding korporativ madaniyatining muhim qismi bo‘lib, jamoa va rahbariyat o‘rtasidagi o‘zaro hurmat, samimiy muloqot va birdamlikni aks ettiradi.

Jamoaning bayram tabrigini havola orqali tomosha qilishingiz mumkin.`,

      ru: `В честь Курбан-хайита сотрудники AUTODOC Holding тепло поздравили учредителя и председателя Холдинга Сардора Шухратовича с праздником.

Команда выразила искренние пожелания крепкого здоровья, семейного благополучия, мира и успехов во всех начинаниях.

Подобные традиции являются важной частью корпоративной культуры AUTODOC Holding и отражают взаимное уважение, открытое общение и единство команды и руководства.

Посмотреть праздничное поздравление сотрудников можно по ссылке.`,
      en: "",
    },

    video: null,

    youtubeVideo: "https://youtu.be/yb3WWMLp-dY?si=He0e5Eyit7uXhBUx",
  },
  {
    id: 3,

    title: {
      uz: "O‘zbekiston — Portugaliya uchrashuvini jamoaviy tomosha qilish",
      ru: "Командный просмотр матча Узбекистан — Португалия",
      en: "",
    },

    date: "23.06.2026",

    images: [Images.news3$1],

    image: Images.news3$1,

    description: {
      uz: `23-iyun kuni AUTODOC Holding jamoasi nonushta atrofida jam bo‘lib, O‘zbekiston terma jamoasini Portugaliyaga qarshi uchrashuvda birgalikda qo‘llab-quvvatladi.

O‘yin natijasi qanday bo‘lishidan qat’i nazar, bunday lahzalarni hamkasblar bilan birga o‘tkazish, terma jamoamizga birgalikda muxlislik qilish va bir jamoa bo‘lib birlashish biz uchun doimo quvonchli.

Videoni havola orqali tomosha qiling.`,

      ru: `23 июня команда AUTODOC Holding собралась вместе за завтраком, чтобы поддержать сборную Узбекистана в матче против Португалии.

Какой бы ни был исход матча, мы рады разделить такие моменты с коллегами, вместе болеть за нашу сборную и просто быть одной командой.

Смотрите видео по ссылке.`,
      en: "",
    },

    video: null,

    youtubeVideo: "https://youtube.com/shorts/RxLmcESwrKg?si=BAWeETKGCKyeajpe",
  },
  {
    id: 4,

    title: {
      uz: "Sardor Shuxratovich bilan biznes nonushta",
      ru: "Первый CEO Breakfast в AUTODOC: победители B&B за одним столом с Сардором Шухратовичем",
      en: "",
    },

    date: "10.08.2026",

    images: [Images.news4$1, Images.news4$2, Images.news4$3, Images.news4$4],

    image: Images.news4$1,

    description: {
      uz: `10-avgust kuni AUTODOC Holding’da Holding ta’sischisi va raisi Sardor Shuxratovich ishtirokidagi ilk CEO Breakfast bo‘lib o‘tdi.

Nonushta ishtirokchilari iyul oyi davomida Holding xodimlari o‘rtasida o‘tkazilgan B&B onlayn viktorinasida eng yuqori ball to‘plagan to‘rt nafar xodim bo‘ldi.

Uchrashuv davomida g‘oliblar Sardor Shuxratovich bilan kompaniya rivoji va xodimlar uchun ish sharoitlarini yaxshilash bo‘yicha o‘z fikr va takliflarini bevosita muhokama qildilar.

Oy davomida eng yuqori natijani qayd etgan ishtirokchi esa jamoa uchun bitta istak bildirish imkoniyatiga ega bo‘ldi. Uchrashuvda xorijda dam olish, xodimlar uchun zamonaviy sport majmuasi va yopiq avtoturargoh tashkil etish bo‘yicha takliflar bildirildi.

Suhbat yakunida Sardor Shuxratovich qator takliflarni qo‘llab-quvvatlab, ularni amalga oshirish bo‘yicha qarorlar qabul qildi.

Ilk CEO Breakfast qanday o‘tgani — videoda. Havola orqali tomosha qiling.`,

      ru: `10 августа в AUTODOC Holding прошёл первый CEO Breakfast с учредителем и председателем Холдинга Сардором Шухратовичем.

Участниками завтрака стали четыре сотрудника, набравшие наибольшее количество баллов в июльской онлайн-викторине B&B, которая в течение месяца проходила среди сотрудников Холдинга.

За завтраком победители смогли напрямую обсудить с Сардором Шухратовичем свои идеи и предложения по развитию компании и улучшению условий для команды.

Отдельное право получил лидер месяца — возможность озвучить пожелание для команды. В ходе встречи сотрудники предложили три инициативы: зарубежный отпуск, современный спортивный комплекс для сотрудников и крытую парковку.

По итогам разговора Сардор Шухратович поддержал ряд предложений и принял решения по их реализации.

Как прошёл первый CEO Breakfast — смотрите в видео по ссылке.`,
      en: "",
    },

    video: null,

    youtubeVideo: "https://youtube.com/shorts/u3UERxTpQXQ?si=PxABxM_LusKAVKSY",
  },
  {
    id: 5,

    title: {
      uz: "AUTODOC migratsiya xizmatlarini raqamlashtirish uchun infokiosklarni joriy etdi",
      ru: "AUTODOC внедряет инфокиоски для цифровизации миграционных услуг",
      en: "",
    },

    date: "10.08.2025",

    images: [Images.news5$1, Images.news5$2],

    image: Images.news5$1,

    description: {
      uz: `Ichki ishlar organlari xizmatlarini raqamlashtirish doirasida AUTODOC migratsiya va personallashtirish bo‘linmalari uchun zamonaviy infokiosklarni ishlab chiqdi va joriy etdi.

Yechim xizmatlardan foydalanish jarayonlarini tizimlashtirish, ularning bir qismini raqamli shaklga o‘tkazish hamda fuqarolarning davlat xizmatlaridan foydalanishini yanada sodda va qulay qilish imkonini beradi.

Loyiha O‘zbekiston Respublikasi Prezidentining 2026-yil 19-yanvardagi PQ-14-son qarori doirasida migratsiya va personallashtirish sohasini raqamli transformatsiya qilish bo‘yicha belgilangan vazifalar asosida amalga oshirilmoqda.

Infokiosklarning joriy etilishi AUTODOC tomonidan zamonaviy davlat xizmatlari raqamli infratuzilmasini rivojlantirish yo‘lida amalga oshirilgan navbatdagi amaliy qadamdir.

Loyiha haqida batafsil — havoladagi videoda.`,

      ru: `В рамках цифровизации услуг органов внутренних дел AUTODOC разработал и внедрил современные инфокиоски для подразделений миграции и персонализации.

Решение позволяет систематизировать получение услуг, перевести часть процессов в цифровой формат и сделать взаимодействие граждан с государственными сервисами проще и удобнее.

Проект реализуется в рамках инициатив по цифровой трансформации сферы миграции и персонализации, предусмотренных Постановлением Президента Республики Узбекистан № ПП-14 от 19 января 2026 года.

Инфокиоски стали еще одним практическим шагом AUTODOC в развитии современной цифровой инфраструктуры государственных услуг.

Подробнее о проекте — в видео по ссылке.`,
      en: "",
    },

    video: null,

    youtubeVideo: "https://youtu.be/hMgzqhguziU?si=JN9WNYArG73EvChG",
  },
];
