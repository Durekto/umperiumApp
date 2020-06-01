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
    IonDatetime,
} from '@ionic/react';

function Trendfooter() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Новый тренд</div>
              <div>
                <img className="titleImgPromation" src="/bullhorn.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Вы можете вовлечь всех заинтересованных пользователей площадки и задать свой тренд для написания постов на любую
                          тему.
                          Ваш пост будет выше других постов на заданную тематику.
                      </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>


                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Название тренда</IonLabel>
                              <IonInput ></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Ключевое слово для фильтрации постов</IonLabel>
                              <IonInput ></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonLabel>
                              <div className="checkBoxPromation">
                                  Период поискового запроса фильтрации постов
                              </div>
                          </IonLabel>
                          <IonItem>

                              <IonDatetime displayFormat="MM DD YYYY" placeholder="C"></IonDatetime>
                          </IonItem>
                          <IonItem>

                              <IonDatetime displayFormat="MM DD YYYY" placeholder="ПО"></IonDatetime>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonLabel>
                              <div className="checkBoxPromation">
                                  Ссылка на ваш пост
                              </div>
                          </IonLabel>
                          <IonItem>
                              <IonInput placeholder="https://"></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonLabel>
                              <div className="checkBoxPromation">
                                  Старт размещения тренда
                              </div>
                          </IonLabel>

                          <IonItem>
                              <IonDatetime displayFormat="D MMM YYYY HH:mm" min="1997" max="2020" value="2005-06-17T11:06Z"></IonDatetime>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Стоимость</IonLabel>
                              <IonSelect placeholder="">
                                  <IonSelectOption value="3">3 часа – 3.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="6">6 часов – 6.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="9">9 часов – 9.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="12">12 часов - 12.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="18">18 часов – 18.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="24">24 часа – 24.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="36">36 часов – 36.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="48">48 часов – 48.000 умпериалов</IonSelectOption>
                                  <IonSelectOption value="72">72 часа – 72.000 умпериалов</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                         <span>
                             Администрация также может отклонить при модерации тренда любой контент, противоречащий интересам
                                        сервиса.
                         </span>
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
                            Ваши тренды
                      </h2>
                      <span>
                          У вас нет активных трендов
                      </span>
                  </IonToolbar>
              </IonCardHeader>
          </IonCard>



      </IonContent>
    </IonPage>
  );
}

export default Trendfooter;
