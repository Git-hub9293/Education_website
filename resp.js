burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', function(){
    rightNav.classlist.toggle('v-class-resp');
    navList.classlist.toggle('v-class-resp');
    navbar.classlist.toggle('h-nav-resp');


})

