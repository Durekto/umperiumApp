import React from 'react';

 import './Reward.css';

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

function Reward() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>Вознаграждение за активность</div>
              <div>
                <img className="titleImgReward" src="/user-astronaut.svg" alt=""/>
              </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>
              <IonCardHeader>
                  <IonToolbar>
                      <div>
                          Вознаграждение за активность. За различную информационную активность на платформе получайте умпериалы. На сегодняшний день предусмотрены следующие программы вознаграждения (в дальнейшем система поощрений будет расширяться):                       </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <IonToolbar>
                      <div>
                          <strong>Активным комментаторам:</strong>

                          <br/>

                          <span>
                                каждый месяц, 20 самым активным комментаторам на площадке выделяется по 3000 умпериалов.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <strong>Топовым авторам:</strong>

                          <br/>

                          <span>
                                каждый месяц, 10 авторам, у которых будет больше всего топовых публикаций предусмотрено вознаграждение по 5000 умпериалов.
                          </span>
                      </div>
                  </IonToolbar>
                  <IonToolbar>
                      <div>
                          <strong>Актуальные тренды:</strong>

                          <br/>

                          <span>
                                пишите посты на заданные темы в трендах и получайте вознаграждение.
                          </span>
                      </div>
                  </IonToolbar>


              </IonCardContent>
          </IonCard>





      </IonContent>
    </IonPage>
  );
}

export default Reward;
