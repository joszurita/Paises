import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-region-tabla',
  templateUrl: './region-tabla.component.html',
  styleUrls: ['./region-tabla.component.css']
})
export class RegionTablaComponent implements OnInit {
  @Input () regiones:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
