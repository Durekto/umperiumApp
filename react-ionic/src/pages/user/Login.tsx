import React from 'react';

import './Login.css';
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
        <IonPage>
            <IonContent className='_login'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='text-center'>
                            <a href='#'>
                                <IonImg src='/login/logo-black-title.png' alt='logo' className='_login-logo'></IonImg>
                            </a>
                        </div>

                        <form className='form-horizontal' action='' method='post'>
                            <IonInput className='form-control' type='email' placeholder='E-mail'></IonInput>
                            <IonInput className='form-control' type='password' placeholder='Пароль'></IonInput>
                            <IonItem className='ion-item-highlight' lines='none'>
                                <IonLabel >Запомнить меня</IonLabel>
                                <IonCheckbox slot='start' value='isRemembered'></IonCheckbox>
                            </IonItem>
                            <IonButton className='login-button' type='submit'>Войти</IonButton>
                            <IonItem className='ion-item-highlight' lines='none' target='_blank' href='#vk'>
                                <IonImg src='/login/vk.png' alt='vk' className='_login-social-network'></IonImg>
                                <IonLabel>Войти через ВК</IonLabel>
                            </IonItem>
                            <IonItem className='ion-item-highlight' lines='none' target='_blank' href='#fb'>
                                <IonImg src='/login/f.png' alt='fb' className='_login-social-network'></IonImg>
                                <IonLabel>Войти через FB</IonLabel>
                            </IonItem>
                        </form>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Login;
