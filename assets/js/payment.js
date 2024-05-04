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
}