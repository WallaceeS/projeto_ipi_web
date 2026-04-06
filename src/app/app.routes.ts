import { Routes } from '@angular/router';
import { Vitrine } from './vitrine/vitrine';
import { ProdutoDetalhe } from './produto-detalhe/produto-detalhe';
import { Carrinho } from './carrinho/carrinho'
import { Cadastro } from './cadastro/cadastro'
import { Login } from './login/login'
import { EsqueciSenha} from './esqueci-senha/esqueci-senha'

export const routes: Routes = [
    {path: "vitrine", component:Vitrine},
    {path:"", component:Vitrine},
    {path: "detalhe", component:ProdutoDetalhe},
    {path: "carrinho", component:Carrinho},
    {path: "cadastro", component:Cadastro},
    {path: "login", component:Login},
    {path: "esqueci-senha", component:EsqueciSenha}
];
