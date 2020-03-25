import React from 'react';
import './Home.css';

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
} from '@ionic/react';

function Home() {
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
                          <IonLabel> <div className="userNameFlag"><span>User name</span>

                              <img className="userCountry picInPost" src="./RUS.png" alt=""/>
                              <img className="gem picInPost" src="./gem.svg" alt=""/>
                          </div>
                          </IonLabel>

                      </IonItem>
                  </IonList>
              </IonCardHeader>

              <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </IonCardContent>
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
                          <IonLabel> <div className="userNameFlag"><span>User name</span>

                                  <img className="userCountry picInPost" src="./RUS.png" alt=""/>
                                  <img className="gem picInPost" src="./gem.svg" alt=""/>
                              </div>
                          </IonLabel>

                      </IonItem>
                  </IonList>
              </IonCardHeader>

              <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </IonCardContent>
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
                          <IonLabel> <div className="userNameFlag"><span>User name</span>

                              <img className="userCountry picInPost" src="./RUS.png" alt=""/>
                              <img className="gem picInPost" src="./gem.svg" alt=""/>
                          </div>
                          </IonLabel>

                      </IonItem>
                  </IonList>
              </IonCardHeader>

              <IonCardContent>
                  Keep close to Nature's heart... and break clear away, once in awhile,
                  and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </IonCardContent>
          </IonCard>
          </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default Home;
