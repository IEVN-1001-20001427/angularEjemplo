import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //directivas ngif

  imageWidth:number = 50;
  imageMargin:number = 2;
  muestraImg:boolean = true;
  listFilter:string = '';

  showImage():void{
    this.muestraImg =! this.muestraImg;
  }

  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "Year":"Febrero 3, 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "ImageUrl":"https://img.remediosdigitales.com/453ca3/nissan-sentra-2020-portada/1366_2000.jpg"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas hatchback",
      "Year":"Abril 15, 2021",
      "Precio":200000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImageUrl":"https://img.remediosdigitales.com/f55210/audi-a4-2021-opiniones-prueba-mexico_/1366_2000.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas",
      "Year":"Marzo 5, 2023",
      "Precio":150000,
      "Marca":"KIA",
      "Color":"Azul",
      "ImageUrl":"https://img.remediosdigitales.com/51351e/kia-rio-2023-precio-mexico-4/840_560.jpg"
    }
  ]

}
