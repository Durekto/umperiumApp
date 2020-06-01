import React from 'react';

 // import './Promation.css';

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
    IonCheckbox,
    IonButton,
} from '@ionic/react';

function About() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="titleGrand"> <div>О проекте</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

          <IonCard>

              <IonCardContent>
                  <IonToolbar>
                      <div>
                          <span>
                                Умпериум – международная медиаплатформа для агентов цифрового влияния, где пересекаются идеи, страны и люди. Здесь размещают текст, фото и видео, обсуждают происходящее в мире, говорят правду, защищают общественные интересы и приносят людям пользу.
                          </span>
                      </div>
                  </IonToolbar>

                    <br/>

                  <IonToolbar>
                      <div>
                          <span>
                                Вы мыслите, вкладывая свою страсть и энергию в контент. Это бесценные ресурсы, и их не стоит тратить впустую, поэтому каждый день мы стремимся сделать так, чтобы делиться своими идеями с миром вам было легко и просто.
                          </span>
                      </div>
                  </IonToolbar>

                  <br/>

                  <IonToolbar>
                      <div>
                         <span>
                                Мы с вами одна команда, поэтому всегда готовы объединить свои усилия для достижения общего выдающегося результата.
                                С уважением, команда Умпериум
                         </span>
                      </div>
                  </IonToolbar>
              </IonCardContent>
          </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default About;
