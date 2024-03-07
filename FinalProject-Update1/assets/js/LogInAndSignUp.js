function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = {
        username: username,
        email: email,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng ký thành công! Mời bạn đăng nhập")
    window.location.href="login.html"
}

function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(user);
    console.log(data);
    if(user == null)  {
        alert("Vui lòng nhập Email và mật khẩu đăng nhập")
    } else if (email == data.email && 
                password == data.password) {
        alert("Đăng nhập thành công")
        window.location.href="index.html"
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác")
    }
}