import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(producto: IProduct): string {
    if(!producto.id) {
      return 'assets/not-product.jpg';
    }
    return producto.image;
  }

}