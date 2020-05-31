import React from 'react';

import './Support.css';

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
    IonFab,
    IonFabButton,
    IonIcon,

} from '@ionic/react';

function Support() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Служба поддержки</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <span>
                          Каждый пользователь Умпериума — для нас друг, поэтому мы стремимся создать не просто службу поддержки высшего класса, а
                            настоящую службу заботы!
                      </span>
                  </IonToolbar>

                  <br/>

                  <IonToolbar>
                      <span>

                            Чтобы наш диалог был похож на беседу с друзьями, мы готовы общаться с вами в мессенджерах, к которым вы привыкли:
                      </span>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonToolbar>
                      <div className="wrapperSocialSupport">
                          <img src="/telegram.svg" alt=""/>
                          <a href="#">Telegram</a>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div className="wrapperSocialSupport">
                          <img src="/facebook-messenger.svg" alt=""/>
                          <a href="#">Messanger</a>
                      </div>
              </IonToolbar>
                  <IonToolbar>
                      <div className="wrapperSocialSupport">
                          <img src="/whatsapp.svg" alt=""/>
                          <a href="#">WhatsApp</a>
                      </div>
              </IonToolbar>
                  <IonToolbar>
                      <div className="wrapperSocialSupport">
                          <img src="/envelope.svg" alt=""/>
                          <a href="#">help@umperium.com</a>
                      </div>
              </IonToolbar>
              </IonCardContent>
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

          <IonFab vertical="bottom" horizontal="end"  slot="fixed">
              <IonFabButton>
                  <img className="imgSupportBtn" src="/envelopeSupBtn.svg" alt=""/>

              </IonFabButton>

          </IonFab>

      </IonContent>
    </IonPage>
  );
}

export default Support;
