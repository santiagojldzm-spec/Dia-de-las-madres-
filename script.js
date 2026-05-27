/* =====================================================
   FELIZ DÍA DE LAS MADRES — script.js
   ===================================================== */

'use strict';

/* ── ESTADO GLOBAL ─────────────────────────────────── */
let currentSection = null;

/* ── MENSAJES ──────────────────────────────────────── */
const letterMessage = `Hay palabras que nacen del alma y que ningún regalo puede reemplazar. Esta es una de ellas.\n\nDesde el primer momento en que me tomaste en brazos, supiste exactamente cómo hacerme sentir en casa en este mundo. Con cada sacrificio silencioso, con cada madrugada que nadie vio, con cada abrazo que llegó justo cuando más lo necesitaba, construiste la persona que soy hoy.\n\nNo hay forma de medir todo lo que has dado. Tu amor no tiene condiciones, tu paciencia no tiene límites y tu fortaleza no tiene igual. Eres el corazón que late detrás de todo lo que hacemos.\n\nHoy, en tu día, quiero que sepas que te veo, que te admiro y que te agradezco. No sólo por lo que haces, sino por todo lo que eres.\n\nGracias por enseñarme a levantarme, a soñar, a perdonar y a amar sin medida. Eres, sin duda, el mejor regalo que la vida nos ha dado.`;

const flowerMessages = [
  { emoji: '🌸', msg: 'Tu ternura es capaz de transformar cualquier día gris en uno lleno de luz y esperanza. Gracias por siempre encontrar el lado hermoso de las cosas.' },
  { emoji: '🌷', msg: 'Como el tulipán que florece cada primavera, tú renaces con nosotros en cada etapa de la vida. Tu amor es constante, fiel y siempre a tiempo.' },
  { emoji: '🌼', msg: 'Tienes el don de hacer que los momentos pequeños se sientan extraordinarios. Una cena en casa contigo vale más que cualquier festín.' },
  { emoji: '🌺', msg: 'Tu valentía nos enseñó que los obstáculos no son muros, sino peldaños. Gracias por mostrarnos el camino con tu ejemplo.' },
  { emoji: '💐', msg: 'Eres el origen de nuestra fuerza. Cuando el mundo se siente pesado, recordar tu voz nos devuelve el equilibrio.' },
  { emoji: '🌸', msg: 'No existe perfume en el mundo que supere el aroma de tu cocina ni música más bella que tu risa llenando la casa.' },
  { emoji: '🌻', msg: 'Como el girasol que siempre busca el sol, tú siempre encontraste la manera de darnos lo mejor, incluso cuando era difícil.' },
  { emoji: '🌷', msg: 'Tu abrazo es el lugar más seguro del universo. No importa cuántos años pasen, siempre querremos volver a él.' },
];
const leafMessages = [
  'Fuiste mi primer hogar antes de conocer el mundo.',
  'Tu nombre es sinónimo de amor incondicional.',
  'Cada sacrificio tuyo construyó mis alas.',
  'Soy quien soy gracias a tu guía y paciencia.',
  'Tu risa es la melodía más hermosa de mi historia.',
  'Me enseñaste que el amor se muestra, no solo se dice.',
  'Eres la raíz que me sostiene y el cielo que me inspira.',
  'Gracias por creer en mí incluso cuando yo dudaba.',
  'Tu fortaleza silenciosa me mostró lo que es el coraje.',
  'En cada logro mío, hay una parte tuya.',
  'Eres irreemplazable, única, extraordinaria.',
  'El mundo es mejor porque tú estás en él.',
];

/* ── POSICIONES DE HOJAS EN EL ÁRBOL ──────────────── */
const leafPositions = [
  { top: '8%',  left: '38%' },  { top: '10%', left: '55%' },
  { top: '18%', left: '24%' },  { top: '20%', left: '65%' },
  { top: '26%', left: '42%' },  { top: '30%', left: '15%' },
  { top: '30%', left: '72%' },  { top: '36%', left: '30%' },
  { top: '38%', left: '58%' },  { top: '44%', left: '12%' },
  { top: '44%', left: '78%' },  { top: '50%', left: '40%' },
];

