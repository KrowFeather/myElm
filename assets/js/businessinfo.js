window.onclick = function () {
    let btnCheck = document.getElementById('btnCheck')
    btnCheck.onclick = function () {
        location.href = '/order.html'
    }
    let cnt1=parseInt(checkCookie('cnt1'))
    let cnt2=parseInt(checkCookie('cnt2'))
    let tot1=parseInt(checkCookie('tot1'))
    let tot2=parseInt(checkCookie('tot2'))
    let total=parseInt(checkCookie('total'))
    console.log(cnt1)
    console.log(cnt2)
    console.log(tot2)
    console.log(tot2)
    console.log(total)
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
console.log(cnt1)
console.log(cnt2)
let totalcash = document.getElementById('totalcash')
totalcash.innerText=tot1+tot2
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
num1.innerHTML=cnt1
num2.innerHTML=cnt2
let quantity = document.getElementById('quantity')
quantity.innerText=cnt1+cnt2
let qty = cnt1+cnt2

document.getElementById('add1').onclick = function () {
    cnt1++;
    tot1+=15
    total+=15
    document.cookie='tot1='+tot1
    document.cookie='cnt1='+cnt1
    document.cookie='total='+total
    totalcash.innerText = '' + (tot1+tot2)
    num1.innerText = '' + cnt1
    qty++;
    quantity.innerText = '' + qty
}
document.getElementById('add2').onclick = function () {
    cnt2++;
    tot2+=12
    total+=12
    document.cookie='tot2='+tot2
    document.cookie='cnt2='+cnt2
    document.cookie='total='+total
    totalcash.innerText = '' + (tot1+tot2)
    num2.innerText = '' + cnt2
    qty++;
    quantity.innerText = '' + qty
}
document.getElementById('sub1').onclick = function () {
    if (cnt1 == 0) {
        return
    }
    cnt1--;
    tot1-=15
    total-=15
    document.cookie='tot1='+tot1
    document.cookie='cnt1='+cnt1
    document.cookie='total='+total
    totalcash.innerText = '' + (tot1+tot2)
    num1.innerText = '' + cnt1
    qty--;
    quantity.innerText = '' + qty
}
document.getElementById('sub2').onclick = function () {
    if (cnt2 == 0) {
        return
    }
    cnt2--;
    tot2-=12
    total-=12
    document.cookie='tot2='+tot2
    document.cookie='cnt2='+cnt2
    document.cookie='total='+total
    totalcash.innerText = '' + (tot1+tot2)
    num2.innerText = '' + cnt2
    qty--;
    quantity.innerText = '' + qty
}