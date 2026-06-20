(() => {
  const STORAGE_KEY = 'wkg_lang';

  const DICT = {
    id: {
      navMenuExperience: 'EXPERIENCE',
      navMenuGallery: 'GALLERY',
      navMenuMenu: 'MENU',
      navMenuContact: 'CONTACT',

      branchBtn: 'CABANG',

      heroWelcome: 'Welcome To',
      heroTitleLines: ['WARUNG', 'KOPI GUNUNG'],
      heroSubtitle: 'Luxury Coffee Tourism Destination',
      heroReservasi: 'Reservasi',

      scrollText: 'Scroll',

      introEyebrow: 'Emotion hook',
      introTitle: 'Setiap cabang punya cerita. Setiap lokasi punya pengalaman berbeda.',
      introBody:
        'Ini bukan 1 cafe. Ini brand coffee tourism. Setiap lokasi dirancang untuk pengalaman unik bagi wisatawan, keluarga, komunitas, dan content creator yang mencari tempat dengan rasa, suasana, dan memori yang berbeda.',

      brandStoryEyebrow: 'Brand story',
      brandStoryTitle: 'Tentang Warung Kopi Gunung',
      brandStoryBody:
        'Nama “Warung Kopi Gunung” bukan sekadar label. Ini janji: rasa kopi yang hangat, suasana alam yang menenangkan, dan tempat berkumpul yang terasa layak untuk pulang lagi.',

      brandStoryPhilosophyTitle: 'Filosofi yang terasa ketika kamu duduk.',
      brandStoryPhilosophyBody:
        'Kami membangun “wisata kopi” sebagai pengalaman: udara yang berbeda, cahaya yang sinematik, dan momen yang membuat obrolan jadi lebih pelan. Karena yang dicari bukan hanya minuman, tapi rasa “akhirnya nemu tempat yang worth it”.',
      timelineNameStrong: 'Nama: Warung Kopi Gunung',
      timelineNameSpan:
        'Warung yang hangat, gunung yang menenangkan. Perpaduan sederhana yang langsung memberi ekspektasi experience.',
      timelineConceptStrong: 'Konsep: Coffee Tourism',
      timelineConceptSpan:
        'Datang untuk rasa, tinggal untuk suasana. Setiap cabang diposisikan sebagai destinasi, bukan sekadar cafe.',
      timelineNatureStrong: 'Alam: Bukan dekorasi',
      timelineNatureSpan:
        'Hutan, kabut, pemandangan, dan pencahayaan menjadi “produk utama” yang membuat orang ingin datang.',
      timelineCommunityStrong: 'Komunitas: Tempat berkumpul',
      timelineCommunitySpan:
        'Family time, gathering, komunitas, sampai content creator. Tempat yang membuat momen terasa pantas.',

      brandCtaStrong: 'Mau tahu cabang mana yang paling cocok?',
      brandCtaSpan: 'Chat admin, sebutkan tujuanmu: healing, keluarga, atau konten.',
      brandCtaWhatsApp: 'WhatsApp',
      brandCtaSeeLocations: 'Lihat Lokasi',

      signatureEyebrow: 'Signature experience',
      signatureTitle: 'Kami tidak menjual makanan. Kami menjual pengalaman.',
      signatureBody: 'Empat alasan utama kenapa pengunjung berkata: “Saya ingin datang ke tempat ini.”',

      experienceCard1Title: '🌲 Alam & Pemandangan',
      experienceCard1Body:
        'Udara sejuk, kabut, hutan, dan cahaya hangat. Experience yang terasa seperti weekend escape.',
      experienceCard2Title: '☕ Kopi & Kuliner',
      experienceCard2Body:
        'Rasa yang “nempel”, plating yang fotogenik, dan menu favorit yang sering disebut di review.',
      experienceCard3Title: '👨‍👩‍👧‍👦 Quality Time Keluarga',
      experienceCard3Body:
        'Tempat nyaman untuk ngobrol, makan, dan foto bareng. Family friendly dan crowd-ready.',
      experienceCard4Title: '📸 Instagrammable Spot',
      experienceCard4Body:
        'Setiap sudut siap jadi frame. Konten terasa mahal, bukan “foto biasa”.',

      signatureCtaStrong: 'Siap pilih vibe yang kamu mau?',
      signatureCtaSpan: 'Weekend cepat ramai. Amankan dulu lewat WhatsApp.',
      signatureCtaBooking: 'Booking WhatsApp',
      signatureCtaSeeAtmosphere: 'Lihat Suasana',
      signatureCtaInstagram: 'Instagram',

      facilitiesEyebrow: 'Facilities',
      facilitiesTitle: 'Fasilitas yang membuat kunjungan terasa nyaman.',
      facilitiesBody: 'Lengkap untuk keluarga, komunitas, sampai gathering.',

      facilitiesCtaStrong: 'Mau datang ramean?',
      facilitiesCtaSpan: 'Tanya kapasitas dan rekomendasi jam terbaik via WhatsApp.',
      facilitiesCtaAskWa: 'Tanya via WhatsApp',
      facilitiesCtaOpenMaps: 'Open Maps',

      nightVibeEyebrow: 'Night vibe',
      nightVibeTitle: 'Lebih Dari Sekadar Ngopi',
      nightVibeBody: 'Suasana hidup. Musik. Komunitas. Alasan untuk datang kembali.',

      networkLocationsEyebrow: 'Network locations',
      networkLocationsTitle: 'WARUNG KOPI GUNUNG — NETWORK PREMIUM DESTINATIONS',
      networkLocationsBody:
        'Setiap cabang diposisikan sebagai pengalaman yang berbeda. Ini memperkuat persepsi brand sebagai jaringan destinasi, bukan titik usaha tunggal.',

      emotionEngineEyebrow: 'Emotion engine',
      emotionEngineTitle: 'Mereka tidak datang hanya untuk kopi…',
      emotionEngineBody:
        'Mereka datang karena ingin merasa pergi. Ingin bernapas lebih pelan. Ingin punya momen yang layak diingat dan dibagikan.',

      trustEyebrow: 'Trust boost',
      trustTitle: 'Ini bukan tempat sepi — ini destinasi.',
      trustBody:
        'Trust tidak dibangun dari janji kosong. Trust dibangun dari rating tinggi, ribuan review, dan kesan kuat yang terus diulang oleh pengunjung.',

      galleryEyebrow: 'Cinematic gallery',
      galleryTitle: 'Visual yang membuat orang ingin datang, bukan sekadar lihat.',
      galleryBody:
        'Semua visual memakai screenshot foto yang kamu unggah. Galeri ini disusun untuk membangun desire: night ambience, forest feel, wooden cabin aesthetic, dan shot minuman yang terasa cinematic.',

      menuEyebrow: 'Menu highlight',
      menuTitle: 'Bukan soal harga. Soal craving dan pengalaman.',
      menuBody:
        'Menu ditampilkan bukan sebagai daftar biasa, tapi sebagai pemicu keinginan. Tujuannya sederhana: bikin orang bisa membayangkan momen yang akan mereka dapat.',

      priceEyebrow: 'Price anchoring',

      contactEyebrow: 'Location + map',
      contactTitle: 'Mulai dari titik terdekat, lanjutkan ke pengalaman yang kamu cari.',
      contactBody:
        'Peta di bawah memakai data lokasi yang tersedia dari input Google Maps. Untuk semua cabang, user diarahkan ke admin WhatsApp sebagai pusat booking dan validasi cabang.',

      instagramEyebrow: 'Instagram loop',
      instagramTitle: 'Warung Kopi Gunung Instagram',
      instagramBody:
        'Setelah melihat website, user harus punya satu langkah lanjutan yang sangat mudah: cek visual lain atau langsung chat admin. Funnel tidak berhenti di satu CTA.',

      closingEyebrow: 'Closing psychology',
      closingTitle: 'Kalau kamu sudah lihat sampai sini… kamu sudah tertarik.',
      closingBody:
        'Sekarang tinggal pilih: mau simpan rasa penasaran itu, atau ubah jadi rencana datang. Weekend ramai. Slot nyaman lebih cepat terisi. Booking lebih dulu bikin semuanya lebih gampang.',

      footerAdsTitle: 'Ads landing funnel',
      footerQuickTitle: 'Quick actions',

      popupReadyEyebrow: 'Ready to book?',
      popupReadyTitle: 'Jangan tunggu sampai weekend penuh.',
      popupReadyBody:
        'Kalau kamu sudah tertarik, langkah tercepat sekarang adalah chat admin via WhatsApp. Pilih cabang, tanya suasana, lalu booking.',
      popupBookBtn: 'Book via WhatsApp',
      popupSeeLocations: 'Lihat Semua Lokasi',

      branchModalEyebrow: 'Multi cabang',
      branchModalTitle: 'Pilih Cabang Warung Kopi Gunung',
      branchModalIntro:
        'Pilih lokasi yang ingin kamu reservasi. Kamu akan diarahkan ke WhatsApp dengan pesan otomatis yang sudah siap dikirim.',
      branchReserveBtn: 'Reservasi',

      stickyWhatsApp: 'WhatsApp',
      stickyMaps: 'Maps',
      stickyCall: 'Call',

      floatingWaLabel: 'WhatsApp booking',

      ctaIntroScrollAria: 'Scroll ke bawah',
      heroReserveLinkId: 'locations',

      // fallback keys for generic buttons
      heroPrimaryReserve: 'Reservasi',
    },

    en: {
      navMenuExperience: 'EXPERIENCE',
      navMenuGallery: 'GALLERY',
      navMenuMenu: 'MENU',
      navMenuContact: 'CONTACT',

      branchBtn: 'BRANCH',

      heroWelcome: 'Welcome To',
      heroTitleLines: ['WARUNG', 'KOPI GUNUNG'],
      heroSubtitle: 'Luxury Coffee Tourism Destination',
      heroReservasi: 'Reservation',

      scrollText: 'Scroll',

      introEyebrow: 'Emotion hook',
      introTitle: 'Every branch has a story. Every place feels different.',
      introBody:
        'This is not just 1 cafe. This is coffee tourism branding. Each location is designed for a unique experience for travelers, families, communities, and content creators looking for a place with the right taste, atmosphere, and memories.',

      brandStoryEyebrow: 'Brand story',
      brandStoryTitle: 'About Warung Kopi Gunung',
      brandStoryBody:
        '“Warung Kopi Gunung” is more than a name. It’s a promise: warm coffee taste, calming nature vibes, and a gathering place that feels worth coming back to.',

      brandStoryPhilosophyTitle: 'A philosophy you can feel when you sit down.',
      brandStoryPhilosophyBody:
        'We build “coffee tourism” as an experience: different air, cinematic light, and moments that slow your conversations down. Because people don’t only come for drinks—they come for that “finally found a place worth it” feeling.',
      timelineNameStrong: 'Name: Warung Kopi Gunung',
      timelineNameSpan:
        'A warm “warung” and a soothing mountain. A simple combination that instantly sets the expectation for the experience.',
      timelineConceptStrong: 'Concept: Coffee Tourism',
      timelineConceptSpan:
        'Come for the taste, stay for the atmosphere. Each branch is positioned as a destination—not just a cafe.',
      timelineNatureStrong: 'Nature: Not decoration',
      timelineNatureSpan:
        'Forests, mist, scenery, and lighting become the “main product” that makes people want to visit.',
      timelineCommunityStrong: 'Community: A place to gather',
      timelineCommunitySpan:
        'Family time, gatherings, communities, and content creators. A place where moments feel truly meaningful.',

      brandCtaStrong: 'Want to know which branch fits you best?',
      brandCtaSpan: 'Chat admin and tell us your goal: healing, family time, or content.',
      brandCtaWhatsApp: 'WhatsApp',
      brandCtaSeeLocations: 'See Locations',

      signatureEyebrow: 'Signature experience',
      signatureTitle: 'We don’t sell food. We sell experiences.',
      signatureBody: 'Four reasons visitors say: “I want to come here.”',

      experienceCard1Title: '🌲 Nature & Scenic Views',
      experienceCard1Body:
        'Cool air, mist, forests, and warm light. An experience that feels like a weekend escape.',
      experienceCard2Title: '☕ Coffee & Culinary',
      experienceCard2Body:
        'The “sticky” taste, photogenic plating, and favorite menu items people keep mentioning in reviews.',
      experienceCard3Title: '👨‍👩‍👧‍👦 Family Quality Time',
      experienceCard3Body:
        'A comfortable place to chat, eat, and take photos together. Family-friendly and crowd-ready.',
      experienceCard4Title: '📸 Instagrammable Spot',
      experienceCard4Body:
        'Every corner is ready for your frame. Content feels premium—not just “ordinary photos”.',

      signatureCtaStrong: 'Ready to pick your vibe?',
      signatureCtaSpan: 'Weekend gets busy fast. Secure your spot first via WhatsApp.',
      signatureCtaBooking: 'Booking WhatsApp',
      signatureCtaSeeAtmosphere: 'See the Atmosphere',
      signatureCtaInstagram: 'Instagram',

      facilitiesEyebrow: 'Facilities',
      facilitiesTitle: 'Facilities that make your visit feel comfortable.',
      facilitiesBody: 'Complete for families, communities, and gatherings.',

      facilitiesCtaStrong: 'Coming with a crowd?',
      facilitiesCtaSpan: 'Ask capacity and the best time recommendations via WhatsApp.',
      facilitiesCtaAskWa: 'Ask via WhatsApp',
      facilitiesCtaOpenMaps: 'Open Maps',

      nightVibeEyebrow: 'Night vibe',
      nightVibeTitle: 'More Than Just Coffee',
      nightVibeBody: 'A lively atmosphere—music, community, and a reason to come back.',

      networkLocationsEyebrow: 'Network locations',
      networkLocationsTitle: 'WARUNG KOPI GUNUNG — NETWORK PREMIUM DESTINATIONS',
      networkLocationsBody:
        'Each branch is positioned as a different experience. This strengthens the brand perception as a destination network—not a single business point.',

      emotionEngineEyebrow: 'Emotion engine',
      emotionEngineTitle: 'They don’t come only for coffee…',
      emotionEngineBody:
        'They come to feel like they’re away—breathe slower, and share moments worth remembering.',

      trustEyebrow: 'Trust boost',
      trustTitle: 'This isn’t a quiet place—it’s a destination.',
      trustBody:
        'Trust isn’t built from empty promises. Trust is built from high ratings, thousands of reviews, and strong impressions repeated by visitors.',

      galleryEyebrow: 'Cinematic gallery',
      galleryTitle: 'Visuals that make people want to come—not just look.',
      galleryBody:
        'All visuals use screenshots from the photos you upload. The gallery is arranged to build desire: night ambience, forest feel, wooden cabin aesthetic, and cinematic drink shots.',

      menuEyebrow: 'Menu highlight',
      menuTitle: 'Not about price. It’s about craving and experience.',
      menuBody:
        'The menu isn’t shown as a regular list, but as a trigger for desire. The goal is simple: help people imagine the moment they’ll get.',

      priceEyebrow: 'Price anchoring',

      contactEyebrow: 'Location + map',
      contactTitle: 'Start from the nearest point, then continue with the experience you want.',
      contactBody:
        'The map below uses location data available from Google Maps input. For all branches, users are directed to the admin WhatsApp as the booking center and branch validation.',

      instagramEyebrow: 'Instagram loop',
      instagramTitle: 'Warung Kopi Gunung Instagram',
      instagramBody:
        'After checking the website, users should have an easy next step: check more visuals or directly chat the admin. The funnel doesn’t stop at one CTA.',

      closingEyebrow: 'Closing psychology',
      closingTitle: 'If you made it this far… you’re already interested.',
      closingBody:
        'Now choose: keep that curiosity, or turn it into a plan to visit. Weekends get busy. Comfortable slots fill faster. Booking earlier makes everything easier.',

      footerAdsTitle: 'Ads landing funnel',
      footerQuickTitle: 'Quick actions',

      popupReadyEyebrow: 'Ready to book?',
      popupReadyTitle: 'Don’t wait until the weekend is full.',
      popupReadyBody:
        'If you’re already interested, the fastest step now is to chat admin via WhatsApp. Choose a branch, ask about the vibe, then book.',
      popupBookBtn: 'Book via WhatsApp',
      popupSeeLocations: 'See All Locations',

      branchModalEyebrow: 'Multi-branch',
      branchModalTitle: 'Choose Warung Kopi Gunung Branch',
      branchModalIntro:
        'Choose the location you want to reserve. You’ll be directed to WhatsApp with an automatic message ready to send.',
      branchReserveBtn: 'Reservation',

      stickyWhatsApp: 'WhatsApp',
      stickyMaps: 'Maps',
      stickyCall: 'Call',

      floatingWaLabel: 'WhatsApp booking',

      ctaIntroScrollAria: 'Scroll down',
      heroReserveLinkId: 'locations',

      heroPrimaryReserve: 'Reservation',
    },
  };

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }

  // Ensure dropdown + main button state works even if #langMainBtn has no data-lang
  function applyLanguage(lang) {
    const dict = DICT[lang] || DICT.id;

    // Update language UI
    // - Only depend on #langMainBtn + its children for main indicator sync
    // - Keep dropdown state in sync for elements that actually have data-lang
    const langMainBtn = document.getElementById('langMainBtn');

    const flagEl = document.getElementById('langFlag');
    const codeEl = document.getElementById('langCode');

    const isEn = lang === 'en';

    if (flagEl) flagEl.textContent = isEn ? '🇺🇸' : '🇮🇩';
    if (codeEl) codeEl.textContent = isEn ? 'EN' : 'ID';

    // Main button sync (independent of .lang-btn[data-lang])
    if (langMainBtn) {
      langMainBtn.setAttribute('aria-pressed', isEn ? 'true' : 'false');

      // If the markup changes, keep it safe by updating only visible parts
      // using the existing #langFlag/#langCode elements above.
      // (Still set innerHTML only when those elements don't exist.)
      if (!flagEl || !codeEl) {
        langMainBtn.innerHTML = isEn
          ? '🇺🇸 English'
          : '🇮🇩 Indonesia';
      }
    }

    // Sync active styling for buttons that do have data-lang (dropdown items)
    // HTML uses .lang-option, but legacy may use .lang-btn
    document.querySelectorAll('.lang-option[data-lang], .lang-btn[data-lang]').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // update language specific text nodes
    document.querySelectorAll('[data-i18n-key]').forEach((el) => {
      const key = el.getAttribute('data-i18n-key');

      // multi-line hero title uses dedicated keys in HTML
      if (key === 'heroTitleLine1') {
        el.textContent = dict.heroTitleLines?.[0] ?? '';
        return;
      }
      if (key === 'heroTitleLine2') {
        el.textContent = dict.heroTitleLines?.[1] ?? '';
        return;
      }

      const val = dict[key];
      if (val == null) return;

      if (Array.isArray(val)) {
        el.textContent = val.join(' ');
      } else {
        el.textContent = val;
      }
    });

    // aria label (if markup exists)
    const scrollLink = document.querySelector('[data-i18n-aria="ctaIntroScrollAria"]');
    if (scrollLink) scrollLink.setAttribute('aria-label', dict.ctaIntroScrollAria);

    document.documentElement.lang = lang === 'en' ? 'en' : 'id';
  }

  function initLanguage() {
    const stored = getStoredLang();
    const initial = stored === 'en' || stored === 'id' ? stored : 'id';

    applyLanguage(initial);
  }

  // expose for manual re-apply
  window.WKG_INIT_I18N = initLanguage;
  window.WKG_APPLY_LANG = applyLanguage;

  // Optional helper if page wants to set + apply without reload:
  // (not required, but harmless)
  window.WKG_SET_LANG = (lang) => {
    if (lang !== 'en' && lang !== 'id') lang = 'id';
    setStoredLang(lang);
    applyLanguage(lang);
  };
})();

