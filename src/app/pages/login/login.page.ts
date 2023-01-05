import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* import { SesionLoginService } from '../servicios/sesion-login.service'; */
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import {Md5} from 'ts-md5/dist/md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  bande: any;
  user : [null];
  token:any;
  key:any;
  uid:any;

  formulogin = new FormGroup({
    username : new FormControl('',[Validators.email]),
    password : new FormControl('',[Validators.required])
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
    var token = localStorage.getItem('token');
    if (token!=null && token!="") {
      var tok= token.split('"',2); 
      this.uid= tok[1];
    }
    //this.uid= this.device.uuid;
  }

  refresh(){
    location.reload();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'mainMenu');
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true, 'mainMenu');
  }


  async loginon(formu){
    const md5 = new Md5()
    var usuario = {
      function: "login",
      data: {
          "use_email": formu.username,
          "use_password": md5.appendStr(formu.password).end(),
          "is_mobile":1,
          "device":this.uid
      }
    }
    console.log(usuario);
    
    const loading = await this.loadingCtrl.create({message : 'cargando...'});
    await loading.present();
    this.usuarioService.loginByEmail(usuario).subscribe( async resp => {
      console.log(resp.User_Info);
      this.bande = resp.User_Info;
      this.token=resp.Token;
      this.key=resp.Key;

      if(resp.mesagge=="Unauthorized: incorrect e-mail"){
        const alert = await this.alertController.create({
          cssClass: 'app-incorrect',
          header: 'El usuario digitado no existe.',
          message: 'Por Favor Registrarse.',
          mode:'md',
          buttons: ['Confirmar']
        });
        loading.dismiss();
        await alert.present();
        return;
      }
      else if(resp.mesagge=="Unauthorized: incorrect password"){
        const alert = await this.alertController.create({
          cssClass: 'app-incorrect',
          header: 'Datos incorrectos',
          message: 'Por favor verifique los datos.',
          mode:'md',
          buttons: ['Confirmar']
        });
        loading.dismiss();
        await alert.present();
        return;
      }
      else if(resp.mesagge=="Unauthorized: is logged"){
        const alert = await this.alertController.create({
          cssClass: 'app-incorrect',
          header: 'El usuario digitado ya esta logueado.',
          message: 'Por Favor Verifique otros dispositivos.',
          mode:'md',
          buttons: ['Confirmar']
        });
        loading.dismiss();
        await alert.present();
        return;
      }
      else{
        if(resp.User_Info.use_type =="1" || resp.User_Info.use_type =="2" || resp.User_Info.use_type =="3"){
          loading.dismiss();
          this.ingresar();
        }else{
          const alert = await this.alertController.create({
            cssClass: 'app-incorrect',
            header: 'Datos incorrectos',
            message: 'Usuario no permitido.',
            mode:'md',
          });
          loading.dismiss();
          await alert.present();
          setTimeout(()=>{
            alert.dismiss();
          }, 2000);
        }
      }

    });
  }
  
  async ingresar(){
    var f =this.bande;

    var usuario = {
      username: f.use_email,
      id: f.use_id,
      docu: f.use_identification,
      name_comple:f.use_name+" "+f.use_lastname,
      cel: f.use_cellphone,
      tipo_usu: f.use_type
    }

    var llaves = {
      token: this.token,
      key: this.key
    }
    
    /* const loading = await this.loadingCtrl.create({message : 'cargando...'});
    await loading.present(); */
    
    if (f != "") {
      localStorage.setItem('usuario',JSON.stringify(usuario));
      localStorage.setItem('ingresado',JSON.stringify(llaves) );
      /* loading.dismiss(); */
      //this.nav.navigate(['home']);
      this.refresh();

    }
    else{
      /* loading.dismiss(); */
      const alert = await this.alertController.create({
        cssClass: 'app-incorrect',
        header: 'Datos incorrectos',
        message: 'Por favor verifique los datos.',
        mode:'md',
      });
      await alert.present();
      setTimeout(()=>{
        alert.dismiss();
      }, 2000);
    }
  }
  
}
