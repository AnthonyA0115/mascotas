import { Injectable } from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private platform:Platform) {
    this.inicializar();
   }



  inicializar(){
    console.log('Initializing HomePage');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    if (this.platform.is('capacitor')) {
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          console.log("los permisos de notificaciones fueron concedidos");
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
          this.addListener();
        } else {
          // Show some error
        }
      });
    }else{
      console.log("no es un movil");
    }
  }

  addListener() {
    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        localStorage.setItem('token',JSON.stringify(token.value));
        console.log('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        console.log('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device -------- esto es en primer plano
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    // Method called when tapping on a notification 
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

  guardarToken(){

  }

}
