import React from 'react';

import './Monetization.css';

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
} from '@ionic/react';

function Monetization() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> <div>Центр монетизации</div>
              <div>
                <img className="monetizationBlackMoney" src="/moneyBlack.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonCard>
            <IonCardHeader>
                <IonToolbar>
                    На платформе Умпериум можно не только эффективно продвигать идеи, но и монетизировать свои усилия. Для этого реализованы
                    следующие инструменты:
                </IonToolbar>
            </IonCardHeader>
              <IonCardContent>
                  <IonToolbar>
                      <div className="titleImgMonet">
                          <img className="monetIcon" src="/handshake.svg" alt=""/>
                          <span className="titleItemMonet">Получить грант.</span>
                      </div>
                      <span>
                           Умпериум открывает программу выделения грантов на поддержку интересных авторов, публичных личностей, общественных и благотворительных организаций.
                      </span>
                  </IonToolbar>

                  <br/>

                  <IonToolbar>
                      <div className="titleImgMonet">
                          <img className="monetIcon" src="/user-astronaut.svg" alt=""/>
                          <span className="titleItemMonet">Вознаграждение за активность.</span>
                      </div>
                      <span>
                                За различную информационную активность на платформе получайте умпериалы.
                      </span>
                  </IonToolbar>

                  <br/>

                  <IonToolbar>
                      <div className="titleImgMonet">
                          <img className="monetIcon" src="/expeditedssl.svg" alt=""/>
                          <span className="titleItemMonet">Платные публикации.</span>
                      </div>
                      <span>
                        На платформе предусмотрена возможность размещения платных постов. Вы сами назначаете стоимость за прочтение ваших публикаций.
                      </span>
                  </IonToolbar>

                  <br/>

                  <IonToolbar>
                      <div className="titleImgMonet">
                          <img className="monetIcon" src="/moneyBlack.svg" alt=""/>
                          <span className="titleItemMonet">Пожертвования.</span>
                      </div>
                      <span>
                        Любой пользователь площадки может на свое усмотрение перевести вам умпериалы в благодарность за ваши публикации. Каждый читатель сам назначает премию за конкретную понравившуюся публикацию.
                      </span>
                  </IonToolbar>

                  <br/>

                  <IonToolbar>
                      <div className="titleImgMonet">
                          <img className="monetIcon" src="/users.svg" alt=""/>
                          <span className="titleItemMonet">Реферальная ссылка.</span>
                      </div>
                      <span>
                          Приглашайте пользователей на площадку  - за каждого нового участника Умпериума, который зарегистрируется по вашей реферальной ссылке, пользователь получает 50 умпериалов, которые можно потратить на продвижение своих публикаций.
                      </span>
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


      </IonContent>
    </IonPage>
  );
}

export default Monetization;
