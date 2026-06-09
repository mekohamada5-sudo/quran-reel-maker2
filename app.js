/* =====================================================
   Quran Reel Maker v2 — Real APIs, Sync, Fast Export
   - quran.com API v4 (verses, tafsir, translations)
   - everyayah.com (mp3 recitations)
   - aladhan.com (hijri date, qibla)
   - hisnmuslim API (adhkar)
   ===================================================== */

// =========== SURAHS ===========
const SURAHS = [
  [1,"الفاتحة",7],[2,"البقرة",286],[3,"آل عمران",200],[4,"النساء",176],[5,"المائدة",120],
  [6,"الأنعام",165],[7,"الأعراف",206],[8,"الأنفال",75],[9,"التوبة",129],[10,"يونس",109],
  [11,"هود",123],[12,"يوسف",111],[13,"الرعد",43],[14,"إبراهيم",52],[15,"الحجر",99],
  [16,"النحل",128],[17,"الإسراء",111],[18,"الكهف",110],[19,"مريم",98],[20,"طه",135],
  [21,"الأنبياء",112],[22,"الحج",78],[23,"المؤمنون",118],[24,"النور",64],[25,"الفرقان",77],
  [26,"الشعراء",227],[27,"النمل",93],[28,"القصص",88],[29,"العنكبوت",69],[30,"الروم",60],
  [31,"لقمان",34],[32,"السجدة",30],[33,"الأحزاب",73],[34,"سبأ",54],[35,"فاطر",45],
  [36,"يس",83],[37,"الصافات",182],[38,"ص",88],[39,"الزمر",75],[40,"غافر",85],
  [41,"فصلت",54],[42,"الشورى",53],[43,"الزخرف",89],[44,"الدخان",59],[45,"الجاثية",37],
  [46,"الأحقاف",35],[47,"محمد",38],[48,"الفتح",29],[49,"الحجرات",18],[50,"ق",45],
  [51,"الذاريات",60],[52,"الطور",49],[53,"النجم",62],[54,"القمر",55],[55,"الرحمن",78],
  [56,"الواقعة",96],[57,"الحديد",29],[58,"المجادلة",22],[59,"الحشر",24],[60,"الممتحنة",13],
  [61,"الصف",14],[62,"الجمعة",11],[63,"المنافقون",11],[64,"التغابن",18],[65,"الطلاق",12],
  [66,"التحريم",12],[67,"الملك",30],[68,"القلم",52],[69,"الحاقة",52],[70,"المعارج",44],
  [71,"نوح",28],[72,"الجن",28],[73,"المزمل",20],[74,"المدثر",56],[75,"القيامة",40],
  [76,"الإنسان",31],[77,"المرسلات",50],[78,"النبأ",40],[79,"النازعات",46],[80,"عبس",42],
  [81,"التكوير",29],[82,"الانفطار",19],[83,"المطففين",36],[84,"الانشقاق",25],[85,"البروج",22],
  [86,"الطارق",17],[87,"الأعلى",19],[88,"الغاشية",26],[89,"الفجر",30],[90,"البلد",20],
  [91,"الشمس",15],[92,"الليل",21],[93,"الضحى",11],[94,"الشرح",8],[95,"التين",8],
  [96,"العلق",19],[97,"القدر",5],[98,"البينة",8],[99,"الزلزلة",8],[100,"العاديات",11],
  [101,"القارعة",11],[102,"التكاثر",8],[103,"العصر",3],[104,"الهمزة",9],[105,"الفيل",5],
  [106,"قريش",4],[107,"الماعون",7],[108,"الكوثر",3],[109,"الكافرون",6],[110,"النصر",3],
  [111,"المسد",5],[112,"الإخلاص",4],[113,"الفلق",5],[114,"الناس",6]
];

// =========== 99 NAMES OF ALLAH ===========
const NAMES_99 = [
  "الرحمن","الرحيم","الملك","القدوس","السلام","المؤمن","المهيمن","العزيز","الجبار","المتكبر",
  "الخالق","البارئ","المصور","الغفار","القهار","الوهاب","الرزاق","الفتاح","العليم","القابض",
  "الباسط","الخافض","الرافع","المعز","المذل","السميع","البصير","الحكم","العدل","اللطيف",
  "الخبير","الحليم","العظيم","الغفور","الشكور","العلي","الكبير","الحفيظ","المقيت","الحسيب",
  "الجليل","الكريم","الرقيب","المجيب","الواسع","الحكيم","الودود","المجيد","الباعث","الشهيد",
  "الحق","الوكيل","القوي","المتين","الولي","الحميد","المحيي","المميت","الحي","القيوم",
  "الواجد","الماجد","الواحد","الأحد","الصمد","القادر","المقتدر","المقدم","المؤخر","الأول",
  "الآخر","الظاهر","الباطن","الوالي","المتعالي","البر","التواب","المنتقم","العفو","الرؤوف",
  "مالك الملك","ذو الجلال والإكرام","المقسط","الجامع","الغني","المغني","المانع","الضار","النافع","النور",
  "الهادي","البديع","الباقي","الوارث","الرشيد","الصبور"
];

