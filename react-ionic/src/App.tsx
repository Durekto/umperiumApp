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
    IonSelect,
    IonSelectOption, IonAlert, IonBadge,


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
    const [showAlertComplain, setShowAlertComplain] = useState(false);

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
                  <IonCard>
                      <IonCardHeader className="wrapperForUserInfo">

                          <IonList>
                              <IonItem>
                                  <IonAvatar slot="start">
                                      <img src="./user.jpg" alt=""/>
                                  </IonAvatar>
                                  <IonLabel>

                                      <div className="wrapperHeaderCard">
                                          <div >
                                              <div className="userNameFlag">
                                                  <span className="UserNamePost badge">User name</span>

                                                  <img className="userCountry picInPost" src="./RUS.png" alt=""/>
                                                  <img className="gem picInPost" src="./gem.svg" alt=""/>
                                              </div>
                                              <div><span className="timePost badge">11.11.2020 в 17:49</span></div>
                                          </div>
                                          <div className="selectInPost">

                                              <IonButton className="btnComplain" onClick={() => setShowAlertComplain(true)} expand="block">
                                                  <img src="./dots.svg" alt="dots"/>
                                              </IonButton>
                                              <IonAlert
                                                  isOpen={showAlertComplain}
                                                  onDidDismiss={() => setShowAlertComplain(false)}
                                                  // header={'Alert'}
                                                  // subHeader={'Subtitle'}
                                                  message={'Пожаловаться?'}
                                                  buttons={['OK','Cancel']}
                                              />
                                          </div>
                                      </div>

                                  </IonLabel>

                              </IonItem>
                          </IonList>
                      </IonCardHeader>

                      <IonCardContent>
                          Keep close to Nature's heart... and break clear away, once in awhile,
                          and climb a mountain or spend a week in the woods. Wash your spirit clean.
                      </IonCardContent>
                      <div className="wrapperCommentAndBrain">
                          <div>
                              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" id="reply" width="16" height="16">
                                  <g fill="currentColor" fill-rule="evenodd">
                                      <path d="M14.802.024H3.147C1.412.024 0 1.415 0 3.126v7.087c0 1.71 1.412 3.102 3.147 3.102h7.423l3.358 3.24a.75.75 0 0 0 1.27-.539V13.29c1.55-.192 2.75-1.5 2.75-3.077V3.126c0-1.71-1.41-3.102-3.146-3.102zm1.888 10.189c0 1.026-.847 1.861-1.888 1.861h-.233a.625.625 0 0 0-.629.62v2.188l-2.664-2.626a.634.634 0 0 0-.445-.182H3.147c-1.041 0-1.888-.835-1.888-1.861V3.126c0-1.026.847-1.861 1.888-1.861h11.655c1.041 0 1.888.835 1.888 1.86v7.088z"></path>
                                      <path d="M13.607 4.417H4.342a.625.625 0 0 0-.63.62c0 .343.283.62.63.62h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62zm0 3.474H4.342a.625.625 0 0 0-.63.62c0 .344.283.621.63.621h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62z"></path>
                                  </g>
                              </svg>
                              <IonBadge color="light">77</IonBadge>
                          </div>
                          <div className="wrapperBrain">
                              <img className="brain" src="./brainMinus.png" alt="brainMinus"/>
                              <span>0</span>
                              <img className="brain" src="./brainPlus.png" alt="brainPlus"/>
                          </div>
                      </div>


                  </IonCard>
                <IonButton onClick={() => setShowModal(false)}>Close Search</IonButton>
              </IonModal>
              {/* <div> */}
              <IonButton className="btnSearch" slot='end' onClick={() => setShowModal(true)}>
                  <img src='./whiteSearch.png' alt='search'></img>
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
            <IonToolbar>
                <IonButton color="danger" expand="full" >
                    <div className="wrapperTextBtnProdvi" >
                        <div>
                            <img className="icoInBtnProdvi rocket" aria-hidden="true" src="./rocket.svg" alt=""/><span>PRoдвижение</span>
                        </div>
                        <div>
                            <span>Разместить за 1000</span><img className="icoInBtnProdvi money" src="./moneyWhite.png" alt=""/>
                        </div>
                    </div>
                </IonButton>
                <div className="wrapperHeaderDownFilter">

                       <div>
                           <IonButton className="btnFilter"><img src="./filterBlack.png" alt=""/></IonButton>
                       </div>

                        <div className="selectHeader">

                            <IonSelect placeholder="Время">
                                <IonSelectOption value="hour">Час</IonSelectOption>
                                <IonSelectOption value="day">День</IonSelectOption>
                                <IonSelectOption value="week">Неделя</IonSelectOption>
                                <IonSelectOption value="month">Месяц</IonSelectOption>
                                <IonSelectOption value="AllTime">Все время</IonSelectOption>
                            </IonSelect>
                        </div>

                    <div className="selectHeader">
                            <IonSelect placeholder="Страны">
                                <IonSelectOption value="ru">Россия</IonSelectOption>
                                <IonSelectOption value="ua">Украина</IonSelectOption>
                                <IonSelectOption value="blr">Белоруссия</IonSelectOption>
                                <IonSelectOption value="kaz">Казахстан</IonSelectOption>
                                <IonSelectOption value="ge">Грузия</IonSelectOption>
                                <IonSelectOption value="AllCountry">All Time</IonSelectOption>
                            </IonSelect>
                        </div>

                    <div>
                        <IonButton className="btnGem"> <img className="gem" src="./gem.svg" alt=""/></IonButton>


                    </div>

                    <div className="selectHeader">
                        <IonSelect placeholder="Элита">
                            <IonSelectOption value="ru">Элита</IonSelectOption>
                            <IonSelectOption value="ua">Все разделы</IonSelectOption>
                            <IonSelectOption value="blr">Власть / Политика</IonSelectOption>
                            <IonSelectOption value="kaz">Медиа / СМИ</IonSelectOption>
                            <IonSelectOption value="ge">Культура / Искусство</IonSelectOption>
                            <IonSelectOption value="AllCountry">Бизнес / Экономика</IonSelectOption>
                            <IonSelectOption value="AllCountry">Наука / Образование</IonSelectOption>
                            <IonSelectOption value="AllCountry">Техника / Транспорт</IonSelectOption>
                            <IonSelectOption value="AllCountry">Путишествия / Досуг</IonSelectOption>
                            <IonSelectOption value="AllCountry">Благотворительность</IonSelectOption>
                            <IonSelectOption value="AllCountry">Спорт / Здоровье</IonSelectOption>
                            <IonSelectOption value="AllCountry">Корпоративные страницы</IonSelectOption>
                        </IonSelect>
                    </div>

                </div>
            </IonToolbar>

        </IonHeader>



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
