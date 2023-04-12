let btns = document.querySelectorAll(".register .up .option span")
let bot = document.querySelectorAll(".bot")
let register = document.querySelector(".register")

//check
let mobile
if (navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)) {
    register.style.width="100%"
    register.style.height="100%"
  } else {
    mobile = false ;
  }

document.querySelector("#login").addEventListener("click", ()=>{
  btns.forEach(e=>{
    e.classList.remove("active")
  })
  document.querySelector(".register .up .option #login").classList.add("active")
  bot.forEach(e=>e.style.display="none")
  document.querySelector(".bot.login").style.display="flex"
})

document.querySelector("#signup").addEventListener("click", ()=>{
  btns.forEach(e=>{
    e.classList.remove("active")
  })
  document.querySelector(".register .up .option #signup").classList.add("active")
  bot.forEach(e=>e.style.display="none")
  document.querySelector(".bot.signup").style.display="flex"
})