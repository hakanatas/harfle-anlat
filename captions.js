/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir.
   Kısa, tek fikir, 6. sınıf dili. start/end saniye cinsinden.
   note: öğretmen için önerilen seslendirme cümlesi.
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 4.4, end: 10.2, tr: 'Kumbarada 20 TL var, her hafta 5 TL ekleniyor', en: 'The jar has 20 TL, and 5 TL goes in every week',
      note: 'Nokta’nın kumbarasında 20 TL var. Her hafta 5 TL daha atıyor. Bilinenler bunlar. Bilinmeyen: n hafta sonra kumbarada kaç TL olacak?' },
    { scene: 2, start: 10.8, end: 18.8, tr: 'Hafta 0: 20, hafta 1: 25, hafta 2: 30...', en: 'Week 0: 20, week 1: 25, week 2: 30...',
      note: 'Bir tablo yapalım. Başta 20 TL. Birinci hafta 25, ikinci hafta 30, üçüncü hafta 35, dördüncü hafta 40 TL.' },
    { scene: 2, start: 19.0, end: 29.8, tr: 'Hafta 1 artınca para 5 TL artıyor', en: 'Each extra week adds 5 TL',
      note: 'Tabloda iki nicelik var: hafta sayısı ve para. Hafta sayısı 1 artınca para 5 TL artıyor.' },
    { scene: 3, start: 30.4, end: 37.8, tr: 'Hafta sayısına n diyelim: 20 + 5 × n', en: 'Call the week number n: 20 + 5 × n',
      note: 'Birinci hafta 20 artı 5 çarpı 1, ikinci hafta 20 artı 5 çarpı 2. Hafta sayısına n dersek, n. hafta 20 artı 5 çarpı n olur.' },
    { scene: 3, start: 38.0, end: 47.8, tr: '20 başlangıç parası, 5n n haftada eklenen para', en: '20 is the starting money, 5n is what n weeks add',
      note: 'Bunu kısaca 20 + 5n diye yazarız. Bu bir cebirsel ifadedir. 20, başlangıçtaki para; 5n, n haftada eklenen para.' },
    { scene: 4, start: 48.4, end: 55.6, tr: '10. hafta: 20 + 5 × 10 = 70 TL', en: 'Week 10: 20 + 5 × 10 = 70 TL',
      note: 'Bir varsayımda bulunalım: 10. haftada 70 TL olur mu? n yerine 10 koyalım: 20 artı 50, 70. Evet! 100 TL’ye de 16. haftada ulaşır.' },
    { scene: 4, start: 55.8, end: 65.8, tr: 'n bir değişken: her hafta farklı değer alır', en: 'n is a variable: it takes a different value each week',
      note: 'n yerine hangi sayıyı koyarsak o haftanın parasını buluruz. n bir değişkendir, her hafta farklı bir değer alır.' },
    { scene: 5, start: 66.6, end: 71.2, tr: '5n + 20 aynı, 25n değil', en: '5n + 20 is the same, 25n is not',
      note: 'Aynı durumu farklı yazabilir miyiz? 5n + 20 de olur, sadece sıra değişti. Peki 25n? n = 3 için 75 çıkıyor ama tabloda 35 var. 25n doğru değil.' },
    { scene: 5, start: 71.4, end: 75.8, tr: '20 + 5h: harf değişti, anlam aynı', en: '20 + 5h: a new letter, the same meaning',
      note: 'Harfi değiştirebiliriz: 20 + 5h de aynı anlama gelir. Sözle de söyleyebiliriz: 20 TL’den başla, her hafta 5 TL ekle.' },
    { scene: 5, start: 76.0, end: 79.8, tr: 'Harfli ifadeler her yerde: çevre 4a, yaş y + 5', en: 'Letters are everywhere: perimeter 4a, age y + 5',
      note: 'Cebirsel ifadeler matematiğin her yerinde işimize yarar: karenin çevresi 4a, 5 yıl sonraki yaşımız y + 5.' },
    { scene: 6, start: 80.6, end: 86.4, tr: 'Bilinen, tablo, cebirsel ifade, sınama', en: 'Known, table, expression, check',
      note: 'Aklında kalsın: bilineni ve bilinmeyeni belirle, tabloyla ilişkiyi bul, cebirsel ifadeyle yaz ve değer vererek sına.' },
    { scene: 6, start: 86.8, end: 91.0, tr: 'Bir harf, sonsuz sayıyı anlatabilir!', en: 'One letter can stand for endless numbers!',
      note: 'Bir harf, sonsuz sayıda durumu tek seferde anlatabilir!' },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.LI = root.LI || {}; root.LI.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
