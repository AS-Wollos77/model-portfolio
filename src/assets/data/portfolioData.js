function getImageUrl(name) {
  return new URL(`../images/portfolio/${name}`, import.meta.url).href;
}

export const modelInfo = {
  name: 'Alice Villain',
  tagline: 'Advertising shooting & Portrait Model',
  location: 'Калуга, Россия',

  about: {
    bio: 'Привет! Я Алиса — модель, для которой съемка это всегда диалог, эксперимент и праздник. Я заряжаюсь энергией от креативных проектов, будь то смелый фэшн-лук, коммерческая реклама или атмосферная арт-съемка.Я легко обучаема, ответственна и прихожу на каждую съемку с позитивным настроем и сотней идей. Для меня важно, чтобы процесс был комфортным и продуктивным для всей команды, а результат — ярким и соответствующим брифу.Готовы создать вместе что-то крутое? Свяжитесь со мной для обсуждения вашего проекта!',
    stats: {
      height: '159 см',
      bust: '82 см',
      waist: '62 см',
      hips: '86 см',
      eyes: 'Голубые',
      hair: 'Чёрные',
    },
    skills: [
      'Позирование',
      'Работа с реквизитом',
      'Понимание основ композиции',
      'Работа с камерой',
      'Работа со светом',
    ],
  },

  contact: {
    instagram: '@Alice_Villain',
    vk: 'Alice_Villain',
    telegram: '@Alice_Villain',
    social: {
      instagram:
        'https://www.instagram.com/alice_villain?igsh=NXJiaGg4ZWE1N2Rt&utm_source=qr',
      vk: 'https://vk.com/alice_villain',
      telegram: 'https://t.me/alicevillain',
    },
  },
};
export const portfolioImages = [
  {
    id: 1,
    src: getImageUrl('samurai-1.webp'),
  },
  {
    id: 2,
    src: getImageUrl('samurai-2.webp'),
  },
  {
    id: 3,
    src: getImageUrl('pink-1.webp'),
  },
  {
    id: 4,
    src: getImageUrl('pink-2.webp'),
  },
  {
    id: 5,
    src: getImageUrl('dress.webp'),
  },
  {
    id: 6,
    src: getImageUrl('bar.webp'),
  },
  {
    id: 7,
    src: getImageUrl('mountains.webp'),
  },

  {
    id: 8,
    src: getImageUrl('gold.webp'),
  },
];
