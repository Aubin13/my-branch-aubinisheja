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

datc = document.getElementById('blog-content');

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
    document.getElementById('blog-titled').textContent = localStorage.getItem('name');
    })

//3

window.addEventListener('load', function(){
    document.getElementById('blog-named').textContent = localStorage.getItem('title');
    })

document.getElementById('blog-view').addEventListener('load', function() {
    document.getElementById('blog-view').innerHTML = localStorage.getItem('blog');
})

document.getElementById('blog-titled').addEventListener('load', function() {
    document.getElementById('blog-titled').innerHTML = localStorage.getItem('blog');
})

document.getElementById('blog-view').addEventListener('load', function() {
    document.getElementById('blog-view').innerHTML = localStorage.getItem('blog');
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


//login

var user = document.getElementById("user");
var pass = document.getElementById("pass");
var email = document.getElementById("email");
var user2 = document.getElementById("user2");
var pass2 = document.getElementById("pass2");

function register() {
    localStorage.setItem("username", user.value);
    localStorage.setItem("password", pass.value);
    localStorage.setItem("email", email.value);
    document.getElementById("id01").innerHTML = "Registration successful";
}

function login() {
    var checkuser = localStorage.getItem("username");
    var checkpass = localStorage.getItem("password");
    if (checkuser === user2.value && checkpass === pass2.value) {
        document.getElementById("demo").innerHTML = "You are now logged in.";
    } else {
        document.getElementById("demo").innerHTML = "Incorrect username and password";
    }
}

