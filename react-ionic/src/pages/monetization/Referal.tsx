import React from 'react';

 import './Referal.css';

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
    IonSelect,
    IonSelectOption,
    IonButton,
} from '@ionic/react';

function Referal() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Реферальная ссылка</div>
              <div>
                <img className="titleImgGrand" src="/users.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Приглашайте пользователей на площадку! За каждого нового участника Умпериума, зарегистрированного по вашей ссылке, вы
                          получите 50 умпериалов, которые можно потратить на продвижение ваших публикаций.
                      </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonToolbar>
                      <div>
                          <span>
                                Ваша реферальная ссылка для приглашения новых пользователей в проект:
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <img className="copyImg" src="/copy.svg" alt=""/>

                          <br/>

                          <span>
                                https://umperium.com/user/reg?referral=990b98a9
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <span className="alertReferal">
                              *Внимание. Действует ограничение. В рамках данной акции пользователь может получить максимум 3000 умпериалов
                          </span>
                      </div>
                  </IonToolbar>

              </IonCardContent>
          </IonCard>

      </IonContent>
    </IonPage>
  );
}

export default Referal;
