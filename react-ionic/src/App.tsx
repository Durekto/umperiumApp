// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {} from '@ionic/core';
// import { IonButton } from '@ionic/react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <IonButton>HI</IonButton>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

import {} from '@ionic/core';
import { IonLabel } from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//import Home from './pages/Home';
//import NewItem from './pages/NewItem';

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

// const App: React.FC = () => {
//   const isAuthed = true;
//   return (
//     <IonApp>
//       <IonReactRouter>
//         <IonRouterOutlet>
//           {/* <Route path="/home" component={Home} exact={true} />
//           <Route path="/new" component={NewItem} exact={true} /> */}
//           <Route exact path="/" render={() => <Redirect to="/home" />} />
//         </IonRouterOutlet>
//       </IonReactRouter>
//     </IonApp>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IonLabel>Supported By Ionic</IonLabel>
      </header>
    </div>
  );
}

export default App;
