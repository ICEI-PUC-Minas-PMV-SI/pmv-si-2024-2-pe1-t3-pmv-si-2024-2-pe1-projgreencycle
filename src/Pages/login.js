function saveData(){
    let name, email, password;

    name = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    password = document.getElementById("senha").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if (user_records.some((v) => {
        return v.email == email
    })){
        alert("Já existe um usuário cadastrado com esse e-mail.");
    }
    else {
        user_records.push({
            "name": name,
            "email": email,
            "password": password
        })

        localStorage.setItem("users", JSON.stringify(user_records));
    }
}

function login(){
    let email, password;

    email = document.getElementById("email-login").value;
    password = document.getElementById("senha-login").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if (user_records.some((v) => {
        return v.email == email && v.password === password
    })){
        alert("Login realizado.")
        let current_user = user_records.filter((v) => {
            return v.email == email && v.password == password;
        })[0]

        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);
        
        window.location.href="perfil-usuario.html";
    }

    else {
        alert("Dados incorretos.")
    }
}

function logout(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    window.location.href="login.html";
}