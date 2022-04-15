let loginForm = document.querySelector('.header .login-form')

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active')
  navbar.classList.remove('active')
}

let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  loginForm.classList.remove('active')
}

window.onscroll = () => {
  loginForm.classList.remove('active')
  navbar.classList.remove('active')
}

// SEARCH

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});


// 15.04.2022
