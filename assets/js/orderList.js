window.onload=function(){
    let showBtnArr = document.getElementsByClassName('i material-symbols:arrow-drop-down')
    let detailBoxArr = document.getElementsByClassName('order-detail')
    let payBoxArr = document.getElementsByClassName('order-info-right-icon')
    for(let i=0;i<showBtnArr.length;i++){
        detailBoxArr[i].style.display='none'
    }
    for(let i=0;i<payBoxArr.length;i++){
        payBoxArr[i].onclick=function(){
            location.href='/payment.html'
        }
    }
    for(let i=0;i<showBtnArr.length;i++){
        showBtnArr[i].onclick=function(){
            if(detailBoxArr[i].style.display=='none'){
                detailBoxArr[i].style.display='block'
            }else{
                detailBoxArr[i].style.display='none'
            }  
        }
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