import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../Models/heroe.model';
import { NgForm } from '@angular/forms';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel = new HeroeModel();

  constructor() { }

  ngOnInit() {
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {

      console.log('Formulario no válido');
      return;

    }
    console.log(form);
    console.log(this.heroe);

  }

}
