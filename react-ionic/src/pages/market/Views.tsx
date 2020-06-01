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
    IonButton,
} from '@ionic/react';

function Views() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Prосмотры</div>
              <div>
                <img className="titleImgPromation" src="/chart-line.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Вы можете приобрести просмотры для любого поста, что позволит расширить аудиторию и обеспечить более высокую позицию в рейтинге записей на главной странице платформы. Пост будет отображаться в лентах других пользователей, на главной странице (между 5 и 6 записью) и в разделе Элита.                       </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonToolbar>
                      <div>
                          <span>
                                 Вы можете заказать минимум 1000, максимум 100.000 просмотров (1 просмотр = 1 умпериал)                           </span>
                      </div>
                  </IonToolbar>

                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel position="floating"> Количество просмотров: </IonLabel>
                              <IonInput placeholder="1000"></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel position="floating">Ваш пост</IonLabel>
                              <IonInput placeholder="URL"></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div className="checkBoxPromation">

                              <IonCheckbox color="dark" />
                              <span> Моя запись соответствует требованиям Умпериум</span>
                      </div>
                  </IonToolbar>

                    <br/>
                  <IonToolbar>
                      <IonButton color="primary">Разместить</IonButton>

                  </IonToolbar>
                  <br/>



              </IonCardContent>
          </IonCard>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <h2>
                          Посты, которые продвигаются
                      </h2>
                      <span>
                      </span>
                  </IonToolbar>
              </IonCardHeader>
          </IonCard>



      </IonContent>
    </IonPage>
  );
}

export default Views;
