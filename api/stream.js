// api/stream.js
export default async function handler(req, res) {
  // ضع رابط m3u8 الأصلي في متغير بيئة على Vercel
  const m3u8Link = process.env.M3U8_URL || 'https://vod3.cf.dmcdn.net/sec2(jv4dg6D-pWcm43dBgzoVCeALotpUh97EsOsm0npzswZkxNjNtpMKjIn5m1aVGse-radcDbpa1HkU55Z8o9hmljfb30iPv5tn4Uzbj-KjPmKGzpx45qWVuUwkMPm1Iz-43BS4JcdZKC5nuC8DoorLcCdueNNRXamTtRWukb0H2V5POuaxuDIOSxn8I5VlCu4x7LyQbHzFf1b489IiadEZuA)/video/fmp4/593760704/h264_aac_hd_hfr/2/manifest.m3u8#cell=cf3';

  // تحقق من مفتاح الوصول
  const key = req.query.key;
  const ACCESS_KEY = process.env.ACCESS_KEY || 'streammmmm2666875765'; // مفتاح افتراضي

  if (key !== ACCESS_KEY) {
    res.status(403).send('Forbidden: Invalid key');
    return;
  }

  // إعادة توجيه إلى رابط M3U8 الأصلي
  res.writeHead(302, {
    Location: m3u8Link,
  });
  res.end();
}
