document.addEventListener('DOMContentLoaded', function () {
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        var target = el.dataset.target;
        var $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});


/*! echo-js v1.7.3 | (c) 2016 @toddmotto | https://github.com/toddmotto/echo */
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof exports?module.exports=e:t.echo=e(t)}(this,function(t){"use strict";var e,n,o,r,c,a={},u=function(){},d=function(t){return null===t.offsetParent},l=function(t,e){if(d(t))return!1;var n=t.getBoundingClientRect();return n.right>=e.l&&n.bottom>=e.t&&n.left<=e.r&&n.top<=e.b},i=function(){(r||!n)&&(clearTimeout(n),n=setTimeout(function(){a.render(),n=null},o))};return a.init=function(n){n=n||{};var d=n.offset||0,l=n.offsetVertical||d,f=n.offsetHorizontal||d,s=function(t,e){return parseInt(t||e,10)};e={t:s(n.offsetTop,l),b:s(n.offsetBottom,l),l:s(n.offsetLeft,f),r:s(n.offsetRight,f)},o=s(n.throttle,250),r=n.debounce!==!1,c=!!n.unload,u=n.callback||u,a.render(),document.addEventListener?(t.addEventListener("scroll",i,!1),t.addEventListener("load",i,!1)):(t.attachEvent("onscroll",i),t.attachEvent("onload",i))},a.render=function(n){for(var o,r,d=(n||document).querySelectorAll("[data-echo], [data-echo-background]"),i=d.length,f={l:0-e.l,t:0-e.t,b:(t.innerHeight||document.documentElement.clientHeight)+e.b,r:(t.innerWidth||document.documentElement.clientWidth)+e.r},s=0;i>s;s++)r=d[s],l(r,f)?(c&&r.setAttribute("data-echo-placeholder",r.src),null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+r.getAttribute("data-echo-background")+")":r.src!==(o=r.getAttribute("data-echo"))&&(r.src=o),c||(r.removeAttribute("data-echo"),r.removeAttribute("data-echo-background")),u(r,"load")):c&&(o=r.getAttribute("data-echo-placeholder"))&&(null!==r.getAttribute("data-echo-background")?r.style.backgroundImage="url("+o+")":r.src=o,r.removeAttribute("data-echo-placeholder"),u(r,"unload"));i||a.detach()},a.detach=function(){document.removeEventListener?t.removeEventListener("scroll",i):t.detachEvent("onscroll",i),clearTimeout(n)},a});