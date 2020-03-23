import React from 'react';
import { IonContent, IonPage} from '@ionic/react';

function Home() {
  return (
    <IonPage>
        <IonContent>
            The world is your oyster.
            <p>If you get lost, the <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org">docs</a> will be your guide</p>
        </IonContent>
    </IonPage>
  );
};

export default Home;
