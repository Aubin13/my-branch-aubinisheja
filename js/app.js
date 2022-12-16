data = document.getElementById('blog-content');

document.getElementById('blog-submit').addEventListener('click', function() {
    window.localStorage.setItem('blog', data.value);
    updateUI();
});

document.getElementById('blog-submit').addEventListener('click', function() {
    const blogs = localStorage.getItem('blog');
    document.getElementById('blog-view').textContent = blogs;
    updateUI();
})

window.addEventListener('load', function(){
document.getElementById('blog-view').textContent = localStorage.getItem('blog');
})

document.getElementById('blog-view').addEventListener('load', function() {
    document.getElementById('blog-view').innerHTML = localStorage.getItem('blog');
})
function updateUI() {
    var values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--) {
        values.push( localStorage.getItem(key[i]) );
    }
    document.getElementById('blog-view').textContent = blogs;
}