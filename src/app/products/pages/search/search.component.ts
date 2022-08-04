import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/IProduct';
import { DataProductsService } from '../../services/data-products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  termino: string = ''; //* ngModel mac 
  products: IProduct [] = [];
  productoSeleccionado: IProduct | undefined;

  constructor( private dataProductService:DataProductsService) { }

  ngOnInit(): void {
  }

  searchProduct() {
    this.dataProductService.getSuggestions(this.termino.trim()).subscribe(product => this.products = product);
  }

}
