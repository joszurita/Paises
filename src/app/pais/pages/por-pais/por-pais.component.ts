import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Coutry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  hayError: Boolean= false;
  paises: Coutry[]=[];

 termino:string='';
 constructor(private PaisService:PaisService){
  

 }
 buscarPais(termino:string){ 

  this.hayError=false;
  this.termino=termino;

this.hayError=false;
   console.log(this.termino);
   this.PaisService.buscarPais(this.termino).
   
   subscribe((paises)=>{console.log(paises);
    this.paises=paises;
  },(error)=>{
     this.hayError=true;
     this.paises=[];
   })

 }

}
