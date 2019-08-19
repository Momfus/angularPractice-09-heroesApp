// tslint:disable: max-line-length

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../Models/heroe.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public url = 'https://curso-angular-login-app.firebaseio.com';

  constructor(

    private http: HttpClient

  ) { }


  crearHeroe( heroe: HeroeModel ) {

    return this.http.post( `${this.url}/heroes.json`, heroe )
            .pipe(

              map( (res: any) => {

                heroe.id = res.name;
                return heroe;

              } )

            );

  }



  actualizarHeroe( heroe: HeroeModel ) {

    const heroeTemp = {

      ...heroe // Con los tres puntos copia todas las propiedas y los copia con igual nombre a heroeTempo para no tener que hacer cada una de las asignaciones

    };

    delete heroeTemp.id; // Quitamos el campo id pero no lo hacemos del objeto original porque no queremos perder ese dato que es mostrado en pantalla


    return this.http.put(`${ this.url }/heroes/${ heroe.id }.json`, heroeTemp); // El .json no es obligatorio, aca es propio de firebase porque asi funciona su backend

  }

  getHeroes() {

    return this.http.get(`${ this.url }/heroes.json`)
                .pipe(
                  map( this.crearArreglo ) // Equivalente a:  res => this.crearArreglo( res )
                );

  }

  private crearArreglo( heroesObj: object ) {

    const heroes: HeroeModel[] = [];

    if ( heroesObj === null ) { return []; } // En el caso que no haya heroe alguno

    Object.keys( heroesObj )
            .forEach( key => {

              const heroe: HeroeModel = heroesObj[key];
              heroe.id = key;

              heroes.push( heroe );

            });

    return heroes;

  }


}


