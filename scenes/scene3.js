/* SAHNE 3 — CEBİRSEL İFADE (30–48 s) */
(function (LI) {
  'use strict';
  const KD = LI.KD, F = () => LI.Film;
  function camera(t, env) { return LI.Camera.breathe(KD.cam(env, { zoom: 1 }), t, 0.4); }
  function render(ctx, lt, env, t) { F().base(ctx, env, t, camera(t, env), () => LI.world(ctx, env, t)); }
  LI.registerScene({ id: 3, start: 30, end: 48, name: 'An expression', nameTr: 'Cebirsel ifade', concept: '20 + 5n', conceptTr: '20 + 5n', render });
})(window.LI = window.LI || {});
