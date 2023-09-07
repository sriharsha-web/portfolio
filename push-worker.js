self[`appKey`] = `061d6033a95190ea0f37b48c3a255234`;
self[`hostUrl`] = `https://cdn.gravitec.net/sw`;
self.importScripts(`${self[`hostUrl`]}/worker.js`);
// uncomment and set path to your service worker
// if you have one with precaching functionality (has oninstall, onactivate event listeners)
// self.importScripts('path-to-your-sw-with-precaching')
