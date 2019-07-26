import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrincipalPage } from './principal.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/principal',
    pathMatch: 'full'
  },
  {
    path: '',
    component: PrincipalPage,
    children: [
      
      { path: 'contactos', loadChildren: '../contactos/contactos.module#ContactosPageModule' }

    ]
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrincipalPage]
})
export class PrincipalPageModule {}
