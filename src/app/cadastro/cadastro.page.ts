import { Component, OnInit } from '@angular/core';
import { Contato } from '../produto/entidade/contato';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  contato: Contato = new Contato();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}
  salvar(){
    this.banco.list('contato').push(this.contato);
    this.contato = new Contato();
    alert('Deu certo! Muito bem!')
  }
  }
