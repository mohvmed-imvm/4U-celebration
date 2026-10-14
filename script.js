
/* =====================================================
   1) إعدادات الموقع
   ===================================================== */

const CONFIG = {
  whatsappNumber: "201040275280",

  socialLinks: [
    {
      name: "Instagram",
      url: "https://www.instagram.com/4u_celebrations/",
      color: "#E9A1D5",
      icon: "instagram"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@celebrates4u",
      color: "#FFFFFF",
      icon: "tiktok"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100089993876704",
      color: "#8FB9FF",
      icon: "facebook"
    }
  ]
};


/* =====================================================
   2) التصميمات المتاحة
   ===================================================== */

const templates = [
  {
    id: "birthday-girl",
    number: "01",
    title: "عيد ميلاد بنوتة",
    category: "birthday",
    categoryName: "أعياد الميلاد",
    description: "هدية وردي رقيقة فيها عد تنازلي وهدية ورسالة وصور وموسيقى حسب اختيارك.",
    emoji: "🎂",
    miniBrand: "HAPPY BIRTHDAY",
    previewTitle: "It's your day",
    previewCaption: "A little magic just for you",
    theme: "theme-birthday-girl",
    type: "مناسبة شخصية",
    url: "https://mohvmed-imvm.github.io/birthdayGirl-1/",
    message: "عايز أطلب تصميم عيد ميلاد بنوتة"
  },
    {
    id: "birthday-boy",
    number: "02",
    title: "عيد ميلاد ولد",
    category: "birthday",
    categoryName: "أعياد الميلاد",
    description: "هدية فيها عد تنازلي وهدية ورسالة وصور وموسيقى حسب اختيارك.",
    emoji: "🎂",
    miniBrand: "HAPPY BIRTHDAY",
    previewTitle: "It's your day",
    previewCaption: "A little magic just for you",
    theme: "theme-birthday-boy",
    type: "مناسبة شخصية",
    url: "https://mohvmed-imvm.github.io/birthdayBoy-1/",
    message: "عايز أطلب تصميم عيد ميلاد بنوتة"
  },
  {
    id: "anniversary",
    number: "03",
    title: "ذكرى حب وجواز",
    category: "love",
    categoryName: "اعياد حب",
    description: "تصميم رومانسي للذكرى السنوية أو عيد الجواز، برسالة وصور وتفاصيل خاصة.",
    emoji: "💐",
    miniBrand: "OUR STORY",
    previewTitle: "Forever Us",
    previewCaption: "Every moment means something",
    theme: "theme-anniversary",
    type: "ذكرى خاصة",
    url: "https://mohvmed-imvm.github.io/ValentineDay-1/",
    message: "عايز أطلب تصميم ذكرى حب أو عيد جواز"
  },
  {
    id: "anniversaryy",
    number: "04",
    title: "عيد حب",
    category: "love",
    categoryName: "اعياد حب",
    description: "تصميم رومانسي للذكرى السنوية أو عيد الجواز، برسالة وصور وتفاصيل خاصة.",
    emoji: "🌹",
    miniBrand: "OUR STORY",
    previewTitle: "♡Us, Always",
    previewCaption: "Every moment means something",
    theme: "theme-custom",
    type: "ذكرى خاصة",
    url: "https://mohvmed-imvm.github.io/ValentineDay-2/",
    message: "عايز أطلب تصميم ذكرى حب أو عيد جواز"
  },
  {
    id: "graduation",
    number: "05",
    title: "التخرج والنجاح",
    category: "achievement",
    categoryName: "الإنجازات",
    description: "احتفال رقمي بإنجاز يستاهل، بتصميم يعبر عن الفرحة والفخر بالنجاح.",
    emoji: "🎓",
    miniBrand: "YOU DID IT",
    previewTitle: "The Next Chapter",
    previewCaption: "Your hard work deserves a moment",
    theme: "theme-graduation",
    type: "إنجاز مهم",
    url: "https://mohvmed-imvm.github.io/SOON/",
    message: "عايز أطلب تصميم تخرج أو نجاح"
  }
];


/* =====================================================
   3) اللغة الحالية
   ===================================================== */

let currentLanguage = localStorage.getItem("4u-language") || "ar";

if (!["ar", "en"].includes(currentLanguage)) {
  currentLanguage = "ar";
}


/* =====================================================
   4) توليد كروت التصميمات تلقائيًا
   ===================================================== */

const grid = document.getElementById("templatesGrid");
const countLabel = document.getElementById("templateCount");

const arrowIcon = `
  <svg viewBox="0 0 24 24" width="16" height="16"
       fill="none" stroke="currentColor" stroke-width="1.8"
       stroke-linecap="round" stroke-linejoin="round"
       aria-hidden="true">
    <path d="M7 17 17 7M7 7h10v10"/>
  </svg>
`;

function isConfiguredUrl(url) {
  if (!url || url === "#") return false;

  try {
    const parsed = new URL(url);

    return (
      parsed.protocol === "https:" &&
      !/YOUR_USERNAME|ضع-رابط|example\.com/i.test(url)
    );
  } catch {
    return false;
  }
}

function renderTemplates() {
  if (!grid || !countLabel) return;

  const isEnglish = currentLanguage === "en";

  grid.innerHTML = templates.map((item, index) => {
    const ready = isConfiguredUrl(item.url);

    const previewLabel = isEnglish
      ? "View preview"
      : "افتح المعاينة";

    const orderLabel = isEnglish
      ? "Order design"
      : "اطلب التصميم";

    const previewAria = isEnglish
      ? `Open preview: ${item.title}`
      : `افتح معاينة ${item.title}`;

    return `
      <article class="template-card reveal"
               data-category="${item.category}"
               style="transition-delay:${(index % 3) * 100}ms">

        <div class="template-preview ${item.theme}">
          <span class="preview-number">
            ${item.number || String(index + 1).padStart(2, "0")}
          </span>

          <div class="preview-art">
            <span class="mini-brand">${item.miniBrand}</span>
            <span class="emoji">${item.emoji}</span>
            <h3>${item.previewTitle}</h3>
            <p>${item.previewCaption}</p>
          </div>
        </div>

        <div class="card-content">

          <div class="card-topline">
            <span class="category">${item.categoryName}</span>
            <span class="card-index">
              ${String(index + 1).padStart(2, "0")} /
              ${String(templates.length).padStart(2, "0")}
            </span>
          </div>

          <h3>${item.title}</h3>

          <p class="card-description">${item.description}</p>

          <div class="card-footer">
            <span class="card-type">${item.type}</span>

            <a
              href="${ready ? item.url : "#contact"}"
              class="preview-link"
              ${ready ? 'target="_blank" rel="noopener noreferrer"' : ""}
              ${ready
                ? `aria-label="${previewAria}"`
                : `data-order="${item.id}"`}
            >
              ${ready ? previewLabel : orderLabel}
              ${arrowIcon}
            </a>
          </div>

        </div>
      </article>
    `;
  }).join("");

  countLabel.textContent = isEnglish
    ? `${String(templates.length).padStart(2, "0")} DESIGNS`
    : `${String(templates.length).padStart(2, "0")} تصميمات`;

  observeReveals(grid);

  grid.querySelectorAll("[data-order]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const item = templates.find(
        template => template.id === link.dataset.order
      );

      if (item) {
        openWhatsApp(
          item.message || `عايز أستفسر عن ${item.title}`
        );
      }
    });
  });

  applyCurrentFilter();
}


