import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrls: ['./capital-tabla.component.css']
})
export class CapitalTablaComponent implements OnInit {
  @Input () capitales:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