/* ── UTILIDADES ────────────────────────────────────── */
const $ = id => document.getElementById(id);
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

function showSection(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const section = $(id);
  section.style.display = 'flex';
  section.classList.add('active');
  currentSection = id;

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === id);
  });

  if (id === 'final') initFinal();
  if (id === 'letter') resetLetter();
}

/* ── PARTÍCULAS DE FONDO ───────────────────────────── */
function initParticles() {
  const container = $('particles-container');
  const colors = ['#f7c5d5', '#dfc8f0', '#c5dff5', '#f0d080', '#ffd6e7'];
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 4 + Math.random() * 10;
    const color = colors[Math.floor(Math.random() * colors.length)];
    Object.assign(p.style, {
      width: size + 'px',
      height: size + 'px',
      background: color,
      left: Math.random() * 100 + '%',
      animationDuration: 8 + Math.random() * 14 + 's',
      animationDelay: Math.random() * 10 + 's',
    });
    container.appendChild(p);
  }
}

/* ── CORAZONES ON CLICK ────────────────────────────── */
function spawnHeart(x, y) {
  const hearts = ['❤️','💕','💗','💖','💓','🌸','✨'];
  const container = $('hearts-container');
  for (let i = 0; i < 3; i++) {
    const h = document.createElement('span');
    h.className = 'floating-heart';
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    const offsetX = (Math.random() - 0.5) * 60;
    Object.assign(h.style, {
      left: (x + offsetX - 12) + 'px',
      top:  (y - 12) + 'px',
      fontSize: (1 + Math.random() * 0.8) + 'rem',
      animationDelay: i * 0.12 + 's',
    });
    container.appendChild(h);
    h.addEventListener('animationend', () => h.remove());
  }
}
document.addEventListener('click', e => {
  // No spawnear en botones/navegación
  if (e.target.closest('button') || e.target.closest('nav')) return;
  spawnHeart(e.clientX, e.clientY);
});

/* ── PORTADA ───────────────────────────────────────── */
function initCover() {
  $('btn-open').addEventListener('click', () => {
    const cover = $('cover');
    cover.style.transition = 'opacity 0.7s ease';
    cover.style.opacity = '0';
    setTimeout(() => {
      $('main-nav').classList.remove('hidden');
      showSection('letter');
    }, 700);
  });
}

/* ── CARTA ─────────────────────────────────────────── */
let typewriterTimer = null;

function resetLetter() {
  const envelope = $('envelope');
  envelope.classList.remove('open');
  $('letter-text').innerHTML = '';
}

function typeWriter(text, el, speed = 22) {
  if (typewriterTimer) clearInterval(typewriterTimer);
  el.innerHTML = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  let i = 0;
  typewriterTimer = setInterval(() => {
    if (i < text.length) {
      const char = text[i];
      if (char === '\n') {
        el.appendChild(document.createElement('br'));
      } else {
        el.insertBefore(document.createTextNode(char), cursor);
      }
      i++;
    } else {
      clearInterval(typewriterTimer);
      setTimeout(() => cursor.remove(), 2000);
    }
  }, speed);
  el.appendChild(cursor);
}

