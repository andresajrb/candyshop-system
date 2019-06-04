// Login de usuario

var login = document.getElementById('login');

login.addEventListener('click', loginUsuario);

function loginUsuario() {


    var xhttp = new XMLHttpRequest();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // console.log(username, password);


    xhttp.open("POST", 'http://localhost:3000/logging', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        // console.log(xhttp.readyState);
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse(xhttp.responseText);
            if (!response.ok) {
                // alert(response.message);
                // document.getElementById('message').innerHTML = response.message;
                document.getElementById('errorbar').style.display = 'block';
                document.getElementById('errorbar').className += " show";

                return;
            }
            closeError();
            renderAdmin(response.url);


        }
    };
    xhttp.send("username=" + username + "&password=" + password);

    document.getElementById('password').value = "";

}

function closeError() {
    document.getElementById('errorbar').style.display = 'none';
}

function renderAdmin(url) {

    window.location.replace(url)
}