import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tic-tac-toe';

  firebaseConfig = {
    apiKey: "AIzaSyAO-quiG-RMvt4w3RNnmXolG_d-sMUBTyQ",
    authDomain: "fir-be-bdffc.firebaseapp.com",
    projectId: "fir-be-bdffc",
    storageBucket: "fir-be-bdffc.appspot.com",
    messagingSenderId: "98725025062",
    appId: "1:98725025062:web:82bcedc6bc9fed99881de7"
  };

  app = initializeApp(this.firebaseConfig);
  
}
