import React from 'react';

import './userPage.css';

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonAvatar,

} from '@ionic/react';

function userPage() {
  return (
    <IonPage>

      <IonContent>
        <IonCard>
            <IonCardHeader>
                <div className="wrapperHeaderUserPage">
                    <div className="userImg">
                        <img  src="./user.jpg" alt="user"/>
                    </div>
                    <div>
                        <span className="userName">User Name</span>
                    </div>
                    <div className="countryAndFlag">
                        <img className="userCountry" src="./RUS.png" alt="Rus"/>
                        <span>Россия</span>
                    </div>
                </div>
            </IonCardHeader>
            <IonCardContent>

            </IonCardContent>
        </IonCard>
      </IonContent>

    </IonPage>
  );
};

export default userPage;
