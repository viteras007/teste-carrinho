import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './screens/carrinho/carrinho.component';

const appRoutes: Routes = [
  { path: 'carrinho', component: CarrinhoComponent },
  { path: '', redirectTo: '/carrinho', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
