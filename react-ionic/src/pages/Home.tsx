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
          <div className="gap"></div>
          <IonToolbar>
          <IonCard>
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
          </IonToolbar>
          <IonToolbar>
          <IonCard>
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
          </IonToolbar>
          <IonToolbar>
          <IonCard>
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
          </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default Home;
