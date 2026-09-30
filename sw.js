// ทำให้ติดตั้งเป็นแอพได้ — ไม่เก็บแคชอะไรเลย ทุกครั้งดึงจากเว็บจริง แอพจะไม่ค้างเวอร์ชันเก่า
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") e.respondWith(fetch(e.request));
});
