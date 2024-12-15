document.addEventListener('DOMContentLoaded', function() {
    var openModalLinks = document.querySelectorAll('.open-modal');
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.close');

    openModalLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetModal = document.getElementById(this.getAttribute('data-target'));
            targetModal.style.display = 'flex';
            document.body.classList.toggle("overFlow")
        });
    });

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.parentElement.parentElement.style.display = 'none';
            document.body.classList.toggle("overFlow")

        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.classList.toggle("overFlow")
        }
    });
});
const menu = document.getElementById('Menu')
const menuConc = document.getElementById('hamburger')

menuConc.addEventListener('click', function(){
    menu.classList.remove("hide")
    document.body.classList.add("overFlow")

})

function fechar(){
    menu.classList.add("hide")
    document.body.classList.remove("overFlow")
}


function link(){
    menu.classList.add("hide")
    document.body.classList.remove("overFlow")
}




