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
  IonSearchbar,
  IonModal,
  IonButton,
  IonAlert,

} from '@ionic/react';
import {} from '@ionic/core';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { useState } from 'react';


import Home from './pages/Home';
import Tab1 from './pages/Tab1';
import Login from './pages/user/Login';
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
    const [showModal, setShowModal] = useState(false);

    return (

      <IonApp>

        <IonHeader id='common-header'>
          <IonToolbar color='dark' className="wrapperHeader">
            <IonButtons slot='start'>
                <IonMenuButton menu='main-menu'></IonMenuButton>
            </IonButtons>
              <IonItem  button href='/home' color='dark'>
                  <img className="logo" src="/logo.png" alt=""/>
              </IonItem>

                  <IonModal isOpen={showModal}>
                      <IonSearchbar></IonSearchbar>

                      <IonButton onClick={() => setShowModal(false)}>Close Search</IonButton>
                  </IonModal>
                  <IonButton className="btnSearch" slot='end' onClick={() => setShowModal(true)}>
                      <img src="./whiteSearch.png" alt=""/>
                  </IonButton>
          </IonToolbar>

        </IonHeader>
        <IonNav></IonNav>

        {/* <IonSplitPane> */}
          <IonMenu menuId='main-menu' contentId='menu-items' type='overlay'>
            <IonHeader className="userInfo">
                <div>
                <img className="BgImgUserMenu" src="/imgBG2.jpg" alt=""/>
                <div className="wrapperUserImgName">
                    <img className="userAvatar" src="/user.jpg" alt=""/>
                    <span>User name</span>
                </div>
                </div>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent id='menu-items'>
              <IonList>
                <IonMenuToggle menu='main-menu'>
                  {/*<IonItem href='/home'>*/}
                  {/*  <IonIcon icon={home} slot="start"></IonIcon>*/}
                  {/*  <IonLabel>Моя страница</IonLabel>*/}
                  {/*</IonItem>*/}
                  <IonItem href='/profile'>
                    <IonIcon icon={person} slot="start"></IonIcon>
                    <IonLabel>Счет</IonLabel>
                  </IonItem>
                  <IonItem href='/chat'>
                    <IonIcon icon={chatbubbles} slot="start"></IonIcon>
                    <IonLabel>Настройки</IonLabel>
                  </IonItem>
                  <IonItem href='/settings'>
                    <IonIcon icon={settings} slot="start"></IonIcon>
                    <IonLabel>Лента</IonLabel>
                  </IonItem>

                    <div className="hrBorder"></div>

                  <IonItem href='/settings'>
                    <IonIcon icon={settings} slot="start"></IonIcon>
                    <IonLabel>Центр монетизации</IonLabel>
                  </IonItem>
                    <IonItem href='/settings'>
                    <IonIcon icon={settings} slot="start"></IonIcon>
                    <IonLabel>Служба поддержки</IonLabel>
                  </IonItem>
                    <IonItem href='/settings'>
                    <IonIcon icon={settings} slot="start"></IonIcon>
                    <IonLabel>Вопросы - ответы</IonLabel>
                  </IonItem>
                    <IonItem href='/settings'>
                    <IonIcon icon={settings} slot="start"></IonIcon>
                    <IonLabel>Лидеры мнений</IonLabel>
                </IonItem>
                    <IonItem href='/settings'>
                    <IonIcon icon={settings} slot="start"></IonIcon>
                    <IonLabel>Элита</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              </IonList>
            </IonContent>
          </IonMenu>
        {/* </IonSplitPane> */}

        <IonReactRouter>
          {/* <IonRouterOutlet>
            <Route path='/auth' component={Login} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          </IonRouterOutlet> */}

          <IonTabs>
              <IonRouterOutlet>
                  <Route path="/tab1" component={Tab1} exact={true} />
                  <Route path="/tab2" component={Tab1} exact={true} />
                  <Route path="/tab3" component={Tab1} exact={true} />
                  <Route path="/tab4" component={Tab1} exact={true} />
                  <Route path='/auth' component={Login} exact={true} />
                  <Route path="/home" component={Home} exact={true} />
                  <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                  <IonTabButton tab="tab1" href="/tab1">
                      <IonIcon icon={home} />
                      <IonLabel>Главная</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/tab2">
                      <IonIcon icon={settings} />
                      <IonLabel>Написать пост</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab3" href="/tab3">
                      <IonIcon icon={informationCircle} />
                      <IonLabel>Моя страница</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="about" href="/tab4">
                      <IonIcon icon={informationCircle} />
                      <IonLabel>Магазин влияния</IonLabel>
                  </IonTabButton>
              </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  );
}

export default App;
