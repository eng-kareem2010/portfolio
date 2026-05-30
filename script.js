
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navLinksMenu = document.getElementById('nav-menu');


    mobileMenuButton.addEventListener('click', () => {
      
        mobileMenuButton.classList.toggle('active');
        navLinksMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.classList.remove('active');
            navLinksMenu.classList.remove('active');
        });
    });
