function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
if (navigator.serviceWorker.controller) {
    console.log('[PWA Builder] active service worker found, no need to register')
} else {
    navigator.serviceWorker.register('sw.js', {
        scope: './'
    }).then(function(reg) {
        console.log('Service worker has been registered for scope:'+ reg.scope);
    });
}
var elem = document.querySelector('.dropdown-trigger');
var instance = M.Dropdown.init(elem, options);

// Or with jQuery

$('.dropdown-trigger').dropdown();

instance.open();

instance.close();
instance.recalculateDimensions();
$('head style[type="text/css"]').attr('type', 'text/less');
less.refreshStyles();
window.randomize = function() {
	$('.radial-progress').attr('data-progress', Math.floor(Math.random() * 100));
}
setTimeout(window.randomize, 200);
$('.radial-progress').click(window.randomize);

// Read more here: https://medium.com/@andsens/radial-progress-indicator-using-css-a917b80c43f9