
function display(val){
 document.querySelector(".calcDisplay").value += val
 return val
}

 
let solve = document.querySelector(".solve");
    solve.addEventListener(
    'click', function(){
        let problem = document.querySelector(".calcDisplay").value;
        let solution = eval(problem);
        document.querySelector(".calcDisplay").value = solution
        return solution
    });


let delet = document.querySelector(".delet");
    delet.addEventListener(
    'click', function(){
        let num = document.querySelector(".calcDisplay").value;
        let resul = num.substring(0, num.length-1);
        document.querySelector(".calcDisplay").value = resul
        return resul
    });


let clear = document.querySelector(".clear");

    clear.addEventListener(
    'click', function(){
        document.querySelector(".calcDisplay").value="";
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
        let p = document.querySelector(".calcDisplay").value;
        let s = p/100;
        document.querySelector(".calcDisplay").value = s;
        return s;
    });

let neg = document.querySelector(".neg");
    neg.addEventListener(
    'click', function(){
        let d = document.querySelector(".calcDisplay").value;
        let e = d * -1;
        document.querySelector(".calcDisplay").value = e;
        return e;
    });
        
let root = document.querySelector(".root");
    root.addEventListener(
    'click', function(){
        let r = document.querySelector(".calcDisplay").value;
        let f = r** 0.5;
        document.querySelector(".calcDisplay").value = f;
        return f;
    });

let random = document.querySelector(".random");
random.addEventListener(
    'click', function(){
        
        let g = Math.trunc(Math.random()*9)-1
        document.querySelector(".calcDisplay").value = g;
        return g;
    });


    // sincostan
    
    let sin = document.querySelector(".sin");
    sin.addEventListener(
    'click', function(){
        let res = document.querySelector(".calcDisplay").value;
        radian = res * Math.PI/180;
        let vest = Math.sin(radian)
        document.querySelector(".calcDisplay").value = vest;
        return vest;
    });

    let cos = document.querySelector(".cos");
    cos.addEventListener(
    'click', function(){
        let res = document.querySelector(".calcDisplay").value;
        radian = res * Math.PI/180;
        let fest = Math.cos(radian)
        document.querySelector(".calcDisplay").value = fest;
        return fest;
    });
    
    let tan = document.querySelector(".tan");
    tan.addEventListener(
    'click', function(){
        let res = document.querySelector(".calcDisplay").value;
        radian = res * Math.PI/180;
        let gest = Math.tan(radian)
        document.querySelector(".calcDisplay").value = gest
        return gest;
    });
    