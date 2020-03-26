import React from 'react';
import './App.css';

//#region import
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
    IonMenuToggle,
    IonSearchbar,
    IonModal,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonAvatar,
    IonImg,
    IonAlert, 
    IonBadge,
    IonCardTitle,
} from '@ionic/react';
import {} from '@ionic/core';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
//#endregion

// import { library, icon } from '@fortawesome/fontawesome-svg-core';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import Tab1 from './pages/Tab1';
import userPage from "./pages/user/userPage";
import Login from './pages/user/Login';
import Score from './pages/user/Score';
import Settings from './pages/menu/Settings';
import Monetization from './pages/menu/Monetization';
import Support from './pages/menu/Support';
import Question from './pages/menu/Question';
import Rank from './pages/menu/Rank';
import Elite from './pages/menu/Elite';

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

import { person, construct, settings, paper, cash, logoUsd, call, text, swap, trendingUp, bulb, ribbon, trophy } from 'ionicons/icons';

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
            <IonModal cssClass='search-modal-tab' isOpen={showModal}>
              <IonSearchbar></IonSearchbar>
              <IonContent className='contentPage'>
                <IonToolbar>
                  <IonCard>
                    <IonCardHeader className="wrapperForUserInfo">
                      <IonList>
                        <IonItem lines='none'>
                          <IonAvatar slot="start">
                            <img src="./user-science.png" alt=""/>
                          </IonAvatar>
                          <IonLabel>
                            <div className="wrapperHeaderCard">
                              <div>
                                <div className="userNameFlag">
                                  <span className="UserNamePost badge">Scientist</span>
                                  <img className="userCountry picInPost" src="./POL.png" alt=""/>
                                  <img className="gem picInPost" src="./gem.svg" alt=""/>
                                </div>
                                <div><span className="timePost badge">09.09.2020 в 09:09</span></div>
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
                      <IonCardTitle>1. What is Science?</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                      <IonImg className='image-announcement' src='./science.jpg' alt='picture'></IonImg>
                      Science is a systematic enterprise that builds and organizes knowledge 
                      in the form of testable explanations and predictions about the universe.
                    </IonCardContent>
                    <div className="wrapperCommentAndBrain">
                      <div className='wrapperComment'>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" id="reply" width="16" height="16">
                          <g fill="currentColor" fillRule="evenodd">
                            <path d="M14.802.024H3.147C1.412.024 0 1.415 0 3.126v7.087c0 1.71 1.412 3.102 3.147 3.102h7.423l3.358 3.24a.75.75 0 0 0 1.27-.539V13.29c1.55-.192 2.75-1.5 2.75-3.077V3.126c0-1.71-1.41-3.102-3.146-3.102zm1.888 10.189c0 1.026-.847 1.861-1.888 1.861h-.233a.625.625 0 0 0-.629.62v2.188l-2.664-2.626a.634.634 0 0 0-.445-.182H3.147c-1.041 0-1.888-.835-1.888-1.861V3.126c0-1.026.847-1.861 1.888-1.861h11.655c1.041 0 1.888.835 1.888 1.86v7.088z"></path>
                            <path d="M13.607 4.417H4.342a.625.625 0 0 0-.63.62c0 .343.283.62.63.62h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62zm0 3.474H4.342a.625.625 0 0 0-.63.62c0 .344.283.621.63.621h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62z"></path>
                          </g>
                        </svg>
                        <IonBadge>88</IonBadge>
                      </div>
                      <div className="wrapperBrain">
                        <img className="brain" src="./brainMinus.png" alt="brainMinus"/>
                        <span>0</span>
                        <img className="brain" src="./brainPlus.png" alt="brainPlus"/>
                      </div>
                    </div>
                  </IonCard>
                </IonToolbar>

                <IonToolbar>
                  <IonCard>
                    <IonCardHeader className="wrapperForUserInfo">
                      <IonList>
                        <IonItem lines='none'>
                          <IonAvatar slot="start">
                            <img src="./user-nature.png" alt=""/>
                          </IonAvatar>
                          <IonLabel>
                            <div className="wrapperHeaderCard">
                              <div >
                                <div className="userNameFlag">
                                  <span className="UserNamePost badge">Nature</span>
                                  <img className="userCountry picInPost" src="./UKR.png" alt=""/>
                                  <img className="gem picInPost" src="./gem.svg" alt=""/>
                                </div>
                                <div><span className="timePost badge">27.10.2020 в 18:45</span></div>
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
                      <IonCardTitle>2. That's a post about Nature's heart</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                      Keep close to Nature's heart... and break clear away, once in awhile,
                      and climb a mountain or spend a week in the woods. Wash your spirit clean.
                    </IonCardContent>
                    <div className="wrapperCommentAndBrain">
                      <div className='wrapperComment'>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" id="reply" width="16" height="16">
                          <g fill="currentColor" fillRule="evenodd">
                            <path d="M14.802.024H3.147C1.412.024 0 1.415 0 3.126v7.087c0 1.71 1.412 3.102 3.147 3.102h7.423l3.358 3.24a.75.75 0 0 0 1.27-.539V13.29c1.55-.192 2.75-1.5 2.75-3.077V3.126c0-1.71-1.41-3.102-3.146-3.102zm1.888 10.189c0 1.026-.847 1.861-1.888 1.861h-.233a.625.625 0 0 0-.629.62v2.188l-2.664-2.626a.634.634 0 0 0-.445-.182H3.147c-1.041 0-1.888-.835-1.888-1.861V3.126c0-1.026.847-1.861 1.888-1.861h11.655c1.041 0 1.888.835 1.888 1.86v7.088z"></path>
                            <path d="M13.607 4.417H4.342a.625.625 0 0 0-.63.62c0 .343.283.62.63.62h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62zm0 3.474H4.342a.625.625 0 0 0-.63.62c0 .344.283.621.63.621h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62z"></path>
                          </g>
                        </svg>
                        <IonBadge>123</IonBadge>
                      </div>
                      <div className="wrapperBrain">
                          <img className="brain" src="./brainMinus.png" alt="brainMinus"/>
                          <span>0</span>
                          <img className="brain" src="./brainPlus.png" alt="brainPlus"/>
                      </div>
                    </div>
                  </IonCard>
                </IonToolbar>

                <IonToolbar>
                  <IonCard>
                    <IonCardHeader className="wrapperForUserInfo">
                      <IonList>
                        <IonItem lines='none'>
                          <IonAvatar slot="start">
                            <img src="./user-copypaster.png" alt=""/>
                          </IonAvatar>
                          <IonLabel>
                            <div className="wrapperHeaderCard">
                              <div>
                                <div className="userNameFlag">
                                  <span className="UserNamePost badge">CopyPaster</span>
                                  <img className="userCountry picInPost" src="./RUS.png" alt=""/>
                                  <img className="gem picInPost" src="./gem.svg" alt=""/>
                                </div>
                                <div><span className="timePost badge">21.12.2020 в 12:21</span></div>
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
                      <IonCardTitle>3. SciEncE</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                      <IonImg className='image-announcement' src='./science-corrupted.jpg' alt='picture'></IonImg>
                      SciEncE is 8a sYstematic ente5rp1rlse t8at bui0lds and 0rganizes knowleDJe 
                      in tHe form of testUHble explanati0ns and predicgg2tions ab0ut the un1vEr5e.
                    </IonCardContent>
                    <div className="wrapperCommentAndBrain">
                      <div className='wrapperComment'>
                        <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" id="reply" width="16" height="16">
                          <g fill="currentColor" fillRule="evenodd">
                            <path d="M14.802.024H3.147C1.412.024 0 1.415 0 3.126v7.087c0 1.71 1.412 3.102 3.147 3.102h7.423l3.358 3.24a.75.75 0 0 0 1.27-.539V13.29c1.55-.192 2.75-1.5 2.75-3.077V3.126c0-1.71-1.41-3.102-3.146-3.102zm1.888 10.189c0 1.026-.847 1.861-1.888 1.861h-.233a.625.625 0 0 0-.629.62v2.188l-2.664-2.626a.634.634 0 0 0-.445-.182H3.147c-1.041 0-1.888-.835-1.888-1.861V3.126c0-1.026.847-1.861 1.888-1.861h11.655c1.041 0 1.888.835 1.888 1.86v7.088z"></path>
                            <path d="M13.607 4.417H4.342a.625.625 0 0 0-.63.62c0 .343.283.62.63.62h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62zm0 3.474H4.342a.625.625 0 0 0-.63.62c0 .344.283.621.63.621h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62z"></path>
                          </g>
                        </svg>
                        <IonBadge>99</IonBadge>
                      </div>
                      <div className="wrapperBrain">
                        <img className="brain" src="./brainMinus.png" alt="brainMinus"/>
                        <span>0</span>
                        <img className="brain" src="./brainPlus.png" alt="brainPlus"/>
                      </div>
                    </div>
                  </IonCard>
                </IonToolbar>
              </IonContent>
              
                {/* <IonCard>
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


                </IonCard> */}
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
      </IonHeader>

      <IonReactRouter>
        <IonMenu menuId='main-menu' contentId='menu-items' type='overlay' maxEdgeStart={50}>
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
                <IonItem href='/user/score'>
                  <IonImg className='menu-icon-money-white' src='/moneyWhite.png' slot="start"></IonImg>
                  <IonLabel>Счет</IonLabel>
                </IonItem>
                <IonItem href='/settings'>
                  <IonIcon icon={construct} slot="start"></IonIcon>
                  <IonLabel>Настройки</IonLabel>
                </IonItem>
                <IonItem href='/home'>
                  <IonIcon icon={paper} slot="start"></IonIcon>
                  <IonLabel>Лента</IonLabel>
                </IonItem>
                <div className="hrBorder"></div>
                <IonItem href='/page/monetization'>
                  <IonIcon icon={cash} slot="start"></IonIcon>
                  <IonLabel>Центр монетизации</IonLabel>
                </IonItem>
                  <IonItem href='/page/support'>
                  <IonIcon icon={call} slot="start"></IonIcon>
                  <IonLabel>Служба поддержки</IonLabel>
                </IonItem>
                <IonItem href='/page/question'>
                  <IonIcon icon={swap} slot="start"></IonIcon>
                  <IonLabel>Вопросы - ответы</IonLabel>
                </IonItem>
                  <IonItem href='/user/rank'>
                  <IonIcon icon={trophy} slot="start"></IonIcon>
                  <IonLabel>Лидеры мнений</IonLabel>
                </IonItem>
                <IonItem href='/post/elite'>
                  <IonIcon icon={ribbon} slot="start"></IonIcon>
                  <IonLabel>Элита</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>

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
            <Route path="/profile" component={userPage} exact={true} /> 

            <Route path='/auth' component={Login} exact={true} />
            <Route path='/user/score' component={Score} exact={true} />
            <Route path='/settings' component={Settings} exact={true} />

            <Route path='/page/monetization' component={Monetization} exact={true} />
            <Route path='/page/support' component={Support} exact={true} />
            <Route path='/page/question' component={Question} exact={true} />
            <Route path='/user/rank' component={Rank} exact={true} />
            <Route path='/post/elite' component={Elite} exact={true} /> 

            <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          </IonRouterOutlet>

          {/* <IonTabBar slot='top' color='dark'>
            <IonTabButton tab="home" href="/home">
              <IonLabel>Популярное</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonLabel>Популярное</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonLabel>Популярное</IonLabel>
            </IonTabButton>
            <IonTabButton tab="home" href="/home">
              <IonLabel>Популярное</IonLabel>
            </IonTabButton>
          </IonTabBar> */}

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
            <IonTabButton tab="my-page" href="/profile">
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
