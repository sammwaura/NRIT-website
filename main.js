let menu = document.querySelector('.fa-bars');
let navigation = document.querySelector('.navigation');


menu.addEventListener('click', function(){

	menu.classList.toggle('fa-times');
	navigation.classList.toggle('nav-toggle');
});

window.addEventListener('scroll' () =>{
	menu.classList.remove('fa-times');
	navigation.classList.remove('nav-toggle');
})

