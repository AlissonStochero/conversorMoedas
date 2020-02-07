import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  valor:number
  dolar:number = 0
  euro:number = 0
  libra:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Metodo que converte o valor digitado pelo usuário em Dolar, euro e libra
   */
  converte(){
    let valor = this.valor
    this.setDolar(valor/4.32)
    this.setEuro(valor/4.72)
    this.setLibra(valor/5.56)
  }

  // Metodos get e set

  setValor(valor:string){
    this.valor = parseFloat(valor.replace(',','.'))
  }

  setDolar(valor:number){
    this.dolar = valor 
  }

  getDolar(){
    return this.dolar.toFixed(2)
  }

  setEuro(valor:number){
    this.euro = valor 
  }

  getEuro(){
    return this.euro.toFixed(2)
  }

  setLibra(valor:number){
    this.libra = valor 
  }

  getLibra(){
    return this.libra.toFixed(2) 
  }
}
