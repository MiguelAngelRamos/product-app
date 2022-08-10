import { Component, OnInit } from '@angular/core';
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
  constructor(private dataProductService: DataProductsService) { }

  ngOnInit(): void {
  }


  saveProduct() {
    // this.dataProductService.addProduct()
  }

}