function initLetter() {
  const envelope = $('envelope');
  envelope.addEventListener('click', () => {
    if (envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    setTimeout(() => {
      typeWriter(letterMessage, $('letter-text'), 20);
    }, 900);
  });
}

/* ── JARDÍN ────────────────────────────────────────── */
function initGarden() {
  const container = $('garden-flowers');
  container.innerHTML = '';
  const shuffled = shuffle(flowerMessages);
  const count = Math.min(shuffled.length, 8);

  shuffled.slice(0, count).forEach((flower, i) => {
    const el = document.createElement('div');
    el.className = 'garden-flower';
    const stemH = 60 + Math.random() * 80;
    el.style.left = (5 + (i / (count - 1)) * 88) + '%';
    el.style.animationDelay = (Math.random() * 2) + 's';
    el.style.animationDuration = (2.5 + Math.random() * 2) + 's';
    el.innerHTML = `
      <div class="flower-head">${flower.emoji}</div>
      <div class="flower-stem" style="height:${stemH}px"></div>
    `;
    el.addEventListener('click', e => {
      e.stopPropagation();
      showFlowerMsg(flower.msg);
      el.querySelector('.flower-head').style.animation = 'none';
      setTimeout(() => el.querySelector('.flower-head').style.animation = '', 300);
    });
    container.appendChild(el);
  });

  $('close-flower-msg').addEventListener('click', () => {
    $('flower-msg-box').classList.add('hidden');
  });
}

function showFlowerMsg(msg) {
  const box = $('flower-msg-box');
  $('flower-msg-text').textContent = msg;
  box.classList.remove('hidden');
}
/* ── ÁRBOL ─────────────────────────────────────────── */
function initTree() {
  const container = $('tree-leaves');
  container.innerHTML = '';
  const flowerEmojis = ['🌸','🌷','🌼','🌺','💐','🍃','🌸','🌷','🌼','🌺','💐','🍃'];

  leafPositions.forEach((pos, i) => {
    const el = document.createElement('div');
    el.className = 'tree-leaf';
    el.textContent = flowerEmojis[i % flowerEmojis.length];
    el.style.top   = pos.top;
    el.style.left  = pos.left;
    el.style.animationDelay = (i * 0.28) + 's';
    el.style.animationDuration = (3 + Math.random() * 2) + 's';
    el.title = 'Toca para ver un mensaje ✨';
    el.addEventListener('click', e => {
      e.stopPropagation();
      showLeafMsg(leafMessages[i % leafMessages.length]);
    });
    container.appendChild(el);
  });

  document.addEventListener('click', e => {
    if (!e.target.classList.contains('tree-leaf')) {
      $('leaf-tooltip').classList.add('hidden');
    }
  });
}

function showLeafMsg(msg) {
  const tip = $('leaf-tooltip');
  $('leaf-msg').textContent = msg;
  tip.classList.remove('hidden');
  clearTimeout(tip._timer);
  tip._timer = setTimeout(() => tip.classList.add('hidden'), 4500);
}

/* ── PANTALLA FINAL ────────────────────────────────── */
function initFinal() {
  const container = $('falling-flowers');
  container.innerHTML = '';
  const flowerSet = ['🌸','🌷','🌼','🌺','💐','✨','💕','🌸','🌷'];

  for (let i = 0; i < 20; i++) {
    const f = document.createElement('span');
    f.className = 'falling-flower';
    f.textContent = flowerSet[Math.floor(Math.random() * flowerSet.length)];
    Object.assign(f.style, {
      left: Math.random() * 100 + '%',
      fontSize: (1.2 + Math.random() * 1.2) + 'rem',
      animationDuration: (5 + Math.random() * 8) + 's',
      animationDelay: (Math.random() * 6) + 's',
    });
    container.appendChild(f);
  }

  $('btn-restart').addEventListener('click', () => {
    container.innerHTML = '';
    const nav = $('main-nav');
    nav.classList.add('hidden');
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    const cover = $('cover');
    cover.style.opacity = '0';
    cover.style.display = 'flex';
    cover.classList.add('active');
    setTimeout(() => {
      cover.style.transition = 'opacity 0.7s ease';
      cover.style.opacity = '1';
    }, 50);
    resetLetter();
  });
}

/* ── NAVEGACIÓN ────────────────────────────────────── */
function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      showSection(section);
    });
  });
}

/* ── INICIALIZACIÓN ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initCover();
  initLetter();
  initGarden();
  initTree();
  initNav();

  // Pantalla inicial
  document.querySelectorAll('.screen').forEach(s => {
    s.style.display = 'none';
    s.classList.remove('active');
  });
  const cover = $('cover');
  cover.style.display = 'flex';
  cover.classList.add('active');
});
