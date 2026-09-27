/* SAHNE 5 — FARKLI YAZILIŞLAR (66–80 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 5, start: 66, end: 80, name: 'Other ways to write it', nameTr: 'Farklı yazılışlar', concept: '5n + 20, 20 + 5h, not 25n', conceptTr: '5n + 20, 20 + 5h, 25n değil', render });
})(window.LI = window.LI || {});
