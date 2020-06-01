import React from 'react';

 // import './Promation.css';

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonButton,
} from '@ionic/react';

function Advertising() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Реклама на платформе</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardContent>
                  <IonToolbar>
                      <div>
                          <span>
                              страница в разработке
                          </span>
                      </div>
                  </IonToolbar>
              </IonCardContent>
          </IonCard>

      </IonContent>
    </IonPage>
  );
}

export default Advertising;
