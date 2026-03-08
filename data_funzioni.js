// ── LESSON DATA ───────────────────────────────────────────────────────
const LESSON_DATA = {

  meta: {
    file:  'data_funzioni.js',
    num:   'LEZIONE 03',
    title: 'Funzioni',
    sub:   'Definizione · Dominio e codominio · Iniettiva · Suriettiva · Biettiva · Esempi'
  },

  sections: [

    // ── §01 ──────────────────────────────────────────────────────────
    {
      id:       's01',
      secNum:   '§01',
      navLabel: '§01 Cos\'è una funzione',
      heading:  'Cos\'è una funzione',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione</div>
  <p>Una <strong>funzione</strong> $f$ da un insieme $A$ a un insieme $B$ è una regola che associa ad ogni elemento di $A$ <em>esattamente uno</em> elemento di $B$.</p>
  $$f : A \\to B, \\quad x \\mapsto f(x)$$
  <p>$A$ si chiama <strong>dominio</strong>, $B$ si chiama <strong>codominio</strong>. Il valore $f(x)$ è l'<strong>immagine</strong> di $x$ tramite $f$.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COLLEGAMENTO CON LE SUCCESSIONI</div>
  <div class="box-title">Una successione è una funzione</div>
  <p>Avete già incontrato le funzioni: una <strong>successione numerica</strong> è esattamente una funzione con dominio $\\mathbb{N}$:</p>
  $$a : \\mathbb{N} \\to \\mathbb{R}, \\quad n \\mapsto a_n$$
  <p>Una funzione "classica" ha invece dominio $\\mathbb{R}$ (o un suo sottoinsieme):</p>
  $$f : \\mathbb{R} \\to \\mathbb{R}, \\quad x \\mapsto f(x)$$
  <p>La struttura è identica. Cambia solo il dominio: discreto ($\\mathbb{N}$) per le successioni, continuo ($\\mathbb{R}$) per le funzioni reali.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">REGOLA FONDAMENTALE</div>
  <div class="box-title">Ad ogni elemento del dominio corrisponde uno e un solo elemento del codominio</div>
  <p>Questo è l'unico vincolo nella definizione di funzione. Non è richiesto che:</p>
  <p>— ogni elemento del codominio venga "raggiunto" (alcuni possono restare senza preimmagine);</p>
  <p>— elementi diversi del dominio vadano in punti diversi del codominio (due $x$ diversi possono avere la stessa immagine).</p>
  <p>Queste due proprietà opzionali definiscono rispettivamente la suriettività e l'iniettività, che vedremo nelle sezioni successive.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Funzioni elementari</div>
  <p><strong>Funzione costante:</strong> $f(x) = 3$ per ogni $x \\in \\mathbb{R}$. Il codominio è $\\mathbb{R}$ ma l'unico valore assunto è $3$.</p>
  <p><strong>Funzione identità:</strong> $f(x) = x$. Ogni elemento va in se stesso.</p>
  <p><strong>Funzione quadratica:</strong> $f(x) = x^2$. Due valori diversi come $x = 2$ e $x = -2$ danno la stessa immagine $f(2) = f(-2) = 4$.</p>
  <p><strong>Funzione valore assoluto:</strong> $f(x) = |x|$. Anche qui $f(3) = f(-3) = 3$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Immagine di una funzione</div>
  <p>L'<strong>immagine</strong> (o <strong>insieme immagine</strong>) di $f : A \\to B$ è l'insieme di tutti i valori effettivamente assunti da $f$:</p>
  $$\\text{Im}(f) = \\{ f(x) : x \\in A \\} \\subseteq B$$
  <p>L'immagine è sempre un sottoinsieme del codominio, ma può essere più piccola. Per $f(x) = x^2$ con dominio $\\mathbb{R}$ e codominio $\\mathbb{R}$, l'immagine è $[0, +\\infty)$: i valori negativi non vengono mai raggiunti.</p>
</div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Definizione di funzione</span><span class="vfscore" id="vfs01">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="È esattamente la definizione: una funzione associa a ogni elemento del dominio esattamente un elemento del codominio.">
      <div class="vq-text">1. Una funzione associa ad ogni elemento del dominio esattamente un elemento del codominio.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: l'immagine è un sottoinsieme del codominio, ma può essere più piccola. Per f(x)=x² il codominio è R ma l'immagine è solo [0,+∞).">
      <div class="vq-text">2. L'immagine di una funzione coincide sempre con il codominio.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Sì: una successione a : N → R è una funzione con dominio N. La struttura è identica a quella di una funzione reale.">
      <div class="vq-text">3. Una successione numerica è un caso particolare di funzione.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f(x)=x² associa a ogni x esattamente un valore (x²), quindi è una funzione. Il fatto che f(2)=f(-2) non viola la definizione.">
      <div class="vq-text">4. $f(x) = x^2$ non è una funzione perché $f(2) = f(-2) = 4$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi01"></span></div>
</div>`
    },

    // ── §02 ──────────────────────────────────────────────────────────
    {
      id:       's02',
      secNum:   '§02',
      navLabel: '§02 Iniettiva',
      heading:  'Funzione iniettiva',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione iniettiva</div>
  <p>Una funzione $f : A \\to B$ è <strong>iniettiva</strong> se elementi diversi del dominio hanno immagini diverse:</p>
  $$x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$$
  <p>Equivalentemente (contronominale): $f(x_1) = f(x_2) \\implies x_1 = x_2$.</p>
  <p>In parole: ogni elemento del codominio ha <em>al più</em> una preimmagine.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COME RICONOSCERLA</div>
  <div class="box-title">Test della retta orizzontale</div>
  <p>Graficamente, $f$ è iniettiva se e solo se ogni retta orizzontale $y = c$ interseca il grafico <strong>al più una volta</strong>.</p>
  <p>Se esiste una retta orizzontale che taglia il grafico in due punti, la funzione non è iniettiva (i due punti di intersezione hanno la stessa immagine $c$ ma $x$-coordinate diverse).</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Iniettive e non iniettive</div>
  <p><strong>$f(x) = 2x + 1$ — iniettiva.</strong> Se $2x_1+1 = 2x_2+1$ allora $x_1 = x_2$. Ogni retta orizzontale taglia la retta in un solo punto.</p>
  <p><strong>$f(x) = x^2$ su $\\mathbb{R}$ — non iniettiva.</strong> $f(2) = f(-2) = 4$: due $x$ diversi hanno la stessa immagine.</p>
  <p><strong>$f(x) = x^2$ su $[0, +\\infty)$ — iniettiva.</strong> Restringendo il dominio ai soli $x \\geq 0$, non esistono più due valori con la stessa immagine.</p>
  <p><strong>$f(x) = x^3$ — iniettiva.</strong> La cubica è strettamente crescente su tutto $\\mathbb{R}$: $x_1 < x_2 \\implies x_1^3 < x_2^3$.</p>
</div>
</div>

<div class="fade">
<div class="box thm">
  <div class="box-label">OSSERVAZIONE</div>
  <div class="box-title">Funzioni strettamente monotone sono iniettive</div>
  <p>Se $f$ è <strong>strettamente crescente</strong> (cioè $x_1 < x_2 \\implies f(x_1) < f(x_2)$) o <strong>strettamente decrescente</strong>, allora $f$ è iniettiva.</p>
  <p>Dimostrazione: se $x_1 \\neq x_2$, uno è minore dell'altro, e la monotonia stretta garantisce $f(x_1) \\neq f(x_2)$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — $f(x) = 3x - 5$ è iniettiva?</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Stabilisci se $f(x) = 3x - 5$ è iniettiva.</p></div>
    <div class="ex-sol">
      <div class="sl">// Supponi f(x₁) = f(x₂) e mostra che implica x₁ = x₂</div>
      $$3x_1 - 5 = 3x_2 - 5 \\implies 3x_1 = 3x_2 \\implies x_1 = x_2 \\checkmark$$
      <div class="sl">// Quindi f è iniettiva. Alternativa: f è strettamente crescente (coefficiente 3 > 0)</div>
    </div>
  </div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — $f(x) = x^2 - 4x$ è iniettiva su $\\mathbb{R}$?</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Stabilisci se $f(x) = x^2 - 4x$ è iniettiva su $\\mathbb{R}$.</p></div>
    <div class="ex-sol">
      <div class="sl">// Cerca due x diversi con la stessa immagine</div>
      $$f(0) = 0 \\quad \\text{e} \\quad f(4) = 16 - 16 = 0 \\implies f(0) = f(4)$$
      <div class="sl">// Ma 0 ≠ 4, quindi f non è iniettiva su R</div>
      <div class="sl">// Il vertice della parabola è in x = 2: per x < 2 è decrescente, per x > 2 è crescente</div>
      <div class="sl">// Su [2, +∞) invece sarebbe iniettiva (strettamente crescente)</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Iniettività</span><span class="vfscore" id="vfs02">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="È esattamente la definizione contronominale: f(x₁)=f(x₂) ⟹ x₁=x₂.">
      <div class="vq-text">1. $f$ è iniettiva se $f(x_1) = f(x_2) \\implies x_1 = x_2$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f(x)=x² su R non è iniettiva perché f(2)=f(-2)=4. Su [0,+∞) invece lo è.">
      <div class="vq-text">2. $f(x) = x^2$ è iniettiva su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Ogni funzione strettamente monotona è iniettiva: se x₁ ≠ x₂ allora uno è maggiore e la monotonia stretta garantisce f(x₁) ≠ f(x₂).">
      <div class="vq-text">3. Ogni funzione strettamente crescente è iniettiva.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f(x)=x³ è strettamente crescente su tutto R (x₁ < x₂ ⟹ x₁³ < x₂³), quindi è iniettiva.">
      <div class="vq-text">4. $f(x) = x^3$ è iniettiva su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi02"></span></div>
</div>`
    },

    // ── §03 ──────────────────────────────────────────────────────────
    {
      id:       's03',
      secNum:   '§03',
      navLabel: '§03 Suriettiva',
      heading:  'Funzione suriettiva',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione suriettiva</div>
  <p>Una funzione $f : A \\to B$ è <strong>suriettiva</strong> se ogni elemento del codominio ha almeno una preimmagine:</p>
  $$\\forall\\, y \\in B, \\; \\exists\\, x \\in A : f(x) = y$$
  <p>In parole: l'immagine di $f$ coincide con l'intero codominio, $\\text{Im}(f) = B$. Nessun elemento del codominio viene "saltato".</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">COME RICONOSCERLA</div>
  <div class="box-title">Test della retta orizzontale (variante)</div>
  <p>Graficamente, $f : A \\to B$ è suriettiva se ogni retta orizzontale $y = c$ con $c \\in B$ interseca il grafico <strong>almeno una volta</strong>.</p>
  <p>Attenzione: la suriettività dipende dal codominio scelto. Cambiare il codominio cambia la risposta.</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Suriettive e non suriettive</div>
  <p><strong>$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = 2x+1$ — suriettiva.</strong> Per ogni $y \\in \\mathbb{R}$ esiste $x = (y-1)/2$ tale che $f(x) = y$.</p>
  <p><strong>$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$ — non suriettiva.</strong> Nessun $x$ reale soddisfa $x^2 = -1$: i valori negativi non vengono raggiunti.</p>
  <p><strong>$f : \\mathbb{R} \\to [0,+\\infty)$, $f(x) = x^2$ — suriettiva.</strong> Cambiando il codominio in $[0,+\\infty)$, ogni $y \\geq 0$ ha preimmagine $x = \\sqrt{y}$.</p>
  <p><strong>$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^3$ — suriettiva.</strong> Per ogni $y \\in \\mathbb{R}$ esiste $x = \\sqrt[3]{y}$ tale che $x^3 = y$.</p>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — $f(x) = x^2 + 1$ è suriettiva su $\\mathbb{R}$?</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2 + 1$. È suriettiva?</p></div>
    <div class="ex-sol">
      <div class="sl">// Cerca y ∈ R che non ha preimmagine: serve x tale che x² + 1 = y, cioè x² = y - 1</div>
      <div class="sl">// Se y < 1: x² = y - 1 < 0, impossibile in R</div>
      $$\\text{Ad esempio: } y = 0 \\implies x^2 = -1 \\implies \\text{nessuna soluzione in } \\mathbb{R}$$
      <div class="sl">// Quindi f non è suriettiva su R. L'immagine è [1, +∞)</div>
      <div class="sl">// Se cambiamo il codominio in [1,+∞) diventa suriettiva</div>
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Suriettività</span><span class="vfscore" id="vfs03">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="f suriettiva significa Im(f) = B: ogni elemento del codominio viene raggiunto.">
      <div class="vq-text">1. $f : A \\to B$ è suriettiva se e solo se $\\text{Im}(f) = B$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f(x)=x² su R non è suriettiva (i valori negativi non sono raggiunti). Su [0,+∞) come codominio sì.">
      <div class="vq-text">2. $f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$ è suriettiva.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Cambiare il codominio cambia la suriettività: f:R→[0,+∞) con f(x)=x² è suriettiva perché ogni y≥0 ha preimmagine √y.">
      <div class="vq-text">3. La suriettività dipende dal codominio scelto.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="Per ogni y∈R esiste x=∛y tale che x³=y, quindi f(x)=x³ è suriettiva su R.">
      <div class="vq-text">4. $f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^3$ è suriettiva.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi03"></span></div>
</div>`
    },

    // ── §04 ──────────────────────────────────────────────────────────
    {
      id:       's04',
      secNum:   '§04',
      navLabel: '§04 Biettiva',
      heading:  'Funzione biettiva e funzione inversa',
      html: `
<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione biettiva</div>
  <p>Una funzione $f : A \\to B$ è <strong>biettiva</strong> (o <strong>biunivoca</strong>) se è sia iniettiva che suriettiva:</p>
  <p>— ogni elemento del codominio ha <em>almeno</em> una preimmagine (suriettività);</p>
  <p>— ogni elemento del codominio ha <em>al più</em> una preimmagine (iniettività).</p>
  <p>Quindi ogni elemento del codominio ha <strong>esattamente una</strong> preimmagine. Si stabilisce una corrispondenza uno-a-uno tra $A$ e $B$.</p>
</div>
</div>

<div class="fade">
<div class="box def">
  <div class="box-label">DEFINIZIONE</div>
  <div class="box-title">Funzione inversa</div>
  <p>Se $f : A \\to B$ è biettiva, esiste la <strong>funzione inversa</strong> $f^{-1} : B \\to A$ definita da:</p>
  $$f^{-1}(y) = x \\quad \\iff \\quad f(x) = y$$
  <p>La biettività è necessaria: senza iniettività $f^{-1}$ non sarebbe ben definita (due preimmagini per lo stesso $y$); senza suriettività $f^{-1}$ non avrebbe dominio tutto $B$ (qualche $y$ non avrebbe preimmagine).</p>
</div>
</div>

<div class="fade">
<div class="box prop">
  <div class="box-label">ESEMPI</div>
  <div class="box-title">Funzioni biettive</div>
  <p><strong>$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = 2x+1$ — biettiva.</strong> È iniettiva (lineare con coefficiente $\\neq 0$) e suriettiva (per ogni $y$ esiste $x = (y-1)/2$). Inversa: $f^{-1}(y) = (y-1)/2$.</p>
  <p><strong>$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^3$ — biettiva.</strong> Iniettiva (strettamente crescente) e suriettiva (per ogni $y$ esiste $\\sqrt[3]{y}$). Inversa: $f^{-1}(y) = \\sqrt[3]{y}$.</p>
  <p><strong>$f : [0,+\\infty) \\to [0,+\\infty)$, $f(x) = x^2$ — biettiva.</strong> Sul dominio ristretto è iniettiva e suriettiva. Inversa: $f^{-1}(y) = \\sqrt{y}$.</p>
  <p><strong>$f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$ — non biettiva.</strong> Non è iniettiva (né suriettiva): non ha inversa su $\\mathbb{R}$.</p>
</div>
</div>

<div class="fade">
<div class="tbl">
<table>
  <thead><tr><th>Proprietà</th><th>Condizione</th><th>Ogni $y \\in B$ ha...</th></tr></thead>
  <tbody>
    <tr><td><strong>Nessuna</strong></td><td>—</td><td>zero, una o più preimmagini</td></tr>
    <tr><td><strong>Iniettiva</strong></td><td>$x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$</td><td>al più una preimmagine</td></tr>
    <tr><td><strong>Suriettiva</strong></td><td>$\\forall\\, y \\in B,\\; \\exists\\, x : f(x)=y$</td><td>almeno una preimmagine</td></tr>
    <tr><td><strong>Biettiva</strong></td><td>iniettiva + suriettiva</td><td>esattamente una preimmagine</td></tr>
  </tbody>
</table>
</div>
</div>

<div class="ex fade">
  <div class="ex-hdr"><span>ES — Classificare $f(x) = x^2$ con diversi domini e codomini</span><button class="ex-btn" onclick="sol(this)">Mostra soluzione</button></div>
  <div class="ex-body">
    <div class="ex-prob"><p>Per ognuna delle seguenti, stabilisci se $f(x) = x^2$ è iniettiva, suriettiva, biettiva:</p>
    <p>(a) $f : \\mathbb{R} \\to \\mathbb{R}$ &nbsp; (b) $f : [0,+\\infty) \\to \\mathbb{R}$ &nbsp; (c) $f : [0,+\\infty) \\to [0,+\\infty)$</p></div>
    <div class="ex-sol">
      <div class="sl">// (a) f : R → R</div>
      <div class="sl">// Iniettiva? No: f(2)=f(-2)=4, due x diversi stessa immagine</div>
      <div class="sl">// Suriettiva? No: f(x)=x²≥0, i valori negativi non vengono raggiunti</div>
      $$\\text{(a) né iniettiva né suriettiva}$$
      <div class="sl">// (b) f : [0,+∞) → R</div>
      <div class="sl">// Iniettiva? Sì: su [0,+∞) la funzione x² è strettamente crescente</div>
      <div class="sl">// Suriettiva? No: i valori negativi restano irraggiungibili</div>
      $$\\text{(b) iniettiva, non suriettiva}$$
      <div class="sl">// (c) f : [0,+∞) → [0,+∞)</div>
      <div class="sl">// Iniettiva? Sì (stessa ragione di (b))</div>
      <div class="sl">// Suriettiva? Sì: per ogni y≥0 esiste x=√y≥0 tale che x²=y</div>
      $$\\text{(c) biettiva} \\implies f^{-1}(y) = \\sqrt{y}$$
    </div>
  </div>
</div>

<div class="vf fade">
  <div class="vf-hdr"><span>VERO O FALSO — Biettività e inversa</span><span class="vfscore" id="vfs04">0/4</span></div>
  <div class="vf-body">
    <div class="vq" data-ok="V" data-why="Biettiva = iniettiva + suriettiva: ogni elemento del codominio ha esattamente una preimmagine, quindi l'inversa è ben definita.">
      <div class="vq-text">1. Una funzione ha inversa se e solo se è biettiva.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: f(x)=x² su R non è né iniettiva né suriettiva. Su [0,+∞)→[0,+∞) invece è biettiva.">
      <div class="vq-text">2. $f(x) = x^2$ è biettiva su $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="V" data-why="f(x)=x³ è strettamente crescente (iniettiva) e per ogni y esiste ∛y (suriettiva): è biettiva e f⁻¹(y)=∛y.">
      <div class="vq-text">3. $f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^3$ è biettiva e la sua inversa è $f^{-1}(y) = \\sqrt[3]{y}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
    <div class="vq" data-ok="F" data-why="Falso: una funzione costante f(x)=c è suriettiva solo se il codominio è {c}. Su R come codominio non è né iniettiva né suriettiva (se il dominio ha più di un elemento).">
      <div class="vq-text">4. La funzione costante $f(x) = 3$ è biettiva da $\\mathbb{R}$ a $\\mathbb{R}$.</div>
      <div class="vf-btns"><button class="vf-btn" onclick="vfAns(this,'V')">Vero</button><button class="vf-btn" onclick="vfAns(this,'F')">Falso</button></div><div class="vq-fb"></div>
    </div>
  </div>
  <div class="vf-foot"><button class="vf-reset" onclick="resetVF(this)">Ricomincia</button><span class="vf-info" id="vfi04"></span></div>
</div>

<div class="quiz fade">
  <div class="quiz-hdr"><span>QUIZ RIEPILOGO FINALE</span><span class="qscore" id="sc_fin">0/5</span></div>
  <div class="quiz-body">
    <div class="qq" data-ok="b" data-why="Una funzione associa a ogni elemento del dominio esattamente uno del codominio. Non è richiesto che elementi diversi vadano in punti diversi.">
      <div class="qq-text">1. Quale affermazione descrive correttamente una funzione?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr1"> Ad ogni elemento del codominio corrisponde esattamente un elemento del dominio</label>
        <label class="opt"><input type="radio" name="qr1"> Ad ogni elemento del dominio corrisponde esattamente un elemento del codominio</label>
        <label class="opt"><input type="radio" name="qr1"> Ad ogni elemento del dominio corrispondono almeno due elementi del codominio</label>
        <label class="opt"><input type="radio" name="qr1"> Dominio e codominio devono coincidere</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="c" data-why="Iniettiva: elementi diversi hanno immagini diverse (al più una preimmagine per ogni y). Suriettiva: ogni y del codominio ha almeno una preimmagine.">
      <div class="qq-text">2. Qual è la differenza tra iniettiva e suriettiva?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr2"> Sono la stessa cosa</label>
        <label class="opt"><input type="radio" name="qr2"> Iniettiva significa che l'immagine è tutto il codominio</label>
        <label class="opt"><input type="radio" name="qr2"> Iniettiva: al più una preimmagine per ogni $y$. Suriettiva: almeno una preimmagine per ogni $y$</label>
        <label class="opt"><input type="radio" name="qr2"> Suriettiva significa che elementi diversi hanno immagini diverse</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="a" data-why="f(x)=x² su R: f(2)=f(-2)=4 (non iniettiva) e f(x)≥0 (non suriettiva su R). Su [0,+∞)→[0,+∞) è biettiva.">
      <div class="qq-text">3. $f : \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr3"> Né iniettiva né suriettiva</label>
        <label class="opt"><input type="radio" name="qr3"> Solo iniettiva</label>
        <label class="opt"><input type="radio" name="qr3"> Solo suriettiva</label>
        <label class="opt"><input type="radio" name="qr3"> Biettiva</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="d" data-why="La funzione inversa esiste se e solo se f è biettiva: serve sia l'iniettività (f⁻¹ ben definita) che la suriettività (f⁻¹ ha dominio tutto B).">
      <div class="qq-text">4. La funzione inversa $f^{-1}$ esiste quando $f$ è:</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr4"> Solo iniettiva</label>
        <label class="opt"><input type="radio" name="qr4"> Solo suriettiva</label>
        <label class="opt"><input type="radio" name="qr4"> Continua</label>
        <label class="opt"><input type="radio" name="qr4"> Biettiva</label>
      </div><div class="qfb"></div>
    </div>
    <div class="qq" data-ok="b" data-why="Una successione a : N → R è una funzione con dominio N (discreto) invece di R (continuo). La struttura è identica.">
      <div class="qq-text">5. In cosa differisce una successione numerica da una funzione reale?</div>
      <div class="opts">
        <label class="opt"><input type="radio" name="qr5"> Non sono la stessa cosa, non c'è collegamento</label>
        <label class="opt"><input type="radio" name="qr5"> Il dominio è $\\mathbb{N}$ invece di $\\mathbb{R}$</label>
        <label class="opt"><input type="radio" name="qr5"> Il codominio è $\\mathbb{N}$ invece di $\\mathbb{R}$</label>
        <label class="opt"><input type="radio" name="qr5"> Una successione non è una funzione</label>
      </div><div class="qfb"></div>
    </div>
  </div>
  <div class="quiz-foot"><button class="q-reset" onclick="resetQ(this)">Ricomincia</button><span class="q-info" id="info_fin"></span></div>
</div>`
    }

  ],

  disclaimer: `
<div class="fade" style="margin-top:4rem;padding:1.2rem 1.4rem;border:2px solid #aaa;background:#f9f9f6;font-size:.82rem;color:var(--ink-soft);line-height:1.7;">
  <div style="font-family:'Fira Code',monospace;font-size:.63rem;font-weight:600;letter-spacing:.12em;margin-bottom:.4rem;color:#aaa;">DISCLAIMER</div>
  <p>Questo materiale è stato elaborato e distribuito a titolo integrativo e gratuito dal docente, a supporto della didattica curricolare. Non costituisce adozione ufficiale né sostituisce i testi in adozione. Le formule, le definizioni e gli esempi sono di dominio pubblico scientifico. Il docente declina ogni responsabilità per eventuali imprecisioni. La riproduzione parziale è consentita per uso didattico non commerciale con citazione della fonte. © 2026 — uso interno scolastico.</p>
</div>`

};
