var dMenuH = document.querySelectorAll('.dropdown-menu-horizontal');
dMenuH.forEach(element => {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.children[1].style.display == 'flex') {
            this.children[1].style.display = 'none';
        }else{
            this.children[1].style.display = 'flex';
        }
    });
});