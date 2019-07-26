import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ContactosPage } from './contactos.page';
import { RestServiceService } from 'src/app/services/rest-service.service';


const routes: Routes = [
  {
    path: '',
    component: ContactosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactosPage]
})
export class ContactosPageModule {}
