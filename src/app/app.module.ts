import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material-module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CarrinhoService } from './services/carrinho.service';
import { CarrinhoComponent } from './screens/carrinho/carrinho.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarrinhoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
