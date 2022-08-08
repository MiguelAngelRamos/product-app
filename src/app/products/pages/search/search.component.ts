import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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

  opcionSeleccionada(event : MatAutocompleteSelectedEvent ) {
    console.log(event.option.value); //* Obtenemos el producto
    console.log(!event.option.value);

    if(!event.option.value) {
      console.log('String vacio');
      this.productoSeleccionado = undefined;
      return;
    }

    const producto: IProduct = event.option.value;
    this.termino = producto.title;

    //* voy a traer al producto especifico
    this.dataProductService.getProductsById(Number(producto.id)).subscribe( producto => {
      this.productoSeleccionado = producto;
    });
  }

}
