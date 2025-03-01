
function showForm(type){
    document.getElementById('registationForm').classList.add('d-none');
    document.getElementById('loginForm').classList.add('d-none');

    if (type === 'register'){
        document.getElementById('registationForm').classList.remove('d-none');
    }
    else if (type === 'login'){
        document.getElementById('loginForm').classList.remove('d-none');
    }
}

function register(){
    let Name = document.getElementById('registerName').value;
    let UserName = document.getElementById('RegisterUserName').value;
    let Email = document.getElementById('registerEmail').value;
    let Pass = document.getElementById('registerPass').value;

    if(!Name){
        alert('Name field Required');
        return;
    }
    else if(!UserName){
        alert('User field Required!');
        return;
    }
    else if(!Email){
        alert('Email field required!');
        return;
    }
    else if(!Pass){
        alert('Password field required!');
        return;
    }

    let user_data = {
        Name,
        UserName,
        Email,
        Pass
    }

    localStorage.setItem(Email, JSON.stringify(user_data));
    alert('Registation is Complite..');
    
    document.getElementById('registerName').value='';
    document.getElementById('RegisterUserName').value='';
    document.getElementById('registerEmail').value='';
    document.getElementById('registerPass').value='';
    console.log(user_data);

}

function login(){
    logEmail = document.getElementById('loginEmail').value;
    logPass = document.getElementById('loginPass').value;

    
    if (!logEmail){
        alert('Email fild required!');
        return;
    }
    else if(!logPass){
        alert('Password fild required!');
        return;
    }
    
    // console.log('Input email', logEmail);
    let user_data = localStorage.getItem(logEmail);
    // console.log('Get data', user_data);
    
    if (!user_data){
        alert('User not exist!');
    }
    
    let user = JSON.parse(user_data);
    if (logPass == user.Pass){
        alert('Successfully LogIn');
    }
    else if(logPass != user.Pass){
        alert("Password Incorrect");
    }

    document.getElementById('loginEmail').value='';
    document.getElementById('loginPass').value='';

}