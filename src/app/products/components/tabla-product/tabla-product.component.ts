import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-product',
  templateUrl: './tabla-product.component.html',
  styleUrls: ['./tabla-product.component.scss']
})
export class TablaProductComponent implements OnInit {

  @Input() especificaciones: any;
  constructor() { }

  ngOnInit(): void {
  }

}
