

function navSlide() {
  const nav = document.querySelector(".navbar");
  const menu = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
}

navSlide();




const accordion=document.getElementsByClassName("contentBx");
for(i=0; i<accordion.length; i++){
  accordion[i].addEventListener("click", function(){
    this.classList.toggle("active")
  })
}
