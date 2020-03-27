import React from 'react';

 import './Score.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { 
  IonPage, 
  IonContent, 
  IonImg, 
  IonInput, 
  IonCheckbox, 
  IonButton, 
  IonItem, 
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonToolbar,
} from '@ionic/react';

function Score() {
  return(
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <div className="wrapperHeaderUserPage">
              <div className="userImg">
                <img src="/user.jpg" alt="user"/>
              </div>
              <div>
                <span className="userName">User Name</span>
              </div>

              <div className="wrapperScore">
                <div><span>На вашем счету :</span></div> <img className=" moneyBlackScore" src="/moneyBlack.svg"  alt="moneyBlack"/> <div><span> 0 умпериал</span></div>
              </div>
            </div>
          </IonCardHeader>
          <IonCardContent>
            <IonCardTitle className="buyUmp">Купить Умпериалы</IonCardTitle>
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

export default Score;
