import React from 'react';
import logo from '../logo.svg';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonImg,IonMenu } from '@ionic/react';
import './Home.css';

function Home() {
  return (
    <IonPage>
        {/*      <IonHeader>*/}
        {/*        <IonToolbar>*/}
        {/*          <IonTitle>Home</IonTitle>*/}
        {/*        </IonToolbar>*/}
        {/*      </IonHeader>*/}
      <IonContent className='App'>
         <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
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
};

export default Home;
