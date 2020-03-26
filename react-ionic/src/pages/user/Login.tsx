import React from 'react';

import './Login.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { 
  IonPage, 
  IonContent, 
  IonImg, 
  IonInput, 
  IonCheckbox, 
  IonButton, 
  IonItem, 
  IonLabel 
} from '@ionic/react';

/* Temporary decision */
// export interface EventHandlerProps {
//   onClick: (e: React.MouseEvent) => void
// }

function Login() { //{ onClick }: EventHandlerProps
  // function onFocus(e: React.FocusEvent) {
  //   console.log('Focused!', e.currentTarget);
  //   let tabs = document.getElementsByTagName('ion-tab-bar');
  //   tabs[0].classList.add('disable-tabs');
  // }

  // function onBlur(e: React.FocusEvent) {
  //   console.log('Blured!', e.currentTarget);
  //   let tabs = document.getElementsByTagName('ion-tab-bar');
  //   tabs[0].classList.remove('disable-tabs');
  // }

  let tabs = document.getElementsByTagName('ion-tab-bar');
  tabs[0].classList.add('disable-tabs');

  return(
    <IonPage>
      <IonContent className='specific-background-color'>
        <div className='_login'>
          <div className='card'>
            <div className='card-body'>
              <div className='text-center'>
                <a href='/home'>
                  <IonImg src='/login/logo-black-title.png' alt='logo' className='_login-logo'></IonImg>
                </a>
              </div>

              <form className='form-horizontal' action='' method='post'>
                <IonInput tabIndex={1} className='form-control' type='email' placeholder='E-mail'></IonInput>
                <IonInput tabIndex={2} className='form-control' type='password' placeholder='Пароль'></IonInput>
                <IonItem className='ion-item-highlight' lines='none'>
                  <div className="wrapperOptionLogin">
                    <div> <IonCheckbox tabIndex={3} slot='start' value='isRemembered'></IonCheckbox> </div>
                    <div> <IonLabel>Запомнить меня</IonLabel> </div>
                  </div>
                </IonItem>
                <IonButton tabIndex={4} className='login-button' type='submit'>Войти</IonButton>
                {/*  */}
                <IonItem tabIndex={5} className='ion-item-highlight' lines='none' target='_blank' href='#vk'>
                  <div className="wrapperOptionLogin">
                    <div> <IonImg src='/login/vk.png' alt='vk' className='_login-social-network'></IonImg></div>
                    <div> <IonLabel>Войти через ВК</IonLabel></div>
                </div>
                </IonItem>
                <IonItem tabIndex={6} className='ion-item-highlight' lines='none' target='_blank' href='#fb'>
                  <div className="wrapperOptionLogin">
                    <div><IonImg src='/login/f.png' alt='fb' className='_login-social-network'></IonImg></div>
                    <div><IonLabel>Войти через FB</IonLabel></div>
                  </div>
                </IonItem>
                {/*  */}
                <IonItem tabIndex={5} className='ion-item-highlight' lines='none' target='_blank' href='#vk'>
                  <div className="wrapperOptionLogin">
                    <div> <i className="fas fa-lock text-muted"></i></div>
                    <div><IonLabel>Проблемы со входом?</IonLabel></div>
                  </div>
                </IonItem>
                <IonItem tabIndex={6} className='ion-item-highlight' lines='none' target='_blank' href='#fb'>
                  <div className="wrapperOptionLogin">
                    <div><i className="fas fa-user-circle text-muted"></i></div>
                    <div><IonLabel>Регистрация</IonLabel></div>
                  </div>
                </IonItem>
              </form>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Login;
