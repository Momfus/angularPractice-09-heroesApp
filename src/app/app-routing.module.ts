import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';


const routes: Routes = [

  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }

];

@NgModule({

  imports: [

    RouterModule.forRoot( routes ) // Defino que las rutas de mi proyecto es el arreglo routes declarado antes

  ],

  // Lo de abajo es para que se pueda usar en cualquier parte del proyecto
  exports: [

    RouterModule

  ]

})
export class AppRoutingModule { }
