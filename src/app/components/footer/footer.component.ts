import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  Graficas="nada";
  Bitacora="nada";
  Novedades="nada";
  Visitas="nada";
  tipoUsu:any;

  constructor(
    public nav : Router
  ) { }

  ngOnInit() {
    /* var datapost = localStorage.getItem('usuario');
    var arregloid = JSON.parse(datapost);
    this.tipoUsu = arregloid.tipo_usu; */
  }

}
