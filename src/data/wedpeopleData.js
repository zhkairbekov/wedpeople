export const BRAND_INFO = {
  name: "WEDPEOPLE",
  tagline: "WedPeople — свадебные истории со вкусом.",
  subheadline:
    "Мы создаём свадьбы с любовью, уважением и заботой о каждой паре. Нам доверяют самые важные моменты, к нам возвращаются за уверенностью, спокойствием и вдохновением.",
  manifestoParagraphs: [
    "Мы создаём свадьбы с любовью, уважением и заботой о каждой паре.",
    "Нам доверяют самые важные моменты, к нам возвращаются за уверенностью, спокойствием и вдохновением.",
    "Каждая история — особенная. Мы бережно сопровождаем вас на пути к дню, который станет началом вашей семейной истории, превращая подготовку в удовольствие, а мечты — в продуманную реальность.",
  ],
  manifestoSignoff: "С любовью, команда WedPeople",
  founderName: "Гульмира",
  founderHandle: "@g.erikovna",
  founderUrl: "https://www.instagram.com/g.erikovna/",
  instagramHandle: "@wedpeople",
  instagramUrl: "https://www.instagram.com/wedpeople/",
  phoneDisplay: "+7 777 767 08 35",
  phoneRaw: "+77777670835",
  whatsappBaseUrl: "https://wa.me/77777670835",
  whatsappDefaultUrl:
    "https://wa.me/77777670835?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B5",
  cities: "ASTANA • ALMATY",
  citiesRu: "Астана & Алматы",
};

