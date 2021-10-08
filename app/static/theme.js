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