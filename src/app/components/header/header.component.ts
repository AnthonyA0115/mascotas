import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  usuario:any;
  constructor() { }

  ngOnInit() {
    /* var datapost = localStorage.getItem('usuario');
    var arregloid = JSON.parse(datapost);
    this.usuario = arregloid.name_comple; */
  }



}
