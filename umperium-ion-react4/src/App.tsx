import React from 'react';
import './App.css';

import {
  IonApp,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenu,
  IonContent,
  IonList,
  IonItem,
  IonFab,
  IonFabButton,


} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Ionic Icons */
import { home, paper, business, build } from 'ionicons/icons';

import Home from './pages/Home';
import Tab2 from './pages/Tab2';

function App() {
  return (

    <IonApp>


    <IonReactRouter>







      <IonMenu contentId="main">

        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>




      {/*<IonMenu side="end">*/}
      {/*  <IonHeader>*/}
      {/*    <IonToolbar >*/}
      {/*      <IonTitle>Menu</IonTitle>*/}
      {/*    </IonToolbar>*/}
      {/*  </IonHeader>*/}
      {/*  <IonContent>*/}
      {/*    <IonList>*/}
      {/*      <IonItem>*/}
      {/*        <IonIcon name="home" slot="start"></IonIcon>*/}
      {/*        <IonLabel>Home</IonLabel>*/}
      {/*      </IonItem>*/}
      {/*      <IonItem>*/}
      {/*        <IonIcon name="person" slot="start"></IonIcon>*/}
      {/*        <IonLabel>Profile</IonLabel>*/}
      {/*      </IonItem>*/}
      {/*      <IonItem>*/}
      {/*        <IonIcon name="chatbubbles" slot="start"></IonIcon>*/}
      {/*        <IonLabel>Messages</IonLabel>*/}
      {/*      </IonItem>*/}
      {/*      <IonItem>*/}
      {/*        <IonIcon name="settings" slot="start"></IonIcon>*/}
      {/*        <IonLabel>Settings</IonLabel>*/}
      {/*      </IonItem>*/}
      {/*    </IonList>*/}
      {/*  </IonContent>*/}
      {/*</IonMenu>*/}
dff
    </IonReactRouter>


      <IonReactRouter>

        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab3" component={Tab2} exact={true} />
            <Route path="/tab4" component={Tab2} exact={true} />
            <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href='/home'>
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab2" href='/tab2'>
              <IonIcon icon={paper} />
              <IonLabel>Tab 2</IonLabel>
              <IonBadge>6</IonBadge>
            </IonTabButton>

            <IonTabButton tab="tab3" href='/tab2'>
              <IonIcon icon={business} />
              <IonLabel>Tab 3</IonLabel>
              <IonBadge>0</IonBadge>
            </IonTabButton>

            <IonTabButton tab="tab4" href='/tab2'>
              <IonIcon icon={build} />
              <IonLabel>Tab 4</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
