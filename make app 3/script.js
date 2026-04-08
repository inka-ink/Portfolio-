  <script>
    document.getElementById('year').textContent = new Date().getFullYear();

    // mobile menu
    document.getElementById('navToggle').addEventListener('click', function(){
      document.getElementById('navList').classList.toggle('show');
    });
    document.querySelectorAll('#navList a').forEach(a=> a.addEventListener('click', ()=> document.getElementById('navList').classList.remove('show')));

    // simple fade-in on scroll
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.style.opacity=1; e.target.style.transform='none';
        }
      })
    },{threshold:0.1});
    document.querySelectorAll('.service-card, .portfolio-item, .review-card').forEach(el=>{
      el.style.opacity=0; el.style.transform='translateY(14px)'; observer.observe(el);
    });

 // i18n simple
const translations = {
  ru: {
    home: "Главная",
    about: "Обо мне",
    services: "Услуги",
    portfolio: "Портфолио",
    reviews: "Отзывы",
    contact: "Контакты",

    kicker: "MAKEUP ARTIST",
    name: "Inna Lobenko",
    tag: "Создаю естественный и утончённый макияж",

    aboutTitle: "Обо мне",
    servicesTitle: "Услуги",
    portfolioTitle: "Портфолио",
    reviewsTitle: "Отзывы",
    reviewsTitle2: "Отзывы наших клиентов",
    contactTitle: "Контакты",

    heroTitle: "MAKEUP ARTIST",
    heroName: "Karmanova YULIYA",
    heroSubtitle: "Создаю естественный и утончённый макияж",

    srv1: "Дневной макияж",
    srv2: "Вечерний / Событийный",
    srv3: "Свадебный",
    srv4: "Обучение",

    srv1desc: "Лёгкий, естественный образ для работы и встреч.",
    srv2desc: "Более выразительный образ для фотосессий и мероприятий.",
    srv3desc: "Свадебный образ с учётом стойкости.",
    srv4desc: "Индивидуальные уроки и мастер-классы.",

    port1title: "Персональный макияж",
    port1desc: "Подчёркиваю естественную красоту и создаю выразительный образ.",

    port2title: "Прически",
    port2desc: "Создаю стильные и аккуратные прически для любого события.",

    port3title: "Прайс",
    port3desc: "Прайс — Визаж, Укладка и Обучение.",

    contactText:
      "Для записи напишите в WhatsApp, Telegram, VK, Instagram или по электронной почте",
    phoneLabel: "Мой номер телефона:",

    book: "Записаться"
  },

  de: {
    home: "Startseite",
    about: "Über mich",
    services: "Leistungen",
    portfolio: "Portfolio",
    reviews: "Bewertungen",
    contact: "Kontakt",

    kicker: "MAKEUP ARTIST",
    name: "Inna Lobenko",
    tag: "Ich kreiere natürliche und feine Make-ups",

    aboutTitle: "Über mich",
    servicesTitle: "Leistungen",
    portfolioTitle: "Portfolio",
    reviewsTitle: "Bewertungen",
    reviewsTitle2: "Bewertungen unserer Kunden",
    contactTitle: "Kontakt",

    heroTitle: "MAKEUP ARTIST",
    heroName: "Karmanova YULIYA",
    heroSubtitle: "Ich kreiere natürliches und feines Make-up",

    srv1: "Tages-Make-up",
    srv2: "Abend-/Event-Make-up",
    srv3: "Braut-Make-up",
    srv4: "Schulung",

    srv1desc: "Leichtes, natürliches Make-up für Arbeit und Treffen.",
    srv2desc: "Ausdrucksvolleres Make-up für Fotoshootings und Events.",
    srv3desc: "Hochzeits-Make-up mit besonderer Haltbarkeit.",
    srv4desc: "Individuelle Schulungen und Workshops.",

    port1title: "Personalisiertes Make-up",
    port1desc:
      "Ich betone die natürliche Schönheit und kreiere einen ausdrucksstarken Look.",

    port2title: "Frisuren",
    port2desc:
      "Ich kreiere stilvolle und gepflegte Frisuren für jedes Event.",

    port3title: "Preisliste",
    port3desc: "Preise — Make-up, Hairstyling und Schulungen.",

    contactText:
      "Für die Terminvereinbarung schreiben Sie mir in WhatsApp, Telegram, VK, Instagram oder per E-Mail",
    phoneLabel: "Meine Telefonnummer:",

    book: "Buchen"
  },

  en: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    reviews: "Reviews",
    contact: "Contact",

    kicker: "MAKEUP ARTIST",
    name: "Inna Lobenko",
    tag: "I create natural and refined makeup",

    aboutTitle: "About Me",
    servicesTitle: "Services",
    portfolioTitle: "Portfolio",
    reviewsTitle: "Reviews",
    reviewsTitle2: "Customer Reviews",
    contactTitle: "Contacts",

    heroTitle: "MAKEUP ARTIST",
    heroName: "Karmanova YULIYA",
    heroSubtitle: "I create natural and refined makeup",

    srv1: "Day Makeup",
    srv2: "Evening / Event Makeup",
    srv3: "Bridal Makeup",
    srv4: "Training",

    srv1desc: "Light, natural makeup for work and meetings.",
    srv2desc: "More expressive makeup for photoshoots and events.",
    srv3desc: "Bridal makeup with long-lasting effect.",
    srv4desc: "Individual lessons and master classes.",

    port1title: "Personal Makeup",
    port1desc:
      "I enhance natural beauty and create an expressive, elegant look.",

    port2title: "Hairstyles",
    port2desc: "I create stylish and neat hairstyles for any occasion.",

    port3title: "Price List",
    port3desc: "Pricing — Makeup, Hairstyling and Training.",

    contactText:
      "To book an appointment, write in WhatsApp, Telegram, VK, Instagram or by email",
    phoneLabel: "My phone number:",

    book: "Book"
  }
};



    function applyLang(lang){
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
      });
      const htmlBlock = document.querySelector('[data-i18n-html]');
      if(lang==='de'){
        htmlBlock.innerHTML = `Ich bin Visagistin mit zwei Jahren Erfahrung. In dieser Zeit habe ich mehr als 100 Make-ups erstellt und mit verschiedenen Hauttypen gearbeitet.<br><br>
        Ich erstelle Make-ups für Fotoshootings, Hochzeiten, Abendveranstaltungen und den Alltag.<br><br>
        Dank meiner Erfahrung kann ich für Sie ein komplettes Styling in 1,5–2 Stunden (Make-up + Styling) erstellen.<br><br>
        In meiner Arbeit lege ich Wert auf Individualität — es ist mir wichtig, die natürliche Schönheit zu betonen, nicht zu verbergen.<br><br>
        Mein Ziel ist, dass sich jede Frau mit dem Make-up, das wir gemeinsam kreieren, selbstbewusst, harmonisch und leicht fühlt.`;
      } else {
        htmlBlock.innerHTML = `Я — визажист с двухлетним опытом работы. За это время, я успела создать больше 100 макияжей и поработать с разными типами кожи и внешности,<br><br>
          создать макияж для фотосессий, свадеб, вечерних выходов и повседневных образов.<br><br>
          Благодаря своему опыту, я могу создать для вас полный образ за 1.5–2 часа (макияж + укладка).<br><br>
          В своей работе я делаю акцент на индивидуальности — для меня важно подчеркнуть естественную красоту, а не скрыть её.<br><br>
          Моя цель — чтобы каждая девушка чувствовала себя уверенно, гармонично и легко с макияжем, который мы создаём вместе.`;
      }

      document.querySelectorAll('[data-key]').forEach(a=>{
        const key = a.getAttribute('data-key');
        if(translations[lang] && translations[lang][key]) a.textContent = translations[lang][key];
      });
    }

    document.querySelectorAll('.lang-btn').forEach(b=> b.addEventListener('click', ()=> applyLang(b.getAttribute('data-lang'))));
    applyLang('ru');

    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const href = this.getAttribute('href');
        if(href.length>1){
          e.preventDefault();
          document.querySelector(href).scrollIntoView({behavior:'smooth'});
        }
      })
    });

    function toggleMenu() {
  let menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}
