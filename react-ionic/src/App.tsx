import React from 'react';
import './App.css';

import {} from '@ionic/core';
import { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonBadge } from '@ionic/react';
import Home from './pages/Home';
import Tab2 from './pages/Tab2';

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab3" component={Tab2} exact={true} />
            <Route path="/tab4" component={Tab2} exact={true} />
            <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href='/home'>
              <IonIcon name="home" icon={images} />
              <IonLabel>Home</IonLabel>
              <IonBadge>6</IonBadge>
            </IonTabButton>
  
            <IonTabButton tab="tab2" href='/tab2'>
              <IonIcon name="tab2" />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
  
            <IonTabButton tab="tab3" href='/tab2'>
              <IonIcon name="tab3" />
              <IonLabel>Tab 3</IonLabel>
            </IonTabButton>
  
            <IonTabButton tab="tab4" href='/tab2'>
              <IonIcon name="tab4" />
              <IonLabel>Tab 4</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;