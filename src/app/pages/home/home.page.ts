import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  arrayinfo:any=[];
  operador:any;
  tipoUsu:any;
  idUsu:any;
  usuario:any;
  keys:any=[];
  constructor(
    public nav : Router,
    private usuarioService : HomeService,
    private loadingCtrl : LoadingController,
    public alertController: AlertController,
    public menuCtrl: MenuController
    ) {}

    async ngOnInit() {
     /*  var datapost = localStorage.getItem('usuario');
      var arregloid = JSON.parse(datapost);
      this.tipoUsu = arregloid.tipo_usu;
      this.idUsu = arregloid.id;
      var usu = arregloid.name_comple.split(" ");
      this.usuario = usu[0];
      console.log(this.tipoUsu);

      var datapost = localStorage.getItem('ingresado');
      var arregloid = JSON.parse(datapost);
      var key = arregloid.key;
      var token = arregloid.token;
      this.keys={
        key: key,
        token: token
      } */

    }


    /* async seguridad(){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Usuario Invalido',
        message: 'Ya no tiene permisos de la app.',
        buttons: ['OK']
      });
      await alert.present();
      localStorage.clear();
      this.nav.navigate(['login']);
    } */
}