const reviews = [
  {name: "Анна", text: "@karmanova.yu - Ой, мне безумно понравился макияж!супер,спасибо❤️ "},
  {name: "Мария", text: "@karmanova.yu -Здравствуйте. Все понравилось) Макияж как и укладка были легкими и совсем не ощущались на коже и волосах, что очень порадовало.Спасибо вам за работу❤️"},
  {name: "Ольга", text: "@karmanova.yu - Спасибо большое за красивый и эффектный макияж и укладку❣️смывать жалко было 🥲 Очень красиво получилось и смотрелось в кадре. Такая комфортная и уютная атмосфера была в процессе, что всегда важно 🥰"},
  {name: "Екатерина", text: "@karmanova.yu -сегодня приезжала феечка красоты @karmanova.yu. ❤️‍🔥 мы прошли урок «макияж для себя», я научилась многому. Спасибо Юлечка, ты лучшая ❤️❤️❤️🫶"},
  {name: "Ирина", text: "@karmanova.yu - Здравствуйте, Юля!☺️ Да, мне понравился макияж и как Вы подобрали средства по типу кожи! Несмотря на то, что у меня было аллергическое высыпание - никаких шелушений не последовало, и макияж был стойким 😍👍 В жару ничего не потекло и матирующими салфетками слой HE СняЛСя!И с укладкой тоже все хорошо, она была и подвижная, и фиксированная одновременно🤗 Спасибо Вам огромное😍😍😍🙏"},
  {name: "Светлана", text: "@karmanova.yu Мне понравилось, что вы чем-то приятным попшикали руки 😁я прям подметила это, так мало кто делает + был специальный спонж, чтобы не трогать лишний раз лицо , тоже круто! Так же понравилась скорость работы Приятно, что советовались со мной «что нравится, что не нравится» Ни какой из материалов не вызвал реакцию кожи, тоже супер ! Сам макияж и прическа понравились☺️🙈 в мне и мужу😁"},
  {name: "Людмила", text: "@karmanova.yu- Юлечка, спасибо тебе за вчерашний макияж и укладку!Я с укладкой буду ходить еще минимум сегодняшний день 😍 жаль, конечно, что макияж вчера все же пришлось смыть 😕 Все очень деликатно, аккуратно, нежно, макияж получился красивый и естественный! как я люблю - без перегруженности))Хочется также отметить, что ты учитывала все мои пожелания, интересовалась как и что мне нравится в макияже и что, наоборот я не люблю)) приятно, когда тебя слышат 🫶к отдельное спасибо за разные советы по косметике и за то, что отвечала на мои десятки вопросов «ой, а что это за крем, а что это за спрей?»😂🩷 С ушла не только с красивым макияжем и укладкой, но и новыми рекомендациями для себя!Спасибо еще раз, с тобой время пролетело быстро и очень приятно, ты - прелесть🩶 Буду приходить к тебе сама и рекомендовать тебя своим клиентам 🫶"},
  {name: "Татьяна", text: "@karmanova.yu - Добрый день 😊всё супер, всегда есть опасения, когда иду к человеку в первый раз, тем более в такой торжественный день, и Вы оправдали все страхи. Макияж держался до самого вечера , несмотря на жару 🫠 а укладка пережила ещё и второй день свадьбы. Замечаний нет, одни только слова благодарности. Спасибо ☺️ буду рекомендовать Вас своим подружкам"},
  {name: "Наталья", text: "@karmanova.yu самая лучшая 🔥Спасибо огромное, что провела курс «Макияж для себя». Теперь буду еще красивее ✅ Это было очень интересно и я очень многому научилась.Это максимально комфортно и душевно🫂🩶"},
  {name: "Ольга", text: "@karmanova.yu, все очень понравилось! Ты все так качественно и аккуратно делала!😍 получала огромное удовольствие 🤍 Спасибо тебе огроменное🤍"},
  {name:"Мария", text:"@karmanova.yu Добрый день!!Ещё раз хочу сказать огромное спасибо за макияж и причёску😍 Все было просто супер Получила огромное количество комплиментов Вы просто волшебница❤️❤️❤️"},
  {name: "Анна", text: "@karmanova.yu, я осталась в полном восторге! Пришла на макияж + укладку перед свадьбой подруги и получила именно тот результат, который хотела.Что особенно понравилось: стойкость укладки и макияжа - все продержалось целый день, даже после безудержных танцев скорость работы - все было сделано гораздо быстрее, чем я предполагала, что очень порадовало! Не пришлось торопиться на свадьбу ,лояльность - чувствовала себя комфортно, были учтены все пожелания, и получилось все просто супер!"},
];

