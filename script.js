document.addEventListener('DOMContentLoaded', () => {
  // ========== 1. ГОД В ФУТЕРЕ ==========
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ========== 2. ПЕРЕМЕННЫЕ И КОНСТАНТЫ ==========
  const STORAGE_KEYS = {
    CONSENT: 'resonara_consent',
    LANG: 'resonara_lang'
  };

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

  // ========== 3. ФУНКЦИИ ЯЗЫКА ==========
  function setLanguage(lang, savePreference = true) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang]?.[key]) {
        el.textContent = translations[lang][key];
      }
    });
    
    if (langBtn) {
      langBtn.textContent = lang === 'ru' ? 'RU | EN' : 'EN | RU';
    }
    
    if (savePreference && getConsent() === 'accepted') {
      localStorage.setItem(STORAGE_KEYS.LANG, lang);
    }
  }

  function initLanguage() {
    const consent = getConsent();
    if (consent === 'accepted') {
      const saved = localStorage.getItem(STORAGE_KEYS.LANG);
      if (saved && translations[saved]) {
        setLanguage(saved, false);
        return;
      }
    }
    setLanguage('ru', false);
  }

  // ========== 4. COOKIE CONSENT LOGIC ==========
  function getConsent() {
    return localStorage.getItem(STORAGE_KEYS.CONSENT);
  }

  function setConsent(choice) {
    localStorage.setItem(STORAGE_KEYS.CONSENT, choice);
    
    if (choice === 'accepted') {
      if (currentLang) {
        localStorage.setItem(STORAGE_KEYS.LANG, currentLang);
      }
    } else {
      localStorage.removeItem(STORAGE_KEYS.LANG);
      if (currentLang !== 'ru') {
        setLanguage('ru', false);
      }
    }
    
    const cookieBanner = document.getElementById('cookie-consent');
    if (cookieBanner) {
      cookieBanner.classList.remove('is-visible');
      setTimeout(() => {
        cookieBanner.style.display = 'none';
      }, 400);
    }
  }

  function showCookieBanner() {
    const cookieBanner = document.getElementById('cookie-consent');
    if (!cookieBanner) return;
    
    if (!getConsent()) {
      cookieBanner.style.display = 'block';
      setTimeout(() => {
        cookieBanner.classList.add('is-visible');
      }, 10);
    }
  }

  function initCookieConsent() {
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');
    
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => setConsent('accepted'));
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', () => setConsent('declined'));
    }
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const banner = document.getElementById('cookie-consent');
        if (banner?.classList.contains('is-visible')) {
          setConsent('declined');
        }
      }
    });
    
    setTimeout(showCookieBanner, 1500);
  }

  // ========== 5. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА (КНОПКА) ==========
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      if (getConsent() !== 'accepted') {
        showCookieBanner();
        const banner = document.getElementById('cookie-consent');
        if (banner) {
          banner.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
        return;
      }
      const newLang = currentLang === 'ru' ? 'en' : 'ru';
      setLanguage(newLang, true);
    });
  }

  // ========== 6. АНИМАЦИИ ПРИ СКРОЛЛЕ ==========
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.about-card, .media-item, .subscribe-form, .press-grid, .policy-card').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  // ========== 7. ИНДИКАТОР КАРМЫ ==========
  const karmaFill = document.querySelector('.karma-fill');
  if (karmaFill) {
    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const width = Math.min(Math.max(scrollPercent * 100, 0), 100);
      karmaFill.style.width = `${width}%`;
      const hue = Math.round(200 - scrollPercent * 180);
      karmaFill.style.background = `linear-gradient(90deg, hsl(${hue}, 70%, 50%), var(--gold))`;
    }, { passive: true });
  }

  // ========== 8. ГЕНЕРАТОР ЧАСТИЦ ==========
  const particleContainer = document.getElementById('bg-particles');
  if (particleContainer) {
    const particleCount = window.innerWidth < 768 ? 25 : 45;
    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 4 + 2;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${Math.random() * 12 + 10}s`;
      p.style.animationDelay = `${Math.random() * 15}s`;
      p.style.opacity = Math.random() * 0.5 + 0.3;
      particleContainer.appendChild(p);
    }
  }

  // ========== 9. ИНТЕРАКТИВНЫЕ СТРУНЫ ==========
  document.querySelectorAll('.string').forEach(str => {
    const playPluck = (e) => {
      if (navigator.vibrate) navigator.vibrate(10);
      
      str.classList.remove('plucked');
      void str.offsetWidth;
      str.classList.add('plucked');
      
      if (e?.clientX) {
        createSparkle(e.clientX, e.clientY);
      }
    };
    
    str.addEventListener('click', playPluck);
    str.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        playPluck();
      }
    });
  });

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 6px;
      height: 6px;
      background: var(--gold);
      border-radius: 50%;
      pointer-events: none;
      z-index: 999;
      box-shadow: 0 0 10px var(--gold), 0 0 20px rgba(197,165,90,0.6);
      animation: sparkleFade 0.6s ease-out forwards;
    `;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 600);
  }

  if (!document.getElementById('sparkle-keyframes')) {
    const style = document.createElement('style');
    style.id = 'sparkle-keyframes';
    style.textContent = `
      @keyframes sparkleFade {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  // ========== 10. ФОРМА ПОДПИСКИ (ДЕМО) ==========
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('emailInput');
      const successMsg = document.querySelector('.form-success');
      
      if (emailInput?.value && emailInput.checkValidity()) {
        form.reset();
        if (successMsg) {
          successMsg.classList.remove('hidden');
          setTimeout(() => successMsg.classList.add('hidden'), 4000);
        }
      } else if (emailInput) {
        emailInput.reportValidity();
      }
    });
  }

  // ========== 11. ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРЕЙ ==========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // ========== ИНИЦИАЛИЗАЦИЯ ==========
  initLanguage();
  initCookieConsent();
});
