let holiDate=new Date("March 04, 2026 00:00:00").getTime();
setInterval(()=>{
let now=new Date().getTime();
let diff=holiDate-now;
let d=Math.floor(diff/(1000*60*60*24));
let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
let m=Math.floor((diff%(1000*60*60))/(1000*60));
let s=Math.floor((diff%(1000*60))/1000);
document.getElementById("countdown").innerHTML=
"⏳ "+d+"d "+h+"h "+m+"m "+s+"s";
},1000);

/* 🎵 Music */
function toggleMusic(){
let music=document.getElementById("music");
music.paused?music.play():music.pause();
}

// WhatsApp Share
function shareWhatsApp(){
let text="🌈 Happy Holi! Visit this colorful website 🎉";
window.open("https://wa.me/?text="+encodeURIComponent(text));
}

/* 🔐 Admin Add Image */
function addImage(){
let url=document.getElementById("imgURL").value;
if(url){
let img=document.createElement("img");
img.src=url;
document.getElementById("gallery").appendChild(img);
}
}

/* 🎮 Mini Game */
let gameArea=document.getElementById("gameArea");
let score=0;

function createBall(){
let ball=document.createElement("div");
ball.classList.add("colorBall");
ball.style.background=`hsl(${Math.random()*360},100%,50%)`;
ball.style.left=Math.random()*260+"px";
ball.style.top=Math.random()*200+"px";
ball.onclick=function(){
score++;
document.getElementById("score").innerText="Score: "+score;
ball.remove();
}
gameArea.appendChild(ball);
setTimeout(()=>{ball.remove();},2000);
}

setInterval(createBall,1000);