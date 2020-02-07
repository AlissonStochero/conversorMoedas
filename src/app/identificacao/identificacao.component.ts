import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identificacao',
  templateUrl: './identificacao.component.html',
  styleUrls: ['./identificacao.component.css']
})

// classe de dentificação de quem desenvolveu o projeto
export class IdentificacaoComponent implements OnInit {
  nome:string
  formacao:string
  instituicao:string
  numero:string

  constructor() { 
    this.nome = 'Alisson Gabriel Stochero'
    this.formacao = 'Tecnólogo em Sistemas Para internet'
    this.instituicao = 'Instituto Federal Farroupilha Santo Ângelo'
   }

  ngOnInit(): void {
  }

}