/* =====================================================
   5) فلاتر المناسبات
   ===================================================== */

let currentFilter = "all";

function applyCurrentFilter() {
  if (!grid || !countLabel) return;

  const cards = grid.querySelectorAll(".template-card");

  cards.forEach(card => {
    const matches =
      currentFilter === "all" ||
      card.dataset.category === currentFilter;

    card.classList.toggle("hidden", !matches);
  });

  const visibleCount = [...cards].filter(card =>
    !card.classList.contains("hidden")
  ).length;

  countLabel.textContent = currentLanguage === "ar"
    ? `${String(visibleCount).padStart(2, "0")} / ${String(templates.length).padStart(2, "0")} تصميمات`
    : `${String(visibleCount).padStart(2, "0")} / ${String(templates.length).padStart(2, "0")} DESIGNS`;
}

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("active", btn === button);
    });

    applyCurrentFilter();
  });
});


/* =====================================================
   6) واتساب
   ===================================================== */

function openWhatsApp(message) {
  if (!/^\d{10,15}$/.test(CONFIG.whatsappNumber)) {
    alert(
      currentLanguage === "ar"
        ? "لسه محتاج تضيف رقم واتساب الصحيح في إعدادات الموقع"
        : "Please add your correct WhatsApp number in the site settings first"
    );

    return;
  }

  const url =
    "https://wa.me/" +
    CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

const mainWhatsApp = document.getElementById("mainWhatsApp");

if (mainWhatsApp) {
  mainWhatsApp.addEventListener("click", event => {
    event.preventDefault();

    openWhatsApp(
      currentLanguage === "ar"
        ? "أهلًا 4U celebrations، عايز أستفسر عن تصميم موقع لمناسبة خاصة"
        : "Hello 4U celebrations, I'd like to ask about a custom occasion website"
    );
  });
}


/* =====================================================
   7) أيقونات وروابط السوشيال ميديا
   ===================================================== */

const socialIcons = {
  instagram: `
    <svg viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="1.8"
         stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <path d="M17.5 6.5h.01"/>
    </svg>
  `,

  tiktok: `
    <svg viewBox="0 0 24 24" fill="currentColor"
         aria-hidden="true">
      <path d="M19.6 7.1a6.2 6.2 0 0 1-3.9-1.4v8.1a6 6 0 1 1-6-6c.4 0 .8 0 1.2.1v3.3a2.8 2.8 0 1 0 1.7 2.6V2.5h3.1a6.2 6.2 0 0 0 3.9 4.6v3.1Z"/>
    </svg>
  `,

  facebook: `
    <svg viewBox="0 0 24 24" fill="currentColor"
         aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8Z"/>
    </svg>
  `,

  youtube: `
    <svg viewBox="0 0 24 24" fill="currentColor"
         aria-hidden="true">
      <path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8ZM9.5 15.5v-7l6 3.5Z"/>
    </svg>
  `
};

function renderSocialLinks() {
  const container = document.getElementById("socialLinks");
  if (!container) return;

  container.innerHTML = CONFIG.socialLinks.map(social => {
    const icon = socialIcons[social.icon] || "♡";
    const ready = isConfiguredUrl(social.url);

    return `
      <a
        class="social-link"
        href="${ready ? social.url : "#"}"
        ${ready ? 'target="_blank" rel="noopener noreferrer"' : ""}
        ${ready ? "" : `data-social="${social.name}"`}
        style="--social-color:${social.color || "#ffffff"}"
        aria-label="${social.name}"
      >
        <span style="color:var(--social-color)">${icon}</span>
        ${social.name}
      </a>
    `;
  }).join("");

  container.querySelectorAll("[data-social]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      alert(
        currentLanguage === "ar"
          ? "ضيف رابط حساب " + link.dataset.social + " في إعدادات الموقع الأول"
          : "Add your " + link.dataset.social + " account link in the site settings first"
      );
    });
  });
}


/* =====================================================
   8) ظهور العناصر عند السكرول
   ===================================================== */

let revealObserver;

function observeReveals(root = document) {
  const elements = root.querySelectorAll(
    ".reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)"
  );

  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -35px 0px"
    });
  }

  elements.forEach(el => revealObserver.observe(el));
}


/* =====================================================
   9) عدادات الإحصائيات
   ===================================================== */

if ("IntersectionObserver" in window) {
  const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count);
      const suffix = element.dataset.suffix || "";
      const duration = 1200;
      const startTime = performance.now();

      function updateCount(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);

        element.textContent =
          Math.round(target * eased) + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      }

      requestAnimationFrame(updateCount);
      observer.unobserve(element);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll("[data-count]").forEach(el => {
    statObserver.observe(el);
  });
}


/* =====================================================
   10) حركة الماوس على الكمبيوتر فقط
   ===================================================== */

const glow = document.getElementById("cursorGlow");
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (glow && finePointer) {
  window.addEventListener("pointermove", event => {
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
  }, { passive: true });
} else if (glow) {
  glow.style.display = "none";
}


/* =====================================================
   11) تشغيل الصفحة
   ===================================================== */

renderTemplates();
renderSocialLinks();
observeReveals();


/* =====================================================
   12) إعدادات اللغة والمظهر
   ===================================================== */

