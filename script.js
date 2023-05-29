const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark/Light Mode Styles

function switchModes(mode) {
  const black = 'rgb(0 0 0 / 50%)';
  const white = 'rgb(255 255 255 / 50%)';
  const isLight = mode === 'light';
  const addIcon = isLight ? 'fa-sun' : 'fa-moon';
  const removeIcon = isLight ? 'fa-moon' : 'fa-sun';
  
  nav.style.backgroundColor = isLight ? white : black;
  textBox.style.backgroundColor = isLight ? black : white;
  toggleIcon.children[0].textContent = `${mode} Mode`;
  toggleIcon.children[1].classList.replace(removeIcon, addIcon);
  image1.src = `./img/undraw_proud_coder_${mode}.svg`;
  image2.src = `./img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `./img/undraw_conceptual_idea_${mode}.svg`;
}

// Switch theme dinamically
function switchTheme(event) {
  const isChecked = event.target.checked;
  
  if (isChecked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    switchModes('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    switchModes('light');
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const theme = localStorage.getItem('theme');

if (theme) {
  document.documentElement.setAttribute('data-theme', theme);
  switchModes(theme);
  toggleSwitch.checked = theme === 'dark' ? true : false;
}
