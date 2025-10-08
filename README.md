# MEL Attendance — No-Backend Mode (Tags) + Optional Google Sheet

- بدون أي سيرفر: بنخزن رد اليوم كتاج داخل OneSignal باسم `att_YYYY-MM-DD = yes|no|remote`.
- لو حطيت `RSVP_ENDPOINT` في `config.js`، الصفحة هتبعت كمان الرد إلى Google Sheet (Apps Script).

## نشر
- ارفع كل الملفات في جذر الريبو (Settings → Pages → main / root).
- في OneSignal، خليك ضابط Site URL على نفس رابط GitHub Pages.

## جدولة الإشعار (OneSignal Dashboard)
Message: **هل ستحضر غدًا إلى العمل؟**
Buttons:
- نعم سأحضر → `.../rsvp.html?answer=yes`
- سأعمل من الخارج → `.../rsvp.html?answer=remote`
- لا لن أحضر → `.../rsvp.html?answer=no`

## قراءة النتائج (بدون باك إند)
- اعمل Segments حسب التاج `att_YYYY-MM-DD` وشوف الأعداد مباشرة في OneSignal.
- لو عايز تصدير CSV مفصل، استخدم Google Sheet عبر `RSVP_ENDPOINT`.

