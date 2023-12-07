ymaps.ready(init);

function init() {
  let map = new ymaps.Map("map", {
    center: [55.741135, 37.502786],
    zoom: 18,
    controls : []
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   map.controls.remove('zoomControl'); 
  map.controls.remove('rulerControl'); // удаляем контрол правил
//   map.behaviors.disable(['scrollZoom']);
}