const container = document.getElementById('review-container');
let index = 0;

function showReview() {
  container.innerHTML = `
    <div class="review">
      <div class="review-name">${reviews[index].name}</div>
      <div>${reviews[index].text}</div>
    </div>
  `;
  index = (index + 1) % reviews.length; // переходим к следующему отзыву
}

// Показываем первый отзыв сразу
showReview();

// Меняем отзыв каждые 5 секунд
setInterval(showReview, 5000);

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}



document.addEventListener('DOMContentLoaded', function() {
  // -------------------
  // OPEN/CLOSE MODALS
  // -------------------
  const modalButtons = document.querySelectorAll('.modal-btn');

  modalButtons.forEach(btn => {
    const modalId = btn.dataset.modal;
    const modal = document.getElementById(modalId);
    const closeBtn = modal.querySelector('.close');

    btn.addEventListener('click', () => {
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // -------------------
  // AUTO YEAR
  // -------------------
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // -------------------
  // TRANSLATION
  // -------------------
  let lang = 'de'; // 'ru', 'en', 'de' — меняй для переключения
  document.querySelectorAll('[data-ru]').forEach(el => {
    if (lang === 'ru') el.textContent = el.dataset.ru;
    if (lang === 'en') el.textContent = el.dataset.en;
    if (lang === 'de') el.textContent = el.dataset.de;
  });

  // Переключение текста в модалках
  const modals = ['privacy', 'terms', 'impressum'];
  modals.forEach(id => {
    document.getElementById(`${id}-ru`).style.display = lang === 'ru' ? 'block' : 'none';
    document.getElementById(`${id}-en`).style.display = lang === 'en' ? 'block' : 'none';
    document.getElementById(`${id}-de`).style.display = lang === 'de' ? 'block' : 'none';
  });
});


  </script>
