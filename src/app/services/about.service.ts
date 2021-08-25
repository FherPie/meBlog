import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from  'rxjs/operators';
import { Observable, BehaviorSubject } from  'rxjs';
import { IContactForm } from  '../contacto/contact.interface';
import { ContactResponse } from  '../contacto/contact-response';
import { ComunService } from  './comun.service';

@Injectable({
  providedIn: 'root'
})


export class AboutService  extends  ComunService {

constructor(firestore: AngularFirestore) { 
  super(firestore);
}



  public saveContactDetails(details: IContactForm) {
    const { name, email, message, contactNumber } = details;
    return this.firestore.collection('email-list')
      .add({
        name,
        email,
        message,
        contactNumber,
        read: false,
        date: new Date()
      });
  }




}
