import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho implements OnInit{

  carrinhoCompras: any[] = []
  mensagem: string = "";
  total: number = 0;

  menuAberto: boolean = false;
  quantidadeItensCarrinho: number = 0;
  ngOnInit(){
    let carrinhoTemporario = localStorage.getItem('carrinho')
    if (carrinhoTemporario == null){
      this.mensagem = "Seu carrinho está vazio!!"
      console.log(this.carrinhoCompras)
    }
    else{
      this.carrinhoCompras = JSON.parse(carrinhoTemporario)

      this.calculoTotal();
    }
  }
  calculoTotal(){
    this.total = 0;

    for(let item of this.carrinhoCompras){
      this.total = this.total + (item.preco * item.quantidadeCarrinho);
    }
    this.quantidadeItensCarrinho = this.carrinhoCompras.length;
  }

  esvaziar(){
    localStorage.removeItem("carrinho")
    this.carrinhoCompras = []
    this.total = 0
    this.quantidadeItensCarrinho = 0;
  }

  diminuirItem(itemCodigo: number){

    let produtoParaDiminuir = this.carrinhoCompras.find(itemCarrinho => itemCarrinho.codigo === itemCodigo);

    if (produtoParaDiminuir != undefined){

      if(produtoParaDiminuir.quantidadeCarrinho > 1){
        produtoParaDiminuir.quantidadeCarrinho -= 1
      }
      else{
        this.carrinhoCompras = this.carrinhoCompras.filter(item => item.codigo !== itemCodigo);
      }

      localStorage.setItem("carrinho", JSON.stringify(this.carrinhoCompras))
      this.calculoTotal()
    }
  }

  aumentarItem(itemCodigo: number){
    let produtoParaAumentar = this.carrinhoCompras.find(itemCarrinho => itemCarrinho.codigo === itemCodigo);
    if (produtoParaAumentar != undefined){
      produtoParaAumentar.quantidadeCarrinho += 1
      
      localStorage.setItem("carrinho", JSON.stringify(this.carrinhoCompras))
      this.calculoTotal()
    }
  }

  public finalizarCompra() {
    if(this.total === 0){
      alert("Erro ao finalizar a compra! Carrinho vazio.");
    }
    else{
      alert("Compra realizada com sucesso! Obrigado pela preferência.");
      this.carrinhoCompras = []; 
      localStorage.setItem("carrinho", JSON.stringify(this.carrinhoCompras));
      this.total = 0;
    }
  }

}
