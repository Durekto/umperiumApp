import React from 'react';
import './Home.css';

import  { useState } from 'react';

import logo from '../logo.svg';
import {
    IonContent,
    IonPage,
    IonLabel,
    IonCardHeader,
    IonList,
    IonItem,
    IonAvatar,
    IonCardContent,
    IonCard,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    IonIcon,
    IonBadge,
    IonButton,
    IonAlert,
} from '@ionic/react';

import { chatboxes } from 'ionicons/icons';


function Home() {
    const [showAlertComplain, setShowAlertComplain] = useState(false);
  return (
    <IonPage>
      <IonContent className="contentPage">
          <IonToolbar>
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
          </IonToolbar>
          <IonToolbar>

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
          </IonToolbar>
          <IonToolbar>
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
          </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default Home;
