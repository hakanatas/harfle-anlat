/* Shared layout + Nokta helpers for "Harfle Anlat". */
(function (LI) {
  'use strict';
  const { clamp } = LI.E;
  LI.KD = {
    /** positions for 16:9 and 9:16 */
    L(env) {
      return env.V
        ? {
          CX: { x: 0, y: -780, s: 42, w: 980 },
          JAR: { x: 0, y: -500, w: 200, h: 240 },
          TB: { lx: -390, x0: -250, dx: 118, nx: 390, y: [-620, -520], s: 44, arc: -455 },
          E: { x: 0, y: [-370, -280, -190, -100], s: 44, w: 980 },
          SUM: { x: 0, y: [-560, -450, -340, -230], s: 46, w: 980 },
          nx: -360, gy: 560, s: 1.15 }
        : {
          CX: { x: 60, y: -445, s: 48, w: 1300 },
          JAR: { x: 700, y: -220, w: 200, h: 240 },
          TB: { lx: -330, x0: -160, dx: 140, nx: 620, y: [-300, -205], s: 50, arc: -135 },
          E: { x: 120, y: [-40, 50, 140, 225], s: 52, w: 1250 },
          SUM: { x: 100, y: [-240, -140, -40, 80], s: 54, w: 1250 },
          nx: -800, gy: 262, s: 1.15 };
    },
    cam(env, o = {}) { return Object.assign({ x: env.V ? 0 : -60, y: env.V ? 60 : 0, zoom: 1, rot: 0, tilt: 1 }, o); },
    /** pupils + face toward a world point */
    look(p, target) {
      const e = LI.Nokta.eyes(p)[0];
      const dx = target[0] - e[0], dy = target[1] - e[1], d = Math.hypot(dx, dy) || 1;
      p.lookX = clamp(dx / d * 1.1, -1, 1); p.lookY = clamp(dy / d * 1.1, -1, 1);
      p.turn = clamp(dx / 900, -0.5, 0.5);
      return p;
    },
    /** a short ground stroke under Nokta */
    ground(ctx, env, x, gy) { LI.Ambient.ground(ctx, x - 360, x + 360, gy + 6, { alpha: 0.32 }); },
  };
})(window.LI = window.LI || {});
