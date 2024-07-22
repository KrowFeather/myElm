window.onload=function(){
    let showBtn = document.getElementById('showBtn')
    let detailBox = document.getElementById('detailBox')
    detailBox.style.display='none'
    showBtn.onclick=function(){
        if(detailBox.style.display=='none'){
            detailBox.style.display='block'
        }else{
            detailBox.style.display='none'
        }
    }
    let alipayCheck = document.getElementById('aliCheck')
    let wechatCheck = document.getElementById('weChatCheck')
    let alipayCheckBtn = document.getElementById('aliCheckBtn')
    let wechatCheckBtn = document.getElementById('weChatCheckBtn')
    wechatCheckBtn.style.display='none'
    alipayCheck.onclick=function(){
        alipayCheckBtn.style.display='block'
        wechatCheckBtn.style.display='none'
    }
    wechatCheck.onclick=function(){
        alipayCheckBtn.style.display='none'
        wechatCheckBtn.style.display='block'
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
let tot1=parseInt(checkCookie('tot1'))
let tot2=parseInt(checkCookie('tot2'))
let total=parseInt(checkCookie('total'))

let totalcash = document.getElementById('total')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let tt1 = document.getElementById('tot1')
let tt2 = document.getElementById('tot2')
totalcash.innerHTML=total
num1.innerText=cnt1
num2.innerText=cnt2
tt1.innerText=tot1
tt2.innerText=tot2