const cacheName = 'catao-pessoal';

const filesToCache = [
    './',
    './index.html',
    './css/main.css',
    './img/download.png',
    './img/savanas.jpeg',
    './script/main.js'



]



self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then( cache =>{
            return cache.addAll(filesToCache);
        })
    )
})



self.addEventListener( 'fetch', event => {
    event.respondwith(
        caches.match(event.request).then(response =>{
            return response|| fetch(event.request);

        })
    )
    
})