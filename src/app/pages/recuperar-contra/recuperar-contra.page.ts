import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* import { SesionLoginService } from '../servicios/sesion-login.service'; */
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login/login-service.service';


@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage {
  bande: any;
  user : [null];
  token:any;
  key:any;
  keys:any=[];

  formulogin = new FormGroup({
    username : new FormControl('',[Validators.email]),
    documento : new FormControl('',[Validators.required])
  });
  constructor(
    public nav : Router,
    /* private arreglo : SesionLoginService, */
    public alertController: AlertController,
    private usuarioService : LoginServiceService,
    private loadingCtrl : LoadingController,
    public menuCtrl: MenuController

  ) { }

  ngOnInit() {
    /* var datapost = localStorage.getItem('ingresado');
      var arregloid = JSON.parse(datapost);
      var key = arregloid.key;
      var token = arregloid.token;
      this.keys={
        key: key,
        token: token
      } */
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'mainMenu');
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true, 'mainMenu');
  }

  async restaurarPasword(formu){
    const loading = await this.loadingCtrl.create({message : 'cargando...'});
    await loading.present();
    var usuario = {
      table: "help",
      data: {
        use_identification: formu.documento,
        use_email: formu.username,
      }
    }
    console.log(usuario);
    this.usuarioService.post(usuario,this.keys).subscribe( async resp => {
      console.log(resp);
      if(resp.value_pk==2){
        this.nav.navigate(['login']);
        loading.dismiss();

      }else{
        //loading.dismiss();
        const alert = await this.alertController.create({
          header: 'incorrecto!',
          subHeader:'',
          cssClass: 'app-delete',
          message: 'Mensaje de informativo',
          mode:'md',
        });
        loading.dismiss();          
        await alert.present();
        setTimeout(()=>{
          alert.dismiss();
        }, 2000);
      }
    });
  }


}
