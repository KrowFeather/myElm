window.onclick = function () {
    let btnCheck = document.getElementById('btnCheck')
    btnCheck.onclick = function () {
        location.href = '/order.html'
    }

    document.getElementById('btnBack').onclick = function () {
        location.href = '/businesslist1.html'
    }

}

let totalcash = document.getElementById('totalcash')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let quantity = document.getElementById('quantity')
let qty = 0
import { total, totalAdd, totalSub } from './global.js'
import { tot1,tot1Add, tot1Sub } from './global.js'
import { tot2,tot2Add, tot2Sub } from './global.js'
import { cnt1, cnt1increment, cnt1sub } from './global.js'
import { cnt2, cnt2increment, cnt2sub } from './global.js'

document.getElementById('add1').onclick = function () {
    cnt1increment()
    tot1Add(15)
    totalAdd(15)
    totalcash.innerText = '' + (tot1+tot2)
    num1.innerText = '' + cnt1
    qty++;
    quantity.innerText = '' + qty
}
document.getElementById('add2').onclick = function () {
    cnt2increment()
    tot2Add(12)
    totalAdd(12)
    totalcash.innerText = '' + (tot1+tot2)
    num2.innerText = '' + cnt2
    qty++;
    quantity.innerText = '' + qty
}
document.getElementById('sub1').onclick = function () {
    if (cnt1 == 0) {
        return
    }
    cnt1sub()
    tot1Sub(15)
    totalSub(15)
    totalcash.innerText = '' + (tot1+tot2)
    num1.innerText = '' + cnt1
    qty--;
    quantity.innerText = '' + qty
}
document.getElementById('sub2').onclick = function () {
    if (cnt2 == 0) {
        return
    }
    cnt2sub()
    tot2Sub(12)
    totalSub(12)
    totalcash.innerText = '' + (tot1+tot2)
    num2.innerText = '' + cnt2
    qty--;
    quantity.innerText = '' + qty
}