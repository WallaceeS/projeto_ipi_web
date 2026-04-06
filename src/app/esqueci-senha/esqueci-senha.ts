import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  imports: [CommonModule, FormsModule],
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.css',
})
export class EsqueciSenha {
  public emailRecuperacao: string = "";
  public mensagemRecuperacao: string = "";
  public sucesso: boolean = false;
  constructor(private router: Router) { }
  public recuperarSenha(){
    
    let listaTemporaria = localStorage.getItem("usuarios");
    if(listaTemporaria != null){
      let listaDeClientes: Cliente[] = JSON.parse(listaTemporaria)
      let emailEncontrado = listaDeClientes.find(item => item.email === this.emailRecuperacao);

      if(emailEncontrado != undefined){
        this.mensagemRecuperacao = "Sua senha é: " + emailEncontrado.senha
        this.sucesso = true;

      }
      else{
        this.mensagemRecuperacao = "E-mail não registrado no sistema"
        this.sucesso = false;
      }
    }
    

  }
  public voltarAoLogin() {
    this.router.navigate(['/login']); // Ele "dirige" o usuário de volta
  }


}
