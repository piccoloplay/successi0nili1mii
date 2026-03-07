// ── SOLUZIONI ────────────────────────────────────────────────────────
function sol(btn) {
  var s = btn.closest('.ex').querySelector('.ex-sol');
  var open = s.classList.toggle('open');
  btn.textContent = open ? 'Nascondi' : 'Mostra soluzione';
  if (open && window.MathJax) MathJax.typesetPromise([s]);
}

// ── QUIZ: risposta immediata al click ────────────────────────────────
document.addEventListener('change', function(e) {
  var inp = e.target;
  if (!inp || inp.type !== 'radio') return;
  var qq = inp.closest('.qq');
  if (!qq) return;

  var letters = ['a','b','c','d'];
  var opts = qq.querySelectorAll('.opt');
  var correct = qq.dataset.ok;

  var selected = -1;
  opts.forEach(function(o,i){ if(o.querySelector('input') === inp) selected = i; });
  var selectedLetter = letters[selected];

  opts.forEach(function(o){ o.classList.remove('correct','wrong','show-ok'); });

  var fb = qq.querySelector('.qfb');
  if (selectedLetter === correct) {
    opts[selected].classList.add('correct');
    fb.textContent = '// corretto';
    fb.className = 'qfb ok';
  } else {
    opts[selected].classList.add('wrong');
    var why = qq.dataset.why || '';
    fb.innerHTML = '// sbagliato' + (why ? ' &nbsp;—&nbsp; ' + why : '');
    fb.className = 'qfb err';
    var okIdx = letters.indexOf(correct);
    if (okIdx >= 0) opts[okIdx].classList.add('show-ok');
  }

  var quiz = qq.closest('.quiz');
  var allQQ = quiz.querySelectorAll('.qq');
  var score = 0;
  allQQ.forEach(function(q){
    var inps = q.querySelectorAll('input[type=radio]');
    var ok = q.dataset.ok;
    inps.forEach(function(r,i){ if(r.checked && letters[i]===ok) score++; });
  });
  var scId = quiz.querySelector('.qscore').id;
  document.getElementById(scId).textContent = score + '/5';

  var infoId = scId.replace('sc','info');
  var infoEl = document.getElementById(infoId);
  var answered = 0;
  allQQ.forEach(function(q){ if(q.querySelector('input:checked')) answered++; });
  if (answered === 5) {
    if (score===5) infoEl.textContent = '// perfetto!';
    else if (score>=3) infoEl.textContent = '// ' + score + '/5 — ripassare qualcosa';
    else infoEl.textContent = '// ' + score + '/5 — ripassare la sezione';
  }
});

// ── RESET QUIZ ───────────────────────────────────────────────────────
function resetQ(btn) {
  var quiz = btn.closest('.quiz');
  quiz.querySelectorAll('input[type=radio]').forEach(function(r){ r.checked=false; });
  quiz.querySelectorAll('.opt').forEach(function(o){ o.classList.remove('correct','wrong','show-ok'); });
  quiz.querySelectorAll('.qfb').forEach(function(f){ f.textContent=''; f.className='qfb'; });
  var scEl = quiz.querySelector('.qscore');
  scEl.textContent = '0/5';
  var infoId = scEl.id.replace('sc','info');
  document.getElementById(infoId).textContent = '';
}

// ── VERO O FALSO ─────────────────────────────────────────────────────
function vfAns(btn, chosen) {
  var vq = btn.closest('.vq');
  if (vq.dataset.answered) return;
  vq.dataset.answered = '1';
  var correct = vq.dataset.ok;
  var btns = vq.querySelectorAll('.vf-btn');
  var fb = vq.querySelector('.vq-fb');
  var why = vq.dataset.why || '';
  btns.forEach(function(b) { b.disabled = true; });
  if (chosen === correct) {
    btn.classList.add(chosen === 'V' ? 'vf-vero' : 'vf-falso');
    fb.textContent = '// corretto' + (why ? ' — ' + why : '');
    fb.className = 'vq-fb ok';
  } else {
    btn.classList.add('vf-wrong');
    btns.forEach(function(b) {
      if ((b.textContent.trim() === 'Vero' && correct === 'V') ||
          (b.textContent.trim() === 'Falso' && correct === 'F')) {
        b.classList.add(correct === 'V' ? 'vf-vero' : 'vf-falso');
      }
    });
    fb.textContent = '// sbagliato' + (why ? ' — ' + why : '');
    fb.className = 'vq-fb err';
  }
  var vf = vq.closest('.vf');
  var allVq = vf.querySelectorAll('.vq');
  var score = 0;
  allVq.forEach(function(q) {
    if (q.dataset.answered) {
      var ans = q.querySelector('.vf-btn.vf-vero, .vf-btn.vf-falso');
      if (ans && ((ans.textContent.trim()==='Vero' && q.dataset.ok==='V') ||
                  (ans.textContent.trim()==='Falso' && q.dataset.ok==='F'))) score++;
    }
  });
  var scEl = vf.querySelector('.vfscore');
  scEl.textContent = score + '/' + allVq.length;
  var answered = vf.querySelectorAll('.vq[data-answered]').length;
  if (answered === allVq.length) {
    var infoId = scEl.id.replace('vfs', 'vfi');
    var infoEl = document.getElementById(infoId);
    if (score === allVq.length) infoEl.textContent = '// perfetto!';
    else if (score >= allVq.length * 0.6) infoEl.textContent = '// ' + score + '/' + allVq.length + ' — quasi!';
    else infoEl.textContent = '// ' + score + '/' + allVq.length + ' — ripassare';
  }
}

