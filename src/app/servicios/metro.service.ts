import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { firestore } from 'firebase';

export interface metro {
	img : string
	id : string
	description : string
}


@Injectable({
  providedIn: 'root'
})
export class MetroService {

  constructor(private db : AngularFirestore) { }


  getMetroRooms(){
  return this.db.collection('metrofeed').snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as metro;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
    	
  }
}
