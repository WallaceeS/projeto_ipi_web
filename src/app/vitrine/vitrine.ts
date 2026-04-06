import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produtos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-vitrine',
  imports: [CommonModule, RouterModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine implements OnInit {
  public quantidadeItensCarrinho: number = 0;
  menuAberto: boolean = false;
  listaPesquisa: Produtos[] = []
  lista: Produtos[] = [
    {
      "nome": "Bola Spalding TF 150",
      "codigo":  1,
      "descritivo": "Bola de basquete desenvolvida pela Penalty, ideal para uso em quadras internas (indoor). Possui ótima aderência, bom controle de bola e material resistente, sendo uma excelente opção para treinos e partidas. Indicada para jogadores que procuram desempenho e durabilidade no dia a dia.",
      "preco": 130,
      "quantidade":  50,
      "valorPromocional":  0,
      "imagem": "spalding_tf150.jpg",
      "indicacao": "Outdoor",
      "categoria": "Bolas"
    },
    {
      "nome": "Bola Spalding TF 250",
      "codigo":  2,
      "descritivo": "Bola de basquete indicada para quadras externas, desenvolvida para oferecer resistência e durabilidade em treinos e jogos ao ar livre. Possui boa aderência e ótimo controle de bola, sendo uma excelente opção para quem joga frequentemente em quadras de rua. Ideal para jogadores iniciantes e intermediários.",
      "preco": 350,
      "quantidade":  45,
      "valorPromocional":  0,
      "imagem": "spalding_tf250.jpg",
      "indicacao": "Outdoor",
      "categoria": "Bolas"
    },
    {
      "nome": "Bola Spalding Streetball",
      "codigo":  3,
      "descritivo": "Bola de basquete resistente, desenvolvida para uso em quadras externas (outdoor). Possui boa aderência, material durável e excelente desempenho para treinos e jogos ao ar livre. Ideal para quem procura uma bola confiável para o dia a dia, com boa durabilidade mesmo em pisos mais ásperos.",
      "preco": 90,
      "quantidade":  55,
      "valorPromocional":  0,
      "imagem": "spalding_street.jpg",
      "indicacao": "Outdoor",
      "categoria": "Bolas"
    },
    {
      "nome": "NBA Authentic Wilson",
      "codigo":  4,
      "descritivo": "Bola de basquete oficial desenvolvida pela Wilson Sporting Goods em parceria com a NBA. Ideal para quadras internas, oferece excelente aderência, controle e desempenho para treinos e jogos.",
      "preco": 300,
      "quantidade":  40,
      "valorPromocional":  0,
      "imagem": "wilson_authentic.jpg",
      "indicacao": "Indoor",
      "categoria": "Bolas"
    },
    {
      "nome": "Penalty Basquete 7.8 Crossover",
      "codigo":  5,
      "descritivo": "Bola de basquete desenvolvida pela Penalty, ideal para quadras internas (indoor). Possui boa aderência, ótimo controle de bola e excelente desempenho para treinos e jogos.",
      "preco": 420,
      "quantidade":  40,
      "valorPromocional":  0,
      "imagem": "penalty_cross.jpg",
      "indicacao": "Indoor",
      "categoria": "Bolas"
    },
    {
      "nome": "Nike Sabrina 1 Magnetic",
      "codigo":  6,
      "descritivo": "Tênis de basquete desenvolvido para oferecer conforto, estabilidade e alto desempenho durante treinos e jogos. Possui ótimo amortecimento, boa aderência e design moderno, garantindo mais segurança nos movimentos e melhor controle dentro da quadra. Indicado para jogadores que procuram leveza, conforto e desempenho no dia a dia.",
      "preco": 900,
      "quantidade":  35,
      "valorPromocional":  0,
      "imagem": "nike-sabrina-1-magnetic.jpg",
      "indicacao": "",
      "categoria": "Tênis"
    },
    {
      "nome": "Nike KD 15 Aunt Pearl",
      "codigo":  7,
      "descritivo": "Tênis de basquete com design moderno e foco em conforto e desempenho. Possui estrutura leve, ótimo ajuste ao pé e excelente absorção de impacto, ajudando nos movimentos rápidos durante o jogo. Ideal para quem procura mais estabilidade, conforto e qualidade em treinos e partidas.",
      "preco": 1300,
      "quantidade":  20,
      "valorPromocional":  0,
      "imagem": "KD_15.jpg",
      "indicacao": "",
      "categoria": "Tênis"
    },
    {
      "nome": "Nike JA 1 Chinese New Year",
      "codigo":  8,
      "descritivo": "Tênis de basquete com design moderno inspirado na edição  especial de Ano Novo Chinês, desenvolvido pela Nike para oferecer conforto, leveza e ótimo desempenho em treinos e jogos. Possui excelente ajuste ao pé, boa estabilidade e ótima absorção de impacto, ajudando nos movimentos rápidos dentro da quadra. Ideal para jogadores que procuram conforto, estilo e desempenho no dia a dia.",
      "preco": 1200,
      "quantidade":  18,
      "valorPromocional":  0,
      "imagem": "nike-ja-1.jpg",
      "indicacao": "",
      "categoria": "Tênis"
    },
    {
      "nome": "Nike LeBron 20 Pink Diamond",
      "codigo":  9,
      "descritivo": "Tênis de basquete com visual moderno e acabamento premium, pensado para quem busca conforto e segurança durante o jogo. Possui ótima sensação de leveza, bom encaixe no pé e excelente controle nos movimentos rápidos, ajudando tanto em treinos quanto em partidas mais intensas. Ideal para jogadores que procuram um tênis confortável, resistente e com ótimo desempenho no dia a dia.",
      "preco": 1500,
      "quantidade":  15,
      "valorPromocional":  0,
      "imagem": "nike-lebron-20.jpg",
      "indicacao": "",
      "categoria": "Tênis"
    },
    {
      "nome": "adidas AE 1 Low 3SSB",
      "codigo":  10,
      "descritivo": "Tênis de basquete com design moderno e estrutura leve, desenvolvido para oferecer conforto e ótimo desempenho durante o jogo. Possui bom ajuste ao pé, ótima estabilidade e excelente resposta nos movimentos rápidos. Ideal para quem procura um tênis confortável, leve e com ótimo desempenho para treinos e partidas.",
      "preco": 1000,
      "quantidade":  25,
      "valorPromocional":  0,
      "imagem": "adidas-ae-1-low.jpg",
      "indicacao": "",
      "categoria": "Tênis"
    }
  ]
  ngOnInit(){
    this.listaPesquisa = this.lista;
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
  buscar(teste: string){
    console.log(teste)
    this.listaPesquisa = this.lista.filter(produto => produto.nome.toLowerCase().includes(teste.toLowerCase()))
  }

  redirecionar(obj: Produtos){
    localStorage.setItem("ProdutoSelecionado", JSON.stringify(obj))
    location.href = "/detalhe"
  }

    filtrarCategoria(categoria: string){
      if (categoria === 'Todos'){
        this.listaPesquisa = [...this.lista];
      }
      else{
        this.listaPesquisa = this.lista.filter(item => item.categoria === categoria)
      }
    }

  
  
}
