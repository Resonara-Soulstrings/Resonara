document.addEventListener('DOMContentLoaded', () => {
  // 1. Год в футере
  document.getElementById('year').textContent = new Date().getFullYear();

  // 2. Переключение языков
  const translations = {
    ru: {
      heroTitle: "Балансируй эмоции. Меняй мир.",
      heroSub: "Исследуй 9 локаций, управляемых Кармой. Выбери путь Мири или Пири и реши судьбу мира.",
      ctaSteam: "Wishlist на Steam",
      ctaCommunity: "Telegram / Discord",
      aboutTitle: "Концепция",
      card1Title: "Мир Чакр",
      card1Text: "Локации меняют палитру и сложность в зависимости от ваших действий. Визуал, музыка и поведение врагов подстраиваются под Карму.",
      card2Title: "Два Голоса",
      card2Text: "Мири зовёт к силе, Пири — к милосердию. Ваши выборы формируют 3 уникальные концовки и открывают скрытые ветки прокачки.",
      card3Title: "Тактический Бой",
      card3Text: "Парирование, рывки, система Эха. Побеждает не тот, кто быстрее нажимает, а тот, кто читает паттерны и держит баланс.",
      mediaTitle: "Медиа",
      phVideo: "Трейлер скоро",
      phImg: "Изображение",
      communityTitle: "Сообщество и Пресса",
      subscribeTitle: "Будь в курсе обновлений",
      subscribeBtn: "Подписаться",
      formNote: "Без спама. Только важные новости и инсайды разработки.",
      formSuccess: "Спасибо! Мы свяжемся с вами.",
      pressTitle: "Пресс-кит",
      pressLogo: "Логотипы (SVG/PNG)",
      pressGuidelines: "Гайд по упоминаниям",
      pressContacts: "Контакты для прессы",
      footerPrivacy: "Политика конфиденциальности",
      footerContacts: "Контакты"
    },
    en: {
      heroTitle: "Balance emotions. Change the world.",
      heroSub: "Explore 9 karma-driven locations. Choose Miri's or Piri's path and decide the world's fate.",
      ctaSteam: "Wishlist on Steam",
      ctaCommunity: "Telegram / Discord",
      aboutTitle: "Concept",
      card1Title: "World of Chakras",
      card1Text: "Locations shift palette and difficulty based on your actions. Visuals, music, and enemy behavior adapt to your Karma.",
      card2Title: "Dual Voices",
      card2Text: "Miri calls for power, Piri for mercy. Your choices forge 3 unique endings and unlock hidden progression paths.",
      card3Title: "Tactical Combat",
      card3Text: "Parries, dashes, Echo system. Victory belongs to those who read patterns and maintain balance, not button mashers.",
      mediaTitle: "Media",
      phVideo: "Trailer coming soon",
      phImg: "Image",
      communityTitle: "Community & Press",
      subscribeTitle: "Stay updated",
      subscribeBtn: "Subscribe",
      formNote: "No spam. Only major dev updates and insights.",
      formSuccess: "Thank you! We'll be in touch.",
      pressTitle: "Press Kit",
      pressLogo: "Logos (SVG/PNG)",
      pressGuidelines: "Mentioning Guidelines",
      pressContacts: "Press Contacts",
      footerPrivacy: "Privacy Policy",
      footerContacts: "Contacts"
    }
  };

  let currentLang = 'ru';
  const langBtn = document.getElementById('langBtn');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    langBtn.textContent = lang === 'ru' ? 'RU | EN' : 'EN | RU';
    localStorage.setItem('lang', lang);
  }

  // Загрузка сохранённого языка
  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) setLanguage(savedLang);

  langBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'ru' ? 'en' : 'ru');
  });

  // 3. Анимации при скролле (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-card, .media-item, .socials, .subscribe-form, .press-kit').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // 4. Индикатор кармы (имитация прогресса скролла)
  const karmaFill = document.querySelector('.karma-fill');
  window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const width = Math.min(Math.max(scrollPercent * 100, 0), 100);
    karmaFill.style.width = `${width}%`;
    
    // Смена оттенка в зависимости от положения:
    const hue = Math.round(scrollPercent * 180); // 0 (красный) -> 180 (синий)
    karmaFill.style.background = `linear-gradient(90deg, hsl(${hue}, 70%, 50%), var(--gold))`;
  });

  // 5. Форма подписки (заглушка под API)
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('emailInput');
  const successMsg = document.querySelector('.form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;

    // Имитация отправки
    form.querySelector('button').textContent = '...';
    setTimeout(() => {
      form.style.display = 'none';
      successMsg.classList.remove('hidden');
      console.log('Subscribed:', email);
      // Здесь подключить Buttondown, MailerLite или Telegram Bot API
    }, 800);
  });
});
