import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';


import { IContactForm } from  '../contacto/contact.interface';
import { ContactResponse } from  '../contacto/contact-response';

@Injectable({
  providedIn: 'root'
})


export class ComunService {

constructor(protected firestore: AngularFirestore) { 
}

 public createCollection(path: string) {
    return this.firestore.collection(path).valueChanges();
 }

}
