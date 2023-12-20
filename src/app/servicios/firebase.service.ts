import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc,deleteDoc, docData, query, updateDoc, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fs: Firestore) { }

    
}