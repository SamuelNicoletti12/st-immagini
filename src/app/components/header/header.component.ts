import { Component } from '@angular/core';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private ss: ServiziService) { }
}
