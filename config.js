// إعداد التطبيق
window.APP_CONFIG = {
  ONE_SIGNAL_APP_ID: "cb392247-19c2-4e2d-bc70-e89ff4f14192",  // متضبوطة
  RSVP_ENDPOINT: "",               // (اختياري) لو عايز تسجّل في Google Sheet حط رابط الويب آب هنا
  NOTIFY_TEXT: "هل ستحضر غدًا إلى العمل؟",
  BUTTONS: [
    { id: "yes",    text: "نعم سأحضر",       value: "yes" },
    { id: "no",     text: "لا لن أحضر",      value: "no" },
    { id: "remote", text: "سأعمل من الخارج", value: "remote" }
  ]
};