export const LOCALIZED_CONTENT = {
  ru: {
    brand: {
      ...BRAND_INFO,
      tagline: "WedPeople — свадебные истории со вкусом.",
      manifestoSignoff: "С любовью, команда WedPeople",
      founderName: "Гульмира",
      whatsappDefaultUrl:
        "https://wa.me/77777670835?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B5",
    },
    nav: {
      ariaMain: "Основная навигация",
      ariaMobileMenu: "Мобильное меню WedPeople",
      bookMeeting: "Запланировать встречу",
      menuButton: "Меню",
      openMenuAria: "Открыть меню",
      closeMenuAria: "Закрыть меню",
      closeButton: "Закрыть",
      langLabel: "Язык интерфейса",
      items: [
        {
          index: "01",
          label: "Философия",
          mobileTitle: "Философия и манифест",
          mobileSubtitle: "Ценности и почерк команды WedPeople",
          href: "#philosophy",
        },
        {
          index: "02",
          label: "Истории",
          mobileTitle: "Истории пар (Портфолио)",
          mobileSubtitle: "Реализованные свадьбы и Қыз ұзату",
          href: "#stories",
        },
        {
          index: "03",
          label: "Культура и смысл",
          mobileTitle: "Современное Қыз ұзату",
          mobileSubtitle: "Когда традиции чувствуют, а не просто показывают",
          href: "#culture",
        },
        {
          index: "04",
          label: "Форматы",
          mobileTitle: "Форматы и услуги",
          mobileSubtitle: "От камерных ужинов до свадеб полного цикла",
          href: "#formats",
        },
        {
          index: "05",
          label: "Процесс",
          mobileTitle: "Прозрачный процесс и бюджет",
          mobileSubtitle: "4 выверенных шага без стресса и скрытых смет",
          href: "#process",
        },
        {
          index: "06",
          label: "Контакты",
          mobileTitle: "Запланировать встречу",
          mobileSubtitle: "Астана • Алматы • Прямой диалог с агентством",
          href: "#concierge",
        },
      ],
    },
    hero: {
      sectionAria: "Главный экран WedPeople",
      metaLeft: "01 / HERO ARCHIVE",
      metaCenter: "СВАДЕБНОЕ АГЕНТСТВО ПОЛНОГО ЦИКЛА • АСТАНА & АЛМАТЫ",
      metaRight: "КАМЕРНОСТЬ • МАСШТАБ • КУЛЬТУРНЫЙ КОД",
      seasonBadge: "ASTANA • ALMATY • СЕЗОН 2026",
      headlinePrefix: "WedPeople —",
      headlineMiddle: "свадебные ",
      headlineItalic: "истории со вкусом.",
      subtitle:
        "Мы создаём свадьбы с любовью, уважением и заботой о каждой паре. Превращаем подготовку в удовольствие, а ваши сокровенные мечты — в продуманную реальность.",
      primaryCta: "Запланировать встречу",
      secondaryCta: "Смотреть истории пар",
      frameCounterPrefix: "КАДР",
      tablistAria: "Переключение архивных кадров",
      showFrameAria: "Показать кадр",
      macroAlt: "Детали авторской сервировки и флористики WedPeople",
      showcaseFrames: [
        {
          id: "madee",
          src: "/images/hero-couple.jpg",
          tag: "REAL STORY • ALMATY",
          title: "MADEE & GULSEZIM",
          venue: "SWISSÔTEL ALATAU",
          alt: "Editorial портрет свадьбы Madee & Gulsezim от WedPeople",
        },
        {
          id: "tilda-archive-1",
          src: "/images/tilda-slide-1.webp",
          tag: "WEDPEOPLE ARCHIVE • 01",
          title: "ИСТОРИЯ ЛЮБВИ СО ВКУСОМ",
          venue: "АВТОРСКАЯ КОНЦЕПЦИЯ",
          alt: "Оригинальный архивный кадр свадебного торжества WedPeople",
        },
        {
          id: "tilda-archive-2",
          src: "/images/tilda-slide-2.webp",
          tag: "WEDPEOPLE ARCHIVE • 02",
          title: "КАМЕРНОСТЬ И ЭМОЦИИ",
          venue: "ЖИВЫЕ МОМЕНТЫ",
          alt: "Оригинальный кадр невесты и жениха из портфолио WedPeople",
        },
      ],
      pillars: [
        {
          code: "01 / КОНЦЕПТ",
          label: "Индивидуальная режиссура и точность воплощения эскизов",
        },
        {
          code: "02 / НАСЛЕДИЕ",
          label: "Современное Қыз ұзату и глубокое уважение к традициям",
        },
        {
          code: "03 / ДОВЕРИЕ",
          label: "Прозрачный бюджет, честность и спокойствие пары",
        },
      ],
    },
    philosophy: {
      sectionAria: "Философия и манифест WedPeople",
      metaLeft: "02 / ФИЛОСОФИЯ",
      metaCenter: "МАНИФЕСТ WEDPEOPLE",
      metaRight: "ЛЮБОВЬ • УВАЖЕНИЕ • ЗАБОТА",
      quote:
        "«Мы создаём свадьбы с любовью, уважением и заботой о каждой паре. Нам доверяют самые важные моменты, к нам возвращаются за уверенностью, спокойствием и вдохновением. Каждая история — особенная.»",
      subtext:
        "Мы бережно сопровождаем вас на пути к дню, который станет началом вашей семейной истории, превращая подготовку в удовольствие, а мечты — в продуманную реальность.",
      pillars: [
        {
          index: "01 / ТОЧНОСТЬ",
          title: "Идея и точность эскиза",
          description:
            "Каждое мероприятие начинается не с монтажа, а с идеи. Мы создаем детальные визуализации и сценографию, а финальный результат в точности повторяет наши эскизы.",
          footerTag: "ОТ КОНЦЕПТА ДО РЕАЛИЗАЦИИ",
          iconName: "compass",
        },
        {
          index: "02 / КУЛЬТУРА",
          title: "Чувствовать традиции",
          description:
            "Когда традиции чувствуют, а не просто показывают. Бережная современная интерпретация казахской культуры, сакральных смыслов и семейного тепла без шаблонов.",
          footerTag: "ГЛУБИНА & СМЫСЛЫ",
          iconName: "feather",
        },
        {
          index: "03 / БАЛАНС",
          title: "Прозрачность и покой",
          description:
            "В WedPeople мы уверены, что свадьба должна приносить радость, а не стресс. Поэтому прозрачность, честность и грамотное планирование — основа нашей работы.",
          footerTag: "ФИНАНСОВЫЙ КОМФОРТ",
          iconName: "shield",
        },
      ],
    },
    portfolio: {
      sectionAria: "Реализованные проекты и истории пар WedPeople",
      metaLeft: "03 / ИСТОРИИ ПАР",
      heading: "Реализованные проекты со вкусом",
      filterAria: "Фильтр проектов по формату",
      openStoryCta: "Открыть историю и галерею",
      openCaseCta: "Смотреть кейс и команду",
      filterTabs: [
        { id: "all", label: "Все проекты" },
        { id: "weddings", label: "Свадебные торжества" },
        { id: "uzatu", label: "Қыз ұзату" },
        { id: "fashion", label: "Fashion & Special" },
      ],
      cases: [
        {
          id: "madee-gulsezim",
          archiveNumber: "Archive Case No. 01",
          category: "weddings",
          categoryLabel: "Свадебные торжества",
          badge: "HEADLINE STORY",
          dateOrCity: "13.08.2026 • ALMATY",
          city: "Алматы",
          venue: "Swissôtel Wellness Resort Alatau Almaty",
          title: "Madee & Gulsezim",
          coupleHandles: "@mdeemusic & @hsnglsm",
          shortSummary:
            "Свадьба двух музыкантов и визионеров в предгорьях Заилийского Алатау. Интеграция живого звука, минималистичные зеркальные формы среди соснового бора и камерная атмосфера бесконечной любви.",
          editorialQuote:
            "«Свадьба двух музыкантов и визионеров. Шепот струнного оркестра, минималистичные архитектурные формы на фоне соснового леса и предгорий Алатау.»",
          fullStory:
            "Для Мади (@mdeemusic) и Гульсезим (@hsnglsm) было важно сохранить ощущение живого воздуха, искренней музыки и свободы от банкетных клише. Площадка Swissôtel Wellness Resort Alatau в Алматы стала естественным продолжением концепции: сценография от ERNI Creative растворилась в природном ландшафте, а световая партитура от Altsound Group мягко перевела закатную церемонию в душевный вечер под открытым небом.",
          coverImage: "/images/case-madee.jpg",
          coverAlt:
            "Свадебная церемония Madee & Gulsezim в Swissôtel Wellness Resort Alatau Almaty от агентства WedPeople",
          layoutSpan: "featured",
          credits: [
            { role: "Организация", name: "WedPeople Agency", handle: "@wedpeople" },
            { role: "Локация", name: "Swissôtel Wellness Resort Alatau Almaty" },
            { role: "Декор", name: "ERNI Creative", handle: "@erni.creative" },
            {
              role: "Фотографы",
              name: "Seydazzimov, Syzdykov, Turar Aidosov",
              handle: "@seydazzimov",
            },
            {
              role: "Видеопродакшн",
              name: "Seydazimoff & Baktigaliev",
              handle: "@seydazimoff",
            },
            { role: "Ведущий", name: "Soltanbayev", handle: "@soltanbayev" },
            {
              role: "Свет & Техпродакшн",
              name: "Altsound Group",
              handle: "@altsound_group",
            },
          ],
          gallery: [
            {
              src: "/images/case-madee.jpg",
              tag: "01 / Церемония",
              caption: "Архитектурный алтарь среди сосен Swissôtel Alatau",
              alt: "Церемония Madee & Gulsezim",
            },
            {
              src: "/images/hero-couple.jpg",
              tag: "02 / Портрет пары",
              caption: "Эстетика образов жениха и невесты в лучах заката",
              alt: "Портрет пары Madee & Gulsezim",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "03 / Детали ужина",
              caption: "Авторская сервировка, тактильный текстиль и живой свет свечей",
              alt: "Сервировка стола Madee & Gulsezim",
            },
            {
              src: "/images/tilda-slide-1.webp",
              tag: "04 / Архив WedPeople",
              caption: "Живые эмоции и трепетные объятия в объективе команды",
              alt: "Архивный кадр WedPeople",
            },
          ],
        },
        {
          id: "alina-uzatu",
          archiveNumber: "Archive Case No. 02",
          category: "uzatu",
          categoryLabel: "Қыз ұзату",
          badge: "ҚЫЗ ҰЗАТУ",
          dateOrCity: "ASTANA • THE RITZ-CARLTON",
          city: "Астана",
          venue: "The Ritz-Carlton, Astana",
          title: "Қыз ұзату Алины (A&A Wedding)",
          coupleHandles: "A&A Wedding • @g.erikovna",
          shortSummary:
            "«Мы сохранили все важные, красивые традиции и семейное тепло на Қыз ұзату Алины». Легкость шелка, живое звучание и современное чествование невесты в кругу самых близких.",
          editorialQuote:
            "«Мы сохранили все важные, красивые традиции и семейное тепло на Қыз ұзату Алины.»",
          fullStory:
            "Проводы невесты в бальном зале The Ritz-Carlton, Astana объединили статусное гостеприимство и сокровенную семейную интимность. Вместе с декоратором Динарой Альменовой мы выстроили воздушную сценографию, где каждый традиционный ритуал — от встречи гостей до финальной дорожки Ақ жол — звучал органично, современно и благородно под музыкальное сопровождение Кайрата Баекенова.",
          coverImage: "/images/case-alina.jpg",
          coverAlt:
            "Современное Қыз ұзату Алины в The Ritz-Carlton Astana от агентства WedPeople",
          layoutSpan: "portrait",
          credits: [
            {
              role: "Организация",
              name: "WedPeople & Гульмира",
              handle: "@wedpeople / @g.erikovna",
            },
            { role: "Локация", name: "The Ritz-Carlton, Astana" },
            {
              role: "Сценография & Декор",
              name: "Dinara Almenova",
              handle: "@dinara_almenova",
            },
            {
              role: "Технический продакшн",
              name: "AV Service KZ",
              handle: "@av_service.kz",
            },
            {
              role: "Ведущие вечера",
              name: "Muhammed Taraz & Maya Veronskaya",
              handle: "@muhammed_taraz",
            },
            {
              role: "Музыкальный хедлайнер",
              name: "Kairat Baekenov",
              handle: "@kairat_baekenov",
            },
            { role: "Видео", name: "M. Levchuk", handle: "@mlevchuk" },
          ],
          gallery: [
            {
              src: "/images/case-alina.jpg",
              tag: "01 / Образ невесты",
              caption: "Современный национальный силуэт и утонченная вышивка",
              alt: "Қыз ұзату Алины в The Ritz-Carlton Astana",
            },
            {
              src: "/images/culture-spotlight.jpg",
              tag: "02 / Ақ жол",
              caption: "Световая драматургия обряда проводов невесты",
              alt: "Обряд проводов невесты",
            },
            {
              src: "/images/tilda-slide-2.webp",
              tag: "03 / Эмоции близких",
              caption: "Искренние минуты родительского благословения",
              alt: "Семейное тепло на торжестве WedPeople",
            },
          ],
        },
        {
          id: "aruzhan-qarlygash",
          archiveNumber: "Archive Case No. 03",
          category: "uzatu",
          categoryLabel: "Қыз ұзату",
          badge: "САКРАЛЬНЫЙ СМЫСЛ",
          dateOrCity: "АВТОРСКАЯ РЕЖИССУРА • ASTANA",
          city: "Астана",
          venue: "Авторская концепция Қыз ұзату",
          title: "Узату Аружан — Символ «Қарлығаш»",
          coupleHandles: "Bride @arukaboo",
          shortSummary:
            "Орнамент «Қарлығаш» — знак прощания с родным домом, чистых намерений и счастливого пути в новую жизнь. Этот символ Аружан выбрала сама — сердцем, как оберег и напоминание о доме, который всегда ждёт.",
          editorialQuote:
            "«В казахской культуре орнамент — язык смысла. Wed People — когда традиции чувствуют, а не просто показывают.»",
          fullStory:
            "Узату Аружан (@arukaboo) стало воплощением нашего подхода: каждый визуальный жест должен нести личный смысл. Выбранный невестой орнамент ласточки («Қарлығаш») лег в основу всей архитектуры зала, созданной с Динарой Альменовой, и кутюрного образа от Elmira Designer. Ласточка символизирует весну, чистоту девичьей души и материнское благословение, оберегающее новую семью.",
          coverImage: "/images/case-aruzhan.jpg",
          coverAlt:
            "Узату Аружан с авторским орнаментом Қарлығаш от свадебного агентства WedPeople",
          layoutSpan: "portrait",
          credits: [
            { role: "Организация", name: "WedPeople Agency", handle: "@wedpeople" },
            { role: "Невеста", name: "Аружан", handle: "@arukaboo" },
            {
              role: "Образ невесты",
              name: "Elmira Designer",
              handle: "@elmiradesigner",
            },
            { role: "Декор", name: "Dinara Almenova", handle: "@dinara_almenova" },
            {
              role: "Фотографы",
              name: "Tamerlan Uderov & Seydazzimov",
              handle: "@tamerlan_uderov",
            },
            {
              role: "Видео",
              name: "Swagg Video Astana",
              handle: "@swagg_video_astana",
            },
          ],
          gallery: [
            {
              src: "/images/case-aruzhan.jpg",
              tag: "01 / Мотив «Қарлығаш»",
              caption: "Интеграция священного орнамента ласточки в сценографию зала",
              alt: "Символ Қарлығаш в декоре",
            },
            {
              src: "/images/culture-spotlight.jpg",
              tag: "02 / Сакральный выход",
              caption: "Камерный свет и кутюрный образ от @elmiradesigner",
              alt: "Выход невесты Аружан",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "03 / Тактильная эстетика",
              caption: "Авторская полиграфия и флористические акценты",
              alt: "Детали сервировки и полиграфии",
            },
          ],
        },
        {
          id: "wedding-zd",
          archiveNumber: "Archive Case No. 04",
          category: "weddings",
          categoryLabel: "Свадебные торжества",
          badge: "TIMELESS ELEGANCE",
          dateOrCity: "ASTANA • THE RITZ-CARLTON",
          city: "Астана",
          venue: "The Ritz-Carlton, Astana",
          title: "Wedding Z&D",
          coupleHandles: "Bride @danaa.ql",
          shortSummary:
            "Элегантная европейская подача в диалоге с тонким восточным гостеприимством в The Ritz-Carlton, Astana. Торжество, где архитектура света и живой флористики подчеркивала каждую эмоцию гостей.",
          editorialQuote:
            "«Гармония архитектурного масштаба, безупречного света и живых эмоций, к которым хочется возвращаться.»",
          fullStory:
            "Для пары Z&D (@danaa.ql) мы создали вневременное классическое пространство в The Ritz-Carlton, Astana. В сотрудничестве с декоратором Ириной Лориной (@irina_lorina) и технической командой AV Service KZ зал превратился в светлую галерею с парящими текстильными линиями, скульптурной флористикой и деликатной посадкой гостей.",
          coverImage: "/images/case-zd.jpg",
          coverAlt:
            "Свадебное торжество Wedding Z&D в The Ritz-Carlton Astana от WedPeople",
          layoutSpan: "wide",
          credits: [
            {
              role: "Организация",
              name: "WedPeople & Гульмира",
              handle: "@wedpeople / @g.erikovna",
            },
            { role: "Невеста", name: "Dana", handle: "@danaa.ql" },
            { role: "Локация", name: "The Ritz-Carlton, Astana" },
            { role: "Декор", name: "Irina Lorina", handle: "@irina_lorina" },
            {
              role: "Техпродакшн",
              name: "AV Service KZ",
              handle: "@av_service.kz",
            },
            { role: "Фотограф", name: "Seydazzimov", handle: "@seydazzimov" },
          ],
          gallery: [
            {
              src: "/images/case-zd.jpg",
              tag: "01 / Архитектура зала",
              caption:
                "Воздушные текстильные полотна и живая флористика в The Ritz-Carlton",
              alt: "Зал торжества Wedding Z&D",
            },
            {
              src: "/images/tilda-slide-1.webp",
              tag: "02 / Момент вдвоем",
              caption: "Editorial-портрет пары в день свадьбы",
              alt: "Портрет пары",
            },
            {
              src: "/images/tilda-slide-2.webp",
              tag: "03 / Вне времени",
              caption: "Эстетика кадра, сохраняющая актуальность через десятилетия",
              alt: "Архивный портрет WedPeople",
            },
          ],
        },
        {
          id: "ainur-fashion-show",
          archiveNumber: "Archive Case No. 05",
          category: "fashion",
          categoryLabel: "Fashion & Special",
          badge: "COUTURE & HERITAGE",
          dateOrCity: "ASTANA • THE ST. REGIS / RITZ-CARLTON",
          city: "Астана",
          venue: "The St. Regis Astana / The Ritz-Carlton, Astana",
          title: "Ainur Qyz Uzatu & Wedding Fashion Show",
          coupleHandles: "Dala Kazakhstan & Zhanna Malikova",
          shortSummary:
            "Синтез высокой моды и традиций прощания невесты. Авторский подиумный показ кутюрных коллекций казахстанских дизайнеров в рамках торжества.",
          editorialQuote:
            "«Когда национальное наследие обретает подиумное звучание и превращает вечер в культурное событие.»",
          fullStory:
            "Уникальный формат торжества Айнур объединил сакральную церемонию Қыз ұзату с полноценным закрытым Fashion Show. На подиуме были представлены образы от Dala Kazakhstan (@dala.kazakhstan) и Жанны Маликовой (@zhanna_malikova_affishial), а сценография от Динары Альменовой и режиссура с ведущим Данияром Макашевым создали атмосферу недели высокой моды.",
          coverImage: "/images/case-ainur.jpg",
          coverAlt:
            "Ainur Qyz Uzatu & Wedding Fashion Show в Астане от агентства WedPeople",
          layoutSpan: "square",
          credits: [
            { role: "Организация", name: "WedPeople Agency", handle: "@wedpeople" },
            {
              role: "Локации",
              name: "The St. Regis Astana & The Ritz-Carlton, Astana",
            },
            { role: "Декор", name: "Dinara Almenova", handle: "@dinara_almenova" },
            {
              role: "Кутюрье показа",
              name: "Dala Kazakhstan & Zhanna Malikova",
              handle: "@dala.kazakhstan",
            },
            {
              role: "Ведущий",
              name: "Daniyar Makashev",
              handle: "@daniyar_makashev",
            },
            {
              role: "Фотографы",
              name: "Tamerlan Uderov & Seydazzimov",
              handle: "@tamerlan_uderov",
            },
          ],
          gallery: [
            {
              src: "/images/case-ainur.jpg",
              tag: "01 / Wedding Fashion Show",
              caption: "Подиумная постановка и кутюрные национальные силуэты",
              alt: "Показ высокой моды на Қыз ұзату Айнур",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "02 / Сценография",
              caption: "Камерная сервировка и игра фактур в вечернем свете",
              alt: "Детали сервировки",
            },
          ],
        },
        {
          id: "salone-sketch-realization",
          archiveNumber: "Archive Case No. 06",
          category: "fashion",
          categoryLabel: "Fashion & Special",
          badge: "ЭСКИЗ 1 В 1",
          dateOrCity: "ASTANA • SALONE DEL GUSTO",
          city: "Астана",
          venue: "Salone del Gusto, Astana",
          title: "От эскиза до реальности — Salone del Gusto",
          coupleHandles: "100% точность 3D-концепта",
          shortSummary:
            "«Каждое мероприятие начинается не с монтажа, а с идеи... В этом проекте финальный результат полностью повторил наши эскизы.» Камерная архитектура ужина и безупречный свет.",
          editorialQuote:
            "«Каждое мероприятие начинается не с монтажа, а с идеи. В этом проекте финальный результат полностью повторил наши эскизы.»",
          fullStory:
            "Камерное событие в Salone del Gusto (Астана) стало эталонным примером инженерной и художественной дисциплины WedPeople. Вместе с декоратором Айжан Аягановой (@decor_ayaganova) и световым продакшном FX Events (@fxeventskz) мы перенесли 3D-эскизы в реальное пространство с точностью до каждого флористического акцента и блика на хрустале.",
          coverImage: "/images/tilda-slide-1.webp",
          coverAlt:
            "Реализация эскиза один в один в Salone del Gusto Astana от агентства WedPeople",
          layoutSpan: "featured",
          credits: [
            { role: "Организация", name: "WedPeople Agency", handle: "@wedpeople" },
            { role: "Локация", name: "Salone del Gusto, Astana" },
            {
              role: "Декор & Эскизы",
              name: "Decor Ayaganova",
              handle: "@decor_ayaganova",
            },
            {
              role: "Фотограф",
              name: "Timur Uteshbekov",
              handle: "@timuruteshbekov",
            },
            { role: "Свет", name: "FX Events KZ", handle: "@fxeventskz" },
            { role: "Ведущий", name: "Daniyar", handle: "@danchik_show" },
          ],
          gallery: [
            {
              src: "/images/tilda-slide-1.webp",
              tag: "01 / Оригинальный архив",
              caption: "Искренность момента в обрамлении выверенной эстетики",
              alt: "Оригинальный кадр WedPeople",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "02 / Точность деталей",
              caption: "Стопроцентное совпадение финальной сервировки с 3D-эскизом",
              alt: "Сервировка Salone del Gusto",
            },
            {
              src: "/images/tilda-slide-2.webp",
              tag: "03 / Эмоциональный портрет",
              caption: "Свадебная история, созданная со вкусом и любовью",
              alt: "Портрет пары WedPeople",
            },
          ],
        },
      ],
    },
    drawer: {
      closeAria: "Закрыть карточку проекта",
      closeButton: "Закрыть",
      galleryLabel: "Галерея торжества",
      prevSlideAria: "Предыдущий кадр",
      nextSlideAria: "Следующий кадр",
      storyHeading: "О концепции и реализации",
      creditsHeading: "Команда проекта (Credits)",
      conciergeBadge: "Консьерж-сервис WedPeople",
      conciergeTitle: "Хотите обсудить похожий проект?",
      conciergeSubtitle:
        "Обсудим концепцию вашей истории за чашкой кофе в Астане, Алматы или онлайн.",
      nameLabel: "Имя и фамилия",
      namePlaceholder: "Айгерим и Данияр",
      seasonLabel: "Выбор сезона / формата",
      seasonOptions: [
        "Весна 2026 (Май – Июнь)",
        "Лето 2026 (Июль – Август)",
        "Осень 2026 (Сентябрь – Ноябрь)",
        "Қыз ұзату (Индивидуальная дата)",
      ],
      submitButton: "Обсудить кейс в WhatsApp",
      securityNote: "Мгновенный переход в диалог с продюсером WedPeople",
      buildWhatsappMessage: (projectTitle, clientName, season) =>
        `Здравствуйте, команда WedPeople! Нам очень понравился ваш кейс «${projectTitle}». Меня зовут ${
          clientName.trim() || "..."
        }. Хотим запланировать встречу (${season}).`,
    },
    culture: {
      sectionAria: "Культурный код и современное Қыз ұзату",
      metaLeft: "04 / КУЛЬТУРНЫЙ КОД",
      metaRight: "СОВРЕМЕННОЕ ҚЫЗ ҰЗАТУ",
      headingLine1: "Когда традиции чувствуют,",
      headingItalic: "а не просто показывают.",
      paragraph1:
        "В казахской культуре орнамент и ритуал — это живой язык смыслов, передаваемый из поколения в поколение. Мы убираем шаблонный пафос и возвращаем свадебным обрядам их первозданную глубину и семейную теплоту.",
      paragraph2:
        "Каждый элемент Қыз ұзату от WedPeople — это трепетное признание в любви родным, благословение родителей и нежное прощание с отчим домом, воплощенное в безупречной современной эстетике.",
      symbolTitle: "СИМВОЛ «ҚАРЛЫҒАШ» (ЛАСТОЧКА)",
      symbolQuote:
        "«Орнамент «Қарлығаш» — знак прощания с родным домом, чистых намерений и счастливого пути в новую жизнь. Этот символ невеста выбирает сердцем — как оберег и напоминание о доме, который всегда ждёт.»",
      imageAlt: "Современное Қыз ұзату от свадебного агентства WedPeople",
      imageBadge: "ФИЛОСОФИЯ НАСЛЕДИЯ WEDPEOPLE",
      imageQuote:
        "«Мы сохранили все важные, красивые традиции и семейное тепло в звучании нашего времени.»",
      principles: [
        {
          code: "01 / Бата & Ақ жол",
          title: "Сакральная режиссура ключевых минут",
          description:
            "Создаём акустическую и эмоциональную камерность, чтобы каждое слово родительского благословения прозвучало без спешки и суеты.",
        },
        {
          code: "02 / Живая музыка",
          title: "Аутентичное звучание в современной аранжировке",
          description:
            "Соединяем тембр национальных инструментов со струнным оркестром и живым вокалом, создавая мурашки у каждого поколения гостей.",
        },
        {
          code: "03 / Эстетика ткани и орнамента",
          title: "Кутюрная работа с казахскими кодами",
          description:
            "Интегрируем личные обереги невесты — такие как ласточка «Қарлығаш» — в архитектуру зала, полиграфию и образ от лучших дизайнеров Казахстана.",
        },
      ],
    },
    formats: {
      sectionAria: "Форматы событий и услуги WedPeople",
      metaLeft: "05 / ФОРМАТЫ И УСЛУГИ",
      heading: "Архитектура вашего торжества",
      subtitle:
        "Полный цикл сопровождения: от первого мудборда, 3D-эскиза и выбора локации до координации последней минуты вечера.",
      discussMobileCta: "Обсудить формат",
      discussDesktopCta: "Обсудить",
      hideDetails: "Скрыть детали ↑",
      showDetails: "Состав работ ↓",
      items: [
        {
          id: "format-1",
          index: "01",
          title: "Свадьбы полного цикла",
          subtitle: "ГРАНД-МАСШТАБ ИЛИ КАМЕРНАЯ ИСТОРИЯ ПОД КЛЮЧ",
          description:
            "Полное продюсерское сопровождение пары от первой встречи за чашкой кофе до выезда последнего гостя. Концепция, подбор знаковой площадки, кастинг ведущих и артистов, режиссура света и координация всей команды.",
          deliverables: [
            "Разработка индивидуальной режиссерской концепции и тайминга дня",
            "Подбор и технический аудит площадок в Астане, Алматы и за рубежом",
            "Формирование и координация команды проверенных топ-подрядчиков",
            "Персональный продюсер и команда координаторов для пары и родителей",
          ],
          formKey: "wedding",
        },
        {
          id: "format-2",
          index: "02",
          title: "Современное Қыз ұзату",
          subtitle: "АВТОРСКИЙ СЦЕНАРИЙ С САКРАЛЬНЫМ СМЫСЛОМ",
          description:
            "Трогательное прощание невесты с отчим домом, где традиции чувствуют, а не просто показывают. Индивидуальный выбор смыслового орнамента, кутюрный образ невесты и глубокое уважение к семейным обычаям.",
          deliverables: [
            "Авторская режиссура обрядов Ақ жол, Бата беру и выхода невесты",
            "Коллаборация с ведущими казахстанскими кутюрье и ювелирами",
            "Индивидуальный музыкальный сценарий и саунд-дизайн церемонии",
            "Деликатная работа с родными и старшим поколением обеих семей",
          ],
          formKey: "uzatu",
        },
        {
          id: "format-3",
          index: "03",
          title: "Камерные ужины и семейные события",
          subtitle: "ИНТИМНОСТЬ, СТИЛЬ И ТЕПЛО ДЛЯ САМЫХ БЛИЗКИХ",
          description:
            "Формат для тех, кто ценит живой разговор за общим столом. Авторская гастрономия, тактильная сервировка, тонкая флористика и атмосфера уютного закрытого вечера.",
          deliverables: [
            "Камерные рестораны, горные шале и приватные террасы",
            "Разработка персонального сет-меню и эстетики сервировки стола",
            "Акустическое сопровождение и ненавязчивая драматургия вечера",
            "Полная забота о комфорте каждого приглашенного гостя",
          ],
          formKey: "chamber",
        },
        {
          id: "format-4",
          index: "04",
          title: "Сценография, эскизы и продакшн",
          subtitle: "ТОЧНОЕ ВОПЛОЩЕНИЕ ИДЕИ ОДИН В ОДИН",
          description:
            "Каждое мероприятие начинается не с монтажа, а с идеи. Мы проектируем детальную 3D-визуализацию, световую партитуру и декор так, чтобы реальность в день торжества стопроцентно повторила утвержденный эскиз.",
          deliverables: [
            "Детальные 3D-эскизы всех зон торжества до начала производства",
            "Архитектурный свет, звук и мультимедийная сценография зала",
            "Авторская флористика, текстиль и полиграфия ручной работы",
            "Строгий продюсерский и инженерный контроль монтажа на площадке",
          ],
          formKey: "scenography",
        },
      ],
    },
    process: {
      sectionAria: "Прозрачный процесс и бюджет",
      metaLeft: "06 / ПРОЦЕСС И БЮДЖЕТ",
      heading: "Прозрачность, честность и спокойствие",
      quote:
        "«В WedPeople мы уверены, что свадьба должна приносить радость, а не стресс. Поэтому прозрачность, честность и грамотное планирование — основа нашей работы.»",
      assuranceTitle: "Открытая архитектура бюджета и финансовый покой",
      assuranceText:
        "Каждая статья расходов прозрачно согласуется с парой. Вы всегда понимаете структуру сметы и контролируете приоритеты на каждом этапе подготовки.",
      assuranceCta: "Запланировать консультацию",
      steps: [
        {
          number: "ШАГ 01",
          title: "Знакомство и слушание",
          description:
            "Первая приватная встреча в Астане, Алматы или онлайн. Мы внимательно слушаем вашу историю любви, семейные ценности, музыкальные вкусы и мечты о том, каким должен быть этот день.",
          phaseNote: "Этап I • Первая встреча",
        },
        {
          number: "ШАГ 02",
          title: "Архитектура честного бюджета",
          description:
            "Составляем прозрачную и детальную смету мероприятия до подписания договоров. Грамотно распределяем приоритеты, подбираем площадку и фиксируем ключевую команду.",
          phaseNote: "Этап II • Планирование и смета",
        },
        {
          number: "ШАГ 03",
          title: "Концепт и точные эскизы",
          description:
            "Создаем режиссерский сценарий, 3D-визуализации декора, световую партитуру и образы пары. Вы видите и чувствуете атмосферу будущего торжества задолго до монтажа.",
          phaseNote: "Этап III • Визуализация и режиссура",
        },
        {
          number: "ШАГ 04",
          title: "Реализация и ваш покой",
          description:
            "Воплощаем эскизы один в один и берем на себя всю координацию подрядчиков и тайминга. Вам и вашим родителям остается только проживать счастье каждого мгновения.",
          phaseNote: "Этап IV • День торжества",
        },
      ],
    },
    concierge: {
      sectionAria: "Запланировать встречу и контакты WedPeople",
      metaLeft: "07 / ЗАПЛАНИРОВАТЬ ВСТРЕЧУ",
      headingLine1: "Начнём вашу",
      headingLine2: "семейную историю",
      headingItalic: "со вкусом.",
      description:
        "Приглашаем вас на приватную встречу за чашкой кофе в Астане, Алматы или в онлайн-формате, где мы познакомимся, бережно выслушаем ваши мечты и предложим первые концептуальные решения.",
      whatsappCardLabel: "ПРЯМОЙ ДИАЛОГ В WHATSAPP",
      instagramCardLabel: "ОФИЦИАЛЬНЫЙ INSTAGRAM-АРХИВ",
      astanaNote:
        "Приватные встречи по предварительной записи • Организация торжеств полного цикла",
      almatyNote:
        "Выездные церемонии, камерные ужины и масштабные свадебные проекты",
      formTitle: "Запланировать встречу в WhatsApp",
      formSubtitle:
        "Укажите ваше имя и желаемый формат — при нажатии на кнопку сразу откроется чат WhatsApp с командой WedPeople и готовым текстом вашего обращения.",
      nameLabel: "Ваше Имя и Фамилия",
      namePlaceholder: "Алихан и Алия",
      formatLabel: "Желаемый формат события",
      formatOptions: [
        { key: "wedding", label: "Свадьба" },
        { key: "uzatu", label: "Қыз ұзату" },
        { key: "chamber", label: "Камерное торжество" },
        { key: "scenography", label: "Сценография / Special Event" },
      ],
      cityDateLabel: "Планируемый город и сезон / дата (необязательно)",
      cityDatePlaceholder: "Например: Астана или Алматы, Лето / Осень 2026",
      submitButton: "Перейти в WhatsApp и запланировать встречу",
      bottomNotePrefix: "При нажатии сразу откроется диалог в WhatsApp (",
      bottomNoteSuffix: ") с подготовленным сообщением.",
      buildWhatsappMessage: (name, formatLabel, cityAndDate) =>
        `Здравствуйте, команда WedPeople! Меня зовут ${
          name.trim() || "..."
        }. Хочу запланировать мероприятие (Формат: ${formatLabel}${
          cityAndDate.trim() ? `, Город/дата: ${cityAndDate.trim()}` : ""
        }).`,
      footerTagline: "WEDPEOPLE — СВАДЕБНЫЕ ИСТОРИИ СО ВКУСОМ",
      footerSub: "С любовью, уважением и заботой о каждой паре.",
      footerLinks: {
        philosophy: "Философия",
        stories: "Истории пар",
        culture: "Современное Қыз ұзату",
        formats: "Форматы и услуги",
        process: "Процесс и бюджет",
      },
      footerCities: "АСТАНА & АЛМАТЫ",
      footerLove: "С ЛЮБОВЬЮ, КОМАНДА WEDPEOPLE",
      devBadge: "Авторская разработка",
      devName: "Каирбеков Жанат — Создатель сайта",
    },
    mobileBar: {
      ariaLabel: "Быстрая панель связи с WedPeople",
      whatsappAria: "Написать в WhatsApp WedPeople",
      cta: "Запланировать встречу",
    },
  },

  kk: {
    brand: {
      ...BRAND_INFO,
      tagline: "WedPeople — талғаммен өрілген той хикаялары.",
      manifestoSignoff: "Махаббатпен, WedPeople командасы",
      founderName: "Гүлмира",
      whatsappDefaultUrl:
        "https://wa.me/77777670835?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5%2C%20WedPeople%21%20%D0%9C%D0%B5%D1%80%D0%B5%D0%BA%D0%B5%D0%BB%D1%96%D0%BA%20%D1%96%D1%81-%D1%88%D0%B0%D1%80%D0%B0%D0%BD%D1%8B%20%D0%B6%D0%BE%D1%81%D0%BF%D0%B0%D1%80%D0%BB%D0%B0%D2%93%D1%8B%D0%BC%20%D0%BA%D0%B5%D0%BB%D0%B5%D0%B4%D1%96",
    },
    nav: {
      ariaMain: "Негізгі навигация",
      ariaMobileMenu: "WedPeople мобильді мәзірі",
      bookMeeting: "Кездесуді жоспарлау",
      menuButton: "Мәзір",
      openMenuAria: "Мәзірді ашу",
      closeMenuAria: "Мәзірді жабу",
      closeButton: "Жабу",
      langLabel: "Интерфейс тілі",
      items: [
        {
          index: "01",
          label: "Философия",
          mobileTitle: "Философия және манифест",
          mobileSubtitle: "WedPeople командасының құндылықтары мен қолтаңбасы",
          href: "#philosophy",
        },
        {
          index: "02",
          label: "Хикаялар",
          mobileTitle: "Жұптар хикаясы (Портфолио)",
          mobileSubtitle: "Жүзеге асқан үйлену тойлары мен Қыз ұзату",
          href: "#stories",
        },
        {
          index: "03",
          label: "Мәдени код",
          mobileTitle: "Заманауи Қыз ұзату",
          mobileSubtitle: "Дәстүрді жай көрсету емес, жүрекпен сезіну",
          href: "#culture",
        },
        {
          index: "04",
          label: "Форматтар",
          mobileTitle: "Форматтар мен қызметтер",
          mobileSubtitle: "Камералық кештерден толық циклді тойларға дейін",
          href: "#formats",
        },
        {
          index: "05",
          label: "Үдеріс",
          mobileTitle: "Ашық үдеріс және бюджет",
          mobileSubtitle: "Стресссіз және жасырын шығынсыз 4 нақты қадам",
          href: "#process",
        },
        {
          index: "06",
          label: "Байланыс",
          mobileTitle: "Кездесуді жоспарлау",
          mobileSubtitle: "Астана • Алматы • Агенттікпен тікелей сұхбат",
          href: "#concierge",
        },
      ],
    },
    hero: {
      sectionAria: "WedPeople басты экраны",
      metaLeft: "01 / HERO ARCHIVE",
      metaCenter: "ТОЛЫҚ ЦИКЛДІ ТОЙ АГЕНТТІГІ • АСТАНА & АЛМАТЫ",
      metaRight: "КАМЕРАЛЫҚ АТМОСФЕРА • АУҚЫМ • МӘДЕНИ КОД",
      seasonBadge: "ASTANA • ALMATY • 2026 МАУСЫМЫ",
      headlinePrefix: "WedPeople —",
      headlineMiddle: "талғаммен өрілген ",
      headlineItalic: "той хикаялары.",
      subtitle:
        "Біз әрбір жұпқа махаббатпен, құрметпен және шынайы қамқорлықпен қарап, ерекше тойлар жасаймыз. Дайындық кезеңін қуанышқа, ал асыл армандарыңызды мінсіз шындыққа айналдырамыз.",
      primaryCta: "Кездесуді жоспарлау",
      secondaryCta: "Жұптар хикаясын көру",
      frameCounterPrefix: "КАДР",
      tablistAria: "Мұрағат кадрларын ауыстыру",
      showFrameAria: "Кадрды көрсету",
      macroAlt: "WedPeople авторлық дастархан жабдықтауы мен флористика бөлшектері",
      showcaseFrames: [
        {
          id: "madee",
          src: "/images/hero-couple.jpg",
          tag: "REAL STORY • ALMATY",
          title: "MADEE & GULSEZIM",
          venue: "SWISSÔTEL ALATAU",
          alt: "WedPeople ұсынған Madee & Gulsezim тойының портреті",
        },
        {
          id: "tilda-archive-1",
          src: "/images/tilda-slide-1.webp",
          tag: "WEDPEOPLE ARCHIVE • 01",
          title: "ТАЛҒАММЕН ӨРІЛГЕН МАХАББАТ",
          venue: "АВТОРЛЫҚ КОНЦЕПЦИЯ",
          alt: "WedPeople мұрағатынан алынған ерекше той сәті",
        },
        {
          id: "tilda-archive-2",
          src: "/images/tilda-slide-2.webp",
          tag: "WEDPEOPLE ARCHIVE • 02",
          title: "ШЫНАЙЫ СЕЗІМ МЕН ЖЫЛУЛЫҚ",
          venue: "ТІРІ ЭМОЦИЯЛАР",
          alt: "WedPeople портфолиосынан жас жұбайлардың портреті",
        },
      ],
      pillars: [
        {
          code: "01 / КОНЦЕПТ",
          label: "Жеке режиссура және эскиздердің дәлме-дәл жүзеге асуы",
        },
        {
          code: "02 / МҰРА",
          label: "Заманауи Қыз ұзату және ұлттық дәстүрге терең құрмет",
        },
        {
          code: "03 / СЕНІМ",
          label: "Ашық бюджет, адалдық және жұптың жан тыныштығы",
        },
      ],
    },
    philosophy: {
      sectionAria: "WedPeople философиясы мен манифесі",
      metaLeft: "02 / ФИЛОСОФИЯ",
      metaCenter: "WEDPEOPLE МАНИФЕСІ",
      metaRight: "МАХАББАТ • ҚҰРМЕТ • ҚАМҚОРЛЫҚ",
      quote:
        "«Біз әрбір жұпқа махаббатпен, құрметпен және қамқорлықпен қарап той жасаймыз. Ең маңызды сәттерді бізге сеніп тапсырады, бізге сенімділік, жан тыныштығы мен шабыт үшін қайта оралады. Әрбір хикая — қайталанбас дара.»",
      subtext:
        "Біз сіздің отбасылық тарихыңыздың бастауы болатын күнге дейінгі жолда жаныңыздан табылып, дайындықты ләззатқа, ал армандарды ойластырылған шындыққа айналдырамыз.",
      pillars: [
        {
          index: "01 / ДӘЛДІК",
          title: "Идея және эскиз дәлдігі",
          description:
            "Әрбір іс-шара монтаждан емес, идеядан басталады. Біз егжей-тегжейлі визуализация мен сценография жасаймыз, ал соңғы нәтиже біздің эскиздерімізді айнытпай қайталайды.",
          footerTag: "КОНЦЕПЦИЯДАН ІСКЕ АСЫРУҒА ДЕЙІН",
          iconName: "compass",
        },
        {
          index: "02 / МӘДЕНИЕТ",
          title: "Дәстүрді жүрекпен сезіну",
          description:
            "Дәстүрді жай көрсету емес, терең сезіну. Қазақ мәдениетін, қасиетті мағыналарды және отбасылық жылулықты ескірген қалыптарсыз заманауи эстетикада жеткізу.",
          footerTag: "ТЕРЕҢДІК & МӘН-МАҒЫНА",
          iconName: "feather",
        },
        {
          index: "03 / ТЕПЕ-ТЕҢДІК",
          title: "Ашықтық пен тыныштық",
          description:
            "WedPeople-де біз той стресс емес, қуаныш сыйлауы тиіс екеніне сенімдіміз. Сондықтан ашықтық, адалдық және сауатты жоспарлау — біздің жұмысымыздың негізі.",
          footerTag: "ҚАРЖЫЛЫҚ ЖАЙЛЫЛЫҚ",
          iconName: "shield",
        },
      ],
    },
    portfolio: {
      sectionAria: "WedPeople жүзеге асқан жобалары мен жұптар хикаясы",
      metaLeft: "03 / ЖҰПТАР ХИКАЯСЫ",
      heading: "Талғаммен жүзеге асқан жобалар",
      filterAria: "Жобаларды формат бойынша сүзгілеу",
      openStoryCta: "Хикая мен галереяны ашу",
      openCaseCta: "Кейс пен команданы көру",
      filterTabs: [
        { id: "all", label: "Барлық жобалар" },
        { id: "weddings", label: "Үйлену тойлары" },
        { id: "uzatu", label: "Қыз ұзату" },
        { id: "fashion", label: "Fashion & Special" },
      ],
      cases: [
        {
          id: "madee-gulsezim",
          archiveNumber: "Archive Case No. 01",
          category: "weddings",
          categoryLabel: "Үйлену тойлары",
          badge: "HEADLINE STORY",
          dateOrCity: "13.08.2026 • ALMATY",
          city: "Алматы",
          venue: "Swissôtel Wellness Resort Alatau Almaty",
          title: "Madee & Gulsezim",
          coupleHandles: "@mdeemusic & @hsnglsm",
          shortSummary:
            "Іле Алатауының баурайындағы екі музыкант пен визионердің үйлену тойы. Жанды дыбыс үйлесімі, қарағайлы орман ішіндегі минималистік айна пішіндері және шексіз махаббаттың камералық атмосферасы.",
          editorialQuote:
            "«Екі музыкант пен визионердің тойы. Ішекті оркестрдің сыбыры, қарағайлы орман мен Алатау бөктеріндегі минималистік сәулет пішіндері.»",
          fullStory:
            "Мәди (@mdeemusic) мен Гүлсезім (@hsnglsm) үшін таза ауа лебін, шынайы музыканы және банкеттік клишелерден еркіндікті сақтау маңызды болды. Алматыдағы Swissôtel Wellness Resort Alatau алаңы концепцияның табиғи жалғасына айналды: ERNI Creative сценографиясы табиғи ландшафтпен бірігіп, Altsound Group жарық партитурасы күн батар сәттегі рәсімді ашық аспан астындағы сырлы кешке ұластырды.",
          coverImage: "/images/case-madee.jpg",
          coverAlt:
            "WedPeople агенттігі ұйымдастырған Swissôtel Wellness Resort Alatau Almaty-дағы Madee & Gulsezim тойы",
          layoutSpan: "featured",
          credits: [
            { role: "Ұйымдастыру", name: "WedPeople Agency", handle: "@wedpeople" },
            { role: "Локация", name: "Swissôtel Wellness Resort Alatau Almaty" },
            { role: "Декор", name: "ERNI Creative", handle: "@erni.creative" },
            {
              role: "Фотографтар",
              name: "Seydazzimov, Syzdykov, Turar Aidosov",
              handle: "@seydazzimov",
            },
            {
              role: "Видеопродакшн",
              name: "Seydazimoff & Baktigaliev",
              handle: "@seydazimoff",
            },
            { role: "Жүргізуші", name: "Soltanbayev", handle: "@soltanbayev" },
            {
              role: "Жарық & Техпродакшн",
              name: "Altsound Group",
              handle: "@altsound_group",
            },
          ],
          gallery: [
            {
              src: "/images/case-madee.jpg",
              tag: "01 / Салтанатты рәсім",
              caption: "Swissôtel Alatau қарағайлары арасындағы сәулеттік алтарь",
              alt: "Madee & Gulsezim рәсімі",
            },
            {
              src: "/images/hero-couple.jpg",
              tag: "02 / Жұп портреті",
              caption: "Күн батар сәулесіндегі күйеу жігіт пен қалыңдықтың бейнесі",
              alt: "Madee & Gulsezim портреті",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "03 / Кешкі ас бөлшектері",
              caption: "Авторлық сервировка, тактильді текстиль және шамдардың тірі жарығы",
              alt: "Madee & Gulsezim дастарханы",
            },
            {
              src: "/images/tilda-slide-1.webp",
              tag: "04 / WedPeople мұрағаты",
              caption: "Команда объективіндегі шынайы эмоциялар мен ыстық құшақ",
              alt: "WedPeople мұрағат кадры",
            },
          ],
        },
        {
          id: "alina-uzatu",
          archiveNumber: "Archive Case No. 02",
          category: "uzatu",
          categoryLabel: "Қыз ұзату",
          badge: "ҚЫЗ ҰЗАТУ",
          dateOrCity: "ASTANA • THE RITZ-CARLTON",
          city: "Астана",
          venue: "The Ritz-Carlton, Astana",
          title: "Алинаның Қыз ұзату тойы (A&A Wedding)",
          coupleHandles: "A&A Wedding • @g.erikovna",
          shortSummary:
            "«Алинаның Қыз ұзату тойында біз барлық маңызды, әсем дәстүрлерді және отбасылық жылулықты сақтадық». Жібектің нәзіктігі, жанды әуен және ең жақын жандардың ортасында қалыңдықты ұлықтау.",
          editorialQuote:
            "«Алинаның Қыз ұзату тойында біз барлық маңызды, әсем дәстүрлерді және отбасылық жылулықты сақтадық.»",
          fullStory:
            "The Ritz-Carlton, Astana бал залында өткен Қыз ұзату жоғары деңгейдегі қонақжайлылық пен отбасылық сырластықты тоғыстырды. Декоратор Динара Альменовамен бірге біз әуедей жеңіл сценография құрдық, онда қонақтарды қарсы алудан бастап соңғы Ақ жол рәсіміне дейін Қайрат Баекеновтің музыкалық сүйемелдеуімен заманауи әрі бекзат үндестік тапты.",
          coverImage: "/images/case-alina.jpg",
          coverAlt:
            "The Ritz-Carlton Astana-дағы Алинаның заманауи Қыз ұзату тойы — WedPeople",
          layoutSpan: "portrait",
          credits: [
            {
              role: "Ұйымдастыру",
              name: "WedPeople & Гүлмира",
              handle: "@wedpeople / @g.erikovna",
            },
            { role: "Локация", name: "The Ritz-Carlton, Astana" },
            {
              role: "Сценография & Декор",
              name: "Dinara Almenova",
              handle: "@dinara_almenova",
            },
            {
              role: "Техникалық продакшн",
              name: "AV Service KZ",
              handle: "@av_service.kz",
            },
            {
              role: "Кеш жүргізушілері",
              name: "Muhammed Taraz & Maya Veronskaya",
              handle: "@muhammed_taraz",
            },
            {
              role: "Музыкалық хедлайнер",
              name: "Kairat Baekenov",
              handle: "@kairat_baekenov",
            },
            { role: "Видео", name: "M. Levchuk", handle: "@mlevchuk" },
          ],
          gallery: [
            {
              src: "/images/case-alina.jpg",
              tag: "01 / Қалыңдық бейнесі",
              caption: "Заманауи ұлттық силуэт және нәзік кесте",
              alt: "Алинаның Қыз ұзатуы",
            },
            {
              src: "/images/culture-spotlight.jpg",
              tag: "02 / Ақ жол",
              caption: "Қыз ұзату рәсімінің жарық драматургиясы",
              alt: "Қыз ұзату рәсімі",
            },
            {
              src: "/images/tilda-slide-2.webp",
              tag: "03 / Жақындардың толқынысы",
              caption: "Ата-ана батасының шынайы әрі тебіреністі сәттері",
              alt: "Отбасылық жылулық",
            },
          ],
        },
        {
          id: "aruzhan-qarlygash",
          archiveNumber: "Archive Case No. 03",
          category: "uzatu",
          categoryLabel: "Қыз ұзату",
          badge: "ҚАСИЕТТІ МӘН",
          dateOrCity: "АВТОРЛЫҚ РЕЖИССУРА • ASTANA",
          city: "Астана",
          venue: "Авторлық Қыз ұзату концепциясы",
          title: "Аружанның Ұзату тойы — «Қарлығаш» символы",
          coupleHandles: "Bride @arukaboo",
          shortSummary:
            "«Қарлығаш» оюы — туған шаңырақпен қоштасудың, ақ ниеттің және жаңа өмірге бастар ақ жолдың белгісі. Бұл символды Аружан жүрек қалауымен — әрдайым күтетін ата-ана үйінің тұмары ретінде өзі таңдады.",
          editorialQuote:
            "«Қазақ мәдениетінде ою-өрнек — мағына тілі. Wed People — дәстүрді жай көрсету емес, жүрекпен сезіну.»",
          fullStory:
            "Аружанның (@arukaboo) ұзату тойы агенттігіміздің философиясын айқын көрсетті: әрбір визуалды деталь жеке мағынаға ие болуы тиіс. Қалыңдық таңдаған «Қарлығаш» өрнегі Динара Альменовамен бірге жасалған зал сәулетінің де, Elmira Designer тіккен кутюр бейнесінің де өзегіне айналды. Қарлығаш көктемді, қыз жанының тазалығын және жас отбасын қорғайтын ана батасын бейнелейді.",
          coverImage: "/images/case-aruzhan.jpg",
          coverAlt:
            "WedPeople агенттігі ұсынған Қарлығаш оюымен өрілген Аружанның Ұзату тойы",
          layoutSpan: "portrait",
          credits: [
            { role: "Ұйымдастыру", name: "WedPeople Agency", handle: "@wedpeople" },
            { role: "Қалыңдық", name: "Аружан", handle: "@arukaboo" },
            {
              role: "Қалыңдық образы",
              name: "Elmira Designer",
              handle: "@elmiradesigner",
            },
            { role: "Декор", name: "Dinara Almenova", handle: "@dinara_almenova" },
            {
              role: "Фотографтар",
              name: "Tamerlan Uderov & Seydazzimov",
              handle: "@tamerlan_uderov",
            },
            {
              role: "Видео",
              name: "Swagg Video Astana",
              handle: "@swagg_video_astana",
            },
          ],
          gallery: [
            {
              src: "/images/case-aruzhan.jpg",
              tag: "01 / «Қарлығаш» мотиві",
              caption: "Қасиетті қарлығаш өрнегінің зал сценографиясымен үйлесуі",
              alt: "Декордағы Қарлығаш символы",
            },
            {
              src: "/images/culture-spotlight.jpg",
              tag: "02 / Қасиетті шығу сәті",
              caption: "Камералық жарық және @elmiradesigner ұсынған кутюр бейнесі",
              alt: "Аружан қалыңдықтың шығуы",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "03 / Тактильді эстетика",
              caption: "Авторлық полиграфия және флористикалық екпіндер",
              alt: "Сервировка және полиграфия",
            },
          ],
        },
        {
          id: "wedding-zd",
          archiveNumber: "Archive Case No. 04",
          category: "weddings",
          categoryLabel: "Үйлену тойлары",
          badge: "TIMELESS ELEGANCE",
          dateOrCity: "ASTANA • THE RITZ-CARLTON",
          city: "Астана",
          venue: "The Ritz-Carlton, Astana",
          title: "Wedding Z&D",
          coupleHandles: "Bride @danaa.ql",
          shortSummary:
            "The Ritz-Carlton, Astana залындағы талғампаз еуропалық стиль мен шығыс қонақжайлылығының үйлесімі. Жарық пен тірі флористика сәулеті қонақтардың әрбір эмоциясын айшықтаған салтанат.",
          editorialQuote:
            "«Сәулеттік ауқымның, мінсіз жарықтың және қайта оралғың келетін шынайы сезімдердің гармониясы.»",
          fullStory:
            "Z&D (@danaa.ql) жұбы үшін біз The Ritz-Carlton, Astana-да уақыттан тыс классикалық кеңістік жасадық. Декоратор Ирина Лоринамен (@irina_lorina) және AV Service KZ техникалық командасымен бірлесе отырып, зал қалықтаған мата желілері, мүсіндік флористика және қонақтарға арналған жайлы орналасуы бар жарық галереяға айналды.",
          coverImage: "/images/case-zd.jpg",
          coverAlt: "The Ritz-Carlton Astana-дағы Wedding Z&D үйлену тойы — WedPeople",
          layoutSpan: "wide",
          credits: [
            {
              role: "Ұйымдастыру",
              name: "WedPeople & Гүлмира",
              handle: "@wedpeople / @g.erikovna",
            },
            { role: "Қалыңдық", name: "Dana", handle: "@danaa.ql" },
            { role: "Локация", name: "The Ritz-Carlton, Astana" },
            { role: "Декор", name: "Irina Lorina", handle: "@irina_lorina" },
            {
              role: "Техпродакшн",
              name: "AV Service KZ",
              handle: "@av_service.kz",
            },
            { role: "Фотограф", name: "Seydazzimov", handle: "@seydazzimov" },
          ],
          gallery: [
            {
              src: "/images/case-zd.jpg",
              tag: "01 / Зал сәулеті",
              caption: "The Ritz-Carlton-дағы әуе текстильдері мен тірі флористика",
              alt: "Wedding Z&D той залы",
            },
            {
              src: "/images/tilda-slide-1.webp",
              tag: "02 / Екеуара сәт",
              caption: "Той күніндегі жұптың Editorial-портреті",
              alt: "Жұп портреті",
            },
            {
              src: "/images/tilda-slide-2.webp",
              tag: "03 / Уақыттан тыс",
              caption: "Ондаған жылдар өтсе де өзектілігін жоғалтпайтын кадр эстетикасы",
              alt: "WedPeople мұрағат портреті",
            },
          ],
        },
        {
          id: "ainur-fashion-show",
          archiveNumber: "Archive Case No. 05",
          category: "fashion",
          categoryLabel: "Fashion & Special",
          badge: "COUTURE & HERITAGE",
          dateOrCity: "ASTANA • THE ST. REGIS / RITZ-CARLTON",
          city: "Астана",
          venue: "The St. Regis Astana / The Ritz-Carlton, Astana",
          title: "Ainur Qyz Uzatu & Wedding Fashion Show",
          coupleHandles: "Dala Kazakhstan & Zhanna Malikova",
          shortSummary:
            "Жоғары сән мен қыз ұзату дәстүрінің синтезі. Салтанатты кеш аясындағы қазақстандық дизайнерлердің кутюр топтамаларының авторлық подиумдық көрсетілімі.",
          editorialQuote:
            "«Ұлттық мұра подиумдық үнге ие болып, кешті мәдени оқиғаға айналдырған сәт.»",
          fullStory:
            "Айнұрдың ерекше той форматы қасиетті Қыз ұзату рәсімін жабық Fashion Show көрсетілімімен біріктірді. Подиумда Dala Kazakhstan (@dala.kazakhstan) мен Жанна Маликованың (@zhanna_malikova_affishial) образдары ұсынылып, Динара Альменованың сценографиясы және жүргізуші Данияр Мақашевпен бірге жасалған режиссура жоғары сән апталығының атмосферасын сыйлады.",
          coverImage: "/images/case-ainur.jpg",
          coverAlt:
            "Астанадағы Ainur Qyz Uzatu & Wedding Fashion Show — WedPeople агенттігі",
          layoutSpan: "square",
          credits: [
            { role: "Ұйымдастыру", name: "WedPeople Agency", handle: "@wedpeople" },
            {
              role: "Локациялар",
              name: "The St. Regis Astana & The Ritz-Carlton, Astana",
            },
            { role: "Декор", name: "Dinara Almenova", handle: "@dinara_almenova" },
            {
              role: "Көрсетілім кутюрьелері",
              name: "Dala Kazakhstan & Zhanna Malikova",
              handle: "@dala.kazakhstan",
            },
            {
              role: "Жүргізуші",
              name: "Daniyar Makashev",
              handle: "@daniyar_makashev",
            },
            {
              role: "Фотографтар",
              name: "Tamerlan Uderov & Seydazzimov",
              handle: "@tamerlan_uderov",
            },
          ],
          gallery: [
            {
              src: "/images/case-ainur.jpg",
              tag: "01 / Wedding Fashion Show",
              caption: "Подиумдық қойылым және кутюрлік ұлттық силуэттер",
              alt: "Айнұрдың Қыз ұзату тойындағы сән көрсетілімі",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "02 / Сценография",
              caption: "Камералық сервировка және кешкі жарықтағы фактуралар ойыны",
              alt: "Дастархан бөлшектері",
            },
          ],
        },
        {
          id: "salone-sketch-realization",
          archiveNumber: "Archive Case No. 06",
          category: "fashion",
          categoryLabel: "Fashion & Special",
          badge: "ЭСКИЗ 1-ДЕ-1",
          dateOrCity: "ASTANA • SALONE DEL GUSTO",
          city: "Астана",
          venue: "Salone del Gusto, Astana",
          title: "Эскизден шындыққа дейін — Salone del Gusto",
          coupleHandles: "3D-концепттің 100% дәлдігі",
          shortSummary:
            "«Әрбір іс-шара монтаждан емес, идеядан басталады... Бұл жобада соңғы нәтиже біздің эскиздерімізді толықтай қайталады.» Кешкі астың камералық сәулеті мен мінсіз жарық.",
          editorialQuote:
            "«Әрбір іс-шара монтаждан емес, идеядан басталады. Бұл жобада соңғы нәтиже біздің эскиздерімізді толықтай қайталады.»",
          fullStory:
            "Salone del Gusto (Астана) мейрамханасындағы камералық кеш WedPeople инженерлік және көркемдік тәртібінің эталондық үлгісі болды. Декоратор Айжан Аяғановамен (@decor_ayaganova) және FX Events (@fxeventskz) жарық продакшнымен бірге біз 3D-эскиздерді әрбір гүл екпіні мен хрусталь сәулесіне дейін нақты кеңістікке айнытпай көшірдік.",
          coverImage: "/images/tilda-slide-1.webp",
          coverAlt:
            "Salone del Gusto Astana-да эскизді дәлме-дәл жүзеге асыру — WedPeople",
          layoutSpan: "featured",
          credits: [
            { role: "Ұйымдастыру", name: "WedPeople Agency", handle: "@wedpeople" },
            { role: "Локация", name: "Salone del Gusto, Astana" },
            {
              role: "Декор & Эскиздер",
              name: "Decor Ayaganova",
              handle: "@decor_ayaganova",
            },
            {
              role: "Фотограф",
              name: "Timur Uteshbekov",
              handle: "@timuruteshbekov",
            },
            { role: "Жарық", name: "FX Events KZ", handle: "@fxeventskz" },
            { role: "Жүргізуші", name: "Daniyar", handle: "@danchik_show" },
          ],
          gallery: [
            {
              src: "/images/tilda-slide-1.webp",
              tag: "01 / Түпнұсқа мұрағат",
              caption: "Мінсіз эстетикамен көмкерілген сәттің шынайылығы",
              alt: "WedPeople түпнұсқа кадры",
            },
            {
              src: "/images/hero-detail.jpg",
              tag: "02 / Бөлшектер дәлдігі",
              caption: "Дайын сервировканың 3D-эскизбен жүз пайыз сәйкестігі",
              alt: "Salone del Gusto сервировкасы",
            },
            {
              src: "/images/tilda-slide-2.webp",
              tag: "03 / Эмоциялық портрет",
              caption: "Талғаммен және махаббатпен жасалған той хикаясы",
              alt: "WedPeople жұп портреті",
            },
          ],
        },
      ],
    },
    drawer: {
      closeAria: "Жоба карточкасын жабу",
      closeButton: "Жабу",
      galleryLabel: "Той галереясы",
      prevSlideAria: "Алдыңғы кадр",
      nextSlideAria: "Келесі кадр",
      storyHeading: "Концепция және жүзеге асыру туралы",
      creditsHeading: "Жоба командасы (Credits)",
      conciergeBadge: "WedPeople консьерж-сервисі",
      conciergeTitle: "Осындай жобаны талқылағыңыз келе ме?",
      conciergeSubtitle:
        "Астанада, Алматыда бір шыны кофе үстінде немесе онлайн форматта сіздің хикаяңыздың концепциясын талқылайық.",
      nameLabel: "Аты-жөніңіз",
      namePlaceholder: "Әйгерім мен Данияр",
      seasonLabel: "Маусымды / форматты таңдау",
      seasonOptions: [
        "Көктем 2026 (Мамыр – Маусым)",
        "Жаз 2026 (Шілде – Тамыз)",
        "Күз 2026 (Қыркүйек – Қараша)",
        "Қыз ұзату (Жеке күн)",
      ],
      submitButton: "Кейсті WhatsApp-та талқылау",
      securityNote: "WedPeople продюсерімен тікелей диалогқа лезде өту",
      buildWhatsappMessage: (projectTitle, clientName, season) =>
        `Сәлеметсіз бе, WedPeople командасы! Бізге сіздердің «${projectTitle}» кейстеріңіз қатты ұнады. Менің есімім — ${
          clientName.trim() || "..."
        }. Кездесуді жоспарлағымыз келеді (${season}).`,
    },
    culture: {
      sectionAria: "Мәдени код және заманауи Қыз ұзату",
      metaLeft: "04 / МӘДЕНИ КОД",
      metaRight: "ЗАМАНАУИ ҚЫЗ ҰЗАТУ",
      headingLine1: "Дәстүрді жай көрсету емес,",
      headingItalic: "жүрекпен сезіну.",
      paragraph1:
        "Қазақ мәдениетінде ою-өрнек пен салт-дәстүр — ұрпақтан ұрпаққа жалғасып келе жатқан мағына тілі. Біз жасанды пафостан бас тартып, той рәсімдеріне олардың бастапқы тереңдігі мен отбасылық жылулығын қайтарамыз.",
      paragraph2:
        "WedPeople ұсынған Қыз ұзатудың әрбір элементі — туғандарға деген шынайы махаббат, ата-ананың ақ батасы және мінсіз заманауи эстетикада өрілген алтын ұямен әсерлі қоштасу.",
      symbolTitle: "«ҚАРЛЫҒАШ» СИМВОЛЫ",
      symbolQuote:
        "«Қарлығаш» оюы — туған шаңырақпен қоштасудың, ақ ниеттің және жаңа өмірге бастар бақытты жолдың белгісі. Бұл символды қалыңдық жүрегімен — әрдайым күтетін ата-ана үйінің тұмары ретінде таңдайды.»",
      imageAlt: "WedPeople той агенттігі ұсынған заманауи Қыз ұзату",
      imageBadge: "WEDPEOPLE МҰРА ФИЛОСОФИЯСЫ",
      imageQuote:
        "«Біз барлық маңызды, әсем дәстүрлерді және отбасылық жылулықты заманауи үндестікте сақтадық.»",
      principles: [
        {
          code: "01 / Бата & Ақ жол",
          title: "Маңызды сәттердің қасиетті режиссурасы",
          description:
            "Ата-ана батасының әрбір сөзі асығыссыз әрі тебіреніспен естілуі үшін акустикалық және эмоциялық тыныштық орнатамыз.",
        },
        {
          code: "02 / Жанды музыка",
          title: "Заманауи өңдеудегі ұлттық үн",
          description:
            "Ұлттық аспаптардың үнін ішекті оркестрмен және жанды вокалмен тоғыстырып, әр буын қонақтарының жүрегін тербейміз.",
        },
        {
          code: "03 / Мата мен ою эстетикасы",
          title: "Қазақ кодтарымен кутюрлік жұмыс",
          description:
            "Қалыңдықтың «Қарлығаш» секілді жеке тұмарларын зал сәулетіне, полиграфияға және Қазақстанның үздік дизайнерлері тіккен бейнесіне енгіземіз.",
        },
      ],
    },
    formats: {
      sectionAria: "WedPeople іс-шара форматтары мен қызметтері",
      metaLeft: "05 / ФОРМАТТАР МЕН ҚЫЗМЕТТЕР",
      heading: "Салтанатыңыздың сәулеті",
      subtitle:
        "Толық циклді сүйемелдеу: алғашқы мудбордтан, 3D-эскизден және локация таңдаудан бастап кештің соңғы минутына дейін үйлестіру.",
      discussMobileCta: "Форматты талқылау",
      discussDesktopCta: "Талқылау",
      hideDetails: "Мәліметті жасыру ↑",
      showDetails: "Жұмыс құрамы ↓",
      items: [
        {
          id: "format-1",
          index: "01",
          title: "Толық циклді үйлену тойлары",
          subtitle: "ГРАНД-АУҚЫМ НЕМЕСЕ КАМЕРАЛЫҚ ХИКАЯ «КІЛТПЕН»",
          description:
            "Бір шыны кофе үстіндегі алғашқы кездесуден бастап соңғы қонақты шығарып салғанға дейін жұпты толық продюсерлік сүйемелдеу. Концепция, айтулы алаң таңдау, жүргізушілер мен әртістер кастингі, жарық режиссурасы және бүкіл команданы үйлестіру.",
          deliverables: [
            "Жеке режиссерлік концепция мен күн таймингін әзірлеу",
            "Астана, Алматы және шетелдегі алаңдарды іріктеу және техникалық аудит",
            "Тексерілген топ-мердігерлер командасын жасақтау және үйлестіру",
            "Жұп пен ата-аналарға арналған жеке продюсер және үйлестірушілер тобы",
          ],
          formKey: "wedding",
        },
        {
          id: "format-2",
          index: "02",
          title: "Заманауи Қыз ұзату",
          subtitle: "ҚАСИЕТТІ МӘНІ БАР АВТОРЛЫҚ СЦЕНАРИЙ",
          description:
            "Дәстүрді жай көрсетіп қана қоймай, жүрекпен сезінетін қалыңдықтың туған үйімен әсерлі қоштасуы. Мағыналы ою-өрнекті жеке таңдау, қалыңдықтың кутюрлік бейнесі және отбасылық салтқа терең құрмет.",
          deliverables: [
            "Ақ жол, Бата беру және қалыңдықтың шығу рәсімдерінің авторлық режиссурасы",
            "Қазақстанның жетекші кутюрьелерімен және зергерлерімен коллаборация",
            "Рәсімнің жеке музыкалық сценарийі мен саунд-дизайны",
            "Екі әулеттің туыстарымен және аға буын өкілдерімен ізетті жұмыс",
          ],
          formKey: "uzatu",
        },
        {
          id: "format-3",
          index: "03",
          title: "Камералық кештер мен отбасылық мерекелер",
          subtitle: "ЕҢ ЖАҚЫН ЖАНДАРҒА АРНАЛҒАН ЖЫЛУЛЫҚ ПЕН СТИЛЬ",
          description:
            "Ортақ дастархан басындағы шынайы әңгімені бағалайтындарға арналған формат. Авторлық гастрономия, тактильді сервировка, нәзік флористика және жайлы жабық кеш атмосферасы.",
          deliverables: [
            "Камералық мейрамханалар, тау шалелері және жеке террасалар",
            "Жеке сет-мәзір мен дастархан сервировкасының эстетикасын әзірлеу",
            "Акустикалық сүйемелдеу және кештің табиғи драматургиясы",
            "Шақырылған әрбір қонақтың жайлылығына толық қамқорлық",
          ],
          formKey: "chamber",
        },
        {
          id: "format-4",
          index: "04",
          title: "Сценография, эскиздер және продакшн",
          subtitle: "ИДЕЯНЫ АЙНЫТПАЙ ДӘЛМЕ-ДӘЛ ЖҮЗЕГЕ АСЫРУ",
          description:
            "Әрбір іс-шара монтаждан емес, идеядан басталады. Салтанат күні шындық бекітілген эскизді жүз пайыз қайталауы үшін біз егжей-тегжейлі 3D-визуализацияны, жарық партитурасын және декорды жобалаймыз.",
          deliverables: [
            "Өндіріс басталғанға дейін барлық аймақтардың нақты 3D-эскиздері",
            "Архитектуралық жарық, дыбыс және залдың мультимедиялық сценографиясы",
            "Авторлық флористика, текстиль және қолдан жасалған полиграфия",
            "Алаңдағы монтажды қатаң продюсерлік және инженерлік бақылау",
          ],
          formKey: "scenography",
        },
      ],
    },
    process: {
      sectionAria: "Ашық үдеріс және бюджет",
      metaLeft: "06 / ҮДЕРІС ЖӘНЕ БЮДЖЕТ",
      heading: "Ашықтық, адалдық және жан тыныштығы",
      quote:
        "«WedPeople-де біз той стресс емес, қуаныш сыйлауы тиіс екеніне сенімдіміз. Сондықтан ашықтық, адалдық және сауатты жоспарлау — біздің жұмысымыздың негізі.»",
      assuranceTitle: "Ашық бюджет сәулеті және қаржылық тыныштық",
      assuranceText:
        "Шығындардың әрбір тармағы жұппен ашық келісіледі. Сіз әрдайым смета құрылымын түсініп, дайындықтың әр кезеңінде басымдықтарды бақылауда ұстайсыз.",
      assuranceCta: "Консультацияны жоспарлау",
      steps: [
        {
          number: "01 ҚАДАМ",
          title: "Танысу және тыңдау",
          description:
            "Астанада, Алматыда немесе онлайн форматтағы алғашқы жеке кездесу. Біз сіздің махаббат хикаяңызды, отбасылық құндылықтарыңызды, музыкалық талғамыңызды және осы күн туралы армандарыңызды мұқият тыңдаймыз.",
          phaseNote: "I кезең • Алғашқы кездесу",
        },
        {
          number: "02 ҚАДАМ",
          title: "Адал бюджет сәулеті",
          description:
            "Шарттарға қол қойғанға дейін іс-шараның ашық әрі нақты сметасын құрамыз. Басымдықтарды сауатты бөліп, алаңды таңдаймыз және негізгі команданы бекітеміз.",
          phaseNote: "II кезең • Жоспарлау және смета",
        },
        {
          number: "03 ҚАДАМ",
          title: "Концепт және дәл эскиздер",
          description:
            "Режиссерлік сценарийді, декордың 3D-визуализациясын, жарық партитурасын және жұптың образдарын жасаймыз. Сіз болашақ тойдың атмосферасын монтаждан әлдеқайда бұрын көріп, сезінесіз.",
          phaseNote: "III кезең • Визуализация және режиссура",
        },
        {
          number: "04 ҚАДАМ",
          title: "Іске асыру және сіздің тыныштығыңыз",
          description:
            "Эскиздерді айнытпай жүзеге асырып, мердігерлер мен таймингті үйлестіруді толық өз мойнымызға аламыз. Сізге және ата-анаңызға әр сәттің бақытын сезіну ғана қалады.",
          phaseNote: "IV кезең • Салтанат күні",
        },
      ],
    },
    concierge: {
      sectionAria: "Кездесуді жоспарлау және WedPeople байланыстары",
      metaLeft: "07 / КЕЗДЕСУДІ ЖОСПАРЛАУ",
      headingLine1: "Отбасылық",
      headingLine2: "хикаяңызды",
      headingItalic: "талғаммен бастайық.",
      description:
        "Сізді Астанада, Алматыда бір шыны кофе үстінде немесе онлайн-форматта өтетін жеке кездесуге шақырамыз. Онда біз танысып, армандарыңызды мұқият тыңдап, алғашқы концептуалды шешімдерді ұсынамыз.",
      whatsappCardLabel: "WHATSAPP АРҚЫЛЫ ТІКЕЛЕЙ СҰХБАТ",
      instagramCardLabel: "РЕСМИ INSTAGRAM-МҰРАҒАТ",
      astanaNote:
        "Алдын ала жазылу бойынша жеке кездесулер • Толық циклді салтанаттарды ұйымдастыру",
      almatyNote:
        "Ашық аспан астындағы рәсімдер, камералық кештер және ауқымды той жобалары",
      formTitle: "WhatsApp арқылы кездесуді жоспарлау",
      formSubtitle:
        "Есіміңізді және қалаған форматыңызды көрсетіңіз — батырманы басқан кезде дайын хабарлама мәтінімен WedPeople командасының WhatsApp чаты бірден ашылады.",
      nameLabel: "Аты-жөніңіз",
      namePlaceholder: "Әлихан мен Әлия",
      formatLabel: "Іс-шараның қалаған форматы",
      formatOptions: [
        { key: "wedding", label: "Үйлену тойы" },
        { key: "uzatu", label: "Қыз ұзату" },
        { key: "chamber", label: "Камералық кеш" },
        { key: "scenography", label: "Сценография / Special Event" },
      ],
      cityDateLabel: "Жоспарланған қала және маусым / күні (міндетті емес)",
      cityDatePlaceholder: "Мысалы: Астана немесе Алматы, Жаз / Күз 2026",
      submitButton: "WhatsApp-қа өту және кездесуді жоспарлау",
      bottomNotePrefix: "Батырманы басқанда дайын хабарламамен WhatsApp сұхбаты (",
      bottomNoteSuffix: ") бірден ашылады.",
      buildWhatsappMessage: (name, formatLabel, cityAndDate) =>
        `Сәлеметсіз бе, WedPeople командасы! Менің есімім — ${
          name.trim() || "..."
        }. Іс-шараны жоспарлағым келеді (Формат: ${formatLabel}${
          cityAndDate.trim() ? `, Қала/күні: ${cityAndDate.trim()}` : ""
        }).`,
      footerTagline: "WEDPEOPLE — ТАЛҒАММЕН ӨРІЛГЕН ТОЙ ХИКАЯЛАРЫ",
      footerSub: "Махаббатпен, құрметпен және әр жұпқа деген қамқорлықпен.",
      footerLinks: {
        philosophy: "Философия",
        stories: "Жұптар хикаясы",
        culture: "Заманауи Қыз ұзату",
        formats: "Форматтар мен қызметтер",
        process: "Үдеріс және бюджет",
      },
      footerCities: "АСТАНА & АЛМАТЫ",
      footerLove: "МАХАББАТПЕН, WEDPEOPLE КОМАНДАСЫ",
      devBadge: "Авторлық әзірлеме",
      devName: "Қайырбеков Жанат — Сайтты жасаушы",
    },
    mobileBar: {
      ariaLabel: "WedPeople жылдам байланыс панелі",
      whatsappAria: "WedPeople WhatsApp-қа жазу",
      cta: "Кездесуді жоспарлау",
    },
  },
};
