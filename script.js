let pass = document.querySelector(".btn-passe");
let j1 = document.querySelector('.panel-joueur-0');
let j2 = document.querySelector('.panel-joueur-1');
let de = document.querySelector(".de");
let lnc = document.querySelector(".btn-lancer");
let courent0 = document.getElementById("courent-0");
let courent1 = document.getElementById("courent-1");
let score0 = document.getElementById("score-0");
let score1 = document.getElementById("score-1");
let nv = document.querySelector(".btn-new");
let j1win=document.getElementById("nom-0");
let j2win=document.getElementById("nom-1");
let j1actif;
let j2actif;
let score=[0,0];
let courent=0;
let max=100;
function init() {
    let j1actif = true;
    let j2actif = false;
    ps();
    courent0.innerHTML = 0;
    courent1.innerHTML = 0;
    score0.innerHTML = 0;
    score1.innerHTML = 0;
    score = [0, 0];
    courent = 0;
    j1win.innerHTML="joueur 1 <i class='ion-social-tux'></i>";
    j2win.innerHTML="joueur 2 <i class='ion-social-tux'></i>";
    pass.style.display="block";
    lnc.style.display="block";

}
init();
function ps() {
    winner();
    if (j1actif) {
        j1.classList.remove("actif");
        j2.classList.add("actif");
        j1actif = false;
        j2actif = true;
        score[0]+=courent;
        score0.innerHTML=score[0];
        courent0.innerHTML = 0;
        courent=0;

    } else {
        j2.classList.remove("actif");
        j1.classList.add("actif");
        j1actif = true;
        j2actif = false;
        score[1]+=courent;
        score1.innerHTML=score[1];
        courent1.innerHTML = 0;
        courent=0;

    }
    winner();
}

function lance() {
    let r = Math.floor(Math.random() * 6 + 1);
    de.setAttribute("src", "de-" + r + ".png");
    courent += r;
    if (r!= 1) {
        if (j1actif) {
            courent0.innerHTML = courent;
        } else {
            courent1.innerHTML = courent;
        }
    }else{
        courent=0;
        if (j1actif) {
            courent0.innerHTML = 0;
        } else {
            courent1.innerHTML = 0;
        }
        ps();
    }
    winner();
}
function winner(){
    if(score[0]>=max){
        j1win.innerHTML="joueur 1 win !!!<i class='ion-social-tux'></i>";
        pass.style.display="none";
        lnc.style.display="none";
    }
    if(score[1]>=max){
        j2win.innerHTML="joueur 2 win !!!<i class='ion-social-tux'></i>";
        pass.style.display="none";
        lnc.style.display="none";
    }
}
pass.addEventListener("click", ps);
lnc.addEventListener("click", lance);
nv.addEventListener("click", init);