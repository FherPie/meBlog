import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

$profile:Observable <any>;


linkedInLink="https://www.linkedin.com/in/andr%C3%A9s-fernando-piedra-1a82a324/";

githubLink="https://github.com/FherPie";

  constructor(private aboutService:AboutService ) { }

  ngOnInit() {
  	this.$profile=this.aboutService.createCollection('profile');
  }

}
