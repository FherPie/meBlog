import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { IContactForm } from '../../contacto/contact.interface';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  public createCollection(collectionName: string) {
    return this.firestore.collection(collectionName).valueChanges();
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


  public getData(profileCollectionRef: AngularFirestoreCollection) {
    return profileCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data();
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  public saveDownloadURL(documentId: string, downloadUrl: string, profileCollectionRef: AngularFirestoreCollection) {
    profileCollectionRef.doc(documentId).update({ downloadUrl });
  }

  public getMessagesCount() {
    return this.firestore.collection('email-list', message => message.where('read', '==', false)).valueChanges();
  }

}
