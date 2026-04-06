import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public obj: Cliente = new Cliente();
  public mensagem: string = "";
  public mensagemSucesso: string = "";

  constructor(private router: Router) {

    let msgTemporaria = localStorage.getItem("mensagemSucesso");

    if (msgTemporaria != null) {
      this.mensagemSucesso = msgTemporaria;
      localStorage.removeItem("mensagemSucesso");
    }
  }

  public fazerLogin() {
    if (!this.obj.email || !this.obj.senha) {
      this.mensagem = "Por favor, preencha o e-mail e a senha!";
      return;
    }
    let listaTemporaria = localStorage.getItem("usuarios");

    if (listaTemporaria != null) {
      let listaDeClientes: Cliente[] = JSON.parse(listaTemporaria)

      let clienteEncontrado = listaDeClientes.find(item => item.email === this.obj.email && item.senha === this.obj.senha);

      if (clienteEncontrado != undefined) {
        this.mensagem = "Login realizado com sucesso"
        localStorage.setItem("clienteLogado", JSON.stringify(clienteEncontrado));
        this.router.navigate(['/vitrine'])
      }
      else {
        this.mensagem = "E-mail ou senha incorretos!"
      }

    }
  }


  public irParaRecuperacao() {
    this.router.navigate(['/esqueci-senha'])
  }
}
