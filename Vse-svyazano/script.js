
  <script>
      function openModal(id) {
        document.getElementById(id).style.display = 'block';
      }
      function closeModal(id) {
        document.getElementById(id).style.display = 'none';
      }
      function setLang(lang) {
        document.querySelectorAll('[data-lang]').forEach(el => {
          el.style.display = el.getAttribute('data-lang') === lang ? 'block' : 'none';
        });
      }
      window.onclick = function (event) {
        document.querySelectorAll('.modal').forEach(modal => {
          if (event.target == modal) modal.style.display = "none";
        });
      }
    </script>

    <div class="modal" id="measurementsModal">
      <div class="modal-content">
        <span class="close" onclick="closeModal('measurementsModal')">&times;</span>

        <div data-lang="ru">
          <h3>Как снять мерки без стресса</h3>
          <p>Не переживайте — всё просто!</p>
          <ul>
            <li>Можно измерить себя по любимой одежде (например, свитер или шапка).</li>
            <li>Или прислать фото и описание — я помогу.</li>
            <li>Если что — обсудим всё в чате, шаг за шагом.</li>
          </ul>
          <p>Я всегда на связи 💌</p>
        </div>

        <div data-lang="en" style="display:none;">
          <h3>How to take your measurements — stress-free</h3>
          <p>Don’t worry — it’s easy!</p>
          <ul>
            <li>You can use your favorite sweater or hat as a reference.</li>
            <li>Or send me a photo and a short description — I’ll help you.</li>
            <li>If needed, we’ll discuss it step by step via chat.</li>
          </ul>
          <p>I’m always here to help 💌</p>
        </div>

        <div data-lang="de" style="display:none;">
          <h3>Maße stressfrei nehmen – so geht's</h3>
          <p>Keine Sorge — es ist ganz einfach!</p>
          <ul>
            <li>Nutze dein Lieblingsstück (z. B. Pullover oder Mütze) als Vorlage.</li>
            <li>Oder schicke mir ein Foto und Beschreibung — ich helfe dir.</li>
            <li>Bei Bedarf besprechen wir alles Schritt für Schritt im Chat.</li>
          </ul>
          <p>Ich bin immer für dich da 💌</p>
        </div>
      </div>
    </div>
    <script>
      function openModal(id) {
        document.getElementById(id).style.display = "block";
      }
      function closeModal(id) {
        document.getElementById(id).style.display = "none";
      }
    </script>

    <script>
      function toggleMenu() {
        const nav = document.getElementById('navMenu');
        nav.classList.toggle('open');
      }

      document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
          const nav = document.getElementById('navMenu');
          nav.classList.remove('open');
        });
      });



    </script>


    <script>
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
      let currentIndex = 0;
      const slideInterval = 3000; // 3 секунды

      function showSlide(index) {
        // Скрыть все слайды
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Показать выбранный
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
      }

      function nextSlide() {
        let nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }

      // Автоматическая смена слайда каждые 3 секунды
      let timer = setInterval(nextSlide, slideInterval);

      // Если нажать на точку — переключить слайд и сбросить таймер
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          clearInterval(timer);
          showSlide(parseInt(dot.dataset.index));
          timer = setInterval(nextSlide, slideInterval);
        });
      });
    </script>

    <script>
      function setLanguage(lang) {
        // Скрыть все языки
        document.querySelectorAll('[data-lang]').forEach(el => {
          el.style.display = 'none';
        });

        // Показать только выбранный
        document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
          el.style.display = 'inline';
        });

        // Сохранить язык
        localStorage.setItem('selectedLang', lang);
      }

      // При загрузке — применить язык из памяти или установить русский
      document.addEventListener('DOMContentLoaded', () => {
        const lang = localStorage.getItem('selectedLang') || 'ru';
        setLanguage(lang);
      });
    </script>


    <script>
      // Прыжок при клике на "О себе"
      document.querySelectorAll('.nav-item[href="#cards"]').forEach(item => {
        item.addEventListener('click', function () {
          item.classList.add('jump-on-click');
          setTimeout(() => {
            item.classList.remove('jump-on-click');
          }, 500);
        });
      });

      // Прыжок при клике на пункт "Работы"
      const workButton = document.querySelector('.dropbtn');
      if (workButton) {
        workButton.addEventListener('click', function () {
          workButton.classList.add('jump-on-click');
          setTimeout(() => {
            workButton.classList.remove('jump-on-click');
          }, 500);
        });
      }
    </script>

    <!--Закрыть мобильное меню при клике на пункт-->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('.nav');
        const hamburger = document.querySelector('.hamburger');
        const navItems = document.querySelectorAll('.nav-item');
        const submenus = document.querySelectorAll('.has-submenu');

        // Показать/скрыть мобильное меню
        hamburger.addEventListener('click', () => {
          nav.classList.toggle('show');
        });

        // Закрыть меню при клике на пункт (кроме .has-submenu)
        navItems.forEach(item => {
          item.addEventListener('click', (e) => {
            if (item.classList.contains('has-submenu')) {
              // ничего не делать — submenu откроется отдельно
              return;
            }
            if (window.innerWidth <= 768) {
              nav.classList.remove('show');
              submenus.forEach(s => s.classList.remove('open'));
            }
          });
        });


        // Открыть/закрыть подменю по клику
        submenus.forEach(item => {
          item.addEventListener('click', e => {
            e.stopPropagation();
            item.classList.toggle('open');
          });
        });

        // Клик вне — закрыть подменю
        document.addEventListener('click', () => {
          submenus.forEach(item => item.classList.remove('open'));
        });
      });
    </script>
