function heartMsgEffect() {
let heartMessage = document.querySelector(".hero .heart-msg");
let hero = document.querySelector(".hero");

hero.addEventListener("dblclick", function() {
   heartMessage.style.transform = "scale(1)",
      heartMessage.style.opacity = 1

   setTimeout(function() {
      heartMessage.style.transform = "scale(0)",
         heartMessage.style.opacity = 0
   }, 10000)
})
}
heartMsgEffect();