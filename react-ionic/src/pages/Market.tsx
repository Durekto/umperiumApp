import React from 'react';
import {IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';

function Market() {
  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle className="titleGrand"> <div>Магазин влияния </div>
                      <div>
                          <img className="titleImgGrand" src="/shopCart.svg" alt=""/>
                      </div>
                  </IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent>

              <IonCard>
                  <IonCardContent>
                      <IonToolbar>
                          <div>
                          <span>
                              страница в разработке
                          </span>
                          </div>
                      </IonToolbar>
                  </IonCardContent>
              </IonCard>

          </IonContent>
      </IonPage>
  );
}

export default Market;
