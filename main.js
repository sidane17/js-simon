let r=0;
let risultato=0;
let a=[];
let b=[];
let v=[];
a[0]=document.getElementById("num1");
a[1]=document.getElementById("num2");
a[2]=document.getElementById("num3");
a[3]=document.getElementById("num4");
a[4]=document.getElementById("num5");
b=document.querySelectorAll("input")
let score=document.getElementById("score");

// --------------------------------------------------------------------------------------------------
function casuale(){
 r=Math.floor(Math.random() * (5) + 1);
 return r;
}
a[0].innerHTML=casuale();
a[1].innerHTML=casuale();
a[2].innerHTML=casuale();
a[3].innerHTML=casuale();
a[4].innerHTML=casuale();


let button=document.getElementById("button");
button.onclick=function(){
    setInterval(function(){},1000);
    for(let i=0;i<a.length;i++){
        a[i].classList.remove("none")
        
    }
    setTimeout(function(){
        for(let i=0;i<a.length;i++){
            a[i].classList.add("none")
            b[i].classList.remove("none")
            document.getElementById("score").classList.remove("none")
        }
    score.onclick=function(){
         v[0]=document.getElementById("input1").value;
         v[1]=document.getElementById("input2").value;
         v[2]=document.getElementById("input3").value;
         v[3]=document.getElementById("input4").value;
         v[4]=document.getElementById("input5").value;
         
         for(let i=0;i<a.length;i++){
            a[i]=parseInt(a[i].innerHTML);
            v[i]=parseInt(v[i]);
        }
        console.log(a);
        for(let i=0;i<a.length;i++){
            if(a[i]==v[i]){
                risultato ++;
            }
        }
        document.getElementById("risultato").innerHTML=risultato;
    }
    
},30*1000)
}

