import React from 'react';

import './Rank.css';
import './Rankk.js';

import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonItem,
    IonLabel,
    IonInput

    } from '@ionic/react';

function Rank() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Лидеры мнений</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonCardHeader>
                      <IonToolbar>
                          <div className="wrapperAllSettingHeader">
                              <div className="current badge">
                                  <div className="tabSetting " id="rankThinkers">Мыслители</div>
                              </div>
                              <div className="badge">
                                  <div className="tabSetting " id="rankCommunities">Сообщества</div>
                              </div>
                          </div>
                      </IonToolbar>
                      <IonToolbar>
                          <IonItem>
                              <IonLabel position="floating">Поиск</IonLabel>
                              <IonInput></IonInput>
                          </IonItem>
                      </IonToolbar>
                  </IonCardHeader>
              </IonCardHeader>
              <IonCardContent>
                  <div data-index="0" className="infoAboutYou tabsPanel active">

                        <div className="titleRankThinkers">
                            <div>
                                <span>№</span>
                            </div>
                            <div>
                                <span>МЫСЛИТЕЛЬ</span>
                            </div>
                        </div>

                      <div className="itemRankThinkers greyBackground">
                          <div className="">
                              <span>1</span>
                          </div>
                          <div className="avatarThinkers">
                              <img src="/user.jpg" alt=""/>
                          </div>
                          <div className="badgeUserRank">
                              <span>User User</span>
                          </div>
                      </div>

                      <div className="itemRankThinkers">
                          <div className="">
                              <span>2</span>
                          </div>
                          <div className="avatarThinkers">
                              <img src="/user.jpg" alt=""/>
                          </div>
                          <div className="badgeUserRank">
                              <span>User User</span>
                          </div>
                      </div>



                  </div>
                  <div data-index="1" className="social tabsPanel">
                      <div className="titleRankCommunities">
                          <div className="numberTitleCommunities">
                              <span>№</span>
                          </div>
                          <div className="titleTitleCommunities">
                              <span> СООБЩЕСТВО</span>
                          </div>
                          <div className="followerTitleCommunities">
                              <span> ПОДПИСЧИКОВ</span>
                          </div>
                      </div>

                      <div className="itemRankCommunities greyBackground">
                          <div className="CommunitiesNumberImg">
                              <div className="">
                                  <span>2</span>
                              </div>
                              <div className="avatarThinkers">
                                  <img src="/user.jpg" alt=""/>
                              </div>
                          </div>
                          <div className="badgeUserRank itemUserCommunities">
                              <span>User User</span>
                          </div>
                          <div className="itemFollowerCommunities">
                              <span>
                                  505
                              </span>
                          </div>
                      </div>

                      <div className="itemRankCommunities">
                          <div className="CommunitiesNumberImg">
                              <div className="">
                                  <span>2</span>
                              </div>
                              <div className="avatarThinkers">
                                  <img src="/user.jpg" alt=""/>
                              </div>
                          </div>
                          <div className="badgeUserRank itemUserCommunities">
                              <span>User User</span>
                          </div>
                          <div className="itemFollowerCommunities">
                              <span>
                                  400
                              </span>
                          </div>
                      </div>
                  </div>
              </IonCardContent>
          </IonCard>

      </IonContent>
    </IonPage>
  );
}

export default Rank;
