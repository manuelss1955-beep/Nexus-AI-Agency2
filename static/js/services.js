/**
 * services.js — Navegación lateral en páginas de servicio
 */
(function(){'use strict';
document.addEventListener('DOMContentLoaded',function(){
  var navItems=document.querySelectorAll('.service-detail__nav-item');
  if(!navItems.length)return;
  var sections=[];
  navItems.forEach(function(item){
    var href=item.getAttribute('href');
    if(href&&href.startsWith('#')){
      var sec=document.getElementById(href.substring(1));
      if(sec){sections.push({el:sec,link:item});}
    }
  });
  function updateActive(){
    var scrollY=window.scrollY+120;
    var active=null;
    sections.forEach(function(s){
      if(s.el.offsetTop<=scrollY)active=s;
    });
    navItems.forEach(function(i){i.classList.remove('service-detail__nav-item--active');});
    if(active)active.link.classList.add('service-detail__nav-item--active');
  }
  window.addEventListener('scroll',updateActive,{passive:true});
  updateActive();
});
})();