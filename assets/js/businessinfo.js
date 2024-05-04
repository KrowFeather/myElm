window.onclick=function(){
    let btnCheck = document.getElementById('btnCheck')
    btnCheck.onclick=function(){
        location.href='/order.html'
    }

    document.getElementById('btnBack').onclick=function(){
        location.href='/businesslist1.html'
    }

    let totalcash = document.getElementById('totalcash')
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let cnt1=num1
    let cnt2=num2
    let tot=0

    document.getElementById('add1').onclick=function(){
        cnt1+=1;
        tot+=15
        totalcash=''+tot
        num1.innerText=''+cnt1
    }
    document.getElementById('add1').onclick=function(){
        cnt2+=1;
        tot+=15
        totalcash=''+tot
    }
}