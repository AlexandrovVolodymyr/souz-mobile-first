ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
        center: [55.82903023871346,37.602081510803686],
        zoom: 14,
        scroll: false,
        controls: []
      }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark([55.820991, 37.601519], {
        hintContent: 'ФГУП «Киностудия «Союзмультфильм»',
        balloonContent: ''
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/mapIcon.svg',
        // Размеры метки.
        iconImageSize: [60, 72],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-40, -80]
      });
  // if ($(window).width() < 768) {
  //   myMap.behaviors.disable('drag');
  // }
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable('scrollZoom');
});

// ymaps.ready(init);