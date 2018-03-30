var structure = [
    {
        'tag': 'li',
        'content': 'task 1'
    },
    {
        'tag': 'li',
        'content': 'task 2'
    },
    {
        'tag': 'li',
        'content': 'task 3'
    },
    {
        'tag': 'li',
        'content': 'task 3'
    },{
        'tag': 'li',
        'content': 'task 4'
    }
]

var ul = document.querySelectorAll('ul');


for (var i = 0; i < structure.length; i++) {
    var obj = structure[i];
    var li = document.createElement(obj.tag);
    var content = document.createTextNode(obj.content);
    var a = document.createElement('a');
    a.href="#";
    a.className = "btn btn-primary btn-sm float-right";
    a.text = "delete";
    li.className = "list-group-item";
    li.appendChild(content);
    li.appendChild(a);
    ul[0].appendChild(li);
    var la = document.querySelectorAll('li');
    la.forEach(function(supr){
         supr.addEventListener('click', function (e){
             supr.style.display = "none";
         })
    })
}


