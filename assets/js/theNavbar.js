

/*Listener :  on every click event */
document.addEventListener('click', function(event) {

    /* selecting the navbar */
    const navbar = document.getElementById('navbarNav');
    
    const isClickInside = navbar.contains(event.target);
    const isButtonClick = event.target.closest('[data-bs-toggle="collapse"]');
    
        if(!isClickInside && !isButtonClick && navbar.classList.contains('show')){
            const bsCollapse = bootstrap.Collapse.getInstance(navbar);
            bsCollapse.hide();
        }

    });
