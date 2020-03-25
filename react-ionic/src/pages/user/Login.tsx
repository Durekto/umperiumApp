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

function Login() {
    return(
        <IonPage className='disable-boost'>
            <IonContent>
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
                                    <IonCheckbox tabIndex={3} slot='start' value='isRemembered'></IonCheckbox>
                                    <IonLabel>Запомнить меня</IonLabel>
                                </IonItem>
                                <IonButton tabIndex={4} className='login-button' type='submit'>Войти</IonButton>
                                {/*  */}
                                <IonItem tabIndex={5} className='ion-item-highlight' lines='none' target='_blank' href='#vk'>
                                    <IonImg src='/login/vk.png' alt='vk' className='_login-social-network'></IonImg>
                                    <IonLabel>Войти через ВК</IonLabel>
                                </IonItem>
                                <IonItem tabIndex={6} className='ion-item-highlight' lines='none' target='_blank' href='#fb'>
                                    <IonImg src='/login/f.png' alt='fb' className='_login-social-network'></IonImg>
                                    <IonLabel>Войти через FB</IonLabel>
                                </IonItem>
                                {/*  */}
                                <IonItem tabIndex={5} className='ion-item-highlight' lines='none' target='_blank' href='#vk'>
                                    <i className="fas fa-lock text-muted"></i>
                                    <IonLabel>Проблемы со входом?</IonLabel>
                                </IonItem>
                                <IonItem tabIndex={6} className='ion-item-highlight' lines='none' target='_blank' href='#fb'>
                                    <i className="fas fa-user-circle text-muted"></i>
                                    <IonLabel>Регистрация</IonLabel>
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
