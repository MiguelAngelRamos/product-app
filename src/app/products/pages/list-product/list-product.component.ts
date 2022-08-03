import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';
import { DataProductsService } from '../../services/data-products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit, OnDestroy {

  products: IProduct[] = [];
  listObservers: Array<Subscription> = [];
  constructor(private dataProductsService: DataProductsService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    const getProductsSubcription = this.dataProductsService.getProducts().subscribe( products => this.products = products );
    this.listObservers.push(getProductsSubcription);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    //* Todas las subcripciones dentro de la lista "listObservers", las recorremos y le aplicamos un "unsubscribe()"
    //* Para evitar la fuga de memoria y que nuestra app tenga una mejor performace
    this.listObservers.forEach( sub => sub.unsubscribe());
  }

}
