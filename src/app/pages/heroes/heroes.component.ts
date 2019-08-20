import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../Models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit() {

    this.cargando = true;

    this.heroesService.getHeroes()
        .subscribe( res => {

          this.heroes = res;
          this.cargando = false;

        });

  }

  borrarHeroe( heroe: HeroeModel, i: number ) {

    Swal.fire({

      title: '¿Estña seguro?',
      text: `¿Está seguro que desea borrar a ${ heroe.nombre }?`,
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true

    }).then( res => {

      if ( res.value ) {

        this.heroes.splice( i, 1 );
        this.heroesService.borrarHeroe( heroe.id ).subscribe(); // .subscribe para que se dispare el evento

      }

    });

  }

}
