import { Component, OnInit } from '@angular/core';
import { Album, Img } from '../../models/album';
import { ServiziService } from '../../services/servizi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.css'
})
export class DettaglioComponent implements OnInit {
  album?: Album;

  constructor(private ss: ServiziService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")!;
    this.ss.getCallById(id).subscribe(a => {
      this.album = a;
    })
  }
}
