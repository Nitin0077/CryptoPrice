import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  constructor(private http: HttpClient) {}

  getCryptoList(): Observable<any> {
    return this.http.post<any>('https://cryptoprice-vr5c.onrender.com/api/crypto',{});
  }
}
