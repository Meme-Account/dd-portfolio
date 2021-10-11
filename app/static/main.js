const navMenuButton = document.getElementById('navMenuButton');
const sidebar = document.querySelector('.sidebar');

navMenuButton.onclick = () => {
  sidebar.classList.toggle("active")
  navMenuButton.classList.toggle('bx-menu-alt-right')
}

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

  let current_url = window.location.href.split(/[?#]/)[0];;
    document.querySelectorAll(".nav-link").forEach(function(e){
       if(e.href == current_url){
          e.classList.add("important-nav");
       }
    });

const between = (min, num, max) => {
  if (min <= num && num <= max) {
    return num
  }
if (num < min) {
  return min
}

if (num > max) {
  return max
}
}
 
var eyeball = document.querySelectorAll('.ball')
window.addEventListener('mousemove', function(e) {
  var screenSizeX = this.innerWidth
  var screenSizeY = this.innerHeight
  var cursorX = e.pageX;
  var cursorY = e.pageY;
  var percentX = between(16, ((cursorX/screenSizeX) * 100), 85)
  var percentY = between(16, ((cursorY/screenSizeY) * 100), 85)

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
const homeQuizDescriptionText = "Although I like singing 🎶, I am not good enough to audition for the Voice Kids 😅. I have driven a bus 🚌 in India, because my school bus driver let me steer! I have also eaten a caterpillar 🐛 before, on a trip to China (it was delicious)!" 

var homeQuizClicked = 0;

  homeQuiz1.addEventListener("click", ()=> {
    if (homeQuizClicked == 0) {
      homeQuizClicked = 1;
      homeQuizAnswer.style.display = 'block'
      homeQuizDescription.style.display = 'block'
      homeQuizAnswer.innerHTML = "Correct; this one is the lie! You really know a lot about me. "
      homeQuizDescription.innerHTML = homeQuizDescriptionText
    
      homeQuiz1.style.background = "var(--green-transparent)"
      homeQuiz1.style.borderColor = "var(--green-color)"
      homeQuiz1.style.color = "var(--green-color)"
  
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
    homeQuizDescription.innerHTML = homeQuizDescriptionText
  
    homeQuiz1.style.background = "var(--green-transparent)"
    homeQuiz1.style.borderColor = "var(--green-color)"
    homeQuiz1.style.color = "var(--green-color)"
  
    homeQuiz2.style.background = "var(--primary-transparent)"
    homeQuiz2.style.borderColor = "var(--primary-color)"
    homeQuiz2.style.color = "var(--primary-color)"
  
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
    homeQuizDescription.innerHTML = homeQuizDescriptionText
  
    homeQuiz1.style.background = "var(--green-transparent)"
    homeQuiz1.style.borderColor = "var(--green-color)"
    homeQuiz1.style.color = "var(--green-color)"
  
    homeQuiz2.style.background = "var(--transparent)"
    homeQuiz2.style.borderColor = "var(--light-primary)"
    homeQuiz2.style.color = "var(--light-primary)"
  
    homeQuiz3.style.background = "var(--primary-transparent)"
    homeQuiz3.style.borderColor = "var(--primary-color)"
    homeQuiz3.style.color = "var(--primary-color)"

    homeQuiz1.style.cursor = "default";
      homeQuiz2.style.cursor = "default";
      homeQuiz3.style.cursor = "default";
    }
  });
