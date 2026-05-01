document.addEventListener('DOMContentLoaded', () => {
  // 1. Год в футере
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 2. Переключение языков
  const translations = {
    ru: {
      // Главная
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
      footerContacts: "Контакты",

      // Страница политики
      privacyTitle: "Политика конфиденциальности",
      privacyLastUpdate: "Дата последнего обновления: 1 мая 2026 г.",
      privacyIntro: "Команда разработчиков игры «Resonara: Soulstrings» (далее — «Мы», «Наша команда») уважает вашу приватность и обязуется защищать персональные данные пользователей сайта <strong>resonara.ru</strong>. Настоящая политика описывает, какие данные мы собираем, как их используем и какие у вас есть права.",
      privacySection1Title: "1. Какие данные мы собираем",
      privacySection1Text: "На данный момент на сайте реализована <strong>демонстрационная форма подписки на новости</strong>. При её заполнении вы добровольно предоставляете свой адрес электронной почты. В текущей версии сайта форма не передаёт данные на внешние серверы — информация остаётся в браузере и нигде не сохраняется. Это сделано для демонстрации функционала. В будущем мы планируем подключить полноценный сервис email-рассылок, о чём дополнительно уведомим пользователей.",
      privacySection1Text2: "Кроме того, при посещении сайта могут автоматически собираться технические данные: IP-адрес, тип браузера, язык операционной системы, реферер (страница, с которой вы перешли), дата и время запроса. Эти данные анонимны и используются только для анализа статистики посещений и улучшения работы сайта.",
      privacySection2Title: "2. Использование локального хранилища (localStorage)",
      privacySection2Text: "Сайт использует <strong>localStorage вашего браузера</strong> для сохранения выбранного языка интерфейса (русский/английский) и, в будущем, для запоминания настроек. Эти данные не покидают ваше устройство и могут быть удалены вами в любой момент через настройки браузера.",
      privacySection3Title: "3. Cookies",
      privacySection3Text: "Наш сайт <strong>не использует</strong> файлы cookie для отслеживания пользователей. Мы не размещаем рекламных трекеров, кода аналитики Google Analytics или аналогичных систем, собирающих персональные данные. Вся статистика собирается агрегированно на уровне GitHub Pages и не позволяет идентифицировать конкретного посетителя.",
      privacySection4Title: "4. Цели обработки данных",
      privacySection4Text: "Если в будущем будет организован сбор email‑адресов, они будут использоваться исключительно для:",
      privacySection4Item1: "рассылки новостей о разработке, анонсов, обновлений игры;",
      privacySection4Item2: "информирования о специальных предложениях и событиях (только с вашего согласия).",
      privacySection4Text2: "Мы не передаём ваши контакты третьим лицам, не занимаемся спамом и не продаём базу подписчиков.",
      privacySection5Title: "5. Срок хранения данных",
      privacySection5Text: "Email-адреса подписчиков будут храниться до момента отписки (в каждой рассылке предусмотрена ссылка для отказа) или до удаления аккаунта в сервисе рассылок. Технические логи на стороне GitHub Pages автоматически удаляются через короткий промежуток времени.",
      privacySection6Title: "6. Передача данных третьим лицам",
      privacySection6Text: "Мы не передаём ваши персональные данные никаким третьим лицам, за исключением случаев, прямо предусмотренных законодательством РФ (по запросу суда, правоохранительных органов) или при подключении сервиса рассылок — в этом случае данные будут переданы выбранному оператору, обеспечивающему безопасность обработки.",
      privacySection7Title: "7. Ваши права",
      privacySection7Text: "Вы имеете право:",
      privacySection7Item1: "получить информацию о том, какие ваши данные хранятся;",
      privacySection7Item2: "потребовать их исправления или удаления;",
      privacySection7Item3: "отозвать согласие на обработку персональных данных (если оно было дано).",
      privacySection7Text2: "Для реализации этих прав свяжитесь с нами по email: <a href='mailto:team@shadowskadiproduction.ru'>team@shadowskadiproduction.ru</a>",
      privacySection8Title: "8. Изменения в политике конфиденциальности",
      privacySection8Text: "Мы можем время от времени обновлять этот документ. Новая версия вступает в силу с момента её публикации на этой странице. Пожалуйста, периодически проверяйте данный раздел.",
      privacySection9Title: "9. Контактная информация",
      privacySection9Text: "По всем вопросам, связанным с обработкой персональных данных, вы можете обратиться к представителю команды: Email: <a href='mailto:team@shadowskadiproduction.ru'>team@shadowskadiproduction.ru</a> или через форму обратной связи в социальных сетях.",
      privacyFooterNote: "Настоящая политика распространяется только на сайт <strong>resonara.ru</strong> и не регулирует обработку данных на сторонних ресурсах, на которые могут вести ссылки (Steam, Discord, Telegram, VK и др.).",
      backLink: "← Вернуться на главную"
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
      footerContacts: "Contacts",

      // Privacy page
      privacyTitle: "Privacy Policy",
      privacyLastUpdate: "Last updated: May 1, 2026",
      privacyIntro: "The developers of «Resonara: Soulstrings» (hereinafter «We») respect your privacy and are committed to protecting the personal data of users of the website <strong>resonara.ru</strong>. This policy describes what data we collect, how we use it, and what rights you have.",
      privacySection1Title: "1. What data we collect",
      privacySection1Text: "Currently, the website features a <strong>demo newsletter subscription form</strong>. By filling it out, you voluntarily provide your email address. In the current version, the form does not send data to external servers — the information remains in your browser and is not stored anywhere. This is done for demonstration purposes. In the future we plan to connect a full-fledged email newsletter service, which we will notify users about.",
      privacySection1Text2: "In addition, when visiting the site, technical data may be automatically collected: IP address, browser type, operating system language, referrer (the page you came from), date and time of request. This data is anonymous and used only for visitor statistics and website improvement.",
      privacySection2Title: "2. Use of local storage (localStorage)",
      privacySection2Text: "The site uses your browser's <strong>localStorage</strong> to save the selected interface language (Russian/English) and, in the future, for remembering settings. This data does not leave your device and can be deleted by you at any time through your browser settings.",
      privacySection3Title: "3. Cookies",
      privacySection3Text: "Our site <strong>does not use</strong> cookies to track users. We do not place advertising trackers, Google Analytics code, or similar systems that collect personal data. All statistics are collected aggregated at the GitHub Pages level and do not allow identification of a specific visitor.",
      privacySection4Title: "4. Purposes of data processing",
      privacySection4Text: "If email addresses are collected in the future, they will be used exclusively for:",
      privacySection4Item1: "sending development news, announcements, game updates;",
      privacySection4Item2: "informing about special offers and events (only with your consent).",
      privacySection4Text2: "We do not transfer your contacts to third parties, engage in spam, or sell the subscriber base.",
      privacySection5Title: "5. Data retention period",
      privacySection5Text: "Subscribers' email addresses will be stored until unsubscription (an unsubscribe link is provided in each newsletter) or until the account in the newsletter service is deleted. Technical logs on the GitHub Pages side are automatically deleted after a short period of time.",
      privacySection6Title: "6. Transfer of data to third parties",
      privacySection6Text: "We do not transfer your personal data to any third parties, except as required by the legislation of the Russian Federation (upon court order, law enforcement request) or when connecting a newsletter service — in which case the data will be transferred to the selected operator that ensures processing security.",
      privacySection7Title: "7. Your rights",
      privacySection7Text: "You have the right to:",
      privacySection7Item1: "receive information about what data is stored;",
      privacySection7Item2: "request its correction or deletion;",
      privacySection7Item3: "withdraw consent to the processing of personal data (if given).",
      privacySection7Text2: "To exercise these rights, contact us by email: <a href='mailto:team@shadowskadiproduction.ru'>team@shadowskadiproduction.ru</a>",
      privacySection8Title: "8. Changes to the privacy policy",
      privacySection8Text: "We may update this document from time to time. The new version comes into force upon publication on this page. Please check this section periodically.",
      privacySection9Title: "9. Contact information",
      privacySection9Text: "For any questions related to the processing of personal data, you can contact the team representative: Email: <a href='mailto:team@shadowskadiproduction.ru'>team@shadowskadiproduction.ru</a> or via the feedback form on social networks.",
      privacyFooterNote: "This policy applies only to the website <strong>resonara.ru</strong> and does not govern data processing on third-party resources that may be linked (Steam, Discord, Telegram, VK, etc.).",
      backLink: "← Back to home"
    }
  };

  let currentLang = 'ru';
  const savedLang = localStorage.getItem('lang');
  if (savedLang && translations[savedLang]) currentLang = savedLang;

  window.setLanguage = function(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key]; // innerHTML для поддержки ссылок и выделений
      }
    });

    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
      langBtn.textContent = lang === 'ru' ? 'RU | EN' : 'EN | RU';
    }
    localStorage.setItem('lang', lang);
  }

  // Применяем язык сразу
  window.setLanguage(currentLang);

  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      window.setLanguage(currentLang === 'ru' ? 'en' : 'ru');
    });
  }

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
  if (karmaFill) {
    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const width = Math.min(Math.max(scrollPercent * 100, 0), 100);
      karmaFill.style.width = `${width}%`;
      const hue = Math.round(scrollPercent * 180);
      karmaFill.style.background = `linear-gradient(90deg, hsl(${hue}, 70%, 50%), var(--gold))`;
    });
  }

  // 5. Генератор частиц
  const particleContainer = document.getElementById('bg-particles');
  if (particleContainer) {
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
  }

  // 6. Форма подписки
  const form = document.getElementById('newsletter-form');
  if (form) {
    const emailInput = document.getElementById('emailInput');
    const successMsg = document.querySelector('.form-success');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;
      const btn = form.querySelector('button');
      if (btn) btn.textContent = '...';
      setTimeout(() => {
        form.style.display = 'none';
        if (successMsg) successMsg.classList.remove('hidden');
      }, 800);
    });
  }

  // 7. Cookie Banner
  const cookieBanner = document.getElementById('cookie-banner');
  if (cookieBanner) {
    const cookieAccept = document.getElementById('cookie-accept');
    const cookieDecline = document.getElementById('cookie-decline');
    const cookieParticlesContainer = document.querySelector('.cookie-particles');

    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setTimeout(() => {
        cookieBanner.classList.add('visible');
        createCookieParticles();
      }, 1500);
    }

    function createCookieParticles() {
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement('div');
        p.classList.add('cookie-particle');
        p.style.left = `${Math.random() * 100}%`;
        p.style.animationDuration = `${Math.random() * 2 + 2}s`;
        p.style.animationDelay = `${Math.random() * 1.5}s`;
        if (cookieParticlesContainer) {
          cookieParticlesContainer.appendChild(p);
        }
      }
    }

    if (cookieAccept) {
      cookieAccept.addEventListener('click', () => {
        cookieBanner.classList.remove('visible');
        localStorage.setItem('cookieConsent', 'accepted');
      });
    }
    if (cookieDecline) {
      cookieDecline.addEventListener('click', () => {
        cookieBanner.classList.remove('visible');
        localStorage.setItem('cookieConsent', 'declined');
      });
    }
  }

  // 8. Интерактивные струны
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
    } catch (e) { /* без ошибок */ }
  }

  document.querySelectorAll('.string').forEach(string => {
    string.addEventListener('click', () => {
      string.classList.remove('plucked');
      void string.offsetWidth;
      string.classList.add('plucked');

      const pitch = string.style.getPropertyValue('--pitch');
      if (pitch) {
        playStringSound(parseFloat(pitch));
      }
    });

    string.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        string.click();
      }
    });
  });

});
