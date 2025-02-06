let level=0;
let h2=document.querySelector("p");
let h3=document.querySelector("h3");
let color=['red','green','yellow','purple'];
user=[];
comp=[];
let HighScore=0;
document.addEventListener("keypress",function(){
    
     setTimeout(levelUp,500);
});
let start=document.querySelector(".start");
let help=document.querySelector(".help");
start.addEventListener("click",function(){
    
    setTimeout(levelUp,500);
    start.classList.add("disable");
    help.classList.add("disable");
});

function levelUp(){
    user=[];
    level++;
    // console.log(level);
h2.innerText=`Level ${level}`;
let randIdx=Math.floor(Math.random()*3)
let randColor=color[randIdx];
let randBtn=document.querySelector(`.${randColor}`);
let compColor=randBtn.getAttribute("id");
comp.push(compColor);
compFlash(randBtn);
console.log(compColor);

}

let allBtns=document.querySelectorAll(".block");
for(btn of allBtns){
    btn.addEventListener("click",btnClick);
}

function btnClick(){
   userColor=this.getAttribute("id");
   user.push(userColor);
    userFlash(this);
    checkAns(user.length-1);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}
function compFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function checkAns(idx){
   
    if(user[idx] === comp[idx]){ 
       
        if(user.length==comp.length){
            setTimeout(levelUp,700);
            
          
        }
    }else{
        if(HighScore < level){
            HighScore=level;
        }
        h3.innerText=`High Score:${HighScore}`;
        h2.innerHTML=`Game Over !<br><br> <b style='color:green;font-size:2rem'>Score : ${level}</b>`;
        start.classList.remove("disable");
        help.classList.remove("disable");
        start.innerText="RESTART";
        reset();  
    }

}
function reset(){
    level=0;
    comp=[];
    user=[];
      
}
