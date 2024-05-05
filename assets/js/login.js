window.onload=function(){
    let regBtn = document.getElementById('regBtn')
    regBtn.onclick = function(){
        location.href='/register.html'
    }
    
    document.getElementById('btnMe').onclick=function (){
        location.href='/login.html'
    }
    document.getElementById('btnIndex').onclick=function (){
        location.href='/index.html'
    }
    document.getElementById('btnOrder').onclick=function(){
        location.href='/orderList.html'
    }    
}


let logBtn = document.getElementById('loginBtn')
logBtn.onclick = function(){
    usn = document.getElementById('username').value
    pwd = document.getElementById('pwd').value
    if(usn=='13998717657' && pwd=='12345'){
        location.href='/userpage.html'
    }
}