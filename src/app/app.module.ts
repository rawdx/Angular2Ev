import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { firebaseConfig } from 'src/environment/firebase';
import { EntrevistasComponent } from './vistas/entrevistas/entrevistas.component';
import { CandidatosComponent } from './vistas/candidatos/candidatos.component';
import { PuestosDisponiblesComponent } from './vistas/puestos-disponibles/puestos-disponibles.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrevistasComponent,
    CandidatosComponent,
    PuestosDisponiblesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
