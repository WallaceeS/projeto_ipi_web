import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FormsModule, RouterModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  public alerta: string = "";
  public obj: Cliente = new Cliente();
  constructor(private router: Router) {}
  public cadastrar(){
    if (!this.obj.nome || !this.obj.email || !this.obj.senha || !this.obj.documento){
      this.alerta = "Por favor, preencha todos os campos obrigatórios antes de cadastrar!"
      return;
    }

    let listaCadastroTemporaria = localStorage.getItem("usuarios");
    
    let listaDeClientes: Cliente [] = [];
    if (listaCadastroTemporaria != null){
      listaDeClientes = JSON.parse(listaCadastroTemporaria);
    }
    let emailJaExiste = listaDeClientes.find(item => item.email === this.obj.email);
    if (emailJaExiste != undefined){
      this.alerta = "E-mail já cadastrado!";
    }
    else{
      listaDeClientes.push(this.obj);
      localStorage.setItem("usuarios", JSON.stringify(listaDeClientes));
  
      localStorage.setItem("mensagemSucesso", "Cadastro realizado com sucesso! Por favor, faça o login.");
      this.router.navigate(['/login']);
    }
  }
}
