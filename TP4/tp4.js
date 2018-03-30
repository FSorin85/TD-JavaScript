var squares = document.querySelectorAll('.square');

squares.forEach(function(square) {
    square.addEventListener('click', function (e) {
        var selected = document.querySelector('.selected');
        square.classList.add("selected");
        selected.classList.remove("selected");
    })
})


