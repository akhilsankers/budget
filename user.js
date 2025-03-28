function register(){
    var name = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    const data ={
        name: name,
        password: password,
        transactions: [],
        balance: 0
    }
    localStorage.setItem(email, JSON.stringify(data));
    alert("Registered successfully");
    window.location.href = "index.html"
}

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var user = JSON.parse(localStorage.getItem(email));
    if(user.password === password){
        alert("Login successful");
        sessionStorage.setItem("email",email);
        window.location.href = "home.html";
        
    }else{
        alert("Login failed");
    }   
}