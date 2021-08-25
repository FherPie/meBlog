import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';

@NgModule({
  declarations: [AdminComponent, AdminPageComponent, AuthPageComponent, MessagesPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class AdminModule { }
