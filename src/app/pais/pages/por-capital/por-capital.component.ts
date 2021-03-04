import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  hayError: Boolean= false;
  capitales: any[]=[];

 termino:string='';
 constructor(private PaisService:PaisService){
  

 }
 buscarCapital(termino:string){ 

  this.hayError=false;
  this.termino=termino;

this.hayError=false;
   console.log(this.termino);
   this.PaisService.buscarCapital(this.termino).
   
   subscribe((capitales)=>{console.log(capitales);
    this.capitales=capitales;
  },(error)=>{
     this.hayError=true;
     this.capitales=[];
   })

 }

}
