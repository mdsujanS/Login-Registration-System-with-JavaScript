
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
        alert('Please Enter your Full Name.');
        return;
    }
    else if(!UserName){
        alert('User name is Required!');
        return;
    }
    else if(!Email){
        alert('Please Enter your Email.');
        return;
    }
    else if(!Pass){
        alert('Please Enter your password.');
        return;
    }

    let user_data = {
        Name,
        UserName,
        Email,
        Pass
    }

    localStorage.setItem(Email, JSON.stringify(user_data));
    alert('Registation Is Complite..');
    
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
        alert('Please Enter Your Email');
        return;
    }
    else if(!logPass){
        alert('Please enter Your Password');
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