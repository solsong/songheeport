
// cnadle 부유효과
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(0.5, 2.5), {
    y : size,
    repeat : -1,
    yoyo : true,
    ease : Power1.easeInOut,
    delay : random(0, delay)
    });
}
floatingObject('.imgjs', 1, 15);

$('nav ul li').hover(function(){
    $(this).find('.sub').stop().slideDown(600);
},function(){
    $(this).find('.sub').stop().slideUp(300);
});

const lis =document.querySelectorAll("li");
const contents =document.querySelectorAll(".content");
const firstTop = contents[1].offsetTop;
const secondTop = contents[0].offsetTop;
const thirdTop = contents[2].offsetTop;

lis[2].onclick = function(){
    window.scroll({top:2000,behavior: 'smooth'})
}
lis[0].onclick = function(){
    window.scroll({top:1400,behavior: 'smooth'})
}

$(function(){
    $('.topbtn').click(function(){
        $('html,body').animate({
            scrollTop:0},'slow');
        })
    })