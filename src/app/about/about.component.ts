import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

$profile:Observable <any>;


  constructor(private aboutService:AboutService ) { }

  ngOnInit() {
  	this.$profile=this.aboutService.createCollection('profile');
  }

}
