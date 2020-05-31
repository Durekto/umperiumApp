import React from 'react';

import './Question.css';

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardContent, IonItem,
} from '@ionic/react';

function Question() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Вопросы - ответы</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
         <IonCard>
             <IonCardHeader>
                 <IonToolbar>
                     <h3>
                         Страница в разработке
                     </h3>
                 </IonToolbar>
             </IonCardHeader>
         </IonCard>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <h5 className="TitleForOtherCard">
                          Центр монетизации
                      </h5>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonItem>
                      <span className="textOtherCard">
                          Грантовая поддержка авторов
                      </span>
                  </IonItem>
                  <IonItem>
                       <span className="textOtherCard">
                           Вознаграждение за активность
                      </span>
                  </IonItem>
                  <IonItem>
                      <span className="textOtherCard">
                          Реферальная ссылка
                      </span>
                  </IonItem>
              </IonCardContent>
          </IonCard>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <h5 className="TitleForOtherCard">
                          Магазин влияния
                      </h5>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonItem>
                      <span className="textOtherCard">
                          Prодвижения
                      </span>
                  </IonItem>
                  <IonItem>
                       <span className="textOtherCard">
                           Prосмотры
                      </span>
                  </IonItem>
                  <IonItem>
                      <span className="textOtherCard">
                          Prauto
                      </span>
                  </IonItem>
                  <IonItem>
                      <span className="textOtherCard">
                          Тренды
                      </span>
                  </IonItem>
                  <IonItem>
                      <span className="textOtherCard">
                          Элитный акаунты
                      </span>
                  </IonItem>
                  <IonItem>
                      <span className="textOtherCard">
                          Умпериалы
                      </span>
                  </IonItem>
              </IonCardContent>
          </IonCard>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <h5 className="TitleForOtherCard">
                          Умпериум
                      </h5>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonItem>
                      <span className="textOtherCard">
                          О проекте
                      </span>
                  </IonItem>
                  <IonItem>
                       <span className="textOtherCard">
                           Пользовательское соглашение
                      </span>
                  </IonItem>
                  <IonItem>
                      <span className="textOtherCard">
                          Политика конфиденциальности
                      </span>
                  </IonItem>
                  <IonItem>
                      <span className="textOtherCard">
                          Реклама на платформе
                      </span>
                  </IonItem>
              </IonCardContent>
          </IonCard>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <h5 className="TitleForOtherCard">
                          Помощь
                      </h5>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonItem>
                      <span className="textOtherCard">
                          Вопросы - ответы
                      </span>
                  </IonItem>
                  <IonItem>
                       <span className="textOtherCard">
                           Служба поддержки
                      </span>
                  </IonItem>
              </IonCardContent>
          </IonCard>

      </IonContent>
    </IonPage>
  );
}

export default Question;
