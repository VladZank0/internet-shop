ymaps.ready(init);

function init() {

    if(document.getElementById('modal-map')) {
      let modal_map = new ymaps.Map("modal-map", {
        center: [55.741135, 37.502786],
        zoom: 17,
        controls : []
      });
      modal_map.controls.remove('geolocationControl'); 
      modal_map.controls.remove('searchControl'); 
      modal_map.controls.remove('trafficControl'); 
      modal_map.controls.remove('typeSelector'); 
      modal_map.controls.remove('fullscreenControl'); 
    //   map.controls.remove('zoomControl'); 
      modal_map.controls.remove('rulerControl'); 
    //   map.behaviors.disable(['scrollZoom']);

    modal_map.geoObjects.add(new ymaps.Placemark([55.741135, 37.502786], {
      iconCaptionMaxWidth: '100',
    }));
     
    }else if(document.getElementById('map')){
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
      map.controls.remove('rulerControl');
    }
  
  



  



}