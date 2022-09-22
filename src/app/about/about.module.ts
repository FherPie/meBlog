//ESTO HAY QUE QUITAR PORQUE YA NO SIRVE 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SkillsListComponent } from '../skills-list/skills-list.component';


@NgModule({
 exports: [AboutComponent], 
  declarations: [AboutComponent,SkillsListComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }