import React from 'react';

import './userPage.css';

import {
  IonContent,
  // IonHeader,
  IonPage,
  // IonTitle,
  // IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  // IonCardTitle,
  // IonAvatar,
  IonList,
  IonItem,
  IonBadge,
} from '@ionic/react';

function userPage() {
  return (
    <IonPage>
      <IonContent className='user-page'>
        <IonCard>
          <IonCardHeader>
            <div className="wrapperHeaderUserPage">
              <div className="userImg">
                <img  src="./user.jpg" alt="user"/>
              </div>
              <div>
                <span className="userName">User Name</span>
              </div>
              <div className="countryAndFlag">
                <img className="userCountry" src="./RUS.png" alt="Rus"/>
                <span>Россия</span>
              </div>
              <div id="skills">
                <div className="icons" ><img src="./user-circle-solid.svg" title="Любитель" alt="user-circle"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./user-edit-solid.svg" title="Специалист" alt="user-edit"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./user-tie-solid.svg" title="Мастер" alt="user-tie"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./user-graduate-solid.svg" title="Эксперт" alt="user-graduate"/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src="./crown.png" title="Профи" alt="crown"/>
                </div>
                <div className="value">
                  <progress  value="30" max="61"></progress>
                </div>
              </div>
              <div className="wrapperRank">
                <span>Рейтинг : 79 Любитель</span> <img className="icoRang" src="./user-circle-solid.svg" title="Любитель" alt="user-circle"/>
              </div>
            </div>
          </IonCardHeader>
          <IonCardContent>
              <IonList className="WrapperOptions">
                  <IonItem className="option">
                      <span>Охват аудитории:</span>
                      <IonBadge color="default">0</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <span>Публикаций:</span>
                      <IonBadge color="default">1</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <span>Топовых постов:</span>
                      <IonBadge color="default">0</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <span>Сила мысли:</span>
                      <IonBadge color="default">0</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <span>Коментариев получено:</span>
                      <IonBadge color="default">0</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <span>Сообщества:</span>
                      <IonBadge color="default">0</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <span>Подписок:</span>
                      <IonBadge color="default">0</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <span>Подписчиков:</span>
                      <IonBadge color="default">0</IonBadge>
                  </IonItem>
                  <IonItem className="option">
                      <IonBadge color="light">Тег</IonBadge>
                      <span>1</span>
                      <IonBadge color="light">Топовый пост</IonBadge>
                      <span>1</span>
                  </IonItem>
              </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default userPage;
