import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produtos'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  imports: [CommonModule, RouterModule],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css',
})
export class ProdutoDetalhe implements OnInit{

  menuAberto: boolean = false;
  quantidadeItensCarrinho: number = 0;
  produtoSelecionado: Produtos | undefined;



  ngOnInit() {

    let json = localStorage.getItem("ProdutoSelecionado");

    if(json != null){
      this.produtoSelecionado = JSON.parse(json);
    }
    this.atualizarStatusCarrinho();
 
  }

  public atualizarStatusCarrinho() {
    let carrinhoSalvo = localStorage.getItem("carrinho");
    
    if (carrinhoSalvo) {
      let lista = JSON.parse(carrinhoSalvo);
      this.quantidadeItensCarrinho = lista.length; 
    } else {
      this.quantidadeItensCarrinho = 0;
    }
  }

  clicar(){
    let existe = localStorage.getItem('carrinho')
    let listaReal: any[] = []
    if (existe != null){
      listaReal = JSON.parse(existe)
    }
    if(this.produtoSelecionado != undefined){
      const produto  = this.produtoSelecionado
      let produtoEncontrado = listaReal.find(item => item.codigo === produto.codigo);
      if(produtoEncontrado != undefined){
        produtoEncontrado.quantidadeCarrinho += 1
      }
      else{
        produto.quantidadeCarrinho = 1
        listaReal.push(produto)
      }
      localStorage.setItem('carrinho', JSON.stringify(listaReal))

      this.atualizarStatusCarrinho();
      alert("Produto adicionado ao carrinho com sucesso!!")

    }
  }
  
}
