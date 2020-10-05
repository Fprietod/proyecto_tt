import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions
} from '@ionic-native/google-maps/ngx';

declare var google: any

@Component({
  selector: 'app-encuentrame',
  templateUrl: './encuentrame.page.html',
  styleUrls: ['./encuentrame.page.scss'],
})
export class EncuentramePage implements OnInit {

	map: GoogleMap;
	myPosition: any = {};

  markers: any[] = [
  {
    position:{
      latitude:  19.534599,
      longitude: -99.027496,
    },
    title:'Ciudad Azteca',
    icon: 'src/assets/9.png'
  },
  {
    position:{
      latitude: 19.5285,
      longitude: -99.030197,
    },
    title:'Plaza aragon',
    icon: 'src/assets/9.png'
  },
  {
    position:{
      latitude: -17.391398,
      longitude: -66.2407904,
    },
    title:'Point 3'
  },
  {
    position:{
      latitude: -17.3878887,
      longitude: -66.223664,
    },
    title:'Point 4'
  },
];


  constructor(private googleMaps: GoogleMaps,
   private geolocation: Geolocation) { }

  ngOnInit() {
 	
  this.getCurrentPosition();

 	
  }

  ionViewDidLoad(){
  this.getCurrentPosition();
}




   getCurrentPosition(){
    this.geolocation.getCurrentPosition().then(position => {
      this.myPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
      this.loadMap();
    }).catch(error=>{
      console.log(error);
    });
  }
 loadMap(){
    // create a new map by passing HTMLElement
   

    this.map = this.googleMaps.create("map");

    // create CameraPosition
    let position: CameraPosition<LatLng> = {
      target: new LatLng(this.myPosition.latitude, this.myPosition.longitude),
      zoom: 12,
      tilt: 30
    };

    this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
      console.log('Map is ready!');

      // move the map's camera to position
      this.map.moveCamera(position);


      let markerOptions: MarkerOptions = {
        position: this.myPosition,
        title: "Hello",
        icon: 'www/assets/imgs/marker-pink.png'
      };

      this.addMarker(markerOptions);

      this.markers.forEach(marker=>{
        this.addMarker(marker);
      });

      
  });

  
  }



  getPosition(): void{
    this.map.getMyLocation()
    .then(response => {
      this.map.moveCamera({
        target: response.latLng
      });
      this.map.addMarker({
        title: 'My Position',
        icon: 'blue',
        animation: 'DROP',
        position: response.latLng
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }
  
  
  
   addMarker(options){
    let markerOptions: MarkerOptions = {
      position: new LatLng(options.position.latitude, options.position.longitude),
      title: options.title,
      icon: options.icon

    };
    this.map.addMarker(markerOptions);
    
  }


}
