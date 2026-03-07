// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'succ_funzioni.html',
    num:   'LEZIONE 04',
    title: 'Successioni numeriche<br>e successioni di funzioni',
    sub:   'Successioni numeriche · Limiti di successioni · Successioni di funzioni · Limiti di successioni di funzioni'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Successioni numeriche',
      heading:  'Successioni numeriche',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Successione numerica</div>
  <p>Una <strong>successione numerica</strong> è una funzione che associa ad ogni numero naturale $n$ un numero reale $a_n$:</p>
  $$a : \\mathbb{N} \\to \\mathbb{R}, \\quad n \\mapsto a_n$$
  <p>Si scrive $(a_n)_{n \\in \\mathbb{N}}$ oppure $a_1, a_2, a_3, \\ldots$ Il numero $a_n$ si chiama <strong>termine di indice $n$</strong>.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Successioni tipiche</div>
  <p><strong>Aritmetica:</strong> $a_n = 2n + 1$ &nbsp;→&nbsp; $3, 5, 7, 9, \\ldots$ (cresce senza limite)</p>
  <p><strong>Geometrica:</strong> $a_n = \\left(\\dfrac{1}{2}\\right)^n$ &nbsp;→&nbsp; $\\dfrac{1}{2}, \\dfrac{1}{4}, \\dfrac{1}{8}, \\ldots$ (si avvicina a 0)</p>
  <p><strong>Oscillante:</strong> $a_n = (-1)^n$ &nbsp;→&nbsp; $-1, 1, -1, 1, \\ldots$ (non si stabilizza)</p>
  <p><strong>Razionale:</strong> $a_n = \\dfrac{n}{n+1}$ &nbsp;→&nbsp; $\\dfrac{1}{2}, \\dfrac{2}{3}, \\dfrac{3}{4}, \\ldots$ (si avvicina a 1)</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Successione monotona</div>
  <p>Una successione è <strong>monotona crescente</strong> se $a_n \\leq a_{n+1}$ per ogni $n$, e <strong>monotona decrescente</strong> se $a_n \\geq a_{n+1}$ per ogni $n$.</p>
  <p>È <strong>limitata</strong> se esiste $M > 0$ tale che $|a_n| \\leq M$ per ogni $n$.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Successioni numeriche</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Ogni successione associa esattamente un numero reale a ogni indice naturale: è per definizione una funzione da N a R.">
      <div class="vq-text">1. Una successione numerica è una funzione da $\\mathbb{N}$ a $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: a_n = (-1)^n è limitata (|a_n| = 1 per ogni n) ma oscilla tra +1 e -1 senza convergere.">
      <div class="vq-text">2. Una successione limitata converge sempre.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Teorema fondamentale: una successione monotona crescente e limitata superiormente converge al proprio estremo superiore.">
      <div class="vq-text">3. Una successione monotona e limitata converge sempre.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="a_n = (1/2)^n è decrescente (ogni termine è la metà del precedente) e limitata inferiormente da 0.">
      <div class="vq-text">4. La successione $a_n = (1/2)^n$ è monotona decrescente e limitata.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi01"></span></div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 01.1 — Monotonia di $a_n = n/(n+1)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Mostra che $a_n = \\dfrac{n}{n+1}$ è monotona crescente e limitata superiormente da 1.</p></div>
    <div class="ex-sol">
      <div class="sl">// Monotonia: calcola a_{n+1} - a_n</div>
      $$a_{n+1} - a_n = \\frac{n+1}{n+2} - \\frac{n}{n+1} = \\frac{(n+1)^2 - n(n+2)}{(n+2)(n+1)} = \\frac{1}{(n+2)(n+1)} > 0$$
      <div class="sl">// Quindi è crescente. Limite superiore: n/(n+1) = 1 - 1/(n+1) < 1 per ogni n</div>
      $$\\frac{n}{n+1} < 1 \\quad \\forall\\, n \\implies \\text{limitata superiormente da 1.}$$
    </div>
  </div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Limiti di successioni',
      heading:  'Limiti di successioni numeriche',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Limite di una successione</div>
  <p>Si dice che $(a_n)$ <strong>converge</strong> al limite $L \\in \\mathbb{R}$ se, fissato qualsiasi margine di errore $\\varepsilon > 0$, da un certo indice $N$ in poi tutti i termini distano da $L$ meno di $\\varepsilon$:</p>
  $$\\lim_{n \\to \\infty} a_n = L \\quad \\iff \\quad \\forall\\, \\varepsilon > 0,\\; \\exists\\, N \\in \\mathbb{N} : n \\geq N \\implies |a_n - L| < \\varepsilon$$
  <p>Il numero $N$ dipende solo da $\\varepsilon$: una volta scelto il margine, esiste un indice di partenza che funziona per tutti i termini successivi.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">LIMITI FONDAMENTALI</div>
  <div class="box-title">Da ricordare</div>
  <p>$\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n} = 0$ &nbsp;·&nbsp;
     $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n^k} = 0$ per ogni $k > 0$ &nbsp;·&nbsp;
     $\\displaystyle\\lim_{n\\to\\infty} r^n = 0$ se $|r| < 1$</p>
  <p>$\\displaystyle\\lim_{n\\to\\infty} \\sqrt[n]{n} = 1$ &nbsp;·&nbsp;
     $\\displaystyle\\lim_{n\\to\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMI</div>
  <div class="box-title">Strumenti per calcolare i limiti</div>
  <p><strong>Algebra dei limiti:</strong> se $a_n \\to L$ e $b_n \\to M$, allora $a_n + b_n \\to L + M$, $a_n b_n \\to LM$, e $a_n/b_n \\to L/M$ se $M \\neq 0$.</p>
  <p><strong>Teorema dei carabinieri:</strong> se $b_n \\leq a_n \\leq c_n$ per ogni $n$ e $b_n, c_n \\to L$, allora $a_n \\to L$.</p>
  <p><strong>Monotona limitata:</strong> ogni successione monotona e limitata converge.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Successione divergente</div>
  <p>$(a_n)$ <strong>diverge a $+\\infty$</strong> se per ogni $M > 0$ esiste $N$ tale che $n \\geq N \\implies a_n > M$. Analogamente per $-\\infty$.</p>
  <p>Una successione che non converge e non diverge si dice <strong>indeterminata</strong> (es. $(-1)^n$).</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Limiti di successioni</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="r^n → 0 per ogni r con |r| < 1: conseguenza diretta della definizione con stima geometrica |r^n - 0| = |r|^n → 0.">
      <div class="vq-text">1. Se $|r| < 1$ allora $r^n \\to 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: (-1)^n non converge (oscilla) e non diverge a ±∞: è indeterminata.">
      <div class="vq-text">2. Ogni successione o converge o diverge a $\\pm\\infty$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Il criterio di Cauchy è equivalente alla convergenza: i termini si avvicinano tra loro ↔ converge a qualche limite.">
      <div class="vq-text">3. Una successione converge se e solo se i suoi termini diventano arbitrariamente vicini tra loro.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="n/(n+1) = 1 - 1/(n+1) → 1 - 0 = 1.">
      <div class="vq-text">4. $\\displaystyle\\lim_{n\\to\\infty} \\frac{n}{n+1} = 1$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi02"></span></div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 02.1 — Limite di $a_n = (3n^2+1)/(n^2-2)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n^2+1}{n^2-2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi numeratore e denominatore per n² (termine dominante)</div>
      $$\\frac{3n^2+1}{n^2-2} = \\frac{3 + 1/n^2}{1 - 2/n^2} \\xrightarrow{n\\to\\infty} \\frac{3+0}{1-0} = 3$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 02.2 — Carabinieri: $a_n = \\sin(n)/n$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Mostra che $a_n = \\sin(n)/n \\to 0$.</p></div>
    <div class="ex-sol">
      <div class="sl">// |sin(n)| ≤ 1 per ogni n, quindi:</div>
      $$-\\frac{1}{n} \\leq \\frac{\\sin(n)}{n} \\leq \\frac{1}{n}$$
      <div class="sl">// Entrambi i lati → 0 → per i carabinieri: sin(n)/n → 0 ✓</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 02.3 — Forma indeterminata $\\infty/\\infty$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty} \\frac{2n^3 - n}{5n^3 + 4n^2}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Dividi per n³ (grado massimo)</div>
      $$\\frac{2n^3-n}{5n^3+4n^2} = \\frac{2 - 1/n^2}{5 + 4/n} \\to \\frac{2}{5}$$
    </div>
  </div>
</div>`
    },

    // ── §03 (NUOVA) ──────────────────────────────────────────────────
    {
      id:       's_not',
      secNum:   '§03',
      navLabel: '§03 Limiti notevoli',
      heading:  'Limiti notevoli di successioni',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">COSA SONO</div>
  <div class="box-title">Limiti notevoli</div>
  <p>I <strong>limiti notevoli</strong> sono risultati che si incontrano così spesso da valere la pena di memorizzare. Permettono di calcolare limiti di forme apparentemente indeterminate senza ogni volta ricominciare da zero.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 1</div>
  <div class="box-title">Infinitesimi: $1/n$, $1/n^k$, $r^n$</div>
  $$\\lim_{n\\to\\infty} \\frac{1}{n} = 0 \\qquad \\lim_{n\\to\\infty} \\frac{1}{n^k} = 0 \\text{ per ogni } k > 0$$
  $$\\lim_{n\\to\\infty} r^n = 0 \\quad \\text{se } |r| < 1$$
  <p>La successione $r^n$ con $|r| &lt; 1$ è la più usata: ogni numero con valore assoluto minore di 1, elevato a potenza crescente, tende a 0. Esempio: $(0.9)^n \\to 0$, $(-0.5)^n \\to 0$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 2</div>
  <div class="box-title">Il numero $e$</div>
  $$\\lim_{n\\to\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e \\approx 2.718\\ldots$$
  $$\\lim_{n\\to\\infty} \\left(1 + \\frac{k}{n}\\right)^n = e^k \\quad \\text{per ogni } k \\in \\mathbb{R}$$
  <p>Generalizzazione: se $\\alpha_n \\to 0$ e $n\\,\\alpha_n \\to k$, allora $(1+\\alpha_n)^n \\to e^k$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 3</div>
  <div class="box-title">Radici e logaritmi</div>
  $$\\lim_{n\\to\\infty} \\sqrt[n]{n} = 1 \\qquad \\lim_{n\\to\\infty} \\sqrt[n]{c} = 1 \\text{ per ogni } c > 0$$
  $$\\lim_{n\\to\\infty} \\frac{\\ln n}{n} = 0 \\qquad \\lim_{n\\to\\infty} \\frac{n^k}{a^n} = 0 \\text{ per ogni } k > 0,\\, a > 1$$
  <p>L'ultimo dice che le successioni esponenziali $a^n$ crescono più in fretta di qualsiasi potenza $n^k$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">GRUPPO 4</div>
  <div class="box-title">Confronto tra infiniti</div>
  <p>Per $a > 1$ e $k > 0$, in ordine di crescita:</p>
  $$\\ln n \\ll n^k \\ll a^n \\ll n! \\ll n^n$$
  <p>Il simbolo $\\ll$ significa "cresce molto più lentamente di". Quindi ad esempio $n^{100} / 2^n \\to 0$ e $2^n / n! \\to 0$.</p>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES — Uso diretto di $(1+k/n)^n$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty}\\left(1-\\frac{3}{n}\\right)^n$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Riconosci la forma (1 + k/n)^n con k = -3</div>
      $$\\left(1-\\frac{3}{n}\\right)^n = \\left(1+\\frac{-3}{n}\\right)^n \\to e^{-3}$$
    </div>
  </div>
</div>
</div>

<div class="fade">
<div class="ex">
  <div class="ex-hdr"><span>ES — Confronto esponenziale e potenza</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Calcola $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^5}{2^n}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// n^k / a^n → 0 per ogni k > 0 e a > 1: l'esponenziale domina sempre</div>
      $$\\lim_{n\\to\\infty}\\frac{n^5}{2^n} = 0$$
    </div>
  </div>
</div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§04',
      navLabel: '§04 Successioni di funzioni',
      heading:  'Successioni di funzioni',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Successione di funzioni</div>
  <p>Una <strong>successione di funzioni</strong> è una famiglia $\\{f_n\\}_{n \\in \\mathbb{N}}$ in cui ogni termine $f_n$ è una funzione $f_n : E \\subseteq \\mathbb{R} \\to \\mathbb{R}$.</p>
  <p>La differenza fondamentale con le successioni numeriche: il termine $f_n$ non è un numero, ma un'intera funzione. Fissato un punto $x \\in E$, la mappa $n \\mapsto f_n(x)$ è una ordinaria successione numerica.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPIO FONDAMENTALE</div>
  <div class="box-title">$f_n(x) = x^n$ su $[0,1]$</div>
  <p>Per ogni $x \\in [0,1]$ fissato, $f_n(x) = x^n$ è una successione numerica:</p>
  <p>— Se $x = 0{,}7$: la successione $0{,}7^n$ si avvicina a $0$ (come $r^n$ con $r < 1$).</p>
  <p>— Se $x = 0{,}99$: la successione $0{,}99^n$ si avvicina a $0$, ma molto lentamente.</p>
  <p>— Se $x = 1$: la successione $1^n = 1$ è costante, quindi vale $1$ per ogni $n$.</p>
  <p>La successione di funzioni «contiene» infinite successioni numeriche, una per ogni $x \\in [0,1]$.</p>
</div>
</div>

<div class="fade">
<div class="tbl">
<table>
  <thead><tr><th></th><th>Successione numerica $(a_n)$</th><th>Successione di funzioni $(f_n)$</th></tr></thead>
  <tbody>
    <tr><td><strong>Termine $n$-esimo</strong></td><td>Un numero $a_n \\in \\mathbb{R}$</td><td>Una funzione $f_n : E \\to \\mathbb{R}$</td></tr>
    <tr><td><strong>Limite</strong></td><td>Un numero $L \\in \\mathbb{R}$</td><td>Una funzione $f : E \\to \\mathbb{R}$</td></tr>
    <tr><td><strong>Quanti «oggetti» da seguire</strong></td><td>Uno solo</td><td>Uno per ogni $x \\in E$</td></tr>
    <tr><td><strong>Il limite può essere discontinuo?</strong></td><td>Non ha senso (è un numero)</td><td>Sì, se la convergenza è debole</td></tr>
  </tbody>
</table>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ALTRI ESEMPI</div>
  <div class="box-title">Successioni di funzioni tipiche</div>
  <p>$f_n(x) = \\dfrac{x}{n}$ &nbsp;→&nbsp; per ogni $x$ fissato, $x/n \\to 0$: il limite è $f \\equiv 0$.</p>
  <p>$f_n(x) = \\dfrac{nx}{1+nx}$ su $[0,+\\infty)$ &nbsp;→&nbsp; per $x=0$ vale $0$, per $x > 0$ vale $\\to 1$: il limite ha un salto.</p>
  <p>$f_n(x) = \\dfrac{\\sin(nx)}{n}$ &nbsp;→&nbsp; per ogni $x$, $|\\sin(nx)/n| \\leq 1/n \\to 0$: il limite è $f \\equiv 0$.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Successioni di funzioni</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Per ogni x fissato, n ↦ f_n(x) è una successione di numeri reali: si applicano tutti i teoremi sulle successioni numeriche.">
      <div class="vq-text">1. Per ogni $x$ fissato, $(f_n(x))$ è una ordinaria successione numerica.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: il limite di una successione di funzioni è una funzione, non un numero.">
      <div class="vq-text">2. Il limite di una successione di funzioni è sempre un numero reale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f_n(x) = x^n: per x in [0,1) si ha x^n → 0 come r^n con r = x < 1. Per x = 1 si ha 1^n = 1.">
      <div class="vq-text">3. Per $f_n(x) = x^n$, fissato $x = 0{,}8$, la successione $f_n(0{,}8) = 0{,}8^n$ converge a $0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: una successione di funzioni contiene infinite successioni numeriche (una per ogni x), non una sola.">
      <div class="vq-text">4. Una successione di funzioni è equivalente a una singola successione numerica.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi03"></span></div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§05',
      navLabel: '§05 Limiti di successioni di funzioni',
      heading:  'Limiti di successioni di funzioni',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Convergenza puntuale</div>
  <p>$(f_n)$ converge <strong>puntualmente</strong> a $f$ su $E$ se, per ogni singolo punto $x \\in E$, la successione numerica $f_n(x)$ converge a $f(x)$:</p>
  $$\\forall\\, x \\in E, \\quad \\lim_{n \\to \\infty} f_n(x) = f(x)$$
  <p>In termini epsilon-N: per ogni $x$ e ogni $\\varepsilon > 0$, esiste $N = N(\\varepsilon, x)$ tale che $n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon$. L'indice $N$ può dipendere sia da $\\varepsilon$ che da $x$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Convergenza uniforme</div>
  <p>$(f_n)$ converge <strong>uniformemente</strong> a $f$ su $E$ se esiste un unico $N$, valido per tutti i punti simultaneamente:</p>
  $$\\forall\\, \\varepsilon > 0,\\; \\exists\\, N = N(\\varepsilon) : n \\geq N \\implies |f_n(x) - f(x)| < \\varepsilon \\quad \\forall\\, x \\in E$$
  <p>$N$ dipende solo da $\\varepsilon$, non da $x$. È la stessa struttura della convergenza numerica, estesa a funzioni.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPIO</div>
  <div class="box-title">$f_n(x) = x^n$ su $[0,1]$: limite puntuale</div>
  <p>Per ogni $x \\in [0,1)$: $x^n \\to 0$ (come $r^n$ con $r = x < 1$). Per $x = 1$: $1^n = 1$ per ogni $n$, quindi $f_n(1) \\to 1$. Il limite puntuale è:</p>
  $$f(x) = \\begin{cases} 0 & x \\in [0,1) \\\\ 1 & x = 1 \\end{cases}$$
  <p>Ogni $f_n$ è continua su $[0,1]$, ma la funzione limite $f$ ha un salto in $x = 1$: è discontinua. La convergenza puntuale non ha preservato la continuità.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Criterio del sup</div>
  <p>$f_n \\to f$ uniformemente su $E$ se e solo se la distanza massima tra $f_n$ e $f$ tende a zero:</p>
  $$\\sup_{x \\in E} |f_n(x) - f(x)| \\xrightarrow{n \\to \\infty} 0$$
  <p>Per la non-uniformità: basta trovare una sequenza di punti $x_n \\in E$ per cui $|f_n(x_n) - f(x_n)|$ non tende a zero.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">TEOREMA</div>
  <div class="box-title">Limite uniforme di funzioni continue</div>
  <p>Se $f_n : E \\to \\mathbb{R}$ sono continue su $E$ e $f_n \\to f$ <strong>uniformemente</strong> su $E$, allora $f$ è continua su $E$.</p>
  <p>Con la sola convergenza puntuale questo è falso: $f_n(x) = x^n$ ne è il controesempio.</p>
</div>
</div>

<div class="fade">
<div class="tbl">
<table>
  <thead><tr><th></th><th>Convergenza puntuale</th><th>Convergenza uniforme</th></tr></thead>
  <tbody>
    <tr><td><strong>$N$ dipende da</strong></td><td>$\\varepsilon$ e $x$</td><td>solo $\\varepsilon$</td></tr>
    <tr><td><strong>Implica l'altra?</strong></td><td>No</td><td>Sì</td></tr>
    <tr><td><strong>Preserva continuità</strong></td><td>No</td><td>Sì</td></tr>
    <tr><td><strong>Criterio pratico</strong></td><td>$\\lim_n f_n(x)$ per ogni $x$</td><td>$\\sup_x |f_n - f| \\to 0$</td></tr>
  </tbody>
</table>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Limiti di successioni di funzioni</span><span class="vfscore" id="vfs04">0/5</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="La convergenza uniforme implica quella puntuale: se N non dipende da x, vale in particolare per ogni x fissato.">
      <div class="vq-text">1. La convergenza uniforme implica quella puntuale.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f_n(x) = x^n converge puntualmente su [0,1] ma il limite è discontinuo in x=1, quindi non può essere uniforme.">
      <div class="vq-text">2. La convergenza puntuale implica quella uniforme.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f_n(x) = x^n ha tutte le f_n continue, ma il limite puntuale è discontinuo in x=1. Serve la convergenza uniforme.">
      <div class="vq-text">3. Il limite puntuale di funzioni continue è sempre continuo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="È il criterio del sup: la convergenza uniforme equivale a sup_x |f_n(x) - f(x)| → 0.">
      <div class="vq-text">4. $f_n \\to f$ uniformemente $\\iff$ $\\sup_{x} |f_n(x) - f(x)| \\to 0$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Il limite uniforme di funzioni continue è continuo: è il teorema che distingue la convergenza uniforme da quella puntuale.">
      <div class="vq-text">5. Il limite uniforme di funzioni continue è sempre continuo.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi04"></span></div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 04.1 — Limite puntuale di $f_n(x) = x/n$ su $\\mathbb{R}$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Trova il limite puntuale di $f_n(x) = x/n$ e stabilisci se la convergenza è uniforme su $\\mathbb{R}$ e su $[-M, M]$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Per ogni x fissato: x/n → 0. Limite puntuale f ≡ 0.</div>
      $$\\lim_{n\\to\\infty} \\frac{x}{n} = 0 \\quad \\forall\\, x \\in \\mathbb{R}$$
      <div class="sl">// Criterio del sup su R: sup_x |x/n| = +∞ → non uniforme su R</div>
      <div class="sl">// Su [-M,M]: sup_{|x|≤M} |x/n| = M/n → 0 → uniforme ✓</div>
      $$\\sup_{x \\in [-M,M]} \\left|\\frac{x}{n}\\right| = \\frac{M}{n} \\to 0 \\implies \\text{uniforme su } [-M,M].$$
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES 04.2 — Perché $x^n$ non converge uniformemente su $[0,1)$</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per $\\varepsilon = 0{,}01$, trova $N$ necessario perché $|x^n| < 0{,}01$ per $x = 0{,}8$ e per $x = 0{,}99$. Cosa si conclude?</p></div>
    <div class="ex-sol">
      <div class="sl">// Per x = 0.8: 0.8^n < 0.01 → n > log(0.01)/log(0.8) ≈ 20.6 → basta N = 21</div>
      $$x = 0{,}8 \\implies N \\geq 21$$
      <div class="sl">// Per x = 0.99: 0.99^n < 0.01 → n > log(0.01)/log(0.99) ≈ 458 → serve N = 459</div>
      $$x = 0{,}99 \\implies N \\geq 459$$
      <div class="sl">// Più x si avvicina a 1, più grande deve essere N: non esiste un N uniforme per tutti i punti</div>
      $$\\sup_{x \\in [0,1)} x^n = 1 \\quad \\forall\\, n \\implies \\text{convergenza non uniforme su } [0,1).$$
    </div>
  </div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO</span><span class="qscore" id="sc_ric">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Il termine di una successione numerica è un numero; quello di una successione di funzioni è una funzione. Il limite è rispettivamente un numero o una funzione.">
      <div class="qq-text">1. Qual è la differenza fondamentale tra successioni numeriche e di funzioni?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> Non c'è differenza, la teoria è identica</label>
        <label class="opt"><input type="radio" name="qr1"> Il termine generale e il limite sono funzioni, non numeri</label>
        <label class="opt"><input type="radio" name="qr1"> Le successioni di funzioni non hanno limite</label>
        <label class="opt"><input type="radio" name="qr1"> Le successioni numeriche non usano la definizione epsilon-N</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="Per x in [0,1): x^n → 0 come r^n con r = x < 1. Per x = 1: 1^n = 1 per ogni n. Il limite è discontinuo in x=1.">
      <div class="qq-text">2. Il limite puntuale di $f_n(x) = x^n$ su $[0,1]$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> $0$ su $[0,1)$ e $1$ in $x=1$</label>
        <label class="opt"><input type="radio" name="qr2"> $0$ su tutto $[0,1]$</label>
        <label class="opt"><input type="radio" name="qr2"> $1$ su tutto $[0,1]$</label>
        <label class="opt"><input type="radio" name="qr2"> Non esiste</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Nella convergenza puntuale N dipende da epsilon e da x; nella uniforme dipende solo da epsilon, uguale per tutti i punti simultaneamente.">
      <div class="qq-text">3. Cosa distingue la convergenza uniforme da quella puntuale?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> La convergenza uniforme è più lenta</label>
        <label class="opt"><input type="radio" name="qr3"> La convergenza puntuale preserva la continuità</label>
        <label class="opt"><input type="radio" name="qr3"> Nella convergenza uniforme $N$ non dipende da $x$</label>
        <label class="opt"><input type="radio" name="qr3"> Sono equivalenti su intervalli limitati</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Il criterio del sup: f_n → f uniformemente ↔ sup_x |f_n(x)-f(x)| → 0.">
      <div class="qq-text">4. Il criterio pratico per verificare la convergenza uniforme è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> Verificare che $f_n(0) \\to f(0)$</label>
        <label class="opt"><input type="radio" name="qr4"> Verificare che $\\sup_x |f_n(x) - f(x)| \\to 0$</label>
        <label class="opt"><input type="radio" name="qr4"> Verificare che $f_n$ sia monotona</label>
        <label class="opt"><input type="radio" name="qr4"> Verificare che $f_n$ sia continua</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="f_n(x) = x/n: su [-M,M] il sup è M/n → 0, quindi converge uniformemente. Su R il sup è +∞, non converge uniformemente.">
      <div class="qq-text">5. $f_n(x) = x/n$ converge uniformemente a $0$ su:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> $\\mathbb{R}$</label>
        <label class="opt"><input type="radio" name="qr5"> Solo nel punto $x = 0$</label>
        <label class="opt"><input type="radio" name="qr5"> Ogni intervallo limitato $[-M, M]$</label>
        <label class="opt"><input type="radio" name="qr5"> Nessun insieme</label>
      </div><div class="qfb"></div>
    </div>
  </div>
  <div class="quiz-foot"><button class="q-reset" onclick="resetQ(this)">Ricomincia</button><span class="q-info" id="info_ric"></span></div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico; le curiosità storiche sono rielaborazioni originali. Il docente declina ogni responsabilità per eventuali imprecisioni ed errori di stampa. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