(() => {
  const toggle = document.getElementById("settingsToggle");
  const panel = document.getElementById("settingsPanel");

  if (!toggle || !panel) {
    console.warn("Settings elements were not found.");
    return;
  }

  const settingsWrap = toggle.closest(".settings-wrap");

  let language = currentLanguage;
  let theme = localStorage.getItem("4u-theme") || "dark";

  if (!["dark", "light"].includes(theme)) {
    theme = "dark";
  }

  /*
    مهم:
    بنحفظ محتوى العناصر الصغيرة فقط.
    ممنوع نحفظ header أو main أو footer بالكامل،
    لأن استرجاع innerHTML ليهم بيحذف الأحداث المرتبطة بأزرارهم.
  */

  const originalHTML = new Map();
  const originalTextNodes = new Map();

  function remember(selector) {
    document.querySelectorAll(selector).forEach(el => {
      if (!originalHTML.has(el)) {
        originalHTML.set(el, el.innerHTML);
      }
    });
  }

  function rememberTextNodes() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    while (walker.nextNode()) {
      const node = walker.currentNode;

      if (!originalTextNodes.has(node)) {
        originalTextNodes.set(node, node.nodeValue);
      }
    }
  }

  function restoreOriginalContent() {
    /*
      استرجاع النصوص الأصلية من غير استبدال عناصر الصفحة.
    */
    originalTextNodes.forEach((text, node) => {
      if (node.isConnected) {
        node.nodeValue = text;
      }
    });

    /*
      استرجاع محتوى العناصر الصغيرة التي نغيرها باستخدام
      textContent أو innerHTML أثناء الترجمة.
    */
    originalHTML.forEach((html, el) => {
      if (el.isConnected) {
        el.innerHTML = html;
      }
    });
  }

  function replaceExactText(root, dictionary) {
    if (!root) return;

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(node => {
      const original = node.nodeValue;
      const trimmed = original.trim();

      if (!trimmed || !dictionary[trimmed]) return;

      const start = original.search(/\S/);
      const end = original.length - original.trimEnd().length;

      node.nodeValue =
        original.slice(0, start) +
        dictionary[trimmed] +
        (end ? original.slice(original.length - end) : "");
    });
  }


  /* -----------------------------------------------------
     ترجمة كروت التصميمات
     ----------------------------------------------------- */

  const templateArabic = {
    "birthday-girl": {
      title: "عيد ميلاد بنوتة",
      categoryName: "أعياد الميلاد",
      description: "مفاجأة وردي رقيقة فيها عد تنازلي وهدية ورسالة وصور وموسيقى حسب التصميم.",
      type: "مناسبة شخصية",
      message: "عايز أطلب تصميم عيد ميلاد بنوتة"
    },

    anniversary: {
      title: "ذكرى حب وجواز",
      categoryName: "اعياد حب",
      description: "تصميم رومانسي للذكرى السنوية أو عيد الجواز، برسالة وصور وتفاصيل خاصة.",
      type: "ذكرى خاصة",
      message: "عايز أطلب تصميم ذكرى حب أو عيد جواز"
    },
    
    anniversaryy: {
      title: "عيد حب",
      categoryName: "اعياد حب",
      description: "تصميم رومانسي للذكرى السنوية أو عيد الجواز، برسالة وصور وتفاصيل خاصة.",
      type: "ذكرى خاصة",
      message: "عايز أطلب تصميم ذكرى حب أو عيد جواز"
    },

    graduation: {
      title: "التخرج والنجاح",
      categoryName: "الإنجازات",
      description: "احتفال رقمي بإنجاز يستاهل، بتصميم يعبر عن الفرحة والفخر بالنجاح.",
      type: "إنجاز مهم",
      message: "عايز أطلب تصميم تخرج أو نجاح"
    }
  };

  const templateEnglish = {
    "birthday-girl": {
      title: "Birthday for her",
      categoryName: "Birthdays",
      description: "A sweet pink surprise with a countdown, gift, message, photos, and music depending on the design.",
      type: "Personal occasion",
      message: "I'd like to order a birthday design for her"
    },

    anniversary: {
      title: "Love & anniversary",
      categoryName: "Love & memories",
      description: "A romantic anniversary or wedding design with a personal message, photos, and meaningful details.",
      type: "Special anniversary",
      message: "I'd like to order an anniversary design"
    },

    graduation: {
      title: "Graduation & success",
      categoryName: "Achievements",
      description: "A digital celebration for an achievement worth remembering, designed to capture pride and joy.",
      type: "Important achievement",
      message: "I'd like to order a graduation or success design"
    }
  };

  function translateDynamicCards() {
    templates.forEach(item => {
      const source = language === "en"
        ? templateEnglish[item.id]
        : templateArabic[item.id];

      if (source) {
        Object.assign(item, source);
      }
    });

    currentLanguage = language;
    renderTemplates();
  }


  /* -----------------------------------------------------
     النصوص الأساسية
     ----------------------------------------------------- */

  const replacements = {
    "الرئيسية": "Home",
    "التصميمات": "Designs",
    "مميزاتنا": "Features",
    "طريقة الطلب": "How to order",
    "خلينا نبدأ": "Let's start",
    "كل مناسبة تستاهل حاجة مختلفة": "Every occasion deserves something different",
    "مش مجرد هدية": "More than just a gift",
    "ذكرى بتعيش": "A memory that lasts",
    "شوف التصميمات": "Explore designs",
    "اعمل هديتك علي مزاجك": "Create your own gift",
    "تصميمات متاحة حاليًا": "Designs currently available",
    "أنواع مناسبات ممكنة": "Possible occasion types",
    "رابط تقدر تشاركه": "A link you can share",
    "اختار الهدية اللي": "Choose the gift that",
    "تناسبك": "suits you",
    "كل التصميمات": "All designs",
    "أعياد الميلاد": "Birthdays",
    "اعياد حب": "Love & memories",
    "الإنجازات": "Achievements",
    "لسه في تصميمات جاية": "More designs are coming",
    "التفاصيل الصغيرة هي اللي": "The little details make the",
    "بتفرق": "difference",
    "خصوصية كاملة": "Complete privacy",
    "تصميم مميز": "Unique design",
    "رسالتك وصوركم": "Your message and photos",
    "بدون إعلانات": "Ad-free",
    "رابط سهل المشاركة": "Easy-to-share link",
    "تخصيص حسب طلبك": "Customized for you",
    "تجربة تفاعلية": "Interactive experience",
    "من الفكرة لحد": "From an idea to the",
    "المفاجأة": "surprise",
    "اختار التصميم": "Choose a design",
    "ابعت التفاصيل": "Send the details",
    "استلم رابط هديتك": "Receive your gift link",
    "عندك مناسبة في بالك؟": "Have an occasion in mind?",
    "يلا نعملها هدية": "Let's make it a gift",
    "كلمنا على واتساب": "Contact us on WhatsApp",
    "شوف التصميمات تاني": "Browse designs again",
    "خليك قريب من 4U": "Stay connected with 4U",
    "تابعنا وشوف أحدث التصميمات والأفكار الجديدة": "Follow us for new designs and ideas",
    "ارجع لفوق ↑": "Back to top ↑",
    "مناسبة شخصية": "Personal occasion",
    "ذكرى خاصة": "Special anniversary",
    "إنجاز مهم": "Important achievement",
    "افتح المعاينة": "View preview",
    "اطلب التصميم": "Order design"
  };

  const featureTranslations = [
    [
      "خصوصية كاملة",
      "Complete privacy",
      "خصوصيتك أولويتنا؛ لا نحتفظ بالصور أو المعلومات الشخصية، ولا يمكن لأحد رؤيتها. يتم حذف موقعك وبياناته من منصتنا خلال 10 أيام من إصداره.",
      "Your privacy comes first. We don't retain photos or personal information, and no one else can view them. Your website and its data are deleted from our platform within 10 days of creation."
    ],
    [
      "تصميم مميز",
      "Unique design",
      "ألوان وحركات وتفاصيل بصرية مناسبة لجو المناسبة بدل شكل تقليدي مكرر.",
      "Colors, animations, and visual details tailored to the occasion instead of a generic design."
    ],
    [
      "رسالتك وصوركم",
      "Your message and photos",
      "خلي الموقع يحكي حكايتكم برسالة خاصة وصور ولحظات تختارها بنفسك.",
      "Tell your story with a personal message, photos, and moments you choose."
    ],
    [
      "بدون إعلانات",
      "Ad-free",
      "تجربة مريحة بدون إعلانات تزعج اللي بيتفرج علي الهدية",
      "Enjoy a clean experience with no ads or annoying pop-ups."
    ],
    [
      "رابط سهل المشاركة",
      "Easy-to-share link",
      "تقدر تبعت رابط الموقع للشخص اللي هتقدم له الهدية على واتساب أو غيره.",
      "Send the gift website link through WhatsApp or any other platform."
    ],
    [
      "تخصيص حسب طلبك",
      "Customized for you",
      "نتفق على التفاصيل والرسالة والألوان والصور المناسبة قبل تجهيز نسختك.",
      "We agree on the details, message, colors, and photos before creating your version."
    ],
    [
      "تجربة تفاعلية",
      "Interactive experience",
      "مفاجآت وحركات وانتقالات تخلي اكتشاف الهدية جزءًا من متعتها.",
      "Surprises and transitions that make discovering the gift part of the fun."
    ],
  ];

  const stepTranslations = [
    [
      "اختار التصميم",
      "Choose a design",
      "اتفرج على المعاينات واختار الشكل الأقرب للمناسبة اللي في بالك.",
      "Browse the previews and choose the design that fits your occasion."
    ],
    [
      "ابعت التفاصيل",
      "Send the details",
      "كلمنا على واتساب عشان نتفق على الاسم والرسالة والصور وأي تعديلات.",
      "Message us on WhatsApp to share the name, message, photos, and any changes."
    ],
    [
      "استلم رابط هديتك",
      "Receive your gift link",
      " بعد الاتفاق على التفاصيل والسعر , تستلم رابط موقعك في نص ساعه وتقدر تشاركه.",
      "Once we agree on the details, price, you will receive the link to your website within half an hour and can share it."
    ]
  ];

  const staticText = [
    [
      ".hero-description",
      "Imagine gifting someone you love a website made just for them, with your message, photos,songs you both love and meaningful details. An interactive experience that makes their moment truly special. That's what we create at 4U celebrations."
    ],
    [
      ".hero-note",
      "✦ Birthday · Anniversary · Graduation · Achievements & special occasions"
    ],
    [
      ".showcase-caption",
      "A little website. A lifetime memory."
    ],
    [
      ".floating-badge.first .badge-text strong",
      "Custom design"
    ],
    [
      ".floating-badge.first .badge-text span",
      "Every detail your way"
    ],
    [
      ".floating-badge.second .badge-text strong",
      "A special memory"
    ],
    [
      ".floating-badge.second .badge-text span",
      "Worth opening again and again"
    ],
    [
      ".add-note strong",
      "More designs are coming"
    ],
    [
      ".add-note div",
      "This collection is constantly growing. New designs for different occasions will be added here."
    ],
    [
      ".contact-banner p",
      "Can't find the right design? Have a different idea? Message us on WhatsApp and tell us about your occasion so we can find the best way to bring it to life."
    ],
    [
      ".social-title",
      "Stay connected with 4U"
    ],
    [
      ".social-description",
      "Follow us for the latest designs and new ideas"
    ],
    [
      ".footer-note",
      "Made with ♡ for your special moments"
    ]
  ];


  /* -----------------------------------------------------
     تطبيق اللغة
     ----------------------------------------------------- */

  function applyLanguage() {
    currentLanguage = language;

    /*
      أهم إصلاح:
      استرجاع النصوص الأصلية من غير إعادة بناء الهيدر
      أو المحتوى الرئيسي أو الفوتر.
    */
    restoreOriginalContent();

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    const isEnglish = language === "en";

    if (isEnglish) {
      replaceExactText(document.querySelector("header"), replacements);
      replaceExactText(document.querySelector("main"), replacements);
      replaceExactText(document.querySelector("footer"), replacements);

      staticText.forEach(([selector, english]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = english;
      });

      document.querySelectorAll(".feature").forEach((el, i) => {
        const data = featureTranslations[i];
        if (!data) return;

        const heading = el.querySelector("h3");
        const paragraph = el.querySelector("p");

        if (heading) heading.textContent = data[1];
        if (paragraph) paragraph.textContent = data[3];
      });

      document.querySelectorAll(".step").forEach((el, i) => {
        const data = stepTranslations[i];
        if (!data) return;

        const heading = el.querySelector("h3");
        const paragraph = el.querySelector("p");

        if (heading) heading.textContent = data[1];
        if (paragraph) paragraph.textContent = data[3];
      });

      const heroTitle = document.querySelector(".hero h1");

      if (heroTitle) {
        heroTitle.innerHTML =
          'More than a gift<br><span class="gradient-text">A memory that lasts</span>';
      }

      const sectionTitles = [
        [
          ".section#templates .section-heading h2",
          'Choose a gift that <span class="gradient-text">feels like you</span>'
        ],
        [
          ".section#features .section-heading h2",
          'The little details make the <span class="gradient-text">difference</span>'
        ],
        [
          ".section#how .section-heading h2",
          'From idea to <span class="gradient-text">surprise</span>'
        ]
      ];

      sectionTitles.forEach(([selector, html]) => {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = html;
      });

      const sectionDescriptions = [
        [
          ".section#templates .section-heading p",
          "Explore the available designs and preview them yourself. Each design can be customized for your occasion."
        ],
        [
          ".section#features .section-heading p",
          "We don't just provide a link. We create a digital experience tailored to the occasion and the person you're celebrating."
        ],
        [
          ".section#how .section-heading p",
          "Simple steps to create a special gift without complications."
        ]
      ];

      sectionDescriptions.forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
      });

      const contactTitle = document.querySelector(".contact-banner h2");

      if (contactTitle) {
        contactTitle.innerHTML =
          'Have an occasion in mind?<br><span class="gradient-text">Let’s make it a memory</span>';
      }

      const eyebrow = document.querySelector(".hero .eyebrow");

      if (eyebrow) {
        eyebrow.innerHTML =
          '<span class="eyebrow-dot"></span>Every occasion deserves something different';
      }

      const filters = {
        all: "All designs",
        birthday: "Birthdays",
        love: "Love & memories",
        achievement: "Achievements"
      };

      document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.textContent = filters[btn.dataset.filter] || btn.textContent;
      });

      const showcaseTitle = document.querySelector(".showcase-title");
      if (showcaseTitle) showcaseTitle.textContent = "Made for you";

      const showcaseCaption = document.querySelector(".showcase-caption");
      if (showcaseCaption) {
        showcaseCaption.textContent = "A little website. A lifetime memory.";
      }

    } else {
      const arabic = [
        [
          ".hero-description",
          "تخيل إنك تهدي شخص بتحبه موقع معمول مخصوص عشانه فيه رسالتك وصوركم وتفاصيلكم المميزة واغاني بتحبوها سوا كل ده في تجربة تفاعلية تخلي لحظته مختلفة فعلًا وده بالظبط اللي بنعمله في 4U celebrations"
        ],
        [
          ".hero-note",
          "✦ عيد ميلاد · ذكرى سنوية · تخرج · إنجازات ومناسبات خاصة"
        ],
        [
          ".section#templates .section-heading p",
          "شوف التصميمات المتاحة وافتح المعاينة بنفسك وكل تصميم تقدر تبدأ منه وتخصصه على حسب مناسبتك"
        ],
        [
          ".section#features .section-heading p",
          "مش بنقدم مجرد لينك، بنصمم تجربة رقمية متفصلة على المناسبة والشخص اللي هتفرحه"
        ],
        [
          ".section#how .section-heading p",
          "خطوات بسيطة عشان توصل لهدية مختلفة من غير تعقيد"
        ],
        [
          ".contact-banner p",
          "مش لاقي التصميم المناسب؟ عندك فكرة مختلفة؟ ابعتلنا على واتساب واحكيلنا عن المناسبة ونشوف أنسب طريقة ننفذ بيها فكرتك"
        ],
        [
          ".social-title",
          "خليك قريب من 4U"
        ],
        [
          ".social-description",
          "تابعنا وشوف أحدث التصميمات والأفكار الجديدة"
        ],
        [
          ".footer-note",
          "Made with ♡ for your special moments"
        ]
      ];

      arabic.forEach(([selector, text]) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
      });

      const heroTitle = document.querySelector(".hero h1");

      if (heroTitle) {
        heroTitle.innerHTML =
          'مش مجرد هدية<br>دي <span class="gradient-text">ذكرى بتعيش</span>';
      }

      const contactTitle = document.querySelector(".contact-banner h2");

      if (contactTitle) {
        contactTitle.innerHTML =
          'عندك مناسبة في بالك؟<br><span class="gradient-text">يلا نعملها هدية </span>';
      }

      const eyebrow = document.querySelector(".hero .eyebrow");

      if (eyebrow) {
        eyebrow.innerHTML =
          '<span class="eyebrow-dot"></span>كل مناسبة تستاهل حاجة مختلفة';
      }

      const filters = {
        all: "كل التصميمات",
        birthday: "أعياد الميلاد",
        love: "اعياد حب",
        achievement: "الإنجازات"
      };

      document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.textContent = filters[btn.dataset.filter] || btn.textContent;
      });

      document.querySelectorAll(".feature").forEach((el, i) => {
        const data = featureTranslations[i];
        if (!data) return;

        const heading = el.querySelector("h3");
        const paragraph = el.querySelector("p");

        if (heading) heading.textContent = data[0];
        if (paragraph) paragraph.textContent = data[2];
      });

      document.querySelectorAll(".step").forEach((el, i) => {
        const data = stepTranslations[i];
        if (!data) return;

        const heading = el.querySelector("h3");
        const paragraph = el.querySelector("p");

        if (heading) heading.textContent = data[0];
        if (paragraph) paragraph.textContent = data[2];
      });
    }


    /* -----------------------------------------------------
       عناصر الإعدادات
       ----------------------------------------------------- */

    const settingTitle = document.querySelector("[data-setting-title]");
    const languageLabel = document.querySelector("[data-language-label]");
    const themeLabel = document.querySelector("[data-theme-label]");
    const darkButton = document.querySelector('[data-theme="dark"]');
    const lightButton = document.querySelector('[data-theme="light"]');

    if (settingTitle) {
      settingTitle.textContent = isEnglish ? "Settings" : "الإعدادات";
    }

    if (languageLabel) {
      languageLabel.textContent = isEnglish ? "Website language" : "لغة الموقع";
    }

    if (themeLabel) {
      themeLabel.textContent = isEnglish ? "Appearance" : "مظهر الموقع";
    }
