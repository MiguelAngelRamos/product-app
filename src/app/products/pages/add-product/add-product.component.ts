import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../interfaces/IProduct';
import { DataProductsService } from '../../services/data-products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  empresas = [ 
    { id: 'msi', desc: "MSI" },
    { id: 'cannon', desc: "Cannon" },
    { id: 'sony', desc: "Sony" }, 
    { id: 'hp', desc: 'Hewlett-Packard' },
    { id: 'apple', desc: 'Apple' },
    { id: 'hyper-x', desc: 'HyperX'}, 
    { id: 'motorola', desc: 'Motorola'},
    { id: 'huawei', desc: 'Huawei'},
    { id: 'wharfedale', desc: 'Wharfedale'},
    { id: 'lyonx', desc: 'LyonX'} 
  ];

  producto: IProduct = {
    precio: 0,
    title: '',
    image: '',
    stock: 0,
    empresa: ''
  }
  constructor(
    private dataProductService: DataProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.url); // * desde que url vengo
    console.log(this.router.url.includes('edit-product'));
    
    if(!this.router.url.includes('edit-product')) {
      return;
    }
    this.activatedRoute.params.subscribe(({id}) => {
      this.dataProductService.getProductsById(id).subscribe( producto => {
        this.producto = producto;
        console.log(producto);
      })
    })
  }


  saveProduct() {
    console.log(this.producto);
    this.dataProductService.addProduct(this.producto).subscribe(producto => {
      console.log(producto);
      this.router.navigate(['/products']);
    })
  }

}
