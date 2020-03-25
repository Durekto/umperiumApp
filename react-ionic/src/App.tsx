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
    // IonSplitPane,
    IonMenuToggle,
    IonNav,
    IonSearchbar,
    IonModal,
    IonButton,
    // IonAlert,
    IonCard,
    IonCardContent,
    IonCardHeader,
    // IonCardSubtitle,
    // IonCardTitle,
    IonAvatar,
    IonImg,


} from '@ionic/react';
import {} from '@ionic/core';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { useState } from 'react';

// import { library, icon } from '@fortawesome/fontawesome-svg-core';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';



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
    // library.add(faCamera);
    //
    // const camera = icon({ prefix: 'fas', iconName: 'camera' });


    return (

      <IonApp>
        <IonHeader id='common-header'>
          <IonToolbar color='dark' className="wrapperHeader">
            <div className="wrapperHeader">
              <div>
                <IonButtons slot='start'>
                  <IonMenuButton menu='main-menu'></IonMenuButton>
                </IonButtons>
              </div>
              <div>
                <IonItem detail={false} button href='/home' color='dark'>
                  <img className="logo" src="/logo.png" alt=""/>
                </IonItem>
              </div>
              <IonModal isOpen={showModal}>
                <IonSearchbar></IonSearchbar>
                <IonCard class="wrapperCard">
                  <IonCardHeader className="wrapperForUserInfo">
                    <IonList>
                        <IonItem>
                            <IonAvatar slot="start">
                                <img src="./user.jpg" alt=""/>
                            </IonAvatar>
                            <IonLabel>User name</IonLabel>
                            <img className="userCountry" src="./RUS.png" alt=""/>
                            <img className="gem" src="./gem.svg" alt=""/>
                        </IonItem>
                    </IonList>
                  </IonCardHeader>
                  <IonCardContent>
                      Keep close to Nature's heart... and break clear away, once in awhile,
                      and climb a mountain or spend a week in the woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
                <IonButton onClick={() => setShowModal(false)}>Close Search</IonButton>
              </IonModal>
              {/* <div> */}
              <IonButton className="btnSearch" slot='end' onClick={() => setShowModal(true)}>
                  <IonImg src='./whiteSearch.png' alt='search'></IonImg>
              </IonButton>
              {/* </div> */}
            </div>
            <div className="wrapperDownHeaderMenu">
                <span>Популярное</span>
                <span>Обсуждение</span>
                <span>Сила Мысли</span>
                <span>Новое</span>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonNav></IonNav>

        <IonMenu menuId='main-menu' contentId='menu-items' type='overlay'>
          <IonHeader className="userInfo">
              <div>
              <img className="BgImgUserMenu" src="/imgBG5.jpg" alt=""/>
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
                {/* <IonItem href='/auth'>
                  <IonIcon icon={person} slot="start"></IonIcon>
                  <IonLabel>Вход/Регистрация</IonLabel>
                </IonItem> */}
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

        <IonReactRouter>
          {/* <IonRouterOutlet>
            <Route path='/auth' component={Login} exact={true} />
            <Route path="/home" component={Home} exact={true} />
            <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          </IonRouterOutlet> */}

          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route path="/tab2" component={Tab1} exact={true} />
              <Route path="/tab3" component={Tab1} exact={true} />
              <Route path="/profile" component={Tab1} exact={true} />
              <Route path='/auth' component={Login} exact={true} />
              <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
            </IonRouterOutlet>

            <IonTabBar slot="bottom" color='dark'>
              <IonTabButton tab="home" href="/home">
                <IonImg className='tab-icons' src="/tab-icons/main.png"></IonImg>
                  {/* <IonIcon src="/tab-icons/main.png" /> */}
                  {/* <IonLabel>Главная</IonLabel> */}
              </IonTabButton>
              <IonTabButton tab="publishing" href="/publishing">
                <IonImg className='tab-icons' src="/tab-icons/writing.png"></IonImg>
                  {/* <IonIcon src="/tab-icons/writing.png" /> */}
                  {/* <IonLabel>Написать пост</IonLabel> */}
              </IonTabButton>
              <IonTabButton tab="market" href="/market">
                <IonImg className='tab-icons' src="/tab-icons/market.png"></IonImg>
                  {/* <IonIcon src="/tab-icons/market.png" /> */}
                  {/* <IonLabel>Моя страница</IonLabel> */}
              </IonTabButton>
              <IonTabButton tab="my-page" href="/auth">
                <IonImg className='tab-icons' src="/tab-icons/my_page.png"></IonImg>
                  {/* <IonIcon src="/tab-icons/my_page.png" /> */}
                  {/* <IonLabel>Магазин влияния</IonLabel> */}
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
  );
}

export default App;
