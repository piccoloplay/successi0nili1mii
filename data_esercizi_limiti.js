// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'esercizi_limiti.html',
    num:   'ESERCIZI',
    title: 'Limiti di successioni<br>numeriche e di funzioni',
    sub:   'Esercizi svolti · difficoltà crescente'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Limiti di successioni',
      heading:  'Limiti di successioni numeriche',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 1 — Raccoglimento semplice</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{n+3}{n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Raccogli n al numeratore</div>
      $$\\frac{n+3}{n} = 1 + \\frac{3}{n} \\xrightarrow{n\\to\\infty} 1 + 0 = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 2 — Polinomi stesso grado</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n^2 + 5n - 1}{2n^2 - 7}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi numeratore e denominatore per n²</div>
      $$\\frac{3n^2+5n-1}{2n^2-7} = \\frac{3 + 5/n - 1/n^2}{2 - 7/n^2} \\to \\frac{3}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 3 — Numeratore domina</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{n^3 - 2n}{4n^2 + 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per n² (grado del denominatore)</div>
      $$\\frac{n^3-2n}{4n^2+1} = \\frac{n - 2/n}{4 + 1/n^2} \\to \\frac{+\\infty}{4} = +\\infty$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 4 — Denominatore domina</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{5n^2 - 3}{n^4 + 2n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per n⁴</div>
      $$\\frac{5n^2-3}{n^4+2n} = \\frac{5/n^2 - 3/n^4}{1 + 2/n^3} \\to \\frac{0}{1} = 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 5 — Successioni geometriche in competizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{3^n + 2^n}{3^n - 1}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per 3^n (termine dominante)</div>
      $$\\frac{3^n+2^n}{3^n-1} = \\frac{1 + (2/3)^n}{1 - (1/3)^n} \\to \\frac{1+0}{1-0} = 1$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 6 — Teorema dei carabinieri</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{\\cos(n^2)}{n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// |cos(n²)| ≤ 1 per ogni n</div>
      $$-\\frac{1}{n} \\leq \\frac{\\cos(n^2)}{n} \\leq \\frac{1}{n} \\xrightarrow{n\\to\\infty} 0$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 7 — Forma $\\infty - \\infty$: coniugato</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\left(\\sqrt{n^2+n} - n\\right)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Moltiplica per il coniugato (√(n²+n) + n) / (√(n²+n) + n)</div>
      $$\\sqrt{n^2+n}-n = \\frac{n^2+n-n^2}{\\sqrt{n^2+n}+n} = \\frac{n}{\\sqrt{n^2+n}+n}$$
      <div class="sl">// Dividi numeratore e denominatore per n</div>
      $$= \\frac{1}{\\sqrt{1+1/n}+1} \\to \\frac{1}{1+1} = \\frac{1}{2}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 8 — Limite notevole $(1+1/n)^n$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\left(1 + \\frac{2}{n}\\right)^n$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riscrivi esponendo il limite notevole</div>
      $$\\left(1+\\frac{2}{n}\\right)^n = \\left[\\left(1+\\frac{1}{n/2}\\right)^{n/2}\\right]^2 \\to e^2$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Limiti di succ. di funzioni',
      heading:  'Limiti di successioni di funzioni',
      html: `
<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 9 — Limite puntuale base</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} f_n(x)$ dove $f_n(x) = \\dfrac{x^2}{n}$, per ogni $x \\in \\mathbb{R}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Per ogni x fissato, x² è una costante rispetto a n</div>
      $$\\lim_{n\\to\\infty} \\frac{x^2}{n} = x^2 \\cdot \\lim_{n\\to\\infty} \\frac{1}{n} = x^2 \\cdot 0 = 0$$
      $$f(x) = 0 \\quad \\forall\\, x \\in \\mathbb{R}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 10 — Limite puntuale con parametro</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} f_n(x)$ dove $f_n(x) = \\dfrac{nx}{n+1}$, per ogni $x \\in \\mathbb{R}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Raccogli n al denominatore, x è una costante rispetto a n</div>
      $$\\frac{nx}{n+1} = x \\cdot \\frac{n}{n+1} = x \\cdot \\frac{1}{1+1/n} \\to x \\cdot 1 = x$$
      $$f(x) = x \\quad \\forall\\, x \\in \\mathbb{R}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 11 — Limite con esponenziale</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} f_n(x)$ dove $f_n(x) = x^n$ su $[0,1]$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Tratta x come la ragione di una successione geometrica r^n con r = x</div>
      <div class="sl">// Se x ∈ [0,1): x < 1, quindi x^n → 0 (come r^n con |r| < 1)</div>
      <div class="sl">// Se x = 1: 1^n = 1 per ogni n, quindi il limite è 1</div>
      $$f(x) = \\lim_{n\\to\\infty} x^n = \\begin{cases} 0 & x \\in [0,1) \\\\ 1 & x = 1 \\end{cases}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 12 — Limite con sin e carabinieri</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} f_n(x)$ dove $f_n(x) = \\dfrac{\\sin(nx)}{n}$, per ogni $x \\in \\mathbb{R}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Per ogni x fissato: |sin(nx)| ≤ 1, quindi usa i carabinieri</div>
      $$-\\frac{1}{n} \\leq \\frac{\\sin(nx)}{n} \\leq \\frac{1}{n} \\xrightarrow{n\\to\\infty} 0$$
      $$f(x) = 0 \\quad \\forall\\, x \\in \\mathbb{R}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 13 — Limite con $e^{-nx}$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} f_n(x)$ dove $f_n(x) = e^{-nx}$, per ogni $x \\in [0, +\\infty)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Per x = 0: e^{-n·0} = e^0 = 1 per ogni n → limite = 1</div>
      <div class="sl">// Per x > 0: l'esponente -nx → -∞, quindi e^{-nx} → 0</div>
      $$f(x) = \\lim_{n\\to\\infty} e^{-nx} = \\begin{cases} 1 & x = 0 \\\\ 0 & x > 0 \\end{cases}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 14 — Limite con frazione in $x$ e $n$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} f_n(x)$ dove $f_n(x) = \\dfrac{nx}{1+nx}$, per ogni $x \\in [0, +\\infty)$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Per x = 0: 0/(1+0) = 0 per ogni n → limite = 0</div>
      <div class="sl">// Per x > 0: raccogli nx al denominatore</div>
      $$\\frac{nx}{1+nx} = \\frac{1}{\\dfrac{1}{nx}+1} \\xrightarrow{n\\to\\infty} \\frac{1}{0+1} = 1$$
      $$f(x) = \\begin{cases} 0 & x = 0 \\\\ 1 & x > 0 \\end{cases}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES 15 — Limite con due variabili in competizione</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} f_n(x)$ dove $f_n(x) = \\dfrac{x^2 + nx}{n + 1}$, per ogni $x \\in \\mathbb{R}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi numeratore e denominatore per n</div>
      $$\\frac{x^2+nx}{n+1} = \\frac{x^2/n + x}{1 + 1/n} \\to \\frac{0 + x}{1 + 0} = x$$
      $$f(x) = x \\quad \\forall\\, x \\in \\mathbb{R}$$
      <div class="sl">// Il termine x²/n → 0 perché x² è costante rispetto a n</div>
    </div>
  </div>
</div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
