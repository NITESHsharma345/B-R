/* typing */
const t="Happy Birthday Billo Raani🎂";
let ti=0;
(function type(){
 if(ti<t.length){
  typing.innerHTML+=t[ti++];
  setTimeout(type,70);
 }
})();

/* confetti */
function confetti(){
 for(let i=0;i<100;i++){
  let c=document.createElement("div");
  c.className="confetti";
  c.style.left=Math.random()*100+"vw";
  c.style.background=`hsl(${Math.random()*360},100%,50%)`;
  c.style.animationDuration=2+Math.random()*3+"s";
  document.body.appendChild(c);
  setTimeout(()=>c.remove(),5000);
 }
}

/* start */
function startSurprise(){
  surprise.style.display="block";
  surprise.scrollIntoView({behavior:"smooth"});
  confetti();
  fireworks();

  // ✅ start music automatically
  music.play().catch(()=>{});
  musicBtn.innerHTML = "🔊";
}

/* gift */
function openGift(){
  gift.classList.add("open");
  giftMsg.innerHTML="🎉 Surprise unlocked!";
  confetti();
  fireworks();

  // keep music playing
  music.play().catch(()=>{});
}

/* candle */
function blow(){
 cake.classList.add("blown");
 confetti(); fireworks();
}

/* music */
function toggleMusic(){
  if(music.paused){
    music.play();
    musicBtn.innerHTML = "🔊";
  } else {
    music.pause();
    musicBtn.innerHTML = "🔇";
  }
}
/* FIREWORKS */
const cv=document.getElementById("fw");
const cx=cv.getContext("2d");
cv.width=innerWidth; cv.height=innerHeight;
function fireworks(){
 for(let i=0;i<30;i++){
  let x=Math.random()*cv.width;
  let y=Math.random()*cv.height/2;
  cx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
  cx.beginPath(); cx.arc(x,y,3,0,6.28); cx.fill();
 }
 setTimeout(()=>cx.clearRect(0,0,cv.width,cv.height),400);
}

document.querySelectorAll(".card-click").forEach(card => {
  card.addEventListener("click", function () {
    document.getElementById("modalTitle").innerText =
      this.dataset.title;

    document.getElementById("modalText").innerText =
      this.dataset.text;
  });
});

document.querySelectorAll(".card-click").forEach(card => {
  card.addEventListener("click", function () {

    document.getElementById("modalTitle").innerText =
      this.dataset.title;

    document.getElementById("modalText").innerText =
      this.dataset.text;

    document.getElementById("modalImg").src =
      this.dataset.img;

  });
});



/* 📝 Typing Effect */
const message = `
Happy Birthday to the girl who makes every moment brighter just by being in it 🌸✨
Tum meri bestie nahi ho — Tum Toh meri Billo Raani ho...💖

Aaj ka din extra special hai, kyunki aaj tum duniya mein aayi thi 🎉💫
Aur Haa meri traf se Apni mummy ko Thank you Bolna kyuki Aj ke din waahi tumko leke Aii😄💞

May your smile grow bigger every year 😊
may your dreams come closer every day 🚀
and may your heart always stay this pure and powerful 🤍👑

Thank you for being my support system, my secret keeper, and my nonstop laughter source 😂🫂

Stay crazy, stay shining, stay YOU —
because that’s exactly why you’re loved so much 💝🎂

Happy Birthday Billo Raani — forever team us 👭✨
`;

const typingText = document.getElementById("typingText");
document.getElementById("typingText").style.color = "#000";
let index = 0;
const speed = 80;

function typeEffect() {
  if (index < message.length) {
    const char = message[index];

    if (char === "\n") {
      typingText.innerHTML += "<br>";
    } else {
      typingText.innerHTML += char;
    }

    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();


const SECRET_PASSWORD = "Billo_Raani-18"; // 👈 change this

function checkPassword(){
  const val = document.getElementById("passInput").value;

  if(val === SECRET_PASSWORD){
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("protectedContent").style.display = "block";

    // small celebration
    confetti();
    fireworks();
  } else {
    document.getElementById("passError").innerText = "Wrong password 😢 Try again";
  }
}

document.getElementById("passInput").addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    checkPassword();
  }
});