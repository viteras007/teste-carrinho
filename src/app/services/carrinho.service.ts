import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  constructor(private http: HttpClient) { }
  getAbaixoValor(): Observable<any> {
    return this.http.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220501T144234Z&X-Amz-Expires=86400&X-Amz-Signature=396314b2927dd193abb8cd08b3648976dc02b2947fb1df0743eadf187e219fb6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22abaixo-10-reais.json%22&x-id=GetObject');
  }
  getAcimaValor(): Observable<any> {
    return this.http.get('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220501T144245Z&X-Amz-Expires=86400&X-Amz-Signature=455da7205e0f4b38bf5cea59d3291048a3e469fb1d03a88361ae6d8b0eefc0d8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22acima-10-reais.json%22&x-id=GetObject');
  }
}
