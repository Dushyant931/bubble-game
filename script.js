var timer = 60
var score = 0
var hitrn = 0
function increasescore(){
    score += 10
    document.querySelector('#scoreval').textContent = score
}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector('#hitval').textContent = hitrn
}
function makebubble(){
    var clutter = ''
for(var i = 0; i<=150; i++){
    var rn = Math.floor(Math.random()*10)
    clutter = clutter + `                <div class="bubble">${rn}</div>
`
}
document.querySelector('.bpanel').innerHTML = clutter
}
makebubble();
function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){ 
        timer--
        document.querySelector('#timerval').textContent = timer
        }
        else{
            clearInterval(timerint)
            document.querySelector('.bpanel').innerHTML = `<h1>GAME OVER</h1>`
        }
        
        },1000)
       
    

}
document.querySelector('.bpanel')
.addEventListener('click', function(dets){
    var clickedn = Number(dets.target.textContent)
    if(clickedn === hitrn){
        increasescore();
        makebubble();
        getnewhit();
    }
        
})
runtimer();
getnewhit();

