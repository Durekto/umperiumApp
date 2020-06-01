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

function EliteAccount() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Приобрести элитный аккаунт</div>
              <div>
                <img className="titleImgPromation" src="/gem.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Станьте экспертом и выделите свое мнение среди других пользователей площадки. Элитный аккаунт имеет дополнительные точки притяжения и возможности для продвижения каждого поста и вашего личного бренда в целом на главной странице платформы и в специальном разделе Элиты. Аккаунт можно приобрести для себя или созданного вами Сообщества.
                      </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>


                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Для кого</IonLabel>
                              <IonSelect placeholder="">
                                  <IonSelectOption value="forMe">Для меня</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Раздел</IonLabel>
                              <IonSelect placeholder="">
                                  <IonSelectOption value="1">Власть / Политика</IonSelectOption>
                                  <IonSelectOption value="2">Медиа / СМИ</IonSelectOption>
                                  <IonSelectOption value="8">Культура / Искусство</IonSelectOption>
                                  <IonSelectOption value="4">Бизнес / Экономика</IonSelectOption>
                                  <IonSelectOption value="3">Общество / Экология</IonSelectOption>
                                  <IonSelectOption value="6">Наука / Образование</IonSelectOption>
                                  <IonSelectOption value="5">Техника / Транспорт</IonSelectOption>
                                  <IonSelectOption value="7">Путешествия / Еда</IonSelectOption>
                                  <IonSelectOption value="9">Благотворительность</IonSelectOption>
                                  <IonSelectOption value="10">Корпоративные страницы</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Период</IonLabel>
                              <IonSelect placeholder="">
                                  <IonSelectOption value="1">1 месяц – 5.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="3">3 месяца – 13.500 умпериалов. Скидка 10%</IonSelectOption>
                                  <IonSelectOption value="6">6 месяцев - 24.000 умпериалов. Скидка 20%</IonSelectOption>
                                  <IonSelectOption value="12">12 месяцев – 45.000 умпериалов. Скидка 25%</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                    <br/>
                  <IonToolbar>
                      <IonButton color="primary">Купить</IonButton>

                  </IonToolbar>
                  <br/>



              </IonCardContent>
          </IonCard>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <h2>
                          Действующие подписки элитных эккаунтов
                      </h2>
                  </IonToolbar>
              </IonCardHeader>
          </IonCard>



      </IonContent>
    </IonPage>
  );
}

export default EliteAccount;
