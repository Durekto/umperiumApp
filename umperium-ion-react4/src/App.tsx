import React from 'react';
import './App.css';

import {
	IonApp,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonLabel,
	IonRouterOutlet,
	IonIcon,
  IonHeader,
  IonList,
  IonItem,
  IonContent,
  IonMenu,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonSplitPane,
  IonMenuToggle,
  IonNav,
  IonButton,
} from '@ionic/react';
import {} from '@ionic/core';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Tab2 from './pages/Tab2';

//#region CSS
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
//#endregion

import { home, person, chatbubbles, settings, informationCircle } from 'ionicons/icons';

function App() {
  return (

      <IonApp>

        <IonHeader id='common-header'>
          <IonToolbar color='dark'>
            <IonButtons slot='start'>
                <IonMenuButton menu='main-menu'></IonMenuButton>
            </IonButtons>
            <IonTitle>
              <IonItem button href='/home' color='dark'>Umperium Image</IonItem>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonNav></IonNav>

        {/* <IonSplitPane> */}
          <IonMenu menuId='main-menu' contentId='menu-items' type='overlay'>
            <IonHeader>
              <IonToolbar color="dark">
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent id='menu-items'>
              <IonList>
                <IonMenuToggle menu='main-menu'>
                  <IonItem href='/home'>
                    <IonIcon icon={home} slot="start"></IonIcon>
                    <IonLabel>Home</IonLabel>
                    {/* <IonButton fill='clear' class='itemBtns'>Home</IonButton> */}
                  </IonItem>
                  <IonItem href='/profile'>
                    <IonIcon icon={person} slot="start"></IonIcon>
                    <IonLabel>Profile</IonLabel>
                  </IonItem>
                  <IonItem href='/chat'>
                    <IonIcon icon={chatbubbles} slot="start"></IonIcon>
                    <IonLabel>Messages</IonLabel>
                  </IonItem>
                  <IonItem href='/settings'>
                    <IonIcon icon={settings} slot="start"></IonIcon>
                    <IonLabel>Settings</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </IonList>
            </IonContent>
          </IonMenu>
        {/* </IonSplitPane> */}

        <IonReactRouter>
          <IonTabs>
              <IonRouterOutlet>
                  <Route path="/tab1" component={Tab2} exact={true} />
                  <Route path="/tab2" component={Tab2} exact={true} />
                  <Route path="/tab3" component={Tab2} exact={true} />
                  <Route path="/home" component={Home} exact={true} />
                  <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                  <IonTabButton tab="home" href="/tab1">
                      <IonIcon icon={home} />
                      <IonLabel>Tab 1</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="settings" href="/tab2">
                      <IonIcon icon={settings} />
                      <IonLabel>Tab 2</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="about" href="/tab3">
                      <IonIcon icon={informationCircle} />
                      <IonLabel>Tab 3</IonLabel>
                  </IonTabButton>
              </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  );
}

export default App;
