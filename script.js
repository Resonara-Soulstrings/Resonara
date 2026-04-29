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
    if (savedLang && translations[savedLang]) setLanguage(savedLang);
    langBtn.addEventListener('click', () => setLanguage(currentLang === 'ru' ? 'en' : 'ru'));
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
    for (let i = 0; i < 45; i++) {
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
  // 🔊 7. ИНТЕРАКТИВНЫЕ СТРУНЫ (АУДИО + АНИМАЦИЯ)
  // ============================================
  const StringSound = (() => {
    let audioCtx = null;
    let masterGain = null;
    let isReady = false;

    // Создаём и разблокируем аудио ТОЛЬКО после жеста пользователя
    async function ensureAudio() {
      if (isReady) return true;
      try {
        if (!audioCtx) {
          const AudioContext = window.AudioContext || window.webkitAudioContext;
          if (!AudioContext) throw new Error('Web Audio API not supported');
          audioCtx = new AudioContext();
          masterGain = audioCtx.createGain();
          masterGain.gain.value = 0.15;
          masterGain.connect(audioCtx.destination);
        }
        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
        }
        isReady = true;
        console.log('🔊 Audio ready');
        return true;
      } catch (e) {
        console.error('🔊 Audio error:', e);
        return false;
      }
    }

    // Генерация звука струны
    function playTone(frequency = 220, duration = 0.8) {
      if (!isReady || !audioCtx) return;
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
        console.error('🔊 Play error:', e);
      }
    }

    // Визуальный "щипок" струны
    function pluckVisual(string) {
      // Останавливаем бесконечную анимацию, если она есть
      string.style.animationPlayState = 'paused';
      string.classList.remove('plucked');
      void string.offsetWidth; // рефлоу
      string.classList.add('plucked');
      // Возвращаем анимацию в паузу после завершения
      setTimeout(() => {
        string.style.animationPlayState = 'paused';
      }, 400);
    }

    // Привязка событий
    function bindStrings() {
      const strings = document.querySelectorAll('.string[role="button"]');
      if (!strings.length) {
        console.warn('🔊 No interactive strings found');
        return;
      }

      // 🔧 ОТКЛЮЧАЕМ бесконечную CSS-анимацию для всех струн
      strings.forEach(s => {
        s.style.animationPlayState = 'paused';
        s.style.pointerEvents = 'auto'; // на всякий случай
      });

      strings.forEach(string => {
        const pitch = parseFloat(string.style.getPropertyValue('--pitch')) || 220;
        
        const onInteract = async (e) => {
          e?.preventDefault?.();
          const ok = await ensureAudio();
          if (!ok) return;
          pluckVisual(string);
          playTone(pitch);
        };
        
        string.addEventListener('click', onInteract);
        string.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onInteract(e);
          }
        });
        string.addEventListener('touchstart', onInteract, { passive: true });
        
        if (!('ontouchstart' in window)) {
          string.title = 'Нажми для звука';
        }
      });
    }

    // Глобальная разблокировка при первом жесте
    function setupUnlock() {
      const unlock = async () => {
        await ensureAudio();
        ['click','touchstart','keydown','scroll'].forEach(evt => 
          document.removeEventListener(evt, unlock)
        );
      };
      ['click','touchstart','keydown','scroll'].forEach(evt => 
        document.addEventListener(evt, unlock, { passive: true })
      );
    }

    return {
      init: () => { setupUnlock(); bindStrings(); },
      play: playTone,
      setVolume: (v) => { if (masterGain) masterGain.gain.value = Math.max(0, Math.min(1, v)); }
    };
  })();

  StringSound.init();
  window.StringSound = StringSound; // для отладки в консоли
});
