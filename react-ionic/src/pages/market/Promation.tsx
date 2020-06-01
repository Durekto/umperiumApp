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

function Promation() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Prодвижение</div>
              <div>
                <img className="titleImgPromation" src="/rocketBlack.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Разместите запись в блоке PRодвижение на главной странице.
                      </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonToolbar>
                      <div>
                          <span>
                                   По умолчанию стоимость размещения составляет 1000 умпериалов. Время размещения в блоке PRодвижения составляет максимум 1 час. Если место размещения уже занято, пользователь может перекупить его, предложив более высокую цену, при этом надбавка должна быть кратна 100.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <span>
                                Текущая ставка:
                          </span>
                          <strong> 0 умпериалов</strong>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel position="floating">Ваша ставка</IonLabel>
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
                          История PRодвижения
                      </h2>
                      <span>

                                    Ваши посты не продвигались
                      </span>
                  </IonToolbar>
              </IonCardHeader>
          </IonCard>



      </IonContent>
    </IonPage>
  );
}

export default Promation;
