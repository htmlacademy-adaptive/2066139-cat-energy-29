let headerMain=document.querySelector(".main-header"),navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");headerMain.classList.remove("main-header--nojs"),headerMain.classList.contains("main-header--nojs")||navMain.classList.add("main-nav--closed"),navToggle.addEventListener("click",(function(){navMain.classList.toggle("main-nav--closed"),navMain.classList.toggle("main-nav--opened")}));