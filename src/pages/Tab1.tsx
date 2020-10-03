import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import Player from '../components/Player/Player';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Live</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Live</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Player />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
