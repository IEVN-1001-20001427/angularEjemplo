import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  //directivas ngif

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "Year":"Febrero 3, 2020",
      "Precio":120000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "ImageUrl":"URL"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"4 puertas hatchback",
      "Year":"Abril 15, 2021",
      "Precio":200000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImageUrl":"URL"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas",
      "Year":"Marzo 5, 2023",
      "Precio":150000,
      "Marca":"KIA",
      "Color":"Azul",
      "ImageUrl":"URL"
    }
  ]

}
