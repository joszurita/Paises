import { Component, OnInit, Input } from '@angular/core';
import { Coutry } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent implements OnInit {
@Input () paises:Coutry[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
