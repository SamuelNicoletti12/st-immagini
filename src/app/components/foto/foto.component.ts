import { Component } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';
import { Img } from '../../models/album';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrl: './foto.component.css'
})
export class FotoComponent {
  img?: Img;

  constructor(private ss: ServiziService) {

  }
  ngOnInit(): void {
    this.ss.getImgById("id").subscribe(dati => {
      this.img = dati;
    })
  }
}