const darkLabel = document.querySelector("[data-theme-dark-label]");
const lightLabel = document.querySelector("[data-theme-light-label]");

if (darkLabel) {
  darkLabel.textContent = isEnglish ? "Dark" : "داكن";
}

if (lightLabel) {
  lightLabel.textContent = isEnglish ? "Light" : "فاتح";
}

    document.querySelectorAll("[data-language]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.language === language);
    });

    document.querySelectorAll(".nav a").forEach((link, i) => {
      const arabicNav = [
        "الرئيسية",
        "التصميمات",
        "مميزاتنا",
        "طريقة الطلب"
      ];

      const englishNav = [
        "Home",
        "Designs",
        "Features",
        "How to order"
      ];

      link.textContent = isEnglish
        ? (englishNav[i] || link.textContent)
        : (arabicNav[i] || link.textContent);
    });

    const headerCTA = document.querySelector(".header-cta");

    if (headerCTA) {
      headerCTA.innerHTML =
        (isEnglish ? "Let's start" : "خلينا نبدأ") +
        " <span>↙</span>";
    }

    const heroButtons = document.querySelectorAll(".hero-actions .btn");

    if (heroButtons[0]) {
      heroButtons[0].innerHTML =
        (isEnglish ? "Explore designs" : "شوف التصميمات") +
        " <span>↓</span>";
    }

    if (heroButtons[1]) {
      heroButtons[1].innerHTML =
        '<span>♡</span> ' +
        (isEnglish ? "Create your own gift" : "اعمل هديتك علي مزاجك");
    }

    const mainContactButton = document.querySelector("#mainWhatsApp");

    if (mainContactButton) {
      const label = mainContactButton.lastChild;

      if (label && label.nodeType === Node.TEXT_NODE) {
        label.nodeValue = isEnglish
          ? "\n            Contact us on WhatsApp\n          "
          : "\n            كلمنا على واتساب\n          ";
      }
    }

    const backTop = document.querySelector(".back-top");

    if (backTop) {
      backTop.textContent = isEnglish
        ? "Back to top ↑"
        : "ارجع لفوق ↑";
    }

    translateDynamicCards();

    const count = document.getElementById("templateCount");

    if (count) {
      applyCurrentFilter();
    }

    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        theme === "dark" ? "#100c1c" : "#faf7ff"
      );

    localStorage.setItem("4u-language", language);
  }


  /* -----------------------------------------------------
     تطبيق المظهر
     ----------------------------------------------------- */

  function applyTheme() {
    document.body.classList.toggle(
      "light-mode",
      theme === "light"
    );

    document.querySelectorAll("[data-theme]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });

    document.querySelector('meta[name="theme-color"]')
      ?.setAttribute(
        "content",
        theme === "dark" ? "#100c1c" : "#faf7ff"
      );

    localStorage.setItem("4u-theme", theme);
  }


  /* -----------------------------------------------------
     حفظ المحتوى الأصلي مرة واحدة
     مهم: من غير header أو main أو footer
     ----------------------------------------------------- */

  [
    ".hero-description",
    ".hero-note",
    ".showcase-caption",
    ".floating-badge.first .badge-text strong",
    ".floating-badge.first .badge-text span",
    ".floating-badge.second .badge-text strong",
    ".floating-badge.second .badge-text span",
    ".add-note strong",
    ".add-note div",
    ".section-heading p",
    ".section-heading h2",
    ".contact-banner p",
    ".contact-banner h2",
    ".social-title",
    ".social-description",
    ".footer-note",
    ".hero h1",
    ".hero .eyebrow",
    ".feature h3",
    ".feature p",
    ".step h3",
    ".step p",
    ".nav a",
    ".header-cta",
    ".hero-actions .btn",
    "#mainWhatsApp",
    ".back-top",
    ".filter-btn",
    ".showcase-title",
    "[data-setting-title]",
    "[data-language-label]",
    "[data-theme-label]",
    '[data-theme="dark"]',
    '[data-theme="light"]'
  ].forEach(remember);

  rememberTextNodes();


  /* -----------------------------------------------------
     أحداث قائمة الإعدادات
     ----------------------------------------------------- */

  toggle.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();

    const isOpen = panel.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  panel.addEventListener("click", event => {
    event.stopPropagation();
  });

  /*
    حدث واحد فقط لإغلاق القائمة عند الضغط خارجها.
  */
  document.addEventListener("click", event => {
    if (settingsWrap && settingsWrap.contains(event.target)) {
      return;
    }

    panel.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });

  document.querySelectorAll("[data-language]").forEach(btn => {
    btn.addEventListener("click", () => {
      language = btn.dataset.language;
      currentLanguage = language;

      applyLanguage();
    });
  });

  document.querySelectorAll("[data-theme]").forEach(btn => {
    btn.addEventListener("click", () => {
      theme = btn.dataset.theme;
      applyTheme();
    });
  });


  /* -----------------------------------------------------
     تشغيل الإعدادات عند فتح الصفحة
     ----------------------------------------------------- */

  applyTheme();
  applyLanguage();

})();



