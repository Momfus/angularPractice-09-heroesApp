import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../Models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor(

    private heroesService: HeroesService

  ) { }

  ngOnInit() {
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {

      console.log('Formulario no válido');
      return;

    }

    if ( this.heroe.id ) {

       this.heroesService.actualizarHeroe( this.heroe )
            .subscribe( res => {

              console.log(res);

             });

    } else {

      this.heroesService.crearHeroe( this.heroe )
          .subscribe( res => {

            console.log(res);
            this.heroe = res; // Instrucción que esta de más porque todo objeto igualmente es pasado por referencia

          });

    }

  }

}
