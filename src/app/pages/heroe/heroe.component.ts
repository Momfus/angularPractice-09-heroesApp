import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../Models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../services/heroes.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';


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

    // Uso de cartel de espera y alerta de sweetalert2
    Swal.fire({

      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false

    });

    Swal.showLoading();

    let peticion: Observable<any>;

    // Ver si se actualiza o crea el héroe
    if ( this.heroe.id ) {

      peticion = this.heroesService.actualizarHeroe( this.heroe );

    } else {

      peticion = this.heroesService.crearHeroe( this.heroe );

    }

    peticion.subscribe( res => {

      Swal.fire({

        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        type: 'success'

      });

    });

  }

}
