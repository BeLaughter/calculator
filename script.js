
function display(val){
    let calcDisplay=document.querySelector(".calcDisplay")
 calcDisplay.textContent += val
 return val
}

 
let solve = document.querySelector(".solve");
    solve.addEventListener(
    'click', function(){
        let problem = document.querySelector(".calcDisplay").textContent;
        let solution = eval(problem);
        let calcDisplay2 = document.querySelector(".calcDisplay2")
       calcDisplay2.textContent = solution
        return solution
    });


let delet = document.querySelector(".delet");
    delet.addEventListener(
    'click', function(){
        let num = document.querySelector(".calcDisplay").textContent;
        let resul = num.substring(0, num.length-1);
        document.querySelector(".calcDisplay").textContent= resul
        return resul
    });


let clear = document.querySelector(".clear");

    clear.addEventListener(
    'click', function(){
        document.querySelector(".calcDisplay").textContent="";
        document.querySelector(".calcDisplay2").textContent="";
    });

let ancor = document.querySelector(".ancor");
    ancor.addEventListener(
    'click', function(){
        let allfunc = document.querySelector(".allfunc");
        allfunc.classList.remove('hidden')
    });

let anc = document.querySelector(".anc");
    anc.addEventListener(
    'click', function(){
        let allfunc = document.querySelector(".allfunc");
        allfunc.classList.add('hidden')
    });

let percent = document.querySelector(".percentage");
    percent.addEventListener(
    'click', function(){
        let p = document.querySelector(".calcDisplay2").textContent;
        let s = p/100;
        document.querySelector(".calcDisplay2").textContent = s;
        return s;
    });

let neg = document.querySelector(".neg");
    neg.addEventListener(
    'click', function(){
        let d = document.querySelector(".calcDisplay").textContent;
        let e = d * -1;
        document.querySelector(".calcDisplay").textContent = e;
        return e;
    });
        
let root = document.querySelector(".root");
    root.addEventListener(
    'click', function(){
        let r = document.querySelector(".calcDisplay").textContent;
        let f = r** 0.5;
        document.querySelector(".calcDisplay").textContent = f;
        return f;
    });

let random = document.querySelector(".random");
random.addEventListener(
    'click', function(){
        
        let g = Math.trunc(Math.random()*9)-1
        document.querySelector(".calcDisplay").textContent = g;
        return g;
    });


    // sincostan
    
    let sin = document.querySelector(".sin");
    sin.addEventListener(
    'click', function(){
        let res = document.querySelector(".calcDisplay").textContent;
        radian = res * Math.PI/180;
        let vest = Math.sin(radian)
        document.querySelector(".calcDisplay").textContent = vest;
        return vest;
    });

    let cos = document.querySelector(".cos");
    cos.addEventListener(
    'click', function(){
        let res = document.querySelector(".calcDisplay").textContent;
        radian = res * Math.PI/180;
        let fest = Math.cos(radian)
        document.querySelector(".calcDisplay").textContent = fest;
        return fest;
    });
    
    let tan = document.querySelector(".tan");
    tan.addEventListener(
    'click', function(){
        let res = document.querySelector(".calcDisplay").textContent;
        radian = res * Math.PI/180;
        let gest = Math.tan(radian)
        document.querySelector(".calcDisplay").textContent = gest
        return gest;
    });
    