import React from 'react';
import logo from './logo.svg';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonTabButton tab="schedule">
            <IonIcon name="calendar" />
            <IonLabel>Schedule</IonLabel>
            <IonBadge>6</IonBadge>
          </IonTabButton>

          <IonTabButton tab="speakers">
            <IonIcon name="contacts" />
            <IonLabel>Speakers</IonLabel>
          </IonTabButton>

          <IonTabButton tab="map">
            <IonIcon name="map" />
            <IonLabel>Map</IonLabel>
          </IonTabButton>

          <IonTabButton tab="about">
            <IonIcon name="information-circle" />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </div>
  );
}

export default App;*/