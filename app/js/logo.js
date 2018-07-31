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
            $('.header__logo_link').css('backgroundColor', '#4eb748');
        } else {
            $('.header__logo_link').css('backgroundColor', '#f3762e');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH)) {
            $('.header__logo_link').css('backgroundColor', '#635eaa');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH + projectsH)) {
           $('.header__logo_link').css('backgroundColor', '#bdd747');
        }

        if (scroll_pos > (galleryH + newsH - 100 + studioH + projectsH + vacanciesH + mapH)) {
            $('.header__logo_link').css('backgroundColor', '#fdb814');
        }
    });
});