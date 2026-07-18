// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Translations ----------
const I18N = {
  en: {
    nav_about: "About",
    nav_video: "Video",
    nav_photos: "Photos",
    nav_book: "Book",
    hero_sub: "Your favourite hits, rebuilt for the dancefloor. Live 90s club-classics with a sugar coated beat.",
    cta_book: "Book Flamingo Hitmix",
    cta_insta: "Instagram",
    about_title: "About",
    bio: "This three-bird oscillation orchestra is far more than your average cover band, yet fits on three square metres. They perform 90s classics live, with a sugar coated beat. You might feel ecstatic, rejoiced, or even touched by long-forgotten or freshly recalled dance-upon tunes. At the heart of the show: vocalist Aliesje, a multi-decadal dance music chameleon. She is energetically supported by Joris and Martinus on synths and sounds. Straight from Flamingo street in Amsterdam North, Flamingo Hitmix traverses the rich past and present of floor-filling club-classics.",
    video_title: "On stage",
    video_lead: "A taste of the live show.",
    photos_title: "Photos",
    photos_lead: "Live and in colour.",
    book_title: "Book us",
    book_lead: "Party, festival, wedding, corporate takeover — let's talk.",
    book_email: "Email for booking",
  },
  nl: {
    nav_about: "Over ons",
    nav_video: "Video",
    nav_photos: "Foto's",
    nav_book: "Boeken",
    hero_sub: "Jouw favoriete hits, opnieuw opgebouwd voor de dansvloer. Live 90's club-classics met een gesuikerde beat.",
    cta_book: "Boek Flamingo Hitmix",
    cta_insta: "Instagram",
    about_title: "Over ons",
    bio: "Rechtstreeks uit de Flamingostraat in Amsterdam komt Flamingo Hitmix. Zangeres Aliesje, een ware dance-hit kameleon, wordt royaal ondersteund door Joris en Martinus op synths en drumcomputer. Samen brengen ze 90's-klassiekers met een gesuikerde beat, en doorkruisen ze het verleden en heden van floor-filling club-classics.",
    video_title: "Live",
    video_lead: "Een voorproefje van de show.",
    photos_title: "Foto's",
    photos_lead: "Live en in kleur.",
    book_title: "Boek ons",
    book_lead: "Feest, festival, bruiloft of bedrijfsfeest — laten we praten.",
    book_email: "Mail voor boekingen",
  },
};

// ---------- Language switching ----------
function applyLang(lang) {
  document.documentElement.lang = lang;
  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  // Toggle button shows the OTHER language
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display = el.getAttribute("data-lang") === lang ? "inline" : "none";
  });
  try { localStorage.setItem("fh_lang", lang); } catch (e) {}
}

function initLang() {
  let lang;
  try { lang = localStorage.getItem("fh_lang"); } catch (e) {}
  if (!lang) {
    lang = (navigator.language || "en").toLowerCase().startsWith("nl") ? "nl" : "en";
  }
  applyLang(lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  const next = document.documentElement.lang === "nl" ? "en" : "nl";
  applyLang(next);
});

initLang();
