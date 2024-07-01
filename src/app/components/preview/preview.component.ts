import { Component, Input } from '@angular/core';
import { Album } from '../../models/album';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {
  @Input()
  album?: Album;

  constructor(public ss: ServiziService) {

  }
}