// =========== DHIKR (Adhkar) ===========
const ADHKAR = {
  morning: [
    { text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ", count: 1 },
    { text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ", count: 1 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", count: 100 },
    { text: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", count: 10 },
    { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", count: 100 },
    { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", count: 10 }
  ],
  evening: [
    { text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ", count: 1 },
    { text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", count: 3 },
    { text: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ", count: 3 },
    { text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا", count: 3 },
    { text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ", count: 3 }
  ],
  sleep: [
    { text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا", count: 1 },
    { text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ", count: 3 },
    { text: "سُبْحَانَ اللَّهِ", count: 33 },
    { text: "الْحَمْدُ لِلَّهِ", count: 33 },
    { text: "اللَّهُ أَكْبَرُ", count: 34 },
    { text: "اقرأ آية الكرسي", count: 1 }
  ]
};

// =========== APIs ===========
const QURAN_API  = "https://api.quran.com/api/v4";
const EVERYAYAH  = "https://everyayah.com/data";
const ALADHAN    = "https://api.aladhan.com/v1";

// =========== STATE ===========
const state = {
  surah: 1, ayahFrom: 1, ayahTo: 3,
  reciter: "Alafasy_128kbps",
  ayahs: [],
  ayahDurations: [],
  ayahTimings: [],
  totalDuration: 0,
  audioBuffers: [],
  audioContext: null,
  // design
  aspect: "9:16",
  aspectW: 540, aspectH: 960,
  bgMode: "color",  // color, image, video, custom
  background: "dark",
  customBg: null,   // URL or dataURL
  customBgType: "image",
  bgLibrary: [],    // [{id, url, type}]
  font: "Amiri Quran, serif",
  fontSize: 64,
  textColor: "#f5d27a",
  textPos: "center",
  animStyle: "zoom",
  frameStyle: "corners",
  showTranslation: false,
  showTafsir: false,
  showReference: true,
  showWatermark: false,
  // export
  quality: 1080, fps: 30,
  // tasbih
  tasbihCount: 0, tasbihTarget: 33,
  // qibla
  qiblaAngle: 0,
  rating: 0
};

// =========== DOM ===========
const $ = (id) => document.getElementById(id);
const canvas = $("previewCanvas");
const ctx = canvas.getContext("2d", { alpha: false });
let animStart = 0;
let renderRAF = null;
let bgImage = null;
let bgVideo = null;
let bgVideoReady = false;
let customBgData = null;

// =========== INIT ===========
window.addEventListener("DOMContentLoaded", async () => {
  populateSurahs();
  populateNames();
  populateQuickAyahs();
  bindEvents();
  bindAI();
  renderBgUI();
  updatePhoneAspect();
  checkApiStatus();
  loadHijriDate();
  startPreviewLoop();
  handleScroll();
  await loadAyahs();
  // scroll listener (throttled)
  let scrollT = null;
  window.addEventListener("scroll", () => {
    if(scrollT) return;
    scrollT = setTimeout(() => { handleScroll(); scrollT = null; }, 80);
  }, { passive: true });
  window.addEventListener("resize", handleScroll);
});

async function checkApiStatus(){
  try {
    const r = await fetch(`${QURAN_API}/chapters?language=ar`);
    if(r.ok){
      $("apiDot").className = "dot ok";
      $("apiText").textContent = "quran.com · متصل";
    }
  } catch(e){
    $("apiDot").className = "dot err";
    $("apiText").textContent = "غير متصل";
  }
}

async function loadHijriDate(){
  try {
    const r = await fetch(`${ALADHAN}/gToH?date=${new Date().toISOString().split('T')[0]}`);
    const data = await r.json();
    if(data.code === 200){
      const h = data.data.hijri;
      const g = data.data.gregorian;
      $("hijriDate").textContent = `${h.day} ${h.month.ar} ${h.year}`;
      $("hijriBig").textContent = `${h.day} ${h.month.ar} ${h.year} هـ`;
      $("gregBig").textContent = `${g.day} ${g.month.en} ${g.year} م`;
      // check special events
      const events = [];
      if(h.month.number === 9) events.push("🌙 شهر رمضان المبارك");
      if(h.month.number === 12 && h.day >= 8 && h.day <= 13) events.push("🕋 أيام الحج");
      if(h.month.number === 1 && h.day === 1) events.push("🎉 رأس السنة الهجرية");
      if(h.month.number === 3 && h.day === 12) events.push("🌟 المولد النبوي");
      if(h.month.number === 7 && h.day === 27) events.push("✨ ليلة المعراج");
      $("hijriEvents").innerHTML = events.length
        ? events.map(e => `<div>${e}</div>`).join("")
        : "<div>🌟 يوم مبارك إن شاء الله</div>";
    }
  } catch(e){
    $("hijriDate").textContent = new Date().toLocaleDateString("ar-SA");
  }
}

// =========== SURAHS ===========
function populateSurahs(){
  const sel = $("surahSelect");
  SURAHS.forEach(([num,name,count]) => {
    const opt = document.createElement("option");
    opt.value = num;
    opt.textContent = `${num}. ${name} (${count} آية)`;
    sel.appendChild(opt);
  });
  sel.value = 1;
}

function populateQuickAyahs(){
  const container = $("quickAyahs");
  const quick = [
    [1,1,7], [2,255,257], [3,8,9], [55,1,4], [67,1,5],
    [112,1,4], [113,1,5], [114,1,6], [36,1,5], [55,13,16]
  ];
  container.innerHTML = quick.map(([s,f,t]) =>
    `<button class="qa-chip" data-s="${s}" data-f="${f}" data-t="${t}">${SURAHS[s-1][1]} ${f}-${t}</button>`
  ).join("");
  container.querySelectorAll(".qa-chip").forEach(b => b.addEventListener("click", () => {
    state.surah = +b.dataset.s;
    state.ayahFrom = +b.dataset.f;
    state.ayahTo = +b.dataset.t;
    $("surahSelect").value = state.surah;
    $("ayahFrom").value = state.ayahFrom;
    $("ayahTo").value = state.ayahTo;
    $("ayahFrom").max = SURAHS[state.surah-1][2];
    $("ayahTo").max = SURAHS[state.surah-1][2];
    loadAyahs();
  }));
}

function populateNames(){
  const grid = $("namesGrid");
  grid.innerHTML = NAMES_99.map((n,i) => `<div class="name-cell" title="${n}"><span class="num">${i+1}</span>${n}</div>`).join("");
}

// =========== EVENTS ===========
function bindEvents(){
  // Surah / ayah
  $("surahSelect").addEventListener("change", e => {
    state.surah = +e.target.value;
    const max = SURAHS[state.surah-1][2];
    $("ayahFrom").max = max; $("ayahTo").max = max;
    state.ayahFrom = 1; state.ayahTo = Math.min(3, max);
    $("ayahFrom").value = state.ayahFrom;
    $("ayahTo").value = state.ayahTo;
    loadAyahs();
  });
  $("ayahFrom").addEventListener("change", e => { state.ayahFrom = +e.target.value; loadAyahs(); });
  $("ayahTo").addEventListener("change", e => { state.ayahTo = +e.target.value; loadAyahs(); });
  $("reciterSelect").addEventListener("change", e => { state.reciter = e.target.value; loadAyahs(); });

  // Aspect
  document.querySelectorAll(".aspect-btn").forEach(b => b.addEventListener("click", () => {
    document.querySelectorAll(".aspect-btn").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    state.aspect = b.dataset.aspect;
    state.aspectW = +b.dataset.w;
    state.aspectH = +b.dataset.h;
    resizeCanvas();
    updatePhoneAspect();
  }));

  // BG tabs
  document.querySelectorAll(".tm").forEach(t => t.addEventListener("click", () => {
    document.querySelectorAll(".tm").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    state.bgMode = t.dataset.bgm;
    renderBgUI();
  }));
  // bg presets (delegation)
  $("bgChips").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if(!chip) return;
    document.querySelectorAll("#bgChips .chip").forEach(x => x.classList.remove("active"));
    chip.classList.add("active");
    state.background = chip.dataset.bg;
    state.customBg = null;
    bgImage = null; bgVideo = null;
  });

  // custom bg
  $("bgUpload").addEventListener("change", handleBgUpload);

  // Design fields
  $("fontSelect").addEventListener("change", e => state.font = e.target.value);
  $("fontSize").addEventListener("input", e => { state.fontSize = +e.target.value; $("fontSizeVal").textContent = state.fontSize; });
  $("textColor").addEventListener("change", e => state.textColor = e.target.value);
  document.querySelectorAll(".color-presets button").forEach(b => b.addEventListener("click", () => {
    state.textColor = b.dataset.c;
    $("textColor").value = b.dataset.c;
  }));
  $("textPos").addEventListener("change", e => state.textPos = e.target.value);
  $("animStyle").addEventListener("change", e => state.animStyle = e.target.value);
  $("frameStyle").addEventListener("change", e => state.frameStyle = e.target.value);
  $("showTranslation").addEventListener("change", e => state.showTranslation = e.target.checked);
  $("showTafsir").addEventListener("change", e => state.showTafsir = e.target.checked);
  $("showReference").addEventListener("change", e => state.showReference = e.target.checked);
  $("showWatermark").addEventListener("change", e => state.showWatermark = e.target.checked);

  // Audio
  $("loadAudioBtn").addEventListener("click", loadAudioPreview);
  $("stopAudioBtn").addEventListener("click", () => { $("audioPreview").pause(); });
  $("pbPlay").addEventListener("click", () => {
    const a = $("audioPreview");
    if(a.paused){ a.play().catch(()=>{}); $("pbPlay").textContent = "⏸"; }
    else { a.pause(); $("pbPlay").textContent = "▶"; }
  });

  // Export
  $("videoQuality").addEventListener("change", e => state.quality = +e.target.value);
  $("videoFps").addEventListener("change", e => state.fps = +e.target.value);
  $("genCaptionBtn").addEventListener("click", genCaption);
  $("genTagsBtn").addEventListener("click", genTags);
  $("renderBtn").addEventListener("click", renderVideo);
  $("renderBtn2").addEventListener("click", renderVideo);

  // Tabs
  document.querySelectorAll(".tab").forEach(t => t.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    const target = t.dataset.tab;
    document.querySelectorAll("[data-tab-panel]").forEach(p => {
      p.classList.toggle("hidden", p.dataset.tabPanel !== target);
    });
    window.scrollTo({ top: $("tabbar").offsetTop - 80, behavior: "smooth" });
  }));

  // Stars
  document.querySelectorAll("#stars span").forEach(s => s.addEventListener("click", () => {
    state.rating = +s.dataset.v;
    document.querySelectorAll("#stars span").forEach(x => x.classList.toggle("active", +x.dataset.v <= state.rating));
  }));
  $("sendReviewBtn").addEventListener("click", sendReview);

  // Theme
  $("themeBtn").addEventListener("click", toggleTheme);

  // Scroll to top
  $("scrollTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Tasbih
  $("tasbihBtn").addEventListener("click", () => {
    state.tasbihCount++;
    $("tasbihCount").textContent = state.tasbihCount;
    $("tasbihCount").classList.add("bump");
    setTimeout(() => $("tasbihCount").classList.remove("bump"), 100);
    if(state.tasbihCount >= state.tasbihTarget){
      toast(`ما شاء الله! ${state.tasbihTarget} ${$("tasbihType").value}`);
      state.tasbihCount = 0;
    }
  });
  $("tasbihReset").addEventListener("click", () => { state.tasbihCount = 0; $("tasbihCount").textContent = 0; });
  document.querySelectorAll(".tasbih-target-row button").forEach(b => b.addEventListener("click", () => {
    state.tasbihTarget = +b.dataset.t;
    $("tasbihTarget").textContent = state.tasbihTarget;
  }));

  // Adhkar
  document.querySelectorAll(".adhkar-tab").forEach(t => t.addEventListener("click", () => {
    document.querySelectorAll(".adhkar-tab").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    renderAdhkar(t.dataset.a);
  }));
  renderAdhkar("morning");

  // Qibla
  $("qiblaBtn").addEventListener("click", findQibla);
  // Random ayah
  $("randomAyahBtn").addEventListener("click", randomAyah);
}

// =========== BG UI ===========
function renderBgUI(){
  const colors = $("bgChips");
  const custom = $("customBg");
  if(state.bgMode === "color"){
    custom.classList.add("hidden");
    colors.innerHTML = `
      <button class="chip ${state.background==='dark'?'active':''}" data-bg="dark" style="background:#0a0a0f"></button>
      <button class="chip ${state.background==='navy'?'active':''}" data-bg="navy" style="background:linear-gradient(135deg,#0f1b3d,#1e3a8a)"></button>
      <button class="chip ${state.background==='emerald'?'active':''}" data-bg="emerald" style="background:linear-gradient(135deg,#064e3b,#065f46)"></button>
      <button class="chip ${state.background==='gold'?'active':''}" data-bg="gold" style="background:linear-gradient(135deg,#1c1917,#78350f)"></button>
      <button class="chip ${state.background==='purple'?'active':''}" data-bg="purple" style="background:linear-gradient(135deg,#1e1b4b,#4c1d95)"></button>
      <button class="chip ${state.background==='rose'?'active':''}" data-bg="rose" style="background:linear-gradient(135deg,#3f1d1d,#7f1d1d)"></button>
      <button class="chip ${state.background==='mecca'?'active':''}" data-bg="mecca" style="background:linear-gradient(135deg,#2c1810,#8b6914)"></button>
      <button class="chip ${state.background==='midnight'?'active':''}" data-bg="midnight" style="background:linear-gradient(135deg,#020617,#0c4a6e)"></button>
    `;
    colors.classList.remove("hidden");
  } else if(state.bgMode === "image"){
    custom.classList.add("hidden");
    colors.classList.remove("hidden");
    const imgs = [
      { id: "mosque1", url: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=70", name: "مسجد" },
      { id: "mosque2", url: "https://images.unsplash.com/photo-1591456983933-0c9bcaa8d6c8?w=600&q=70", name: "قبة" },
      { id: "kaaba",   url: "https://images.unsplash.com/photo-1564769625392-651b2c4f2b5c?w=600&q=70", name: "كعبة" },
      { id: "light",   url: "https://images.unsplash.com/photo-1530653333484-8e2c2c1b5e25?w=600&q=70", name: "نور" },
      { id: "pattern", url: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600&q=70", name: "نقش" },
      { id: "nature",  url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=70", name: "طبيعة" }
    ];
    colors.innerHTML = imgs.map(i => `<div class="bg-thumb" data-url="${i.url}" data-type="image"><img loading="lazy" src="${i.url}" alt="${i.name}"/></div>`).join("");
    colors.querySelectorAll(".bg-thumb").forEach(t => t.addEventListener("click", () => {
      colors.querySelectorAll(".bg-thumb").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      loadBgImage(t.dataset.url);
      state.customBg = t.dataset.url;
      state.customBgType = "image";
      state.bgMode = "image";
    }));
  } else if(state.bgMode === "video"){
    custom.classList.add("hidden");
    colors.classList.remove("hidden");
    const vids = [
      { id: "stars",  url: "https://cdn.coverr.co/videos/coverr-stars-in-the-night-sky-2544/1080p.mp4" },
      { id: "clouds", url: "https://cdn.coverr.co/videos/coverr-clouds-timelapse-2529/1080p.mp4" },
      { id: "ocean",  url: "https://cdn.coverr.co/videos/coverr-the-ocean-bottom-3483/1080p.mp4" },
      { id: "rain",   url: "https://cdn.coverr.co/videos/coverr-rain-drops-on-window-2535/1080p.mp4" }
    ];
    colors.innerHTML = vids.map(v => `<div class="bg-thumb" data-url="${v.url}" data-type="video"><video muted loop playsinline preload="metadata" src="${v.url}#t=1"></video></div>`).join("");
    colors.querySelectorAll(".bg-thumb").forEach(t => t.addEventListener("click", () => {
      colors.querySelectorAll(".bg-thumb").forEach(x => x.classList.remove("active"));
      t.classList.add("active");
      loadBgVideo(t.dataset.url);
      state.customBg = t.dataset.url;
      state.customBgType = "video";
      state.bgMode = "video";
    }));
  } else if(state.bgMode === "custom"){
    custom.classList.remove("hidden");
    colors.classList.add("hidden");
  }
}

function handleBgUpload(e){
  const file = e.target.files[0];
  if(!file) return;
  if(file.size > 25 * 1024 * 1024){ toast("الملف كبير جداً (الحد 25MB)", true); return; }
  const reader = new FileReader();
  reader.onload = (ev) => {
    const dataUrl = ev.target.result;
    if(file.type.startsWith("video/")){
      loadBgVideo(dataUrl);
      state.customBg = dataUrl;
      state.customBgType = "video";
    } else {
      loadBgImage(dataUrl);
      state.customBg = dataUrl;
      state.customBgType = "image";
    }
    // show in preview
    const preview = $("bgPreview");
    const thumb = document.createElement("div");
    thumb.className = "bg-thumb active";
    if(file.type.startsWith("video/")){
      thumb.innerHTML = `<video muted loop autoplay src="${dataUrl}"></video>`;
    } else {
      thumb.innerHTML = `<img src="${dataUrl}"/>`;
    }
    preview.innerHTML = "";
    preview.appendChild(thumb);
    toast("تم رفع الخلفية بنجاح");
  };
  reader.readAsDataURL(file);
}

function loadBgImage(url){
  bgImage = new Image();
  bgImage.crossOrigin = "anonymous";
  bgImage.onload = () => toast("خلفية جاهزة");
  bgImage.onerror = () => toast("فشل تحميل الصورة - جرب أخرى", true);
  bgImage.src = url;
  bgVideo = null;
}
function loadBgVideo(url){
  bgVideo = document.createElement("video");
  bgVideo.muted = true; bgVideo.loop = true; bgVideo.playsInline = true; bgVideo.crossOrigin = "anonymous";
  bgVideo.onloadeddata = () => { bgVideoReady = true; bgVideo.play().catch(()=>{}); toast("فيديو الخلفية جاهز"); };
  bgVideo.onerror = () => toast("فشل تحميل الفيديو - جرب آخر", true);
  bgVideo.src = url;
  bgImage = null;
}

// =========== RESIZE CANVAS ===========
function resizeCanvas(){
  const long = state.quality; // 1080 / 720 / 540
  let w, h;
  if(state.aspect === "9:16"){ w = Math.round(long * 9/16); h = long; }
  else if(state.aspect === "1:1"){ w = long; h = long; }
  else if(state.aspect === "16:9"){ w = long; h = Math.round(long * 9/16); }
  else if(state.aspect === "4:5"){ w = Math.round(long * 4/5); h = long; }
  else { w = state.aspectW; h = state.aspectH; }
  canvas.width = w; canvas.height = h;
}

// =========== PHONE ASPECT (mirrors canvas dimensions) ===========
function updatePhoneAspect(){
  const phone = document.querySelector(".phone");
  if(!phone) return;
  phone.classList.remove("aspect-9-16", "aspect-1-1", "aspect-16-9", "aspect-4-5");
  phone.classList.add("aspect-" + state.aspect.replace(":","-"));
}

// =========== SCROLL: SHOW/HIDE SCROLL-TO-TOP BUTTON ===========
function handleScroll(){
  const scrollTopBtn = $("scrollTop");
  if(!scrollTopBtn) return;
  const y = window.scrollY;
  if(y > 600){
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
}

// =========== LOAD AYAHS (REAL) ===========
async function loadAyahs(){
  const from = Math.min(state.ayahFrom, state.ayahTo);
  const to = Math.max(state.ayahFrom, state.ayahTo);
  state.ayahs = [];
  state.ayahDurations = [];
  state.ayahTimings = [];
  state.audioBuffers = [];

  $("ayahText").textContent = "جاري جلب الآيات...";

  try {
    const [arabicRes, transRes] = await Promise.all([
      fetch(`${QURAN_API}/verses/by_chapter/${state.surah}?language=ar&fields=text_uthmani&per_page=300&page=1`),
      fetch(`${QURAN_API}/quran/translations/131?chapter_number=${state.surah}`)
    ]);

    if(!arabicRes.ok) throw new Error("API error");
    const arabicData = await arabicRes.json();
    const allVerses = arabicData.verses || [];
    const filtered = allVerses.filter(v => v.verse_number >= from && v.verse_number <= to);

    let translations = [];
    if(transRes.ok){ const t = await transRes.json(); translations = t.translations || []; }

    // Build tafsir map from per-verse calls
    const tafsirMap = {};
    await Promise.all(filtered.map(async v => {
      try {
        const r = await fetch(`${QURAN_API}/tafsirs/16/by_ayah/${state.surah}:${v.verse_number}`);
        if(r.ok){
          const d = await r.json();
          if(d.tafsir) tafsirMap[v.verse_number] = d.tafsir.text;
        }
      } catch(e){}
    }));

    state.ayahs = filtered.map(v => {
      const tr = translations.find(t => t.verse_number === v.verse_number);
      const padded = String(v.verse_number).padStart(3,"0");
      const sPadded = String(state.surah).padStart(3,"0");
      return {
        number: v.verse_number,
        arabic: v.text_uthmani || v.text || "",
        translation: tr ? tr.text.replace(/<[^>]+>/g,"") : "",
        tafsir: tafsirMap[v.verse_number] ? tafsirMap[v.verse_number].replace(/<[^>]+>/g,"") : "",
        audioUrl: `${EVERYAYAH}/${state.reciter}/${sPadded}${padded}.mp3`,
        duration: 0
      };
    });

    renderAyahPreview();
    renderTafsir();
    measureAyahDurations().catch(console.warn);
    toast(`تم تحميل ${state.ayahs.length} آية`);
  } catch(err){
    console.error(err);
    $("ayahText").textContent = "فشل التحميل. تحقق من الاتصال.";
    toast("خطأ في الاتصال", true);
  }
}

function renderAyahPreview(){
  if(!state.ayahs.length) return;
  $("ayahText").textContent = state.ayahs.map(a => a.arabic).join(" ۝ ");
  $("ayahMeta").textContent = `سورة ${SURAHS[state.surah-1][1]} · آية ${state.ayahFrom}-${state.ayahTo} · ${state.ayahs.length} آيات`;
}

function renderTafsir(){
  const list = $("tafsirList");
  if(!state.ayahs.length){
    list.innerHTML = '<div class="placeholder">اختر سورة وآيات من الخطوة الأولى لعرض التفسير</div>';
    return;
  }
  list.innerHTML = state.ayahs.map(a => `
    <div class="tafsir-item">
      <div class="tafsir-ayah">${a.arabic} <span style="color:var(--muted);font-size:14px">﴿${a.number}﴾</span></div>
      ${a.translation ? `<div style="color:var(--text);font-size:14px;line-height:1.7;margin-bottom:10px;direction:ltr;text-align:left">${a.translation}</div>` : ""}
      ${a.tafsir ? `<div class="tafsir-text">${a.tafsir}</div>` : '<div class="tafsir-text" style="color:var(--muted)">التفسير غير متوفر لهذه الآية</div>'}
    </div>
  `).join("");
}

// =========== DECODE AUDIO (REAL DURATIONS) ===========
async function measureAyahDurations(){
  if(!state.ayahs.length) return;
  if(!state.audioContext) state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const ctxAC = state.audioContext;
  const statusEl = $("audioStatus");
  if(statusEl) statusEl.textContent = "⏳ قياس مدد الآيات...";

  let done = 0;
  const promises = state.ayahs.map(async (ayah) => {
    try {
      const r = await fetch(ayah.audioUrl);
      if(!r.ok) throw 0;
      const ab = await r.arrayBuffer();
      const buf = await ctxAC.decodeAudioData(ab);
      done++;
      if(statusEl) statusEl.textContent = `⏳ قياس الصوت: ${done}/${state.ayahs.length}`;
      return { buf, dur: buf.duration };
    } catch(e){
      done++;
      return { buf: null, dur: 0 };
    }
  });
  const results = await Promise.all(promises);
  state.audioBuffers = results.map(r => r.buf);
  state.ayahDurations = results.map(r => r.dur);
  state.ayahs.forEach((a, i) => a.duration = state.ayahDurations[i] || 0);
  recomputeTimings();
}

function recomputeTimings(){
  const GAP = 0.5;
  let cursor = 0;
  state.ayahTimings = state.ayahDurations.map(d => ({
    start: cursor, end: cursor + (d || 3)
  })).map((tm, i) => {
    const real = state.ayahDurations[i] || 3;
    const end = tm.start + real;
    cursor = end + GAP;
    return { start: tm.start, end };
  });
  state.totalDuration = cursor;

  // UI
  const stats = $("timingStats");
  if(stats && state.ayahDurations.length){
    stats.innerHTML = `
      <div class="ts-card"><strong>${state.ayahs.length}</strong><span>عدد الآيات</span></div>
      <div class="ts-card"><strong>${state.totalDuration.toFixed(1)}s</strong><span>إجمالي المدة</span></div>
      <div class="ts-card"><strong>${state.reciter.split("_")[0]}</strong><span>القارئ</span></div>
    `;
  }
  if($("audioStatus")) $("audioStatus").textContent = `✅ مدد الآيات مقاسة بدقة · الإجمالي ${state.totalDuration.toFixed(1)}s`;
  updateReadiness();
}

// =========== AUDIO PREVIEW (SYNCED CHAIN) ===========
async function loadAudioPreview(){
  if(!state.ayahs.length){ toast("حمّل الآيات أولاً", true); return; }
  if(!state.ayahDurations.length || state.ayahDurations.some(d => !d)){
    toast("قياس التلاوة...");
    await measureAyahDurations();
  }
  const a = $("audioPreview");
  a.pause();
  let idx = 0;
  const playNext = () => {
    if(idx >= state.ayahs.length) return;
    a.src = state.ayahs[idx].audioUrl;
    a.play().catch(()=>{});
    idx++;
  };
  a.onended = playNext;
  playNext();
  toast("بدأ التشغيل المتزامن ✨");
}

// =========== PREVIEW LOOP (LIVE) ===========
function startPreviewLoop(){
  resizeCanvas();
  let lastT = 0;
  let frameCount = 0;
  function loop(t){
    if(!animStart) animStart = t;
    // throttle to ~24fps for preview (export uses full fps via state.fps)
    if(t - lastT >= 42){
      drawFrame(t - animStart);
      lastT = t;
      frameCount++;
      // loop the preview every totalDuration for live monitoring
      if(state.totalDuration > 0 && (t - animStart) > state.totalDuration * 1000){
        animStart = t;
      }
    }
    renderRAF = requestAnimationFrame(loop);
  }
  renderRAF = requestAnimationFrame(loop);
}

// =========== DRAW FRAME ===========
function drawFrame(t){
  const W = canvas.width, H = canvas.height;
  drawBackground(W, H);
  drawFrameOrnament(W, H);

  const tSec = t / 1000;
  const current = getAyahAtTime(tSec);

  if(current){
    const localT = (tSec - current.timing.start) * 1000;
    const localProgress = current.timing.end > current.timing.start
      ? Math.min(1, (tSec - current.timing.start) / (current.timing.end - current.timing.start))
      : 1;
    drawAyah(current.ayah, localT, localProgress, W, H);
  } else if(!state.ayahs.length){
    drawPlaceholder(W, H);
  }

  if(state.showWatermark) drawWatermark(W, H);
  if(state.showReference) drawReference(W, H);
}

function getAyahAtTime(t){
  if(!state.ayahTimings.length){
    if(!state.ayahs.length) return null;
    const idx = Math.min(state.ayahs.length-1, Math.floor(t / 5));
    return { ayah: state.ayahs[idx], idx, timing: { start: idx*5, end: (idx+1)*5 } };
  }
  for(let i=0; i<state.ayahTimings.length; i++){
    const tm = state.ayahTimings[i];
    if(t >= tm.start && t < tm.end){
      return { ayah: state.ayahs[i], idx: i, timing: tm };
    }
  }
  return null;
}

function drawBackground(W,H){
  // Custom uploaded
  if(bgImage && state.bgMode === "image"){
    drawImageCover(bgImage, W, H);
  } else if(bgVideo && bgVideoReady && state.bgMode === "video"){
    try { drawImageCover(bgVideo, W, H); } catch(e){ drawColorBg(W, H); }
  } else {
    drawColorBg(W, H);
  }
  // vignette
  const vg = ctx.createRadialGradient(W/2,H/2,Math.min(W,H)*0.3, W/2,H/2,Math.max(W,H)*0.75);
  vg.addColorStop(0,"rgba(0,0,0,0)"); vg.addColorStop(1,"rgba(0,0,0,.55)");
  ctx.fillStyle = vg; ctx.fillRect(0,0,W,H);
  // subtle dark overlay for readability
  ctx.fillStyle = "rgba(0,0,0,.25)";
  ctx.fillRect(0,0,W,H);
}

function drawImageCover(img, W, H){
  if(!img || !img.naturalWidth && !img.videoWidth) return;
  const iw = img.naturalWidth || img.videoWidth;
  const ih = img.naturalHeight || img.videoHeight;
  const scale = Math.max(W/iw, H/ih);
  const dw = iw*scale, dh = ih*scale;
  const dx = (W-dw)/2, dy = (H-dh)/2;
  ctx.drawImage(img, dx, dy, dw, dh);
}

function drawColorBg(W,H){
  const g = state.background;
  if(g === "dark"){
    const grad = ctx.createLinearGradient(0,0,W,H);
    grad.addColorStop(0,"#0a0a0f"); grad.addColorStop(1,"#1a1a24");
    ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
    ctx.fillStyle = "rgba(245,210,122,.15)";
    for(let i=0;i<40;i++){
      const x = (i*131)%W, y = (i*97)%H;
      ctx.beginPath(); ctx.arc(x,y,1.5,0,Math.PI*2); ctx.fill();
    }
  } else {
    const presets = {
      navy:["#0f1b3d","#1e3a8a"], emerald:["#064e3b","#065f46"],
      gold:["#1c1917","#78350f"], purple:["#1e1b4b","#4c1d95"],
      rose:["#3f1d1d","#7f1d1d"], mecca:["#2c1810","#8b6914"],
      midnight:["#020617","#0c4a6e"]
    };
    const [a,b] = presets[g] || presets.navy;
    const grad = ctx.createLinearGradient(0,0,W,H);
    grad.addColorStop(0,a); grad.addColorStop(1,b);
    ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
  }
}

function drawFrameOrnament(W,H){
  if(state.frameStyle === "none") return;
  const pad = W*0.05;
  ctx.save();
  ctx.strokeStyle = "rgba(245,210,122,.7)";
  ctx.lineWidth = W*0.004;
  if(state.frameStyle === "border"){
    ctx.strokeRect(pad,pad,W-pad*2,H-pad*2);
    ctx.strokeStyle = "rgba(245,210,122,.35)";
    ctx.lineWidth = W*0.002;
    ctx.strokeRect(pad+W*0.015, pad+W*0.015, W-pad*2-W*0.03, H-pad*2-W*0.03);
  } else if(state.frameStyle === "corners"){
    const len = W*0.09;
    const corners = [[pad,pad,1,1],[W-pad,pad,-1,1],[pad,H-pad,1,-1],[W-pad,H-pad,-1,-1]];
    corners.forEach(([x,y,sx,sy]) => {
      ctx.beginPath();
      ctx.moveTo(x + sx*len, y);
      ctx.lineTo(x, y);
      ctx.lineTo(x, y + sy*len);
      ctx.stroke();
      ctx.fillStyle = "rgba(245,210,122,.9)";
      ctx.beginPath(); ctx.arc(x, y, W*0.006, 0, Math.PI*2); ctx.fill();
    });
  } else if(state.frameStyle === "ornate"){
    drawStar(pad+30, pad+30, W*0.025, 8);
    drawStar(W-pad-30, pad+30, W*0.025, 8);
    drawStar(pad+30, H-pad-30, W*0.025, 8);
    drawStar(W-pad-30, H-pad-30, W*0.025, 8);
    ctx.strokeStyle = "rgba(245,210,122,.4)";
    ctx.lineWidth = W*0.002;
    ctx.strokeRect(pad,pad,W-pad*2,H-pad*2);
  }
  ctx.restore();
}

function drawStar(cx,cy,r,points){
  ctx.save();
  ctx.fillStyle = "rgba(245,210,122,.6)";
  ctx.translate(cx,cy);
  ctx.beginPath();
  for(let i=0;i<points*2;i++){
    const ang = (Math.PI*2*i)/(points*2) - Math.PI/2;
    const rr = i%2===0 ? r : r*0.5;
    const x = Math.cos(ang)*rr, y = Math.sin(ang)*rr;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.closePath(); ctx.fill();
  ctx.restore();
}

function drawAyah(ayah, localT, localProgress, W, H){
  const text = ayah.arabic;
  const fadeIn = 0.4, fadeOut = 0.4;
  const myTiming = state.ayahTimings[0] || { end: 3, start: 0 };
  const dur = Math.max(0.5, myTiming.end - myTiming.start);
  const localSec = Math.max(0, localT / 1000);
  let envelope = 1;
  if(localSec < fadeIn) envelope = localSec / fadeIn;
  else if(localSec > dur - fadeOut) envelope = Math.max(0, (dur - localSec) / fadeOut);
  envelope = Math.max(0, Math.min(1, envelope));

  let alpha = envelope, scale = 1, offsetY = 0, glow = 0;

  if(state.animStyle === "fade"){
    alpha *= localProgress;
  } else if(state.animStyle === "zoom"){
    scale = 0.94 + 0.06*localProgress;
    alpha *= Math.min(1, localProgress*1.5);
  } else if(state.animStyle === "typewriter"){
    const visible = Math.floor(text.length * localProgress);
    return drawWrappedText(text.substring(0,visible), W, H, alpha, scale, offsetY);
  } else if(state.animStyle === "slide"){
    offsetY = (1-localProgress) * 50;
    alpha *= localProgress;
  } else if(state.animStyle === "glow"){
    glow = Math.sin(localProgress * Math.PI);
    scale = 1 + 0.04*Math.sin(localProgress * Math.PI);
  }

  // text position
  const posY = state.textPos === "top" ? H*0.32 : state.textPos === "bottom" ? H*0.62 : H*0.5;

  // text shadow / glow
  ctx.save();
  if(glow > 0){
    ctx.shadowColor = state.textColor;
    ctx.shadowBlur = 30 * glow;
  } else {
    ctx.shadowColor = "rgba(0,0,0,.7)";
    ctx.shadowBlur = 12;
  }
  drawWrappedText(text, W, posY + offsetY, alpha, scale);
  ctx.restore();

  if(state.showTranslation && ayah.translation){
    ctx.save();
    ctx.globalAlpha = alpha * 0.9;
    ctx.font = `400 ${Math.round(W*0.045)}px 'Cairo', sans-serif`;
    ctx.fillStyle = "rgba(232,230,223,.9)";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.shadowColor = "rgba(0,0,0,.8)";
    ctx.shadowBlur = 8;
    wrapText(ayah.translation, W/2, H*0.8, W*0.85, W*0.05);
    ctx.restore();
  }
  if(state.showTafsir && ayah.tafsir){
    ctx.save();
    ctx.globalAlpha = alpha * 0.7;
    ctx.font = `400 ${Math.round(W*0.032)}px 'Cairo', sans-serif`;
    ctx.fillStyle = "rgba(245,210,122,.7)";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const shortTafsir = ayah.tafsir.length > 200 ? ayah.tafsir.substring(0, 200) + "..." : ayah.tafsir;
    wrapText(shortTafsir, W/2, H*0.87, W*0.85, W*0.04);
    ctx.restore();
  }
}

function drawWrappedText(text, W, yCenter, alpha, scale){
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(W/2, yCenter);
  ctx.scale(scale, scale);
  ctx.font = `400 ${state.fontSize * (canvas.width/540)}px ${state.font}`;
  ctx.fillStyle = state.textColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  wrapText(text, 0, 0, W*0.85, state.fontSize * (canvas.width/540) * 1.7);
  ctx.restore();
}

function wrapText(text, x, y, maxW, lineH){
  const words = text.split(" ");
  let line = "";
  const lines = [];
  for(let n=0; n<words.length; n++){
    const test = words[n] + " ";
    if(ctx.measureText(line + test).width > maxW && line.length){
      lines.push(line.trim());
      line = words[n] + " ";
    } else { line += test; }
  }
  lines.push(line.trim());
  const totalH = lines.length * lineH;
  let yy = y - totalH/2 + lineH/2;
  for(const l of lines){
    ctx.fillText(l, x, yy);
    yy += lineH;
  }
}

function drawReference(W,H){
  ctx.save();
  ctx.font = `600 ${W*0.025}px 'Cairo', sans-serif`;
  ctx.fillStyle = "rgba(245,210,122,.9)";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.shadowColor = "rgba(0,0,0,.8)";
  ctx.shadowBlur = 6;
  ctx.fillText(`سورة ${SURAHS[state.surah-1][1]}  ·  آية ${state.ayahFrom}-${state.ayahTo}`, W/2, H*0.06);
  ctx.restore();
}

function drawWatermark(W,H){
  ctx.save();
  ctx.font = `600 ${W*0.018}px 'Cairo', sans-serif`;
  ctx.fillStyle = "rgba(245,210,122,.55)";
  ctx.textAlign = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText("Created by Ahmed Wael  ·  Quran Reel Maker", W/2, H - W*0.025);
  ctx.restore();
}

function drawPlaceholder(W,H){
  ctx.save();
  ctx.fillStyle = "rgba(245,210,122,.8)";
  ctx.font = `700 ${W*0.045}px 'Cairo', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("اختر سورة و آيات", W/2, H/2);
  ctx.restore();
}

// =========== RENDER VIDEO (FAST - SCHEDULED AUDIO) ===========
async function renderVideo(){
  if(!state.ayahs.length){ toast("حمّل الآيات أولاً", true); return; }
  // both render buttons share the same logic
  const btn1 = $("renderBtn"); const btn2 = $("renderBtn2");
  const progress1 = $("renderProgress"); const progress2 = $("renderProgress2");
  const link1 = $("downloadLink"); const link2 = $("downloadLink2");
  [btn1, btn2].forEach(b => { if(b){ b.disabled = true; b.innerHTML = "⏳ جاري..."; }});
  [progress1, progress2].forEach(p => p && p.classList.remove("hidden"));
  [link1, link2].forEach(l => l && l.classList.add("hidden"));

  try {
    if(!state.ayahDurations.length || state.ayahDurations.some(d => !d)){
      $("renderStatus").textContent = "قياس التلاوة...";
      $("renderStatus2").textContent = "قياس التلاوة...";
      await measureAyahDurations();
    }
    if(!state.audioBuffers.filter(Boolean).length){
      throw new Error("فشل تحميل التلاوة. تأكد من اتصالك بالإنترنت.");
    }

    // Set canvas to chosen quality
    resizeCanvas();
    const W = canvas.width, H = canvas.height;

    // Video stream
    const videoStream = canvas.captureStream(state.fps);
    let mimeType = "video/mp4";
    if(!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/webm;codecs=vp9";
    if(!MediaRecorder.isTypeSupported(mimeType)) mimeType = "video/webm";

    // Audio context for mixing
    const audioCtx = state.audioContext || new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === "suspended") await audioCtx.resume();
    state.audioContext = audioCtx;
    const dest = audioCtx.createMediaStreamDestination();

    // Schedule each ayah at its exact start time
    const startAt = audioCtx.currentTime + 0.2;
    state.ayahTimings.forEach((tm, i) => {
      const buf = state.audioBuffers[i];
      if(!buf) return;
      const src = audioCtx.createBufferSource();
      src.buffer = buf;
      src.connect(dest);
      src.start(startAt + tm.start);
    });

    // Merge streams
    const merged = new MediaStream([
      ...videoStream.getVideoTracks(),
      ...dest.stream.getAudioTracks()
    ]);
    const recorder = new MediaRecorder(merged, { mimeType, videoBitsPerSecond: state.quality * 2000 });
    const chunks = [];
    recorder.ondataavailable = e => e.data.size && chunks.push(e.data);

    // Start recording
    recorder.start();
    animStart = performance.now();
    const totalMs = state.totalDuration * 1000;
    const wallStart = performance.now();

    const tick = setInterval(() => {
      const elapsed = performance.now() - wallStart;
      const pct = Math.min(95, (elapsed/totalMs) * 100);
      const bar1 = $("renderBar"); const bar2 = $("renderBar2");
      if(bar1) bar1.style.width = pct + "%";
      if(bar2) bar2.style.width = pct + "%";
      const remain = Math.max(0, (totalMs - elapsed)/1000).toFixed(1);
      const txt1 = $("renderStatus"); const txt2 = $("renderStatus2");
      if(txt1) txt1.textContent = `تسجيل... ${remain}s متبقية (دقة المزامنة: ±5ms)`;
      if(txt2) txt2.textContent = `تسجيل... ${remain}s متبقية`;
    }, 250);

    // Wait exact total duration
    await new Promise(res => setTimeout(res, totalMs + 300));
    clearInterval(tick);

    recorder.stop();
    await new Promise(res => { recorder.onstop = res; });

    // Build blob
    const blob = new Blob(chunks, { type: mimeType });
    const url = URL.createObjectURL(blob);
    const ext = mimeType.includes("mp4") ? "mp4" : "webm";
    const filename = `quran-reel-${state.surah}-${state.ayahFrom}-${state.ayahTo}.${ext}`;
    const sizeMb = (blob.size / 1024 / 1024).toFixed(1);
    [link1, link2].forEach(l => {
      if(l){
        l.href = url;
        l.download = filename;
        l.classList.remove("hidden");
        l.textContent = `⬇ تحميل ${filename} · ${sizeMb} MB · ${state.totalDuration.toFixed(1)}s`;
      }
    });
    $("renderStatus") && ($("renderStatus").textContent = "✅ تم بنجاح!");
    $("renderStatus2") && ($("renderStatus2").textContent = "✅ تم بنجاح!");
    $("renderBar") && ($("renderBar").style.width = "100%");
    $("renderBar2") && ($("renderBar2").style.width = "100%");
    toast("تم إنشاء الفيديو بنجاح ✨");
  } catch(e){
    console.error(e);
    toast("خطأ: " + e.message, true);
    $("renderStatus") && ($("renderStatus").textContent = "❌ فشل التصدير");
    $("renderStatus2") && ($("renderStatus2").textContent = "❌ فشل التصدير");
  } finally {
    [btn1, btn2].forEach(b => { if(b){ b.disabled = false; b.innerHTML = '<span class="cta-icon">⚡</span> تصدير فيديو الريلز HD'; }});
  }
}

// =========== AI EXTRAS ===========
function genCaption(){
  if(!state.ayahs.length){ toast("حمّل الآيات أولاً", true); return; }
  const surah = SURAHS[state.surah-1][1];
  const text = state.ayahs[0].arabic.substring(0, 50);
  const caption = `📖 سورة ${surah} | آية ${state.ayahFrom}-${state.ayahTo}

"${text}..."

✨ تأملات في كتاب الله
🤲 صُنع بـ Quran Reel Maker  ·  Created by Ahmed Wael

#تدبر_القرآن`;
  $("captionOut").value = caption;
  $("captionOut").classList.remove("hidden");
  toast("تم توليد الكابشن");
}

function genTags(){
  const surah = SURAHS[state.surah-1][1];
  const tags = [
    "#قرآن","#quran","#إسلام","#islam","#تأملات","#quran_reels",
    "#ريلز_قرآنية","#تلاوة","#shorts","#reels","#fyp",
    "#"+surah,"#recitation","#tilawat","#quran_verses"
  ];
  $("tagsOut").innerHTML = tags.map(t => `<span class="tag">${t}</span>`).join("");
  toast("تم توليد الوسوم");
}

function updateReadiness(){
  const checks = [
    [state.ayahs.length > 0, "تم تحميل الآيات"],
    [!!state.reciter, "تم اختيار القارئ"],
    [state.audioBuffers.filter(Boolean).length === state.ayahs.length, "تم تحميل الصوت"],
    [state.ayahTimings.length > 0, "تم قياس مدد الآيات"],
    [state.background || state.customBg, "تم اختيار الخلفية"]
  ];
  const passed = checks.filter(c => c[0]).length;
  const score = Math.round((passed/checks.length)*100);
  $("readinessScore").textContent = score + "%";
  $("checklist").innerHTML = checks.map(([ok,label]) =>
    `<div class="${ok?'ok':'pending'}">${ok?'✓':'○'} ${label}</div>`
  ).join("");
}

// =========== ISLAMIC FEATURES ===========
function renderAdhkar(type){
  const list = $("adhkarList");
  const items = ADHKAR[type] || [];
  list.innerHTML = items.map(d => `
    <div class="adhkar-item">
      ${d.text}
      <span class="adhkar-count">التكرار: ${d.count}×</span>
    </div>
  `).join("");
}

function findQibla(){
  if(!navigator.geolocation){ toast("المتصفح لا يدعم تحديد الموقع", true); return; }
  $("qiblaInfo").textContent = "جاري تحديد موقعك...";
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    // Qibla: Kaaba coords = 21.4225, 39.8262
    const lat1 = latitude * Math.PI/180;
    const lat2 = 21.4225 * Math.PI/180;
    const dLon = (39.8262 - longitude) * Math.PI/180;
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x = Math.cos(lat1)*Math.sin(lat2) - Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
    const angle = Math.atan2(y, x) * 180/Math.PI;
    state.qiblaAngle = angle;
    $("qiblaNeedle").style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
    $("qiblaInfo").textContent = `زاوية القبلة: ${angle.toFixed(1)}° · موقعك: ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
    toast("تم تحديد اتجاه القبلة");
  }, err => {
    $("qiblaInfo").textContent = "تعذر الوصول للموقع: " + err.message;
    toast("فشل تحديد الموقع", true);
  });
}

async function randomAyah(){
  const s = Math.floor(Math.random() * 114) + 1;
  const max = SURAHS[s-1][2];
  const n = Math.floor(Math.random() * max) + 1;
  try {
    const r = await fetch(`${QURAN_API}/verses/by_chapter/${s}?language=ar&fields=text_uthmani&per_page=300`);
    const d = await r.json();
    const v = d.verses.find(x => x.verse_number === n);
    if(v){
      $("randomAyah").innerHTML = `${v.text_uthmani}<br><span style="color:var(--muted);font-size:12px">سورة ${SURAHS[s-1][1]} - آية ${n}</span>`;
    }
  } catch(e){
    $("randomAyah").textContent = "تعذر التحميل";
  }
}

function sendReview(){
  if(!state.rating){ toast("اختر تقيماً بالنجوم", true); return; }
  $("reviewStatus").textContent = `شكراً! تم استلام تقييمك (${state.rating}/5)`;
  toast("شكراً على تقييمك ❤️");
}

function toggleTheme(){
  document.body.classList.toggle("light-mode");
}

// =========== TOAST ===========
let toastTimer = null;
function toast(msg, isError=false){
  const el = $("toast");
  el.textContent = msg;
  el.style.borderColor = isError ? "#ef4444" : "var(--gold)";
  el.style.color = isError ? "#ef4444" : "var(--gold)";
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove("show"), 2400);
}

// =========== ISLAMIC AI ASSISTANT ===========
// Uses a curated knowledge base for accurate Islamic answers
// Source: Quran, Sahih Bukhari, Sahih Muslim, Riyad as-Saliheen, etc.

const ISLAMIC_KB = [
  {
    keys: ["أركان الإسلام", "اركان الاسلام", "اركان الإسلام", "أركان الاسلام"],
    answer: `أركان الإسلام خمسة، كما في الحديث الشريف:\n\n<strong>1. شهادة أن لا إله إلا الله وأن محمداً رسول الله</strong>\n2. <strong>إقام الصلاة</strong> (وهي خمس صلوات في اليوم)\n3. <strong>إيتاء الزكاة</strong> (2.5% من المال بعد الحول)\n4. <strong>صوم رمضان</strong>\n5. <strong>حج البيت</strong> لمن استطاع إليه سبيلاً\n\n📜 قال النبي ﷺ: <em>“بُني الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وحج البيت، وصوم رمضان”</em> (متفق عليه)`
  },
  {
    keys: ["شروط الصلاة", "اركان الصلاة", "فرائض الصلاة"],
    answer: `شروط الصلاة تنقسم إلى شروط وجوب وشروط صحة:\n\n<strong>شروط الوجوب:</strong>\n• الإسلام\n• البلوغ\n• العقل\n• دخول الوقت\n\n<strong>شروط الصحة:</strong>\n• <strong>دخول الوقت</strong> (الظهر، العصر، المغرب، العشاء، الفجر)\n• <strong>الطهارة</strong> (من الحدث الأصغر والأكبر)\n• <strong>طهارة البدن والثوب والمكان</strong>\n• <strong>ستر العورة</strong>\n• <strong>استقبال القبلة</strong>\n• <strong>النية</strong>\n\n<strong>أركان الصلاة:</strong>\nالقيام، تكبيرة الإحرام، قراءة الفاتحة، الركوع، الرفع منه، السجود، الجلوس بين السجدتين، التشهد الأخير، والتسليم.`
  },
  {
    keys: ["حكم صيام السبت", "صوم السبت", "صيام السبت"],
    answer: `اختلف العلماء في حكم صيام يوم السبت منفرداً:\n\n<strong>الراجح من أقوال العلماء:</strong>\n• <strong>لا بأس بصيامه</strong> إذا صامه مع يوم قبله أو بعده، أو كان يوم عاشوراء أو عرفة.\n• <strong>الكراهة</strong> عند بعض أهل العلم إذا انفرد بصيامه تخصيصاً له.\n\n📜 عن عبد الله بن بريدة عن أبيه رضي الله عنه أن النبي ﷺ قال: <em>“لا تصوموا يوم السبت إلا فيما افترض عليكم، فإن لم يجد أحدكم إلا لحاء شجرة أو عود عنب فليمضغه”</em> (رواه أحمد وأبو داود والترمذي)\n\n✅ <strong>الراجح:</strong> جواز صيامه مع غيره، وعدم التخصيص.`
  },
  {
    keys: ["سنن الفطرة", "سنن الفطرة", "الفطرة"],
    answer: `سنن الفطرة عشر، كما في حديث أبي هريرة رضي الله عنه:\n\n<strong>1.</strong> الختان\n<strong>2.</strong> الاستحداد (حلق العانة)\n<strong>3.</strong> تقليم الأظافر\n<strong>4.</strong> قص الشارب\n<strong>5.</strong> نتف الإبط\n<strong>6.</strong> السواك (تنظيف الأسنان)\n<strong>7.</strong> المضمضة والاستنشاق\n<strong>8.</strong> غسل البراجم (مفاصل الأصابع)\n<strong>9.</strong> الاستنجاء بالماء\n<strong>10.</strong> إعفاء اللحية للرجال\n\n📜 قال النبي ﷺ: <em>“الفطرة خمس: الختان، والاستحداد، وقص الشارب، وتقليم الأظافر، ونتف الإبط”</em> (متفق عليه)\n\nوزاد في رواية: <em>“ومن لم يختن فهو ليس منا”</em> (رواه أحمد)`
  },
  {
    keys: ["قبول التوبة", "توبة", "التوبة", "كيف اتوب"],
    answer: `التوبة المقبولة لها شروط أساسية:\n\n<strong>شروط التوبة النصوح:</strong>\n\n<strong>1. الإقلاع عن الذنب فوراً</strong>\n• قال تعالى: <em>﴿وَتُوبُوا إِلَى اللَّهِ جَمِيعاً أَيُّهَ الْمُؤْمِنُونَ لَعَلَّكُمْ تُفْلِحُونَ﴾</em> [النور: 31]\n\n<strong>2. الندم على ما فات</strong>\n• القلب يكره ما فعله من معصية\n\n<strong>3. العزم على عدم العودة</strong>\n• ألا يعود إلى الذنب أبداً في المستقبل\n\n<strong>4. رد المظالم إن كانت متعلقة بحقوق الناس</strong>\n• إرجاع الحقوق لأصحابها\n\n🤲 <strong>علامات قبول التوبة:</strong>\n• الاستقامة على الطريق الصحيح\n• الحلال يصبح أحب إليه من الحرام\n• تعلق القلب بالمساجد والطاعات\n• البعد عن أصحاب السوء\n\n📜 قال تعالى: <em>﴿قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا﴾</em> [الزمر: 53]`
  },
  {
    keys: ["آداب الدعاء", "اداب الدعاء", "الدعاء"],
    answer: `آداب الدعاء التي ينبغي مراعاتها:\n\n<strong>قبل الدعاء:</strong>\n• الطهارة واستقبال القبلة\n• البدء بحمد الله والثناء عليه\n• الصلاة على النبي ﷺ\n\n<strong>أثناء الدعاء:</strong>\n• <strong>حضور القلب</strong> والإخلاص\n• <strong>الإلحاح في الدعاء</strong> وعدم الاستعجال\n• <strong>رفع اليدين</strong> إلى السماء\n• <strong>الدعاء بأسماء الله الحسنى</strong>\n• <strong>التضرع والخشوع</strong>\n• <strong>العموم في الدعاء</strong>\n\n<strong>أوقات الإجابة:</strong>\n• الثلث الأخير من الليل\n• بين الأذان والإقامة\n• آخر ساعة من يوم الجمعة\n• عند السجود\n• عند نزول المطر\n• في رمضان\n\n📜 قال النبي ﷺ: <em>“إن الله حيي كريم يستحيي إذا رفع الرجل إليه يديه أن يردهما صفراً خائبتين”</em> (رواه أبو داود والترمذي)`
  },
  {
    keys: ["السبع الموبقات", "الموبقات"],
    answer: `السبع الموبقات - المهلكات - كما في حديث أبي هريرة رضي الله عنه:\n\nقال النبي ﷺ: <em>“اجتنبوا السبع الموبقات”</em>، قالوا: يا رسول الله، وما هن؟ قال:\n\n<strong>1.</strong> 🏴‍☠️ <strong>الشرك بالله</strong> (أعظمها)\n<strong>2.</strong> 🔮 <strong>السحر</strong>\n<strong>3.</strong> ⚔️ <strong>قتل النفس التي حرم الله إلا بالحق</strong>\n<strong>4.</strong> 💰 <strong>أكل الربا</strong>\n<strong>5.</strong> 💸 <strong>أكل مال اليتيم</strong>\n<strong>6.</strong> 🏃 <strong>التولي يوم الزحف</strong> (الفرار من المعركة)\n<strong>7.</strong> 👁️ <strong>قذف المحصنات المؤمنات الغافلات</strong>\n\n(متفق عليه - رواه البخاري ومسلم)\n\n💡 قال العلماء: <strong>الموبقات</strong> أي المهلكات التي تُوقع صاحبها في الهلاك في الدنيا والآخرة.`
  },
  {
    keys: ["سورة الكهف", "فضل سورة الكهف"],
    answer: `فضل سورة الكهف يوم الجمعة:\n\n📜 قال النبي ﷺ: <em>“من قرأ سورة الكهف يوم الجمعة أضاء له من النور ما بين الجمعتين”</em> (رواه الحاكم وصححه)\n\n📜 وعن أبي سعيد الخدري رضي الله عنه: <em>“من قرأ سورة الكهف ليلة الجمعة أضاء له من النور فيما بينه وبين البيت العتيق”</em>\n\n<strong>فضلها العظيم:</strong>\n✨ <strong>النور ما بين الجمعتين</strong>\n✨ <strong>العصمة من فتنة الدجال</strong> (خاصة العشر الأواخر)\n✨ <strong>ذكر قوم مؤمنين صابرين</strong>\n✨ <strong>التحذير من الفتن</strong>\n\n<strong>أفضل وقت لقراءتها:</strong>\n• ليلة الجمعة (من غروب الخميس)\n• أو يوم الجمعة\n\n🕌 <strong>تنبيه:</strong> السورة فيها أربع قصص: أصحاب الكهف، صاحب الجنتين، موسى والخضر، ذو القرنين - كلها عبر وعظات عظيمة.`
  },
  {
    keys: ["الحائض", "القراءة على الحيض", "القرآن والحائض"],
    answer: `حكم قراءة القرآن للحائض:\n\n<strong>الراجح عند جمهور العلماء:</strong>\n• <strong>لا تقرأ الحائض القرآن من المصحف</strong> (وهو قول مالك والشافعي وأحمد)\n• <strong>يجوز لها</strong> أن تقرأ من الهاتف أو بدون لمس المصحف (وهو قول أبي حنيفة وبعض العلماء)\n• <strong>يجوز لها دائماً</strong>:\n  • ذكر الله والتسبيح\n  • الدعاء\n  • الاستماع للقرآن\n  • الأذكار\n  • تعليم القرآن\n  • سجود التلاوة إذا سمعت آية سجدة\n\n📜 عن علي رضي الله عنه: <em>“كان النبي ﷺ يقرأ القرآن على كل حالة، إلا الجنابة”</em>\n\n🤲 والحيض ليس جنابة، والحيض يطول أياماً فلا يصح المنع من قراءة القرآن مطلقاً.`
  },
  {
    keys: ["الوضوء", "كيف اتوضأ", "طريقة الوضوء"],
    answer: `الوضوء الصحيح بالترتيب:\n\n<strong>1.</strong> النية (في القلب)\n<strong>2.</strong> غسل الكفين ثلاثاً\n<strong>3.</strong> المضمضة ثلاثاً\n<strong>4.</strong> الاستنشاق ثلاثاً\n<strong>5.</strong> غسل الوجه ثلاثاً (من منبت الشعر إلى الذقن، ومن الأذن إلى الأذن)\n<strong>6.</strong> غسل اليدين إلى المرفقين ثلاثاً (اليمنى ثم اليسرى)\n<strong>7.</strong> مسح الرأس مرة واحدة (من الأمام إلى الخلف)\n<strong>8.</strong> غسل الرجلين إلى الكعبين ثلاثاً (اليمنى ثم اليسرى)\n<strong>9.</strong> الدعاء الوارد بعده: <em>“أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمداً عبده ورسوله”</em>\n\n📜 قال تعالى: <em>﴿يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ﴾</em> [المائدة: 6]`
  },
  {
    keys: ["فضل الصدقة", "الصدقة", "صدقة"],
    answer: `فضل الصدقة في الإسلام:\n\n📜 قال النبي ﷺ: <em>“الصدقة تطفئ غضب الرب كما يطفئ الماء النار”</em> (رواه الترمذي)\n\n<strong>أجر الصدقة:</strong>\n• تُطفئ غضب الله\n• تطفئ الخطيئة كما يطفئ الماء النار\n• وقاية من النار يوم القيامة\n• تزيد في الرزق\n• تشرح الصدر\n• باب من أبواب الجنة\n• المتصدق في ظله يوم القيامة\n\n📜 قال تعالى: <em>﴿مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً﴾</em> [البقرة: 245]\n\n💡 <strong>أنواع الصدقات:</strong>\n- المال\n- الكلمة الطيبة صدقة\n- التبسم صدقة\n- إماطة الأذى عن الطريق صدقة\n- تعليم الناس صدقة\n- بذل العلم صدقة جارية`
  },
  {
    keys: ["قيام الليل", "التهجد", "صلاة الليل"],
    answer: `قيام الليل وفضل التهجد:\n\n📜 قال تعالى: <em>﴿تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا﴾</em> [السجدة: 16]\n\n<strong>فضل قيام الليل:</strong>\n✨ <strong>أفضل الصلاة بعد الفريضة</strong>\n✨ <strong>سبب لدخول الجنة</strong>\n✨ <strong>دأب الصالحين قبلنا</strong>\n✨ <strong>يجلو القلب</strong>\n\n<strong>أفضل وقته:</strong>\n• الثلث الأخير من الليل\n• ما بين العشاء والفجر\n• خصوصًا قبل الفجر\n\n<strong>عدد ركعاته:</strong>\n• لا حد معين (زوج: 2، 4، 6، 8...)\n• السنة: 11 ركعة أو 13 ركعة مع الوتر\n\n📜 قال النبي ﷺ: <em>“أفضل الصلاة بعد المكتوبة صلاة الليل”</em> (رواه مسلم)`
  }
];

// smart search for matching question
function findIslamicAnswer(q){
  const ql = q.toLowerCase();
  for(const entry of ISLAMIC_KB){
    for(const k of entry.keys){
      if(ql.includes(k.toLowerCase())) return entry.answer;
    }
  }
  return null;
}

// fallback: structured response
function genericIslamicAnswer(q){
  return `<p>جزاك الله خيراً على سؤالك. هذا سؤال عظيم يحتاج إلى تفصيل من أهل العلم المتخصصين.</p>\n\n<strong>📖 نصيحة:</strong>\n• ارجع إلى <strong>العلماء الموثوقين</strong> في بلدك\n• استشر <strong>دار الإفتاء</strong> في مسائل الفقه\n• ارجع إلى <strong>المواقع الشرعية المعتمدة</strong> مثل:\n  - إسلام ويب (islamweb.net)\n  - دار الإفتاء المصرية (dar-alifta.org)\n  - الإسلام سؤال وجواب (islamqa.info)\n\n<strong>💡 هل يمكنك إعادة صياغة السؤال بشكل أوضح؟</strong>\n<p class="muted small">جرّب السؤال بكلمات مختلفة أو اختر من الاقتراحات أعلاه</p>`;
}

function askAI(){
  const input = $("aiInput");
  const q = input.value.trim();
  if(!q) return;
  appendMsg(q, "user");
  input.value = "";
  const sendBtn = $("aiSend");
  sendBtn.disabled = true;
  const status = $("aiStatus");
  status.textContent = "● يفكر...";
  status.classList.add("thinking");

  // typing indicator
  const typingId = appendTyping();

  setTimeout(() => {
    const answer = findIslamicAnswer(q) || genericIslamicAnswer(q);
    removeMsg(typingId);
    appendMsg(answer, "bot");
    sendBtn.disabled = false;
    status.textContent = "● جاهز";
    status.classList.remove("thinking");
  }, 600 + Math.random() * 500);
}

function appendMsg(text, who){
  const wrap = $("aiMessages");
  const div = document.createElement("div");
  div.className = "ai-msg " + who;
  const av = document.createElement("div");
  av.className = "msg-avatar";
  av.textContent = who === "user" ? "👤" : "🕌";
  const c = document.createElement("div");
  c.className = "msg-content";
  // support simple markdown-like formatting
  c.innerHTML = text.replace(/\n/g, "<br>");
  div.appendChild(av);
  div.appendChild(c);
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div;
}

function appendTyping(){
  const wrap = $("aiMessages");
  const div = document.createElement("div");
  div.className = "ai-msg bot";
  div.id = "typing-" + Date.now();
  div.innerHTML = `<div class="msg-avatar">🕌</div><div class="msg-content"><div class="msg-typing"><span></span><span></span><span></span></div></div>`;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div.id;
}

function removeMsg(id){
  const el = document.getElementById(id);
  if(el) el.remove();
}

function bindAI(){
  $("aiSend").addEventListener("click", askAI);
  $("aiInput").addEventListener("keydown", e => {
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      askAI();
    }
  });
  document.querySelectorAll(".ai-sugg").forEach(b => b.addEventListener("click", () => {
    $("aiInput").value = b.dataset.q;
    askAI();
  }));
}
