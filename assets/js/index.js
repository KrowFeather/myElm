window.onload = function () {
    document.onscroll = function () {
        let s1 = document.documentElement.scrollTop;
        let s2 = document.body.scrollTop;
        let scroll = s1 == 0 ? s2 : s1;
        let width = document.documentElement.clientWidth;
        let search = document.getElementById('fixedbox');
        if (scroll > width * 0.12) {
            search.style.position = 'fixed';
            search.style.top = '0';
            search.style.left = '0';
        } else {
            search.style.position = 'static';
        }
    }

    let category1 = document.getElementById('food_item1')
    category1.onclick = function(){ 
        location.href='/businesslist1.html'
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