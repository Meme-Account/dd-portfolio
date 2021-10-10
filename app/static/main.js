const themeButton = document.getElementById('themeButton');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const body = document.body;

let theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme);
    if (theme == 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
} else {
    theme = 'dark';
    localStorage.setItem('theme', 'dark');
    body.classList.add('dark');
    sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
}

  function toggleTheme() {
      if (theme == 'dark'){
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
        theme = 'light';
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
      } else {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
        theme = 'dark';
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
      }
    
  };

  let current_url = document.location;
    document.querySelectorAll(".nav-link").forEach(function(e){
       if(e.href == current_url){
          e.classList.add("important-nav");
       }
    });

  //DEFINE VARIABLE
var balls = document.getElementsByClassName("ball");

//event.clientX FOR GET THE HORIZONTAL COORDINATE OF THE MOUSE
//event.clientY FOR GET THE VERTICAL COORDINATE OF THE MOUSE
//window.innerWidth FOR GET THE BROWSER WIDTH
//window.innerHeight FOR GET THE BROWSER HEIGHT

document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for(var i=0;i<2;i++){
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

var balls = document.getElementsByClassName("ball");
 
var eyeball = document.querySelectorAll('.ball')
window.addEventListener('mousemove', function(e) {
  var screenSizeX = this.innerWidth
  var screenSizeY = this.innerHeight
  var cursorX = e.pageX;
  var cursorY = e.pageY;
  var percentX = Math.min((cursorX/screenSizeX) * 100, 86)
  var percentY = Math.min((cursorY/screenSizeY) * 100, 86)

  eyeball.forEach(function(eyeball) {
    eyeball.style.top = percentY + '%';
    eyeball.style.left = percentX + '%';

  })
})

const homeQuiz1 = document.getElementById('homeQuiz1')
const homeQuiz2 = document.getElementById('homeQuiz2')
const homeQuiz3 = document.getElementById('homeQuiz3')
const homeQuizAnswer = document.getElementById('homeQuizAnswer')

homeQuiz1.addEventListener("click", ()=> {
  homeQuizAnswer.style.display = 'block'
});

homeQuiz2.addEventListener("click", ()=> {
  homeQuizAnswer.style.display = 'block'
});

homeQuiz3.addEventListener("click", ()=> {
  homeQuizAnswer.style.display = 'block'
});