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
        objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32
      });
      map.geoObjects.add(objectManager);
      objectManager.objects.options.set('preset', 'islands#blueIcon');
                 objectManager.add({
                     "type": "FeatureCollection",
                     "features": [
                         {
                             "type": "Feature",
                             "id":1,
                             "geometry":{
                                 "type": "Point",
                                 "coordinates":[55.741135, 37.502786]
                             },
                             "properties":{
           
                             }
                         },{
                             "type": "Feature",
                             "id":2,
                             "geometry":{
                                 "type": "Point",
                                 "coordinates":[55.741135, 39.502786]
                             },
                             "properties":{
       
                             }
                         },
                         {
                             "type": "Feature",
                             "id":3,
                             "geometry":{
                                 "type": "Point",
                                 "coordinates":[55.741135, 70.502786]
                             },
                             "properties":{
      
                             }
                         },
                         {
                             "type": "Feature",
                             "id":4,
                             "geometry":{
                                 "type": "Point",
                                 "coordinates":[55.741135, 11.502786]
                             },
                             "properties":{
      
                             }
                         },
                         {
                             "type": "Feature",
                             "id":5,
                             "geometry":{
                                 "type": "Point",
                                 "coordinates":[55.741135, 30.502786]
                             },
                             "properties":{
      
                             }
                         },
                         {
                             "type": "Feature",
                             "id":6,
                             "geometry":{
                                 "type": "Point",
                                 "coordinates":[55.741135, 90.502786]
                             },
                             "properties":{
      
                             }
                         },

                     ]
                 });



      map.geoObjects.add(objectManager);
      map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('rulerControl');

      document.querySelectorAll('[data-objectId]').forEach(el=>{
        el.addEventListener('click', function() {
        var objectId = el.getAttribute("data-objectId");
        viewObject(objectId);
      })
    })


      function viewObject(objectId){
         
        for (var object of document.querySelectorAll('[data-objectId]')) {
          object.classList.remove('active');
        }
        document.querySelector('[data-objectId="'+objectId+'"]').classList.add('active');
        // Выделяем все метки в синий, затем выбранную в красную
        objectManager.objects.each(function (item) {
            objectManager.objects.setObjectOptions(item.id, {
                preset: 'islands#blueIcon'
            });
        });
        objectManager.objects.setObjectOptions(objectId, {
            preset: 'islands#blueIcon'
        });
        // Центрирование по метке
        map.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 18, {
            checkZoomRange: true
        });
      }
    }
};


  

    


  



