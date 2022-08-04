import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IProduct } from '../../interfaces/IProduct';
import { DataProductsService } from '../../services/data-products.service';

@Component({
  selector: 'app-product-id',
  templateUrl: './product-id.component.html',
  styleUrls: ['./product-id.component.scss']
})
export class ProductIdComponent implements OnInit {
  product!: IProduct;
  constructor( 
    private activateRoute: ActivatedRoute,
    private dataProductsService: DataProductsService,
    private router: Router
    ) { }

  ngOnInit(): void {
     this.activateRoute.params.subscribe(({ id }) => this.dataProductsService.getProductsById(+id).subscribe( product => this.product = product)); //* {id: 1}
    // this.activateRoute.params.subscribe(({ id }) => console.log(typeof(Number(id))));
    //* el switchMap retorna otro observable y toma la data del observable anterior
    //* Si llegara a recibir otro valor del observable anterior esto quiere decir que el observable anterior al switchMap(activateRoute). cancela todo
    //* y recibe nueva información del observable y retorna un nuevo observable con dicha información

    //* this.activateRoute.params.pipe( switchMap(({id}) => this.dataProductsService.getProductsById(id))).subscribe(product => this.producto = product);
  }

  back() {
    this.router.navigate(['/products/list-product']);
  }

  // const objetoPersona = {
  //   nombre: 'Miguel',
  //   apellido: 'Ramos',
  //   nacionalidad: 'Chileno'
  // }

  // { nombre, apellido, nacionalidad } = objetoPersona;
  // nombre 
  // apellido
  // nacionalidad


}
