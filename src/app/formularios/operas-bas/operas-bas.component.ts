import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  operacion:string = '';
  num1:string = '';
  num2:string = '';
  resultado:number = 0;

  calcular():void{
    switch(this.operacion){
      case 's':
        this.sumar();
        break;
      case 'r':
        this.restar();
        break;
      case 'm':
        this.multiplicar();
        break;
      case 'd':
        this.dividir();
        break;
      default: 
        this.resultado = 0;
        break;
    }
  }
  
  sumar():void{
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

  restar():void{
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }

  multiplicar():void{
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }

  dividir():void{
    this.resultado = parseInt(this.num1) / parseInt(this.num2);
  }

}
