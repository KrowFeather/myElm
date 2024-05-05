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
