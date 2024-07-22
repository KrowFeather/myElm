window.onload=function () {
    let topayment = document.getElementById('topayment')
    topayment.onclick=function(){
        location.href='/payment.html'
    }
}

function getCookie(cname) {
    let val = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(val) == 0) return c.substring(val.length,c.length);
    }
    return -1;
}
function checkCookie(str) {
    let res = getCookie(str);
    return res
}

let cnt1=parseInt(checkCookie('cnt1'))
let cnt2=parseInt(checkCookie('cnt2'))
let tt1=parseInt(checkCookie('tot1'))
let tt2=parseInt(checkCookie('tot2'))
let total=parseInt(checkCookie('total'))
console.log(cnt1)
console.log(cnt2)
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let tot1 = document.getElementById('tot1')
let tot2 = document.getElementById('tot2')
let totalcash = document.getElementById('total')
num1.innerHTML=''+cnt1
num2.innerHTML=''+cnt2
tot1.innerHTML=''+tt1
tot2.innerHTML=''+tt2
totalcash.innerText=''+total