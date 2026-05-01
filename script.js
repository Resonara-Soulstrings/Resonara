document.addEventListener('DOMContentLoaded', () => {
  // 1. Год в футере
  document.getElementById('year').textContent = new Date().getFullYear();

  // 2. Переключение языков
  const translations = {
    ru: {
      heroTitle: "Балансируй эмоции. Меняй мир.",
      heroSub: "Исследуй 9 локаций, управляемых Кармой. Выбери путь Мири или Пири и реши судьбу мира.",
      ctaSteam: "Wishlist на Steam",
      ctaCommunity: "Discord",
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
      communityTitle: "Сообщество",
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
      ctaCommunity: "Discord",
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
      communityTitle: "Community",
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

  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) setLanguage(savedLang);

  langBtn.addEventListener('click', () => setLanguage(currentLang === 'ru' ? 'en' : 'ru'));

  // 3. Анимации при скролле
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-card, .media-item, .subscribe-form, .press-grid').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // 4. Индикатор кармы
  const karmaFill = document.querySelector('.karma-fill');
  window.addEventListener('scroll', () => {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const width = Math.min(Math.max(scrollPercent * 100, 0), 100);
    karmaFill.style.width = `${width}%`;
    const hue = Math.round(scrollPercent * 180);
    karmaFill.style.background = `linear-gradient(90deg, hsl(${hue}, 70%, 50%), var(--gold))`;
  });

  // 5. Генератор частиц
  const particleContainer = document.getElementById('bg-particles');
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size = Math.random() * 4 + 2;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDuration = `${Math.random() * 12 + 10}s`;
    p.style.animationDelay = `${Math.random() * 15}s`;
    particleContainer.appendChild(p);
  }

  // 6. Форма подписки
  const form = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('emailInput');
  const successMsg = document.querySelector('.form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;

    form.querySelector('button').textContent = '...';
    setTimeout(() => {
      form.style.display = 'none';
      successMsg.classList.remove('hidden');
    }, 800);
  });
  
  // 7. Cookie Banner
  const cookieBanner = document.getElementById('cookie-banner');
  const cookieAccept = document.getElementById('cookie-accept');
  const cookieDecline = document.getElementById('cookie-decline');
  const cookieParticlesContainer = document.querySelector('.cookie-particles');

  // Проверка, было ли уже принято решение
  const cookieConsent = localStorage.getItem('cookieConsent');

  if (!cookieConsent) {
    // Показываем баннер с небольшой задержкой
    setTimeout(() => {
      cookieBanner.classList.add('visible');
      createCookieParticles();
    }, 1500);
  }

  // Создание частиц для cookie баннера
  function createCookieParticles() {
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.classList.add('cookie-particle');
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${Math.random() * 2 + 2}s`;
      p.style.animationDelay = `${Math.random() * 1.5}s`;
      cookieParticlesContainer.appendChild(p);
    }
  }

  // Обработка кнопки "Принять"
  cookieAccept.addEventListener('click', () => {
    cookieBanner.classList.remove('visible');
    localStorage.setItem('cookieConsent', 'accepted');

    // Эффект принятия
    cookieAccept.style.transform = 'scale(0.95)';
    setTimeout(() => {
      cookieAccept.style.transform = '';
    }, 150);
  });

  // Обработка кнопки "Отклонить"
  cookieDecline.addEventListener('click', () => {
    cookieBanner.classList.remove('visible');
    localStorage.setItem('cookieConsent', 'declined');

    // Эффект отклонения
    cookieDecline.style.transform = 'scale(0.95)';
    setTimeout(() => {
      cookieDecline.style.transform = '';
    }, 150);
  });

  // Интерактивные струны
  document.querySelectorAll('.string').forEach(string => {
    string.addEventListener('click', () => {
      string.classList.remove('plucked');
      void string.offsetWidth; // trigger reflow
      string.classList.add('plucked');

      // Воспроизведение звука (опционально)
      const pitch = string.style.getPropertyValue('--pitch');
      if (pitch) {
        playStringSound(parseFloat(pitch));
      }
    });
  });

  // Простая синтезация звука для струн
  function playStringSound(frequency) {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 1.5);
    } catch (e) {
      // Игнорируем ошибки аудио
    }
  }
});
