'use strict';


// モーダルウィンドウ
{
     const open = document.querySelector('.header-btn');
     const modal = document.querySelector('.modal');
     const mask = document.getElementById('modal__mask');
     const close = document.getElementById('close-modal');


     open.addEventListener('click', ()=>{
         modal.classList.add('is-show');
     });
     close.addEventListener('click', ()=>{
         modal.classList.remove('is-show');
     });
     mask.addEventListener('click', ()=>{
          close.click();
     });
}

// ハンバーガーメニュー
{
     const hamburger = document.getElementById('hamburger');
     const menu = document.getElementById('header-menu');

     hamburger.addEventListener('click', ()=>{
          hamburger.classList.toggle('is-active');
          menu.classList.toggle('open');
     });
}

// スクロールヘッダー

{
     
     window.addEventListener("scroll",function(){
          const scroll = document.documentElement.scrollTop;
          const header = document.querySelector('.header');
          const menuItem = document.querySelectorAll('.header-menu__item');
          const bar = document.querySelectorAll('.hamburger__bar');
          const ImgChange = document.querySelector('.header-logo-img');

               if(scroll > 0){
                    ImgChange.src = ImgChange.dataset.image ;
                    header.classList.add('change-header-color');
                    for(let i = 0; i < bar.length; i++){
                         bar[i].classList.add('change-bar-color');
                    }
                    for (let i = 0; i < menuItem.length; i++) {
                         menuItem[i].classList.add('change-menu-color');
                    }
               }else{
                    ImgChange.src = ImgChange.dataset.imageundo;
                    header.classList.remove('change-header-color');
                    for (let i = 0; i < bar.length; i++) {                    
                         bar[i].classList.remove('change-bar-color');
                    }
                    for (let i = 0; i < menuItem.length; i++) {
                         menuItem[i].classList.remove('change-menu-color');
                    }
               }
            
     });
}

// タブメニュー
{
     const tabs = document.querySelectorAll(".tabs");
     const tabsMenu = document.querySelectorAll(".tab-menu");

     for (let i = 0; i < tabs.length; i++) {
     tabs[i].addEventListener("click",function(e){
          e.preventDefault();

     for (let j = 0; j < tabs.length; j++) {
          tabs[j].classList.remove('tab-border');
     }
     for (let j = 0; j < tabsMenu.length; j++) {
          tabsMenu[j].classList.remove('tab-active');
     }

          this.classList.add("tab-border");
          tabsMenu[i].classList.add("tab-active");
     }); 
     }
}

// フワッとスクロールアニメーション

{
  const targetElements = document.querySelectorAll(".animationTarget");
  document.addEventListener("scroll", function(){
       targetElements.forEach(function(targetElement){
          const getElementDistance = targetElement.getBoundingClientRect().top + targetElement.clientHeight * 0.6;
          if (window.innerHeight > getElementDistance) {
               targetElement.classList.add("show");
          }else{
               targetElement.classList.remove("show");

          }
       });

  });
}


// カレンダー
flatpickr(".flatpickr", { 
     locale:"ja",
     minDate: "today",
	mode: "range",
	dateFormat: "Y-m-d",

});



