import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {
  dataCarrinho: any = [];
  temFrete: boolean = false;
  constructor(private carrinhoService: CarrinhoService, private route: ActivatedRoute) {
    this.route.queryParams
      .subscribe(params => {
        if (params['comfrete'] === "true") {
          this.temFrete = true;
        }
      }
      );
  }

  ngOnInit() {
    if (this.temFrete) {
      this.carrinhoService.getAbaixoValor().subscribe(data => {
        this.dataCarrinho = data;
      });
    } else {
      this.carrinhoService.getAcimaValor().subscribe(data => {
        this.dataCarrinho = data;
      });
    }
  }

}
