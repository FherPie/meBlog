//ESTO HAY QUE QUITAR PORQUE YA NO SIRVE 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';


@NgModule({
 exports: [AboutComponent], 
  declarations: [AboutComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }