import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComunService } from  '../services/comun.service';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent implements OnInit {
  
  tools: Observable<any[]>;

  constructor(private dataService: ComunService) { }

  ngOnInit() {
    this.tools= this.dataService.createCollection('tools-list');
  }

}