function resetVF(btn) {
  var vf = btn.closest('.vf');
  vf.querySelectorAll('.vq').forEach(function(q) {
    delete q.dataset.answered;
    q.querySelectorAll('.vf-btn').forEach(function(b) {
      b.disabled = false;
      b.classList.remove('vf-vero','vf-falso','vf-wrong');
    });
    var fb = q.querySelector('.vq-fb');
    fb.textContent = ''; fb.className = 'vq-fb';
  });
  vf.querySelector('.vfscore').textContent = '0/' + vf.querySelectorAll('.vq').length;
  var scId = vf.querySelector('.vfscore').id;
  var infoId = scId.replace('vfs','vfi');
  document.getElementById(infoId).textContent = '';
}

// ── FADE-IN ──────────────────────────────────────────────────────────
function initFade() {
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('vis'); obs.unobserve(e.target); }});
  }, {threshold:0.07});
  document.querySelectorAll('.fade').forEach(function(el){ obs.observe(el); });
}

// ── RENDER SEZIONI DA DATA ────────────────────────────────────────────
function renderApp() {
  // Nav links
  var navList = document.getElementById('nav-links');
  LESSON_DATA.sections.forEach(function(sec) {
    var li = document.createElement('li');
    li.innerHTML = '<a href="#' + sec.id + '">' + sec.navLabel + '</a>';
    navList.appendChild(li);
  });

  // Hero
  document.getElementById('lesson-num').textContent   = LESSON_DATA.meta.num;
  document.getElementById('lesson-title').innerHTML   = LESSON_DATA.meta.title;
  document.getElementById('lesson-sub').textContent   = LESSON_DATA.meta.sub;
  document.getElementById('nav-logo').textContent     = LESSON_DATA.meta.file;

  // Content sections
  var content = document.getElementById('content');
  LESSON_DATA.sections.forEach(function(sec) {
    var wrap = document.createElement('div');
    wrap.innerHTML =
      '<div id="' + sec.id + '" class="sec-wrap fade">' +
        '<span class="sec-num">' + sec.secNum + '</span>' +
        '<h2>' + sec.heading + '</h2>' +
      '</div>' +
      sec.html;
    content.appendChild(wrap);
  });

  // Disclaimer
  var disc = document.createElement('div');
  disc.innerHTML = LESSON_DATA.disclaimer;
  content.appendChild(disc);

  // Trigger MathJax DOPO che il DOM è popolato, poi initFade
  function runMathJax() {
    if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
      MathJax.typesetPromise([content]).then(initFade).catch(function(e){ initFade(); });
    } else {
      initFade();
    }
  }

  // MathJax potrebbe essere già pronto o ancora in caricamento (async)
  if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
    runMathJax();
  } else if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
    MathJax.startup.promise.then(runMathJax);
  } else {
    // Fallback: poll ogni 100ms finché MathJax non è pronto (max 5s)
    var attempts = 0;
    var poll = setInterval(function() {
      attempts++;
      if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
        clearInterval(poll);
        runMathJax();
      } else if (attempts > 50) {
        clearInterval(poll);
        initFade();
      }
    }, 100);
  }
}

// Aspetta che LESSON_DATA sia definito (il data file potrebbe caricare dopo app.js)
function waitForData() {
  if (typeof LESSON_DATA !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", renderApp);
    } else {
      renderApp();
    }
  } else {
    setTimeout(waitForData, 50);
  }
}
waitForData();
