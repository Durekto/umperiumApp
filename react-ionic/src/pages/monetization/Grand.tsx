import React from 'react';

 import './Grand.css';

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

function Grand() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Грантовая поддержка авторов </div>
              <div>
                <img className="titleImgGrand" src="/handshake.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Умпериум открывает программу выделения грантов на поддержку интересных авторов, общественных и благотворительных организаций. На первом этапе будет выделено 10 млн. умпериалов (или 10 млн. рублей) — именно эту сумму все журналы, получившие гранты, смогут потратить на платные сервисы площадки. На сегодняшний момент, гранты выделяются в пяти номинациях:
                      </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonToolbar>
                      <div>
                          <strong>Гражданское общество:</strong>

                          <br/>

                          <span>
                               общественным организациям и общественным деятелям – элитный акаунт + 3000 умпериалов ежемесячно на продвижение публикаций.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <strong>Благотворительность:</strong>

                          <br/>

                          <span>
                            благотворительным организациям – элитный акаунт + 5000 умпериалов ежемесячно на продвижение публикаций.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <strong>Лидеры мнений:</strong>

                          <br/>

                          <span>
                            публичным личностям и знаменитостям – элитный акаунт.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <strong>Наука:</strong>

                          <br/>

                          <span>
                             авторам пишущим на тему науки, ученым  – элитный акаунт + 3000 умпериалов ежемесячно на продвижение публикаций.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <strong>Экспертное мнение:</strong>

                          <br/>

                          <span>
                                интересным авторам, которые ведут тематические блоги с уникальным контентом  - элитный акаунт + 3000 умпериалов ежемесячно на продвижение постов.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel position="floating">Ваш ник или сообщество</IonLabel>
                              <IonInput></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Грант</IonLabel>
                              <IonSelect placeholder="Выбирите">
                                  <IonSelectOption value="charity">Благотворительность</IonSelectOption>
                                  <IonSelectOption value="science">Наука</IonSelectOption>
                                  <IonSelectOption value="opinionLeaders">Лидеры мнений</IonSelectOption>
                                  <IonSelectOption value="expertOpinion">Экспертное мнение</IonSelectOption>
                                  <IonSelectOption value="civilSociety">Граждансвое общество</IonSelectOption>
                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <IonItem>
                              <IonLabel>Категория</IonLabel>
                              <IonSelect placeholder="Выбирите">
                                  <IonSelectOption value="choice">Выбирите одну</IonSelectOption>

                              </IonSelect>
                          </IonItem>
                      </div>
                  </IonToolbar>
                <br/>
                  <IonToolbar>
                      <div>
                          <div className="titleUrlGrand">
                             <IonLabel>Ссылка на ваш сайт или верифицированный аккаунт в соцсетях (фейсбук, инстаграм, вконтакт или одноклассники)</IonLabel>
                          </div>
                          <IonItem>
                              <IonInput placeholder="URL"></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <div className="titleUrlGrand">
                             <IonLabel>Ссылка на ваш блог</IonLabel>
                          </div>
                          <IonItem>
                              <IonInput placeholder="URL"></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <div className="titleUrlGrand">
                             <IonLabel>Ваш контактный телефон</IonLabel>
                          </div>
                          <IonItem>
                              <IonInput></IonInput>
                          </IonItem>
                      </div>
                  </IonToolbar>
                    <br/>
                  <IonToolbar>
                      <IonButton color="primary">Отправить на рассмотрение</IonButton>
                  </IonToolbar>
                  <br/>
                  <IonToolbar>
                      <div>

                          Грант выделяется на срок от 3 месяцев до 1 года. Период действия гранта определяет администрация платформы на свое
                          усмотрение.
                          Срок рассмотрения заявки 3 дня. В случае отказа, подать заявку на грант можно не чаще 1 раза в месяц. Администрация
                          платформы
                          оставляет за собой право изменить правила выдачи грантов в любой момент.

                      </div>
                  </IonToolbar>


              </IonCardContent>
          </IonCard>


          {/*<IonCard>*/}
          {/*    <IonCardHeader>*/}
          {/*        <IonToolbar>*/}
          {/*            <h5 className="TitleForOtherCard">*/}
          {/*                Центр монетизации*/}
          {/*            </h5>*/}
          {/*        </IonToolbar>*/}
          {/*    </IonCardHeader>*/}
          {/*    <IonCardContent>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Грантовая поддержка авторов*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*             <span className="textOtherCard">*/}
          {/*                 Вознаграждение за активность*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Реферальная ссылка*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*    </IonCardContent>*/}
          {/*</IonCard>*/}

          {/*<IonCard>*/}
          {/*    <IonCardHeader>*/}
          {/*        <IonToolbar>*/}
          {/*            <h5 className="TitleForOtherCard">*/}
          {/*              Магазин влияния*/}
          {/*            </h5>*/}
          {/*        </IonToolbar>*/}
          {/*    </IonCardHeader>*/}
          {/*    <IonCardContent>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Prодвижения*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*             <span className="textOtherCard">*/}
          {/*                 Prосмотры*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Prauto*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Тренды*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Элитный акаунты*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Умпериалы*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*    </IonCardContent>*/}
          {/*</IonCard>*/}

          {/*<IonCard>*/}
          {/*    <IonCardHeader>*/}
          {/*        <IonToolbar>*/}
          {/*            <h5 className="TitleForOtherCard">*/}
          {/*              Умпериум*/}
          {/*            </h5>*/}
          {/*        </IonToolbar>*/}
          {/*    </IonCardHeader>*/}
          {/*    <IonCardContent>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                О проекте*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*             <span className="textOtherCard">*/}
          {/*                 Пользовательское соглашение*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Политика конфиденциальности*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Реклама на платформе*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*    </IonCardContent>*/}
          {/*</IonCard>*/}

          {/*<IonCard>*/}
          {/*    <IonCardHeader>*/}
          {/*        <IonToolbar>*/}
          {/*            <h5 className="TitleForOtherCard">*/}
          {/*              Помощь*/}
          {/*            </h5>*/}
          {/*        </IonToolbar>*/}
          {/*    </IonCardHeader>*/}
          {/*    <IonCardContent>*/}
          {/*        <IonItem>*/}
          {/*            <span className="textOtherCard">*/}
          {/*                Вопросы - ответы*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*        <IonItem>*/}
          {/*             <span className="textOtherCard">*/}
          {/*                 Служба поддержки*/}
          {/*            </span>*/}
          {/*        </IonItem>*/}
          {/*    </IonCardContent>*/}
          {/*</IonCard>*/}


      </IonContent>
    </IonPage>
  );
}

export default Grand;
