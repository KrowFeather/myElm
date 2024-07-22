window.onload = function(){
    let bus1 = document.getElementById('bus1')
    
    bus1.onclick = function(){
        location.href='/businessinfo1.html'
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
num1=document.getElementById('num1')
num1.innerHTML=cnt1+cnt2