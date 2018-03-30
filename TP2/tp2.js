var ul = document.getElementsByTagName('ul');
var button = document.querySelector('button[type=button]');
var x = 0;

button.addEventListener('click', function() {
    var li = document.createElement('li');
    ul[0].appendChild(li);
    li.innerText = "content " + (++x);
});