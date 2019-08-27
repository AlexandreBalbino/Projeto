import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../service/comunication.service';

@Component({
  selector: 'app-tela-video',
  templateUrl: './tela-video.component.html',
  styleUrls: ['./tela-video.component.scss']
})
export class TelaVideoComponent implements OnInit {

  constructor(private comunicationService: ComunicationService) { }

  ngOnInit() {
  }

  private function(): void{
    console.log("teste")
  }

}
