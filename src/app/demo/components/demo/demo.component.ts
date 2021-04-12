import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['Producto 1' , 'Producto 2' , 'Producto 3'];

  power = 10;

  ngOnInit(){
    //code
  }

  addItem(){
    this.items.push('nuevo nombre');
  }
  deleteItem(index: number){
    this.items.splice(index, 1);
  }

}
