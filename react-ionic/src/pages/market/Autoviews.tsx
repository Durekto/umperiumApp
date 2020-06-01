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
    IonSelect,
    IonSelectOption,
} from '@ionic/react';

function Autoviews() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Prавто</div>
              <div>
                <img className="titleImgPromation" src="/airplane-takeoff.png" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Набирайте популярность в автоматическом режиме, выбирая требуемую мощность охватов. Ваш пост будет отображаться в лентах других пользователей, на главной странице ресурса (между 5 и 6 записью) и в разделе Элита.  Обращаем ваше внимание, что посты промоутируются последовательно в хронологическом порядке. 1 просмотр = 1 умпериал.
                      </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>


                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Количество дней</IonLabel>
                              <IonSelect placeholder="">
                                  <IonSelectOption value="days30">30</IonSelectOption>
                                  <IonSelectOption value="days60">60</IonSelectOption>
                                  <IonSelectOption value="days90">90</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Количество просмотров на посту</IonLabel>
                              <IonSelect placeholder="">
                                  <IonSelectOption value="view1000">1000</IonSelectOption>
                                  <IonSelectOption value="view3000">3000</IonSelectOption>
                                  <IonSelectOption value="view5000">5000</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Количество продвигаемых постов в сутки</IonLabel>
                              <IonSelect placeholder="">
                                  <IonSelectOption value="post1">1</IonSelectOption>
                                  <IonSelectOption value="post2">2</IonSelectOption>
                                  <IonSelectOption value="post3">3</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                    <br/>
                  <IonToolbar>
                      <IonButton color="primary">Заказать</IonButton>

                  </IonToolbar>
                  <br/>



              </IonCardContent>
          </IonCard>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <h2>
                          Посты получившие Prавто
                      </h2>
                      <span>
                          Сейчас ваши посты на авто не продвигаются
                      </span>
                  </IonToolbar>
              </IonCardHeader>
          </IonCard>



      </IonContent>
    </IonPage>
  );
}

export default Autoviews;
