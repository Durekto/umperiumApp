import React from 'react';
import '../Home.css';

import { useState } from 'react';

import {
  IonContent,
  IonPage,
  IonLabel,
  IonCardHeader,
  IonList,
  IonItem,
  IonAvatar,
  IonCardContent,
  IonCard,
  IonToolbar,
  IonSelect,
  IonSelectOption,
  IonBadge,
  IonButton,
  IonAlert,
  IonHeader,
  IonCardTitle,
  IonImg,
} from '@ionic/react';

function Popular() {
  const [showAlertComplain, setShowAlertComplain] = useState(false);
  return (
    <IonPage>
      <IonHeader className='disable-landscape'>
        <IonToolbar>
          <IonButton color="danger" expand="full" >
              <div className="wrapperTextBtnProdvi">
                <div>
                  <img className="icoInBtnProdvi rocket" aria-hidden="true" src="/rocket.svg" alt=""/><span>PRoдвижение</span>
                </div>
                <div>
                  <span>Разместить за 1000</span><img className="icoInBtnProdvi money" src="/moneyWhite.png" alt=""/>
                </div>
              </div>
          </IonButton>
          <div className="wrapperHeaderDownFilter">
            <div>
              <IonButton className="btnFilter"><img src="/filterBlack.png" alt=""/></IonButton>
            </div>
            <div className="selectHeader">
              <IonItem>
                <IonLabel position="floating" >Время</IonLabel>
                <IonSelect placeholder="Время">
                  <IonSelectOption value="hour">Час</IonSelectOption>
                  <IonSelectOption value="day">День</IonSelectOption>
                  <IonSelectOption value="week">Неделя</IonSelectOption>
                  <IonSelectOption value="month">Месяц</IonSelectOption>
                  <IonSelectOption value="AllTime">Все время</IonSelectOption>
                </IonSelect>
              </IonItem>
            </div>
            <div className="selectHeader">
              <IonItem>
                <IonLabel position="floating">Страны</IonLabel>
                <IonSelect placeholder="Страны">
                  <IonSelectOption value="ru">Россия</IonSelectOption>
                  <IonSelectOption value="ua">Украина</IonSelectOption>
                  <IonSelectOption value="blr">Белоруссия</IonSelectOption>
                  <IonSelectOption value="kaz">Казахстан</IonSelectOption>
                  <IonSelectOption value="ge">Грузия</IonSelectOption>
                  <IonSelectOption value="AllCountry">All Time</IonSelectOption>
                </IonSelect>
              </IonItem>
            </div>
            <div>
              <IonButton className="btnGem"> <img className="gem" src="/gem.svg" alt=""/></IonButton>
            </div>
            <div className="selectHeader">
              <IonItem>
                <IonLabel position="floating">Элита</IonLabel>
                <IonSelect placeholder="Элита">
                  <IonSelectOption value="ru">Элита</IonSelectOption>
                  <IonSelectOption value="ua">Все разделы</IonSelectOption>
                  <IonSelectOption value="blr">Власть / Политика</IonSelectOption>
                  <IonSelectOption value="kaz">Медиа / СМИ</IonSelectOption>
                  <IonSelectOption value="ge">Культура / Искусство</IonSelectOption>
                  <IonSelectOption value="AllCountry">Бизнес / Экономика</IonSelectOption>
                  <IonSelectOption value="AllCountry">Наука / Образование</IonSelectOption>
                  <IonSelectOption value="AllCountry">Техника / Транспорт</IonSelectOption>
                  <IonSelectOption value="AllCountry">Путешествия / Досуг</IonSelectOption>
                  <IonSelectOption value="AllCountry">Благотворительность</IonSelectOption>
                  <IonSelectOption value="AllCountry">Спорт / Здоровье</IonSelectOption>
                  <IonSelectOption value="AllCountry">Корпоративные страницы</IonSelectOption>
                </IonSelect>
              </IonItem>
            </div>
          </div>

        </IonToolbar>
      </IonHeader>

      <IonContent className="contentPage">
        <IonToolbar>
          <IonCard>
            <IonCardHeader className="wrapperForUserInfo">
              <IonList>
                <IonItem lines='none'>
                  <IonAvatar slot="start">
                    <img src="/user-planet.png" alt=""/>
                  </IonAvatar>
                  <IonLabel>
                    <div className="wrapperHeaderCard">
                      <div>
                        <div className="userNameFlag">
                          <span className="UserNamePost badge">Astrologer</span>
                          <img className="userCountry picInPost" src="/CAN.png" alt=""/>
                          <img className="gem picInPost" src="/gem.svg" alt=""/>
                        </div>
                        <div><span className="timePost badge">03.07.2020 в 11:47</span></div>
                      </div>
                      <div className="selectInPost">
                        <IonButton className="btnComplain" onClick={() => setShowAlertComplain(true)} expand="block">
                          <img src="/dots.svg" alt="dots"/>
                        </IonButton>
                        <IonAlert
                          isOpen={showAlertComplain}
                          onDidDismiss={() => setShowAlertComplain(false)}
                          // header={'Alert'}
                          // subHeader={'Subtitle'}
                          message={'Пожаловаться?'}
                          buttons={['OK','Cancel']}
                        />
                      </div>
                    </div>
                  </IonLabel>
                </IonItem>
              </IonList>
              <IonCardTitle>1. Gas Giant. What It Is</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonImg className='image-announcement' src='/gas-giant.jpg' alt='picture'></IonImg>
              A gas giant is a giant planet composed mainly of hydrogen and helium. Gas giants 
              are sometimes known as failed stars because they contain the same basic elements as a star. 
              Jupiter and Saturn are the gas giants of the Solar System.
            </IonCardContent>
            <div className="wrapperCommentAndBrain">
              <div className='wrapperComment'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" id="reply" width="16" height="16">
                  <g fill="currentColor" fillRule="evenodd">
                    <path d="M14.802.024H3.147C1.412.024 0 1.415 0 3.126v7.087c0 1.71 1.412 3.102 3.147 3.102h7.423l3.358 3.24a.75.75 0 0 0 1.27-.539V13.29c1.55-.192 2.75-1.5 2.75-3.077V3.126c0-1.71-1.41-3.102-3.146-3.102zm1.888 10.189c0 1.026-.847 1.861-1.888 1.861h-.233a.625.625 0 0 0-.629.62v2.188l-2.664-2.626a.634.634 0 0 0-.445-.182H3.147c-1.041 0-1.888-.835-1.888-1.861V3.126c0-1.026.847-1.861 1.888-1.861h11.655c1.041 0 1.888.835 1.888 1.86v7.088z"></path>
                    <path d="M13.607 4.417H4.342a.625.625 0 0 0-.63.62c0 .343.283.62.63.62h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62zm0 3.474H4.342a.625.625 0 0 0-.63.62c0 .344.283.621.63.621h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62z"></path>
                  </g>
                </svg>
                <IonBadge>476</IonBadge>
              </div>
              <div className="wrapperBrain">
                <img className="brain" src="/brainMinus.png" alt="brainMinus"/>
                <span>0</span>
                <img className="brain" src="/brainPlus.png" alt="brainPlus"/>
              </div>
            </div>
          </IonCard>
        </IonToolbar>

        <IonToolbar>
          <IonCard>
            <IonCardHeader className="wrapperForUserInfo">
              <IonList>
                <IonItem lines='none'>
                  <IonAvatar slot="start">
                    <img src="/user-elon-musk.png" alt=""/>
                  </IonAvatar>
                  <IonLabel>
                    <div className="wrapperHeaderCard">
                      <div >
                        <div className="userNameFlag">
                          <span className="UserNamePost badge">Elon Musk</span>
                          <img className="userCountry picInPost" src="/USA.png" alt=""/>
                          <img className="gem picInPost" src="/gem.svg" alt=""/>
                        </div>
                        <div><span className="timePost badge">30.05.2020 в 19:36</span></div>
                      </div>
                      <div className="selectInPost">
                        <IonButton className="btnComplain" onClick={() => setShowAlertComplain(true)} expand="block">
                            <img src="/dots.svg" alt="dots"/>
                        </IonButton>
                        <IonAlert
                            isOpen={showAlertComplain}
                            onDidDismiss={() => setShowAlertComplain(false)}
                            // header={'Alert'}
                            // subHeader={'Subtitle'}
                            message={'Пожаловаться?'}
                            buttons={['OK','Cancel']}
                        />
                      </div>
                    </div>
                  </IonLabel>
                </IonItem>
              </IonList>
              <IonCardTitle>2. Making Life Multiplanetary</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonImg className='image-announcement' src='/space-rocket.jpg' alt='picture'></IonImg>
              You want to wake up in the morning and think the future is going to be great - 
              and that's what being a spacefaring civilization is all about. It's about believing
               in the future and thinking that the future will be better than the past. And I 
               can't think of anything more exciting than going out there and being among the stars.
            </IonCardContent>
            <div className="wrapperCommentAndBrain">
              <div className='wrapperComment'>
                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" id="reply" width="16" height="16">
                  <g fill="currentColor" fillRule="evenodd">
                    <path d="M14.802.024H3.147C1.412.024 0 1.415 0 3.126v7.087c0 1.71 1.412 3.102 3.147 3.102h7.423l3.358 3.24a.75.75 0 0 0 1.27-.539V13.29c1.55-.192 2.75-1.5 2.75-3.077V3.126c0-1.71-1.41-3.102-3.146-3.102zm1.888 10.189c0 1.026-.847 1.861-1.888 1.861h-.233a.625.625 0 0 0-.629.62v2.188l-2.664-2.626a.634.634 0 0 0-.445-.182H3.147c-1.041 0-1.888-.835-1.888-1.861V3.126c0-1.026.847-1.861 1.888-1.861h11.655c1.041 0 1.888.835 1.888 1.86v7.088z"></path>
                    <path d="M13.607 4.417H4.342a.625.625 0 0 0-.63.62c0 .343.283.62.63.62h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62zm0 3.474H4.342a.625.625 0 0 0-.63.62c0 .344.283.621.63.621h9.265a.624.624 0 0 0 .629-.62.625.625 0 0 0-.63-.62z"></path>
                  </g>
                </svg>
                <IonBadge>922</IonBadge>
              </div>
              <div className="wrapperBrain">
                  <img className="brain" src="/brainMinus.png" alt="brainMinus"/>
                  <span>0</span>
                  <img className="brain" src="/brainPlus.png" alt="brainPlus"/>
              </div>
            </div>
          </IonCard>
        </IonToolbar>
      </IonContent>
    </IonPage>
  );
}

export default Popular;
