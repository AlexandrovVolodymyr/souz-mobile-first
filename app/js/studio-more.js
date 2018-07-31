(function () {
    /*  section studio about */
    const studioLink = document.querySelector('.studio__link');
    const studioAbout = document.querySelector('.studio-about');
    const studioClose = document.querySelector('.studio-about__close');

    studioLink.addEventListener('click', function(e) {
        e.preventDefault();

        if (studioLink.classList.contains('studio-about-active')) {
            studioAbout.classList.remove('studio-about-active');
            document.body.classList.remove('body-locked');
        } else {
            studioAbout.classList.add('studio-about-active');
            document.body.classList.add('body-locked');
        }
    });
    studioClose.addEventListener('click', function(e) {
        e.preventDefault();
        studioAbout.classList.remove('studio-about-active');
        document.body.classList.remove('body-locked');
    });

    /*/  section studio about */
})();