self.addEventListener('push', function(event) {
  const data = event.data.json();
  const title = data.title || "New Chat Message";
  const options = {
    body: data.body,
    icon: '/static/Chat/img/icon.png', // optional
    badge: '/static/images/icon.png' // optional
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
