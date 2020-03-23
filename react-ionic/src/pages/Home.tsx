import React from 'react';
import logo from '../logo.svg';
import { IonContent, IonHeader, IonPage, IonLabel, IonImg } from '@ionic/react';

function Home() {
  return (
    <IonPage>
      <IonContent className='App'>
        <IonHeader className='App-header'>
            <IonImg src={logo} className='App-logo' alt="logo"></IonImg>
            <p>
            Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            <IonLabel>Supported By Ionic</IonLabel>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
}

export default Home;
