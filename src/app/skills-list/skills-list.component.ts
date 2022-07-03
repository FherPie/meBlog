import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComunService } from  '../services/comun.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {


  skills: Observable<any[]>;

  constructor(private dataService: ComunService) { }

  ngOnInit() {
    this.skills= this.dataService.createCollection('skills-list');
  }

}
