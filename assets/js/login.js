window.onload = function () {
    let regBtn = document.getElementById('regBtn')
    regBtn.onclick = function () {
        location.href = '/register.html'
    }

    document.getElementById('btnMe').onclick = function () {
        location.href = '/login.html'
    }
    document.getElementById('btnIndex').onclick = function () {
        location.href = '/index.html'
    }
    document.getElementById('btnOrder').onclick = function () {
        location.href = '/orderList.html'
    }

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) == 0) return true
        }
        return false;
    }
    function checkCookie() {
        let username = getCookie('username');
        if (username) {
            location.href='/userpage.html'
        }
        else {
        }
    }
    checkCookie()
}


let logBtn = document.getElementById('loginBtn')
logBtn.onclick = function () {
    usn = document.getElementById('username').value
    pwd = document.getElementById('pwd').value
    if (usn == '13998717657' && pwd == '12345') {
        location.href = '/userpage.html'
    }
}
