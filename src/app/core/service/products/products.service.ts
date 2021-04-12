import { Injectable } from '@angular/core';
import {Product} from '../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/Hulk.png',
      title: 'Hulk',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '2',
      image: 'assets/images/batman.jpeg',
      title: 'Batman',
      price: 70000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '3',
      image: 'assets/images/spiderman.jpeg',
      title: 'spiderman',
      price: 75000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '4',
      image: 'assets/images/iroman.jpeg',
      title: 'Iroman',
      price: 80000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '5',
      image: 'assets/images/linterna.jpeg',
      title: 'Linterna verde',
      price: 55000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: '6',
      image: 'assets/images/chica.jpeg',
      title: 'Batichica',
      price: 50000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProducts(id: String){
    return this.products.find(item => id === item.id);
  }

}
