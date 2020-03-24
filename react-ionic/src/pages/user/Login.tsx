import React from 'react';

import './Login.css';
import { IonPage, IonContent, IonImg, IonInput, IonCheckbox, IonButton, IonItem, IonHeader, IonLabel, IonToolbar, IonTitle } from '@ionic/react';

//#region Images

// import ump from '/login/logo-black-title.png';
// import vk from '/login/vk.png';
// import fb from '/login/f.png';

//#endregion

function Login() {
    return(
        <IonPage>
            <IonContent class='_login'>
                <IonHeader>
                    <IonToolbar></IonToolbar>
                </IonHeader>

                {/* <div> */}
                    <IonImg src='/login/logo-black-title.png' alt='logo' class='_login-logo'></IonImg>
                    <IonInput type='email' placeholder='E-mail'></IonInput>
                    <IonInput type='password' placeholder='Пароль'></IonInput>
                    <IonLabel><IonCheckbox></IonCheckbox>Запомнить меня</IonLabel>
                    <IonButton type='submit'>Войти</IonButton>
                    <IonItem>
                        <IonImg src='/login/vk.png' alt='vk' class='_login-social-network'></IonImg>
                        <a href='#/vk'>Войти через ВК</a>
                    </IonItem>
                    <IonItem>
                        <IonImg src='/login/f.png' alt='fb' class='_login-social-network'></IonImg>
                        <a href='#/fb'>Войти через FB</a>
                    </IonItem>
                {/* </div> */}
            </IonContent>
        </IonPage>
    );
}

export default Login;