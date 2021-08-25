import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ComunService } from  '../services/comun.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {


  favoriteColor = 'BLUE';
  favoriteColorControl = new FormControl('NEGRO');

  $projects:Observable <any>;

  constructor(private comunService:ComunService) { }

  ngOnInit() {
  	this.$projects=this.comunService.createCollection('projects-list');
  }

}
