import React,{ useState } from 'react';

import './Setting.css'
import './Setting.js'

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
    IonInput,
    IonDatetime,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonButton,
    IonCheckbox,
    IonAlert,

} from '@ionic/react';

function Settings() {
    const [showAlert1, setShowAlert1] = useState(false);

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonCard>
              <IonCardHeader>
                  <IonToolbar >
                      <div className="wrapperAllSettingHeader">
                          <div className="wrapperInfoAndSocial">
                              <button id="infoSetting" name="infoSetting">Информация</button>
                              <div id="SocialSetting">Соц. сети</div>
                          </div>

                          <div className="wrapperProtAndNoti">
                              <div id="protectionSetting">Безопасность</div>
                              <div id="notificationSetting">Уведомления</div>
                          </div>
                      </div>
                  </IonToolbar>
              </IonCardHeader>
              <IonCardContent>
                  <div className="infoAboutYou">
                      <h3>Информация о вас:</h3>
                      <IonItem>
                          <IonLabel position="floating">Имя</IonLabel>
                          <IonInput> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Фамилия</IonLabel>
                          <IonInput> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Никнейм</IonLabel>
                          <IonInput> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel>Дата рождения</IonLabel>
                          <IonDatetime displayFormat="MM DD YYYY" placeholder="Select Date"></IonDatetime>
                      </IonItem>
                      <IonItem>
                      <IonLabel>Страна</IonLabel>
                      <IonSelect placeholder="Select One">
                          <IonSelectOption value="ru">Россия</IonSelectOption>
                          <IonSelectOption value="ua">Украина</IonSelectOption>
                          <IonSelectOption value="blr">Белоруссия</IonSelectOption>
                          <IonSelectOption value="kaz">Казахстан</IonSelectOption>
                          <IonSelectOption value="ge">Грузия</IonSelectOption>
                      </IonSelect>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Город</IonLabel>
                          <IonInput> </IonInput>
                      </IonItem>
                      <IonItem>
                      <IonLabel>Пол</IonLabel>
                      <IonSelect placeholder="Select One">
                          <IonSelectOption value="f">Женский</IonSelectOption>
                          <IonSelectOption value="m">Мужской</IonSelectOption>
                      </IonSelect>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">О себе</IonLabel>
                          <IonTextarea></IonTextarea>
                      </IonItem>
                  </div>
                  <div className="social">
                      <h3>Социальные сети:</h3>
                      <IonItem>
                          <IonLabel position="floating">VK</IonLabel>
                          <IonInput type="url"> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Facebook</IonLabel>
                          <IonInput type="url"> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Odnoklassniki</IonLabel>
                          <IonInput type="url"> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Instagram</IonLabel>
                          <IonInput type="url"> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Twitter</IonLabel>
                          <IonInput type="url"> </IonInput>
                      </IonItem>
                  </div>
                  <div className="protection">
                      <h3>Безопасность:</h3>
                      <IonItem>
                          <IonLabel position="floating">Новый пароль</IonLabel>
                          <IonInput type="password"> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Повторите пароль</IonLabel>
                          <IonInput type="password"> </IonInput>
                      </IonItem>
                      <IonItem>
                          <IonLabel position="floating">Изменить email</IonLabel>
                          <IonInput type="email"> </IonInput>
                      </IonItem>
                  </div>
                  <div className="notification">
                      <h3>Настройка уведомлений:</h3>
                      <div className="wrapperNotiSetting">
                          <div className="notiText">
                              <div>Тип</div>
                              <div>Ответы на мои комментарии</div>
                              <div>Новые комментарии к постам</div>
                              <div>Упоминания в комментариях и в постах</div>
                              <div>На вас подписались</div>
                          </div>
                          <div className="notiEmail">
                              <div><img src="./email-outline.png" alt="email"/></div>
                              <div><IonCheckbox color="dark" /></div>
                              <div><IonCheckbox color="dark" /></div>
                              <div><IonCheckbox color="dark" /></div>
                              <div><IonCheckbox color="dark" /></div>
                          </div>
                          <div className="notiBell">
                              <div><img src="./bell-outline.png" alt="bell"/></div>
                              <div><IonCheckbox color="dark" /></div>
                              <div><IonCheckbox color="dark" /></div>
                              <div><IonCheckbox color="dark" /></div>
                              <div><IonCheckbox color="dark" /></div>
                          </div>
                      </div>


                  </div>
                  <IonButton>Сохранить</IonButton>
              </IonCardContent>
          </IonCard>
          <IonCard>
              <IonCardHeader>
                  <div className="wrapperHeaderUserPage">
                      <div className="userImg">
                          <img  src="../user.jpg" alt="user"/>
                      </div>
                      <div>
                          <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton>
                          <IonAlert
                              isOpen={showAlert1}
                              onDidDismiss={() => setShowAlert1(false)}
                              header={'Alert'}
                              subHeader={'Subtitle'}
                              message={'This is an alert message.'}
                              buttons={['OK','Cancel']}
                          />
                      </div>

                  </div>
              </IonCardHeader>
          </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Settings;
