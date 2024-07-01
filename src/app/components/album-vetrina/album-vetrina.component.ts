import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { ServiziService } from '../../services/servizi.service';

@Component({
  selector: 'app-album-vetrina',
  templateUrl: './album-vetrina.component.html',
  styleUrl: './album-vetrina.component.css'
})
export class AlbumVetrinaComponent implements OnInit {

  album: Album[] = [];

  constructor(private ss: ServiziService) {

  }
  ngOnInit(): void {
    this.ss.getCall().subscribe(dati => {
      this.album = dati;
    })
  }



}
