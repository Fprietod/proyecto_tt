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
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

declare var google: any

@Component({
  selector: 'app-encuentrame',
  templateUrl: './encuentrame.page.html',
  styleUrls: ['./encuentrame.page.scss'],
})
export class EncuentramePage implements OnInit {

	map: GoogleMap;
	myPosition: any = {};
  public estaciones: any[];
  public estacionesBackup: any[];

  markers: any[] = [
  {
    position:{
      latitude:  19.534599,
      longitude: -99.027496,
    },
    title:'Ciudad Azteca',
    icon: 'src/assets/linea_11/21.png'
  },
  {
    position:{
      latitude: 19.5285,
      longitude: -99.030197,
    },
    title:'Plaza aragon',
    icon: 'src/assets/linea_11/20.png'
  },
  {
    position:{
      latitude: 19.521299,
      longitude:  -99.033401,
    },
    title:'Olimpica',
    icon: 'src/assets/linea_11/19.png'
  },
  {
    position:{
      latitude: 19.515301,
      longitude: -99.036003,
    },
    title:'Ecatepec',
    icon: 'src/assets/linea_11/18.png'
  },
  {
  position:{
  latitude:  19.500999,
  longitude: -99.041901,
  },
  title:'Muzquiz',
  icon: 'src/assets/linea_11/17.png'
  },
  {
  position:{
  latitude:19.490999,
  longitude:-99.0467, 
  },
  title:'Rio de los remedios',
  icon: 'src/assets/linea_11/16.png'
  },
];


  constructor(private googleMaps: GoogleMaps,
   private geolocation: Geolocation, private firestore: AngularFirestore) { }

  async ngOnInit() {
 	
  this.getCurrentPosition();
  this.estaciones = await this.initializeItem();

 	
  }

  ionViewDidLoad(){
  this.getCurrentPosition();
}

async initializeItem(): Promise<any> {
    const estaciones = await this.firestore.collection('estaciones')
    .valueChanges().pipe(first()).toPromise();
    this.estacionesBackup = estaciones;
    return estaciones;
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
