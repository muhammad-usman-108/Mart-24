import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';



const firebaseConfig = {
  apiKey: "key",
  authDomain: "fir-app-8aeed.firebaseapp.com",
  databaseURL: "https://fir-app-8aeed-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-app-8aeed",
  storageBucket: "fir-app-8aeed.appspot.com",
  messagingSenderId: "185858410266",
  appId: "1:185858410266:web:f70ef798abb4ac3106cea3",
  measurementId: "G-2JCXV9F1PZ"
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
