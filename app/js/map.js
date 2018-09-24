ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
        center: [55.82903023871346,37.602081510803686],
        zoom: 14,
        scroll: true,
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
        iconImageSize: [50, 75],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -75]
      });
  // if ($(window).width() < 768) {
  //   // myMap.behaviors.disable('drag');
  //   myMap = new ymaps.Map('map', {
  //     center: [55.72903023871346, 37.502081510803686],
  //   });
  //
  // }
  myMap.geoObjects.add(myPlacemark);
  function resizeMap() {
    // myMap.setBounds(myMap.geoObjects.getBounds());

    myMap.setZoom( 12 );
    myPlacemark.options.set('iconImageSize', [40, 60]);
    myPlacemark.options.set('iconImageOffset', [-40, -60]);
  }

  if (window.matchMedia('(max-width: 768px)').matches) {
    resizeMap();
  } else {
    myMap.setZoom( 14 );
    myPlacemark.options.set('iconImageSize', [50, 75]);
    myPlacemark.options.set('iconImageOffset', [-50, -75]);
  }

  window.onresize = function () {
    if (window.matchMedia('(max-width: 768px)').matches) {
      resizeMap();
    } else {
      myMap.setZoom( 14 );
      myPlacemark.options.set('iconImageSize', [50, 75]);
      myPlacemark.options.set('iconImageOffset', [-50, -75]);
    }
    // console.log('resize');
  }

  // myMap.controls.add('zoomControl');
});

// ymaps.ready(init);



// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//         center: [55.82903023871346,37.602081510803686],
//         zoom: 14,
//         scroll: false,
//         controls: []
//       }, {
//         searchControlProvider: 'yandex#search'
//       }),
//       myPlacemark = new ymaps.Placemark([55.82903023871346,37.602081510803686], {
//         hintContent: 'ФГУП «Киностудия «Союзмультфильм»',
//         balloonContent: ''
//       }, {
//         // Опции.
//         // Необходимо указать данный тип макета.
//         iconLayout: 'default#image',
//         // Своё изображение иконки метки.
//         iconImageHref: 'img/mapIcon.svg',
//         // Размеры метки.
//         iconImageSize: [80, 120],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-40, -120]
//       });
//
//   myMap.geoObjects.add(myPlacemark);
//   // myMap.behaviors.disable('scrollZoom');
//   // myMap.controls.add('zoomControl');
//
//   // myMap.setBounds(myMap.geoObjects.getBounds());
//   // $(window).resize(function () {
//   //   if (window.matchMedia('(max-width: 768px)').matches) {
//   //     // / Changes when we reach the min-width  /
//   //     // myMap.setBounds(myMap.geoObjects.getBounds());
//   //
//   //
//   //     // myMap.setZoom( 12 );
//   //     // myPlacemark.options.set('iconImageSize', [40, 60]);
//   //     // myPlacemark.options.set('iconImageOffset', [-20, -60]);
//   //
//   //     resizeMap();
//   //
//   //   }
//   // });
//   if (window.matchMedia('(max-width: 768px)').matches) {
//
//     resizeMap();
//
//   }
//
//   function resizeMap() {
//     // myMap.setBounds(myMap.geoObjects.getBounds());
//
//     myMap.setZoom( 12 );
//     myPlacemark.options.set('iconImageSize', [40, 60]);
//     myPlacemark.options.set('iconImageOffset', [-20, -60]);
//   }
// });

// ymaps.ready(init);