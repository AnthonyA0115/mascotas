import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { HomeService } from 'src/app/services/home/home.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  icono:any;
  usuario:any='tony';
  datapost: string ="";
  idUsu:any;
  keys:any=[];


  constructor(
    public nav : Router,
    private usuarioService : HomeService,
    private loadingCtrl : LoadingController,
  ) { }

  ngOnInit() {
    /* var datapost = localStorage.getItem('usuario');
    var arregloid = JSON.parse(datapost);
    this.idUsu = arregloid.id;
    var usu = arregloid.name_comple.split(" ");
    this.usuario = usu[0];
    console.log(this.usuario);

    var datapost = localStorage.getItem('ingresado');
    var arregloid = JSON.parse(datapost);
    var key = arregloid.key;
    var token = arregloid.token;
    this.keys={
      key: key,
      token: token
    } */
  }

  async cerrarSesion(){
    /* var usuario = {
      table: 'session',
      function:"user_logout",
      data: {
          "use_id": this.idUsu
      }
    } */
    
    const loading = await this.loadingCtrl.create({message : 'cargando...'});
    await loading.present();
   /*  this.usuarioService.put(usuario,this.keys).subscribe( async resp => {
      console.log(resp); */
      loading.dismiss();
      localStorage.clear();
      this.nav.navigate(['login']);
    /* }); */
  }

  MenuOpen(){
    console.log("se abrio el menu");
    //this.sessionEnabled();
  }

}
