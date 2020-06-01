import React from 'react';

 import './Promation.css';

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
    IonButton, IonCardTitle, IonImg,
} from '@ionic/react';

function Umperials() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Купить умпериалы</div>
              <div>
                <img className="titleImgPromation" src="/moneyBlack.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>

              <IonCardContent>
                  <IonToolbar>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/100ump.png"> </IonImg>
                              <IonLabel>100₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/500ump.png"> </IonImg>
                              <IonLabel>500₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/1000ump.png"> </IonImg>
                              <IonLabel>1000₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/3000ump.png"> </IonImg>
                              <IonLabel>3000₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/5000ump.png"> </IonImg>
                              <IonLabel>5000₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/7000ump.png"> </IonImg>
                              <IonLabel>7000₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/10000ump.png"> </IonImg>
                              <IonLabel>10000₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/25000ump.png"> </IonImg>
                              <IonLabel>25000₽</IonLabel></div>
                      </IonButton>
                      <IonButton className="btnMoneyUmp">
                          <div className="wrapperMoneyUmpImgText"><IonImg src="/50000ump.png"> </IonImg>
                              <IonLabel>50000₽</IonLabel></div>
                      </IonButton>
                  </IonToolbar>
              </IonCardContent>
          </IonCard>


      </IonContent>
    </IonPage>
  );
}

export default Umperials;
