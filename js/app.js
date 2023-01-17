data = document.getElementById('blog-content');

document.getElementById('blog-submit').addEventListener('click', function() {
    window.localStorage.setItem('blog', data.value);
    updateUI();
});

document.getElementById('blog-submit').addEventListener('click', function() {
    const blogs = localStorage.getItem('blogt');
    document.getElementById('blog-view').textContent = blogs;
    updateUI();
})

//2

datb = document.getElementById('blog-title');

document.getElementById('blog-submit').addEventListener('click', function() {
    window.localStorage.setItem('title', datb.value);
    updateUI();
});

document.getElementById('blog-submit').addEventListener('click', function() {
    const blogt = localStorage.getItem('title');
    document.getElementById('blog-titled').textContent = blogt;
    updateUI();
})

//3

datc = document.getElementById('blog-name');

document.getElementById('blog-submit').addEventListener('click', function() {
    window.localStorage.setItem('name', datc.value);
    updateUI();
});

document.getElementById('blog-submit').addEventListener('click', function() {
    const blogu = localStorage.getItem('name');
    document.getElementById('blog-named').textContent = blogu;
    updateUI();
})






//ssds
window.addEventListener('load', function(){
document.getElementById('blog-view').textContent = localStorage.getItem('blog');
})
//2

window.addEventListener('load', function(){
    document.getElementById('blog-titled').textContent = localStorage.getItem('title');
    })

//3

window.addEventListener('load', function(){
    document.getElementById('blog-named').textContent = localStorage.getItem('name');
    console.log("days")
    })

document.getElementById('blog-view').addEventListener('load', function() {
    document.getElementById('blog-view').innerHTML = localStorage.getItem('blog');
})

document.getElementById('blog-titled').addEventListener('load', function() {
    document.getElementById('blog-titled').innerHTML = localStorage.getItem('blog');
})

document.getElementById('blog-named').addEventListener('load', function() {
    document.getElementById('blog-named').innerHTML = localStorage.getItem('blog');
})


function updateUI() {
    var values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) {
        values.push( localStorage.getItem(key[i]) );
    }
    document.getElementById('blog-view').textContent = blogs[0];
    document.getElementById('blog-named').textContent = blogu;
    document.getElementById('blog-titled').textContent = blogt;
}


//signup
window.onload = function (){
    console.log("days")
}

document.addEventListener("DOMContentLoaded", check())
//signup
function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    console.log('get here')
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }
else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}
//checking
function check(){
    console.log('here')

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");
    var dispName = document.getElementById('dispName');
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        messagee()
    }else{
        alert('Error on login');
    }
}

function messagee(){
    console.log("nights")
    document.getElementById("dispName").textContent = userName.value;
}