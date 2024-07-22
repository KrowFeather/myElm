window.onload=function () {
    document.getElementById('btnMe').onclick=function (){
        location.href='/userpage.html'
    }
    document.getElementById('btnIndex').onclick=function (){
        location.href='/index.html'
    }
    document.getElementById('btnOrder').onclick=function(){
        location.href='/orderList.html'
    }
    document.cookie = 'username=KrowFeather'
    console.log(document.cookie)
}