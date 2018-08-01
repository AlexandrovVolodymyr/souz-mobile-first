$(document).ready(function () {

    /* logo change background-color */

    let scroll_pos = 0;
    $(document).scroll(function() {
        let galleryH = $('.gallery').innerHeight();
        let newsH = $('.news-section').innerHeight();
        let studioH = $('.studio-section').innerHeight();
        let projectsH = $('.projects-section').innerHeight();
        let vacanciesH = $('.vacancies-section').innerHeight();
        let mapH = $('.map-section').innerHeight();

        scroll_pos = $(this).scrollTop();

        if (scroll_pos > (galleryH + newsH - 100)) {
            $('.button--4 .blob').css('backgroundColor', '#4eb748');
        } else {
            $('.button--4 .blob').css('backgroundColor', '#f3762e');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH)) {
            $('.button--4 .blob').css('backgroundColor', '#635eaa');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH + projectsH)) {
           $('.button--4 .blob').css('backgroundColor', '#bdd747');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH + projectsH + vacanciesH + mapH)) {
            $('.button--4 .blob').css('backgroundColor', '#fdb814');
        }
    });
});