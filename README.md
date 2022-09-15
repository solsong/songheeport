
# 김송희 portfolio site (https://solsong.github.io/songheeport/)

## 제작기간 일주일

## 사용언어 : HTML CSS Jacascript jQuery

## 사용기술 

### 1. 사용 폰트 마루부리
```css
@font-face {
    font-family: MaruBuri-Regular;
    src: url(../font/MaruBuri-Regular.ttf);
    src: url(../font/MaruBuri-Regular.otf);
}

```
### 2. scroll
```js
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

```
### 3. 이미지 효과

```js
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

```


