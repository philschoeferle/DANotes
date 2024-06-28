import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'danotes-198c3',
          appId: '1:327401108425:web:d0560f83867ea1b9d3ae18',
          storageBucket: 'danotes-198c3.appspot.com',
          apiKey: 'AIzaSyDTlxUhJckL4DkkAnGDT4Igg9INnbav1hU',
          authDomain: 'danotes-198c3.firebaseapp.com',
          messagingSenderId: '327401108425',
        })
      )
    ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
