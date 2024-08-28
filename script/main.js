//execua apos caregar a paggina
window.onload = () => {
    'use strict';
    if('serviceWorker' in navigator) {
        navigator.serviceWorker
                     .register('./sw.js')
    }

}