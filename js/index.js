// Your code goes here

// Mouse Over
const imageScale = document.querySelector('img');
imageScale.addEventListener('mouseover', (event) => {
    imageScale.style.transform = 'scale(1.1)';
    imageScale.style.transition = 'transform 0.5s';
});

// Mouse Enter
const scaleUp = document.querySelectorAll('img');
scaleUp.forEach(item => {
  item.addEventListener('mouseenter', event => {
    item.style.transform = 'scale(1.1)';
    item.style.transition = ' transform 0.5s';
  })
});

// Mouse Leave
const scaleDown = document.querySelectorAll('img');
scaleDown.forEach(item => {
  item.addEventListener('mouseleave', event => {
    item.style.transform = 'scale(1)';
    item.style.transition = 'transform 0.5s';
  })
});

// Click
const siteTitle = document.querySelector('h1');
siteTitle.addEventListener('click', event => {
  siteTitle.style.color = 'red';
});

// Double Click
const changeFont = document.querySelectorAll('h2');
changeFont.forEach(item => {
  item.addEventListener('dblclick', event => {
    item.style.fontSize = '2.5rem';
    item.style.color = 'green';
  })
});

// Scroll
window.addEventListener('scroll', event => {
    const backgroundColor = document.querySelector('.main-navigation');
    backgroundColor.style.background = 'orange';
});

// Load
window.addEventListener('load', (event) => {
    alert('Welcome To Fun Bus');
});

// Resize
window.addEventListener('resize', event => {
    const changeLogo = document.querySelector('.logo-heading');
    changeLogo.textContent = "Fun Bus Window Resized"
});

// Key Down
window.addEventListener('keydown', event => {
    const navColor = document.querySelector('.main-navigation');
    navColor.style.background = 'lightBlue';
});

// Key Up
window.addEventListener('keyup', event => {
    const navColor = document.querySelector('.main-navigation');
    navColor.style.background = 'white';
});

// Preventing Button Default
const buttonClick = document.querySelector('.btn');
buttonClick.addEventListener('click', (event) => {
 event.preventDefault();
});

// Propagation
const destColor = document.querySelector('.destination');
destColor.addEventListener('click', (event) => {
destColor.style.background ="green";
event.stopPropagation();
})
const backgroundColor = document.querySelector('body');
backgroundColor.addEventListener('click', (event) => {
  backgroundColor.style.background ="yellow";
})