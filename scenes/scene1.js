/* SAHNE 1 — KUMBARA (0–10 s)  20 TL, and 5 TL more every week.
   The whole film's drawing lives in LI.world(t); each scene only sets the camera. */
(function (LI) {
  'use strict';
  const { seg, outBack } = LI.E;
  const KD = LI.KD, F = () => LI.Film, A = LI.Ang;
  const END = (t) => 1 - seg(t, 90.4, 91.4);

  function win(t, a, b, fi = 0.4, fo = 0.4) { return seg(t, a, a + fi) * (1 - seg(t, b - fo, b)); }
  function exprs(ctx, t, P, list, sz) {
    const f = F();
    list.forEach(([a, b, items, hot]) => {
      const al = win(t, a, b); if (al <= 0) return;
      f.expr(ctx, typeof items === 'string' ? [items] : items, P.x, P.y, sz ?? P.s, { alpha: al, w: P.w, halo: true, color: hot ? A.amber : undefined });
    });
  }
  const at = (P, k, y) => ({ x: P.x, y: y ?? P.y[k], s: P.s, w: P.w });
  /** a tick (or an ink cross) after a centred line */
  function mark(ctx, P, s, t0, t1, t, ok) {
    const f = F(), g = seg(t, t0, t0 + 0.5) * (1 - seg(t, t1 - 0.4, t1)); if (g <= 0) return;
    const w = Math.min(f.width(ctx, s, P.s), P.w), x = P.x + w / 2 + 26;
    if (ok) f.tick(ctx, x, P.y, seg(t, t0, t0 + 0.5), 1 - seg(t, t1 - 0.4, t1)); else f.crossInk(ctx, x + 16, P.y, 15, seg(t, t0, t0 + 0.5), 1 - seg(t, t1 - 0.4, t1));
  }
  const COL = [11.0, 12.6, 14.2, 15.8, 17.4];

  function context(ctx, env, t) {
    exprs(ctx, t, KD.L(env).CX, [
      [4.4, 10.2, 'Kumbarada 20 TL var, her hafta 5 TL ekleniyor'],
      [10.6, 21.6, 'Tabloyla gösterelim'],
      [21.8, 29.8, 'Her hafta para 5 TL artıyor', true],
      [30.4, 37.8, 'Hafta sayısına bir harf verelim: n'],
      [38.0, 47.8, 'Cebirsel ifade: 20 + 5n', true],
      [48.4, 55.6, 'Varsayım: 10. haftada 70 TL olur mu?'],
      [55.8, 65.8, 'n yerine hangi sayıyı koyarsak o haftanın parası çıkar', true],
      [66.4, 79.8, 'Aynı durumu farklı yazabilir miyiz?'],
    ]);
  }

  /* ── the jar (4–29 s) ── */
  function savings(ctx, env, t) {
    const L = KD.L(env), J = env.V ? Object.assign({}, L.JAR, t > 10.4 ? { y: -330, w: 160, h: 190 } : {}) : L.JAR, f = F();
    const a = win(t, 4.4, 29.0) * (env.V ? (t < 10.6 ? 1 - seg(t, 10.0, 10.4) : seg(t, 10.6, 11.0) * (1 - seg(t, 18.2, 18.8))) : 1);
    let coins = 4 * seg(t, 4.8, 6.4);
    for (let i = 1; i <= 4; i++) coins += seg(t, COL[i] - 0.6, COL[i]);
    f.jar(ctx, J, coins, a, `${Math.round(20 + 5 * Math.max(0, Math.floor(coins + 0.001) - 4))} TL`);
    const E = L.E;
    exprs(ctx, t, at(E, 1), [[6.6, 10.2, 'Bilinen: başlangıçta 20 TL, her hafta 5 TL']]);
    exprs(ctx, t, at(E, 2), [[8.0, 10.2, 'Bilinmeyen: n hafta sonra kaç TL olur?', true], [19.0, 29.8, 'Nicelikler: hafta sayısı ve para']]);
    exprs(ctx, t, at(E, 3), [[24.0, 29.8, 'Hafta 1 artınca para 5 TL artar', true]]);
  }

  /* ── the table (10–66 s) ── */
  function table(ctx, env, t) {
    const L = KD.L(env), P = L.TB, f = F(), a = win(t, 10.6, 65.8); if (a <= 0) return;
    const X = (i) => P.x0 + i * P.dx;
    f.T(ctx, 'Hafta', P.lx, P.y[0], { size: P.s * 0.8, alpha: a });
    f.T(ctx, 'Para (TL)', P.lx, P.y[1], { size: P.s * 0.8, alpha: a });
    LI.Ink.path(ctx, [[P.lx - 90, (P.y[0] + P.y[1]) / 2], [X(4) + P.dx / 2, (P.y[0] + P.y[1]) / 2]], { w: 3, alpha: a * 0.5, seed: 960, taper: [0, 0] });
    for (let i = 0; i < 5; i++) {
      const k = seg(t, COL[i], COL[i] + 0.4) * a; if (k <= 0) continue;
      f.T(ctx, String(i), X(i), P.y[0] - 12 * (1 - outBack(seg(t, COL[i], COL[i] + 0.4))), { size: P.s, alpha: k });
      f.T(ctx, String(20 + 5 * i), X(i), P.y[1], Object.assign({ size: P.s, alpha: k }, i === 0 ? {} : {}));
      if (i < 4) { const p = seg(t, 22.0 + i * 0.4, 22.5 + i * 0.4); if (p > 0) {
        A.arc(ctx, [X(i) + P.dx / 2, P.arc - 20], P.dx * 0.42, 200, 340, { p, alpha: a, w: 3.5, seed: 970 + i });
        f.T(ctx, '+5', X(i) + P.dx / 2, P.arc + P.dx * 0.42 - 2, Object.assign({ size: P.s * 0.7, alpha: a * p }, f.AMB)); } }
    }
    // the n column
    const nk = seg(t, 30.4, 30.8) * a;
    if (nk > 0) {
      LI.Ink.path(ctx, [[P.nx - P.dx * 0.9, P.y[0] - 40], [P.nx - P.dx * 0.9, P.y[1] + 40]], { w: 3, alpha: nk * 0.5, seed: 980, taper: [0, 0] });
      f.T(ctx, 'n', P.nx, P.y[0], Object.assign({ size: P.s, alpha: nk }, f.AMB));
      const q = seg(t, 36.0, 36.6);
      f.T(ctx, '?', P.nx, P.y[1], { size: P.s, alpha: nk * seg(t, 31.0, 31.4) * (1 - q) });
      if (q > 0) f.T(ctx, '20 + 5n', P.nx, P.y[1], Object.assign({ size: P.s * 0.95, alpha: nk * q }, f.AMB));
    }
  }

  /* ── 30–48 s: the expression ── */
  function expression(ctx, env, t) {
    const E = KD.L(env).E;
    exprs(ctx, t, at(E, 0), [[31.6, 47.8, '1. hafta: 20 + 5 × 1 = 25']]);
    exprs(ctx, t, at(E, 1), [[33.0, 47.8, '2. hafta: 20 + 5 × 2 = 30']]);
    exprs(ctx, t, at(E, 2), [[34.4, 47.8, 'n. hafta: 20 + 5 × n = 20 + 5n', true]]);
    exprs(ctx, t, at(E, 3), [[38.6, 47.8, '20: başlangıçtaki para · 5n: n haftada eklenen para']]);
  }

  /* ── 48–66 s: guesses checked with the expression ── */
  function guesses(ctx, env, t) {
    const E = KD.L(env).E;
    exprs(ctx, t, at(E, 0), [[49.4, 65.8, '20 + 5 × 10 = 20 + 50 = 70 TL']]); mark(ctx, at(E, 0), '20 + 5 × 10 = 20 + 50 = 70 TL', 50.6, 65.8, t, true);
    exprs(ctx, t, at(E, 1), [[52.0, 65.8, 'Peki kaçıncı haftada 100 TL olur?']]);
    exprs(ctx, t, at(E, 2), [[53.8, 65.8, '20 + 5 × 16 = 100: 16. haftada', true]]); mark(ctx, at(E, 2), '20 + 5 × 16 = 100: 16. haftada', 55.0, 65.8, t, true);
    exprs(ctx, t, at(E, 3), [[57.0, 65.8, 'n bir değişken: her hafta farklı bir değer alır']]);
  }

  /* ── 66–80 s: other ways to write it ── */
  function rewrite(ctx, env, t) {
    const E = KD.L(env).E, Y = env.V ? [-640, -540, -440, -340, -230] : [-300, -200, -100, 0, 110];
    const rows = [[67.0, '5n + 20: sıra değişti, n = 3 için 35', true], [69.0, '25n: n = 3 için 75, tabloda 35 yazıyor', false],
      [71.4, '20 + 5h: harf değişti, anlam aynı', true], [73.6, 'Sözle: 20 TL’den başla, her hafta 5 TL ekle', null], [76.0, 'Karenin çevresi 4a, 5 yıl sonraki yaş y + 5: harfler her yerde', 'hot']];
    rows.forEach(([t0, s, ok], i) => {
      const P = at(E, 0, Y[i]); exprs(ctx, t, P, [[t0, 79.8, s, ok === 'hot']]);
      if (ok === true || ok === false) mark(ctx, P, s, t0 + 0.9, 79.8, t, ok);
    });
  }

  function summary(ctx, env, t) {
    if (t < 80.4) return;
    const S = KD.L(env).SUM, f = F(), a = END(t);
    [['Bilineni ve bilinmeyeni belirle', 80.6], ['Tabloyla aralarındaki ilişkiyi bul', 81.6], ['Cebirsel ifadeyle yaz: 20 + 5n', 82.6], ['n’ye değer vererek sına', 83.6, true]].forEach(([s, t0, hot], i) => {
      const al = seg(t, t0, t0 + 0.4) * a; if (al <= 0) return;
      f.expr(ctx, [s], S.x, S.y[i], S.s * (i === 3 ? 1.2 : 1), { alpha: al, w: S.w, halo: true, color: hot ? A.amber : undefined });
    });
  }

  LI.fireworks = function (ctx, env, t) {
    const k = seg(t, 84.4, 86.4);
    if (k <= 0 || t >= 91) return;
    const n = F().nokta(t, env), C = [n.x, n.y - 170];
    [30, 60, 90, 120, 150].forEach((d, i) => {
      const r = 150 + 30 * Math.sin(t * 2 + i);
      A.arc(ctx, C, r, d - 12, d + 12, { p: seg(k, i * 0.12, i * 0.12 + 0.4), alpha: 0.8 * (1 - seg(t, 90.2, 91)), w: 6, seed: 80 + i });
    });
  };

  LI.world = function (ctx, env, t) { context(ctx, env, t); savings(ctx, env, t); table(ctx, env, t); expression(ctx, env, t); guesses(ctx, env, t); rewrite(ctx, env, t); summary(ctx, env, t); };

  function camera(t, env) {
    const L = KD.L(env);
    return LI.Camera.breathe(LI.Camera.track([
      [0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [3.0, KD.cam(env, { x: L.nx, y: env.V ? 380 : 140, zoom: 1.6 })],
      [4.8, KD.cam(env, { zoom: 1 })],
    ], t), t, 0.5);
  }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 1, start: 0, end: 10, name: 'The jar', nameTr: 'Kumbara', concept: '20 TL plus 5 TL a week', conceptTr: '20 TL ve haftada 5 TL', render });
})(window.LI = window.LI || {});
