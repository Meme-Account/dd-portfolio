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
const homeQuizDescription = document.getElementById('homeQuizDescription')

var homeQuizClicked = 0;

  homeQuiz1.addEventListener("click", ()=> {
    if (homeQuizClicked == 0) {
      homeQuizClicked = 1;
      homeQuizAnswer.style.display = 'block'
      homeQuizDescription.style.display = 'block'
      homeQuizAnswer.innerHTML = "Correct; this one is the lie! You really know a lot about me. "
      homeQuizDescription.innerHTML = "Although I like singing, I am not good enough to audition for the Voice Kids 😅. I have driven a bus 🚌 in India, because my school bus driver let me steer! I have also eaten a caterpillar 🐛 before, on a trip to China (it was delicious)!" 
    
      homeQuiz1.style.background = "rgba(168,220,118,0.1)"
      homeQuiz1.style.borderColor = "rgb(168,220,118)"
      homeQuiz1.style.color = "rgb(168,220,118)"
  
      homeQuiz2.style.background = "var(--transparent)"
      homeQuiz2.style.borderColor = "var(--light-primary)"
      homeQuiz2.style.color = "var(--light-primary)"
  
      homeQuiz3.style.background = "var(--transparent)"
      homeQuiz3.style.borderColor = "var(--light-primary)"
      homeQuiz3.style.color = "var(--light-primary)"

      homeQuiz1.style.cursor = "default";
      homeQuiz2.style.cursor = "default";
      homeQuiz3.style.cursor = "default";
    }
    
  });
  
  homeQuiz2.addEventListener("click", ()=> {
    if (homeQuizClicked == 0) {
    homeQuizClicked = 1;
    homeQuizAnswer.style.display = 'block'
    homeQuizDescription.style.display = 'block'
    homeQuizAnswer.innerHTML = "Incorrect; I have driven a bus before! The correct answer was the first option. "
    homeQuizDescription.innerHTML = "Although I like singing, I am not good enough to audition for the Voice Kids 😅. I have driven a bus 🚌 in India, because my school bus driver let me steer! I have also eaten a caterpillar 🐛 before, on a trip to China (it was delicious)!" 
  
    homeQuiz1.style.background = "rgba(168,220,118,0.1)"
    homeQuiz1.style.borderColor = "rgb(168,220,118)"
    homeQuiz1.style.color = "rgb(168,220,118)"
  
    homeQuiz2.style.background = "rgba(255,97,136,0.1)"
    homeQuiz2.style.borderColor = "rgb(255,97,136)"
    homeQuiz2.style.color = "rgb(255,97,136)"
  
    homeQuiz3.style.background = "var(--transparent)"
    homeQuiz3.style.borderColor = "var(--light-primary)"
    homeQuiz3.style.color = "var(--light-primary)"

    homeQuiz1.style.cursor = "default";
      homeQuiz2.style.cursor = "default";
      homeQuiz3.style.cursor = "default";
    }
  });
  
  homeQuiz3.addEventListener("click", ()=> {
    if (homeQuizClicked == 0) {
    homeQuizClicked = 1;
    homeQuizAnswer.style.display = 'block'
    homeQuizDescription.style.display = 'block'
    homeQuizAnswer.innerHTML = "Incorrect; I have eaten a caterpillar before! The correct answer was the first option. "
    homeQuizDescription.innerHTML = "Although I like singing, I am not good enough to audition for the Voice Kids 😅. I have driven a bus 🚌 in India, because my school bus driver let me steer! I have also eaten a caterpillar 🐛 before, on a trip to China (it was delicious)!" 
  
    homeQuiz1.style.background = "rgba(168,220,118,0.1)"
    homeQuiz1.style.borderColor = "rgb(168,220,118)"
    homeQuiz1.style.color = "rgb(168,220,118)"
  
    homeQuiz2.style.background = "var(--transparent)"
    homeQuiz2.style.borderColor = "var(--light-primary)"
    homeQuiz2.style.color = "var(--light-primary)"
  
    homeQuiz3.style.background = "rgba(255,97,136,0.1)"
    homeQuiz3.style.borderColor = "rgb(255,97,136)"
    homeQuiz3.style.color = "rgb(255,97,136)"

    homeQuiz1.style.cursor = "default";
      homeQuiz2.style.cursor = "default";
      homeQuiz3.style.cursor = "default";
    }
  });
