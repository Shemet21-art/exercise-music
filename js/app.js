//HTML //\

let  btnsArray = []

let btnW = document.querySelector('.w');
btnsArray.push(btnW);
let btnA = document.querySelector('.a');
btnsArray.push(btnA);
let btnS = document.querySelector('.s');
btnsArray.push(btnS);
let btnD = document.querySelector('.d');
btnsArray.push(btnD);
let btnJ = document.querySelector('.j');
btnsArray.push(btnJ);
let btnK = document.querySelector('.k');
btnsArray.push(btnK);
let btnL = document.querySelector('.l');
btnsArray.push(btnL);



document.addEventListener('keydown', function(event) {
 btnsArray.forEach((btn)=>{
    if(`Key${btn.innerHTML.toUpperCase()}` === event.code){
        let audioBtn = new Audio();
        audioBtn.src = `../sounds/${btn.innerHTML}.mp3`;
        audioBtn.autoplay = true;
        btn.classList.add('pressed');
        setTimeout(function(){
            btn.classList.remove('pressed')
        },400)
    }
 })
        })

btnsArray.forEach((btn)=>{
    
    btn.addEventListener('click',function(){
        let audioBtn = new Audio();
        audioBtn.src = `../sounds/${btn.innerHTML}.mp3`;
        audioBtn.autoplay = true;
        btn.classList.add('pressed');
        setTimeout(function(){
            btn.classList.remove('pressed')
        },400)
    })
});






