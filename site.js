// Register service worker, if browser supports them
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    console.log('Registered service worker scoped to', registration.scope);
  })
  .catch(function(error) {
    console.error('Failed to register service worker', error)
  });
}
