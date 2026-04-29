document.addEventListener('DOMContentLoaded', () => {
  // ============================================
  // 1. ГОД В ФУТЕРЕ
  // ============================================
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ============================================
  // 2. ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ
  // ============================================
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
    if (document.documentElement) document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    if (langBtn) langBtn.textContent = lang === 'ru' ? 'RU | EN' : 'EN | RU';
    try { localStorage.setItem('lang', lang); } catch(e) {}
  }

  if (langBtn) {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ru' ? 'en' : 'ru');
    });
  }

  // ============================================
  // 3. АНИМАЦИИ ПРИ СКРОЛЛЕ
  // ============================================
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-card, .media-item, .subscribe-form, .press-grid').forEach(el => {
      el.classList.add('fade-up');
      observer.observe(el);
    });
  }

  // ============================================
  // 4. ИНДИКАТОР КАРМЫ
  // ============================================
  const karmaFill = document.querySelector('.karma-fill');
  if (karmaFill) {
    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const width = Math.min(Math.max(scrollPercent * 100, 0), 100);
      karmaFill.style.width = `${width}%`;
      const hue = Math.round(scrollPercent * 180);
      karmaFill.style.background = `linear-gradient(90deg, hsl(${hue}, 70%, 50%), var(--gold))`;
    }, { passive: true });
  }

  // ============================================
  // 5. ГЕНЕРАТОР ЧАСТИЦ
  // ============================================
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

  // ============================================
  // 6. ФОРМА ПОДПИСКИ
  // ============================================
  const form = document.getElementById('newsletter-form');
  if (form) {
    const emailInput = document.getElementById('emailInput');
    const successMsg = document.querySelector('.form-success');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput?.value.trim();
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) return;

      const btn = form.querySelector('button');
      if (btn) btn.textContent = '...';
      
      setTimeout(() => {
        form.style.display = 'none';
        if (successMsg) successMsg.classList.remove('hidden');
      }, 800);
    });
  }

  // ============================================
  // 🔊 7. ИНТЕРАКТИВНЫЕ СТРУНЫ
  // ============================================
  const StringSound = (() => {
    let audioCtx = null;
    let masterGain = null;
    let isUnlocked = false;
    let isSupported = true;

    function checkSupport() {
      if (!window.AudioContext && !window.webkitAudioContext) {
        console.warn('🔊 Web Audio API не поддерживается');
        isSupported = false;
        return false;
      }
      return true;
    }

    function initAudio() {
      if (audioCtx || !isSupported) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        masterGain = audioCtx.createGain();
        masterGain.gain.value = 0.15;
        masterGain.connect(audioCtx.destination);
        console.log('🔊 AudioContext готов');
      } catch (e) {
        console.error('🔊 Ошибка аудио:', e);
        isSupported = false;
      }
    }

    async function unlockAudio() {
      if (!isSupported || !audioCtx) return;
      try {
        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
          console.log('🔊 Аудио разблокировано');
        }
        isUnlocked = true;
      } catch (e) {
        console.error('🔊 Ошибка разблокировки:', e);
      }
    }

    function playString(frequency = 220, duration = 0.8) {
      if (!isSupported || !audioCtx || !isUnlocked) return;
      try {
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(frequency * (0.998 + Math.random() * 0.004), now);
        
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2000, now);
        filter.frequency.exponentialRampToValueAtTime(400, now + duration);
        
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.6, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, now + duration);
        
        const lfo = audioCtx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 6;
        const lfoGain = audioCtx.createGain();
        lfoGain.gain.value = 3;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        
        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        
        osc.start(now);
        lfo.start(now);
        osc.stop(now + duration);
        lfo.stop(now + duration);
      } catch (e) {
        console.error('🔊 Ошибка звука:', e);
      }
    }

    function bindStrings() {
      if (!isSupported) return;
      const strings = document.querySelectorAll('.string[role="button"]');
      if (!strings.length) return;

      strings.forEach(string => {
        const pitch = parseFloat(string.style.getPropertyValue('--pitch')) || 220;
        
        const pluckVisual = () => {
          string.classList.remove('plucked');
          void string.offsetWidth;
          string.classList.add('plucked');
        };
        
        const onInteract = (e) => {
          e?.preventDefault?.();
          initAudio();
          unlockAudio();
          pluckVisual();
          playString(pitch);
        };
        
        string.addEventListener('click', onInteract);
        string.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onInteract();
          }
        });
        string.addEventListener('touchstart', onInteract, { passive: true });
        
        if (!('ontouchstart' in window)) {
          string.title = 'Нажми для звука';
        }
      });
    }

    function setupGlobalUnlock() {
      const handler = () => {
        initAudio();
        unlockAudio();
        ['click','touchstart','keydown'].forEach(evt => 
          document.removeEventListener(evt, handler)
        );
      };
      ['click','touchstart','keydown'].forEach(evt => 
        document.addEventListener(evt, handler, { passive: true })
      );
    }

    return {
      init: () => { checkSupport(); setupGlobalUnlock(); bindStrings(); },
      play: playString,
      setVolume: (v) => { if (masterGain) masterGain.gain.value = Math.max(0, Math.min(1, v)); }
    };
  })(); // ← Закрывает IIFE

  StringSound.init(); // ← Запуск
}); // ← Закрывает DOMContentLoaded
