import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-bitacora',
  templateUrl: './modal-bitacora.page.html',
  styleUrls: ['./modal-bitacora.page.scss'],
})
export class ModalBitacoraPage implements OnInit {

  constructor(
    private modalController:ModalController

  ) { }

  ngOnInit() {
  }

  CloseModal(){
    this.modalController.dismiss(2);
  }
}