/* =====================================================
   13) مشترياتي - 4U celebrations
   ===================================================== */

(() => {
  "use strict";

  const API_URL =
    "https://dgnigcvomzhpdfzccbem.supabase.co/functions/v1/smooth-action";

  const LOCK_KEY = "4u-purchases-server-lock-until";
  const CLIENT_KEY = "4u-purchase-client-key";

  let activeTimer = null;
  let lockTimer = null;
  let serverLockUntil = 0;
  let lastResult = null;
  let currentRequest = false;

  const getLanguage = () =>
    document.documentElement.lang === "en" ? "en" : "ar";

  const isEnglish = () => getLanguage() === "en";

  const words = {
    ar: {
      nav: "مشترياتي",
      title: "مشترياتي",
      subtitle: "معاك كود الدخول اللي وصلك من 4U؟ اكتبه هنا عشان تشوف هديتك",
      label: "كود الدخول",
      placeholder: "اكتب كود الدخول هنا",
      submit: "عرض مشترياتي",
      loading: "بنتحقق من الكود...",
      invalid: "كود الدخول غير صحيح. راجع الكود وجرب تاني.",
      serverError: "حصلت مشكلة أثناء الاتصال. جرب كمان شوية.",
      networkError: "مش قادرين نتصل بالخدمة دلوقتي. اتأكد من الإنترنت وجرب تاني.",
      active: "هديتك جاهزة 🎁",
      design: "نوع التصميم",
      expires: "تاريخ انتهاء الصلاحية",
      remaining: "الوقت المتبقي",
      open: "افتح هديتك",
      expiredTitle: "انتهت صلاحية هديتك",
      expiredText: "انتهت مدة إتاحة الموقع. تقدر تجدد طلبك وتحصل على خصم 30% بصفتك من عملاء 4U السابقين.",
      renew: "جدد هديتك بخصم 30%",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      seconds: "ثانية",
      lessThanMinute: "أقل من دقيقة",
      invalidResponse: "وصلتنا استجابة غير متوقعة. حاول تاني بعد شوية.",
      locked: "تم إيقاف المحاولات مؤقتًا بسبب إدخال كود خاطئ 3 مرات.",
      lockRemaining: "تقدر تحاول تاني بعد",
      lockExpired: "تقدر تجرب كود الدخول دلوقتي."
    },

    en: {
      nav: "My Purchases",
      title: "My Purchases",
      subtitle: "Enter the access code you received from 4U to view your gift.",
      label: "Access code",
      placeholder: "Enter your access code",
      submit: "View my purchase",
      loading: "Checking your code...",
      invalid: "This access code is incorrect. Check it and try again.",
      serverError: "Something went wrong. Please try again shortly.",
      networkError: "We couldn't connect to the service. Check your internet and try again.",
      active: "Your gift is ready 🎁",
      design: "Design",
      expires: "Expiration date",
      remaining: "Time remaining",
      open: "Open your gift",
      expiredTitle: "Your gift has expired",
      expiredText: "Your website is no longer available. As a returning 4U customer, you can renew your order with a 30% discount.",
      renew: "Renew with 30% off",
      days: "days",
      hours: "hours",
      minutes: "minutes",
      seconds: "seconds",
      lessThanMinute: "Less than a minute",
      invalidResponse: "We received an unexpected response. Please try again shortly.",
      locked: "Attempts have been temporarily blocked after 3 incorrect codes.",
      lockRemaining: "You can try again in",
      lockExpired: "You can try your access code now."
    }
  };

  const t = key => words[getLanguage()][key] || key;

  /* ---------- مفتاح العميل والقفل من السيرفر ---------- */

  function getClientKey() {
    let key = localStorage.getItem(CLIENT_KEY);

    if (key && /^[A-Za-z0-9-]{16,100}$/.test(key)) {
      return key;
    }

    if (
      typeof crypto !== "undefined" &&
      typeof crypto.randomUUID === "function"
    ) {
      key = crypto.randomUUID();
    } else {
      const randomPart = Array.from(
        { length: 4 },
        () => Math.random().toString(36).slice(2)
      ).join("");

      key = "4u-" + randomPart + "-" + Date.now().toString(36);
    }

    localStorage.setItem(CLIENT_KEY, key);
    return key;
  }

  function getLockUntil() {
    const value = Number(localStorage.getItem(LOCK_KEY) || 0);
    return Number.isFinite(value) ? value : 0;
  }

  function isLocked() {
    return serverLockUntil > Date.now();
  }

  function resetAttempts() {
    serverLockUntil = 0;
    localStorage.removeItem(LOCK_KEY);

    if (lockTimer !== null) {
      clearInterval(lockTimer);
      lockTimer = null;
    }

    input.disabled = false;
    submit.disabled = currentRequest;
  }

  function formatLockRemaining(milliseconds) {
    const totalSeconds = Math.max(
      0,
      Math.ceil(milliseconds / 1000)
    );

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  function updateLockUI() {
    const remaining = serverLockUntil - Date.now();

    if (remaining <= 0) {
      serverLockUntil = 0;
      localStorage.removeItem(LOCK_KEY);

      input.disabled = false;
      submit.disabled = currentRequest;
      submit.textContent = currentRequest ? t("loading") : t("submit");

      return false;
    }

    input.disabled = true;
    submit.disabled = true;
    submit.textContent = t("locked");

    setStatus(
      `${t("locked")} ${t("lockRemaining")} ${formatLockRemaining(remaining)}`,
      "error"
    );

    return true;
  }

  function startLock(lockedUntil) {
    const timestamp = new Date(lockedUntil).getTime();

    if (!Number.isFinite(timestamp) || timestamp <= Date.now()) {
      setStatus(t("locked"), "error");
      return;
    }

    serverLockUntil = timestamp;

    localStorage.setItem(LOCK_KEY, String(timestamp));

    updateLockUI();

    if (lockTimer !== null) {
      clearInterval(lockTimer);
    }

    lockTimer = setInterval(() => {
      const stillLocked = updateLockUI();

      if (!stillLocked) {
        clearInterval(lockTimer);
        lockTimer = null;
      }
    }, 1000);
  }

  function initializeLock() {
    const savedLock = getLockUntil();

    if (savedLock > Date.now()) {
      serverLockUntil = savedLock;

      updateLockUI();

      lockTimer = setInterval(() => {
        const stillLocked = updateLockUI();

        if (!stillLocked) {
          clearInterval(lockTimer);
          lockTimer = null;
        }
      }, 1000);
    } else {
      localStorage.removeItem(LOCK_KEY);
    }
  }

  /* ---------- إنشاء التنسيقات ---------- */

  const style = document.createElement("style");

  style.textContent = `
    #purchases {
      position: relative;
      padding: 100px 20px;
      scroll-margin-top: 90px;
    }

    #purchases .purchases-inner {
      width: min(100%, 760px);
      margin: 0 auto;
    }

    #purchases .purchases-heading {
      text-align: center;
      margin-bottom: 32px;
    }

    #purchases .purchases-heading h2 {
      margin: 0 0 14px;
      font-size: clamp(30px, 5vw, 44px);
      font-weight: 800;
      color: var(--text, #fff);
    }

    #purchases .purchases-heading p {
      max-width: 540px;
      margin: 0 auto;
      line-height: 1.9;
      color: var(--muted, #b9b0c9);
    }

    #purchases .purchases-card {
      padding: clamp(22px, 5vw, 38px);
      border: 1px solid rgba(210, 155, 255, .2);
      border-radius: 24px;
      background: rgba(255, 255, 255, .035);
      box-shadow: 0 20px 65px rgba(0, 0, 0, .14);
      backdrop-filter: blur(12px);
    }

    #purchases .purchases-label {
      display: block;
      margin-bottom: 10px;
      color: var(--text, #fff);
      font-size: 14px;
      font-weight: 700;
    }

    #purchases .purchases-input {
      width: 100%;
      min-height: 54px;
      padding: 14px 16px;
      border-radius: 13px;
      border: 1px solid rgba(210, 155, 255, .25);
      outline: none;
      background: rgba(0, 0, 0, .15);
      color: var(--text, #fff);
      font: inherit;
      direction: ltr;
      text-align: left;
      transition: border-color .2s, box-shadow .2s;
    }

    #purchases .purchases-input:focus {
      border-color: #d9a3ff;
      box-shadow: 0 0 0 3px rgba(217, 163, 255, .12);
    }

    #purchases .purchases-input::placeholder {
      color: #a49aaf;
    }

    #purchases .purchases-submit,
    #purchases .purchases-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      min-height: 52px;
      margin-top: 16px;
      padding: 13px 20px;
      border: 0;
      border-radius: 13px;
      background: linear-gradient(110deg, #d9a3ff, #f1b5d7);
      color: #24142e;
      font: inherit;
      font-weight: 800;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      transition: transform .2s, opacity .2s;
    }

    #purchases .purchases-submit:hover,
    #purchases .purchases-action:hover {
      transform: translateY(-2px);
    }

    #purchases .purchases-submit:disabled {
      cursor: not-allowed;
      opacity: .65;
      transform: none;
    }

    #purchases .purchases-status {
      margin-top: 18px;
      line-height: 1.8;
      font-size: 14px;
      overflow-wrap: anywhere;
    }

    #purchases .purchases-status:empty {
      display: none;
    }

    #purchases .purchases-status.error {
      color: #ff9caa;
    }

    #purchases .purchases-status.info {
      color: var(--muted, #d0c4dc);
    }

    #purchases .purchases-result {
      margin-top: 22px;
      padding: 22px;
      border-radius: 18px;
      border: 1px solid rgba(210, 155, 255, .22);
      background: rgba(180, 120, 220, .06);
    }

    #purchases .purchases-result h3 {
      margin: 0 0 18px;
      font-size: 22px;
      color: var(--text, #fff);
    }

    #purchases .purchases-detail {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 16px 0;
      line-height: 1.7;
    }

    #purchases .purchases-detail span {
      color: var(--muted, #b9b0c9);
      font-size: 13px;
    }

    #purchases .purchases-detail strong {
      color: var(--text, #fff);
      overflow-wrap: anywhere;
    }

    #purchases .purchases-expired {
      border-color: rgba(255, 180, 120, .25);
    }

    #purchases .purchases-expired p {
      line-height: 1.9;
      color: var(--muted, #d0c4dc);
    }

    #purchases .purchases-expired strong {
      color: #e9b7ff;
    }

    body.light-mode #purchases .purchases-heading h2,
    body.light-mode #purchases .purchases-label,
    body.light-mode #purchases .purchases-result h3,
    body.light-mode #purchases .purchases-detail strong {
      color: #291b39;
    }

    body.light-mode #purchases .purchases-heading p,
    body.light-mode #purchases .purchases-detail span,
    body.light-mode #purchases .purchases-expired p {
      color: #6f617d;
    }

    body.light-mode #purchases .purchases-card {
      background: rgba(255, 255, 255, .8);
      border-color: rgba(130, 80, 160, .16);
      box-shadow: 0 18px 55px rgba(75, 35, 100, .08);
    }

    body.light-mode #purchases .purchases-input {
      background: #fff;
      color: #291b39;
      border-color: rgba(130, 80, 160, .25);
    }

    body.light-mode #purchases .purchases-result {
      background: rgba(170, 120, 200, .06);
    }

    body.light-mode #purchases .purchases-status.info {
      color: #6f617d;
    }

    body.light-mode #purchases .purchases-expired strong {
      color: #8c43aa;
    }

    @media (max-width: 620px) {
      #purchases {
        padding: 72px 16px;
      }

      #purchases .purchases-card {
        border-radius: 19px;
      }

      #purchases .purchases-result {
        padding: 17px;
      }
    }
  `;

  document.head.appendChild(style);

  /* ---------- إضافة رابط مشترياتي للقائمة ---------- */

  const nav = document.querySelector(".nav");

  if (nav && !nav.querySelector("[data-purchases-link]")) {
    const navLink = document.createElement("a");

    navLink.href = "#purchases";
    navLink.dataset.purchasesLink = "true";
    navLink.textContent = t("nav");

    navLink.addEventListener("click", () => {
      const panel = document.getElementById("settingsPanel");
      const toggle = document.getElementById("settingsToggle");

      if (panel) panel.classList.remove("open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });

    nav.appendChild(navLink);
  }

  /* ---------- إنشاء قسم مشترياتي ---------- */

  if (document.getElementById("purchases")) return;

  const section = document.createElement("section");

  section.id = "purchases";
  section.className = "section";

  section.innerHTML = `
    <div class="purchases-inner">
      <div class="purchases-heading">
        <h2 data-purchases-title></h2>
        <p data-purchases-subtitle></p>
      </div>

      <div class="purchases-card">
        <form id="purchasesForm" novalidate>
          <label class="purchases-label" for="purchasesCode"
                 data-purchases-label></label>

          <input
            id="purchasesCode"
            class="purchases-input"
            name="code"
            type="text"
            minlength="8"
            maxlength="100"
            autocomplete="off"
            autocapitalize="characters"
            spellcheck="false"
            required
            placeholder=""
            aria-describedby="purchasesStatus"
          >

          <button class="purchases-submit" id="purchasesSubmit"
                  type="submit"></button>
        </form>

        <div
          class="purchases-status"
          id="purchasesStatus"
          role="status"
          aria-live="polite"
        ></div>

        <div id="purchasesResult" aria-live="polite"></div>
      </div>
    </div>
  `;

  const main = document.querySelector("main");
  const contact = document.querySelector("#contact");
  const how = document.querySelector("#how");

  if (main) {
    if (contact && main.contains(contact)) {
      main.insertBefore(section, contact);
    } else if (how && main.contains(how)) {
      how.insertAdjacentElement("afterend", section);
    } else {
      main.appendChild(section);
    }
  } else {
    document.body.appendChild(section);
  }

  const form = document.getElementById("purchasesForm");
  const input = document.getElementById("purchasesCode");
  const submit = document.getElementById("purchasesSubmit");
  const statusBox = document.getElementById("purchasesStatus");
  const resultBox = document.getElementById("purchasesResult");

  /* ---------- أدوات عرض آمنة ---------- */

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  function addDetail(parent, label, value) {
    const detail = makeElement("div", "purchases-detail");
    detail.appendChild(makeElement("span", "", label));
    detail.appendChild(makeElement("strong", "", value));
    parent.appendChild(detail);
  }

  function setStatus(message, type = "info") {
    statusBox.textContent = message;
    statusBox.className = "purchases-status " + type;
  }

  function clearTimer() {
    if (activeTimer !== null) {
      clearInterval(activeTimer);
      activeTimer = null;
    }
  }

  function formatDate(value) {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "—";
    }

    return new Intl.DateTimeFormat(
      isEnglish() ? "en" : "ar-EG",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }
    ).format(date);
  }

  function formatRemaining(expiresAt) {
    const difference = new Date(expiresAt).getTime() - Date.now();

    if (!Number.isFinite(difference) || difference <= 0) {
      return null;
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (days > 0) {
      return `${days} ${t("days")}، ${hours} ${t("hours")}`;
    }

    if (hours > 0) {
      return `${hours} ${t("hours")}، ${minutes} ${t("minutes")}`;
    }

    if (minutes > 0) {
      return `${minutes} ${t("minutes")}، ${seconds} ${t("seconds")}`;
    }

    if (seconds > 0) {
      return `${seconds} ${t("seconds")}`;
    }

    return t("lessThanMinute");
  }

  function showExpired(data) {
    clearTimer();
    resultBox.replaceChildren();

    const card = makeElement(
      "div",
      "purchases-result purchases-expired"
    );

    card.appendChild(makeElement("h3", "", t("expiredTitle")));

    if (data.template_name) {
      addDetail(card, t("design"), data.template_name);
    }

    card.appendChild(makeElement("p", "", t("expiredText")));

    const discount = makeElement("p");
    discount.appendChild(makeElement("strong", "", "30%"));
    card.appendChild(discount);

    const renewButton = makeElement(
      "button",
      "purchases-action",
      t("renew")
    );

    renewButton.type = "button";

    renewButton.addEventListener("click", () => {
      const message = isEnglish()
        ? "Hello 4U celebrations, I'm a returning customer and would like to renew my expired gift website with the 30% returning-customer discount."
        : "أهلًا 4U celebrations، أنا عميل سابق وموقعي انتهت صلاحيته وعايز أجدد طلبي بخصم الـ30% المخصص للعملاء السابقين.";

      if (typeof openWhatsApp === "function") {
        openWhatsApp(message);
      } else if (typeof CONFIG !== "undefined" && CONFIG.whatsappNumber) {
        window.open(
          "https://wa.me/" + CONFIG.whatsappNumber +
          "?text=" + encodeURIComponent(message),
          "_blank",
          "noopener,noreferrer"
        );
      }
    });

    card.appendChild(renewButton);
    resultBox.appendChild(card);
  }

  function showActive(data) {
    clearTimer();
    resultBox.replaceChildren();

    const card = makeElement("div", "purchases-result");
    card.appendChild(makeElement("h3", "", t("active")));

    addDetail(card, t("design"), data.template_name || "4U celebrations");
    addDetail(card, t("expires"), formatDate(data.expires_at));

    const remaining = makeElement("div", "purchases-detail");
    remaining.appendChild(makeElement("span", "", t("remaining")));

    const remainingValue = makeElement("strong", "");
    remaining.appendChild(remainingValue);
    card.appendChild(remaining);

    let giftLink = null;

    try {
      const parsed = new URL(data.page_url);

      if (parsed.protocol === "https:") {
        giftLink = makeElement("a", "purchases-action", t("open"));
        giftLink.href = parsed.href;
        giftLink.target = "_blank";
        giftLink.rel = "noopener noreferrer";
      }
    } catch {
      giftLink = null;
    }

    if (giftLink) {
      card.appendChild(giftLink);
    } else {
      setStatus(t("invalidResponse"), "error");
    }

    resultBox.appendChild(card);

    function updateRemaining() {
      const value = formatRemaining(data.expires_at);

      if (value === null) {
        clearTimer();
        showExpired({ template_name: data.template_name });
        return;
      }

      remainingValue.textContent = value;
    }

    updateRemaining();

    if (activeTimer === null) {
      activeTimer = setInterval(updateRemaining, 1000);
    }
  }

  function renderResult(data) {
    if (!data || typeof data !== "object") {
      setStatus(t("invalidResponse"), "error");
      return;
    }

    if (data.status === "active") {
      showActive(data);
      return;
    }

    if (data.status === "expired") {
      showExpired(data);
      return;
    }

    setStatus(t("invalidResponse"), "error");
  }

  /* ---------- إرسال كود الدخول إلى Supabase ---------- */

  form.addEventListener("submit", async event => {
    event.preventDefault();

    if (currentRequest) return;

    if (isLocked()) {
      updateLockUI();
      return;
    }

    const code = input.value.trim();

    resultBox.replaceChildren();
    clearTimer();
    lastResult = null;

    currentRequest = true;
    submit.disabled = true;
    submit.textContent = t("loading");
    setStatus(t("loading"), "info");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code,
          client_key: getClientKey()
        })
      });

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error("invalid_response");
      }

      /* السيرفر هو المسؤول عن القفل وعدّ المحاولات */
      if (response.status === 429 && data?.error === "locked") {
        startLock(data.locked_until);
        return;
      }

      if (
        (response.status === 400 || response.status === 404) &&
        data?.error === "invalid_code"
      ) {
        setStatus(t("invalid"), "error");
        return;
      }

      if (!response.ok) {
        throw new Error("server_error");
      }

      if (data && (data.status === "active" || data.status === "expired")) {
        resetAttempts();
        lastResult = data;
        statusBox.textContent = "";
        renderResult(data);
      } else {
        setStatus(t("invalidResponse"), "error");
      }

    } catch (error) {
      console.error("4U purchases lookup failed:", error);

      if (error && error.message === "invalid_response") {
        setStatus(t("invalidResponse"), "error");
      } else if (error instanceof TypeError) {
        setStatus(t("networkError"), "error");
      } else {
        setStatus(t("serverError"), "error");
      }

    } finally {
      currentRequest = false;

      if (isLocked()) {
        updateLockUI();
      } else {
        submit.disabled = false;
        input.disabled = false;
        submit.textContent = t("submit");
      }
    }
  });

  /* ---------- دعم تغيير اللغة ---------- */

  function updatePurchasesLanguage() {
    const title = section.querySelector("[data-purchases-title]");
    const subtitle = section.querySelector("[data-purchases-subtitle]");
    const label = section.querySelector("[data-purchases-label]");

    if (title) title.textContent = t("title");
    if (subtitle) subtitle.textContent = t("subtitle");
    if (label) label.textContent = t("label");

    input.placeholder = t("placeholder");

    const navLink = document.querySelector("[data-purchases-link]");

    if (navLink) {
      navLink.textContent = t("nav");
    }

    if (isLocked()) {
      updateLockUI();
    } else {
      submit.textContent = currentRequest ? t("loading") : t("submit");
    }

    if (lastResult) {
      statusBox.textContent = "";
      renderResult(lastResult);
    } else if (!isLocked() && statusBox.textContent) {
      const currentMessage = statusBox.textContent;

      if (
        currentMessage === words.ar.invalid ||
        currentMessage === words.en.invalid
      ) {
        setStatus(t("invalid"), "error");
      } else if (
        currentMessage === words.ar.networkError ||
        currentMessage === words.en.networkError
      ) {
        setStatus(t("networkError"), "error");
      } else if (
        currentMessage === words.ar.serverError ||
        currentMessage === words.en.serverError
      ) {
        setStatus(t("serverError"), "error");
      } else if (
        currentMessage === words.ar.loading ||
        currentMessage === words.en.loading
      ) {
        setStatus(t("loading"), "info");
      }
    }
  }

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", updatePurchasesLanguage);
  });

  updatePurchasesLanguage();
  initializeLock();

})();

