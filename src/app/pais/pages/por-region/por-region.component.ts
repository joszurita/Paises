import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {
  hayError: Boolean= false;
  regiones:any= [];

 termino:string='';
  constructor(private PaisService: PaisService) {

  }

  buscarRegion(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.hayError = false;
    console.log(this.termino);
    this.PaisService.buscarRegion(this.termino).

      subscribe((regiones) => {
        console.log(regiones);
        this.regiones = regiones;
      }, (error) => {
        this.hayError = true;
        this.regiones = [];
      })

  }

}
