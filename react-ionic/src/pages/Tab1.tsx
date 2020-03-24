import React from 'react';
import {IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonThumbnail,IonLabel,IonItem} from '@ionic/react';

function Tab1() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader>
          <IonToolbar>
              <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

      </IonContent>

    </IonPage>
  );
};

export default Tab1;
