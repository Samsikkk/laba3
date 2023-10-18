const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const blockList = document.querySelector(".block__list");
function toggleMenuVisibility() {
menuList.classList.toggle("hide");
}
function toggleBlockVisibility() {
blockList.classList.toggle("hide");
}
menuBtn.addEventListener("click", toggleMenuVisibility);
document.querySelector("#submit").onclick = function(){
  toggleBlockVisibility();
}