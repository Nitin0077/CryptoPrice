import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  constructor(private http:HttpClient){};

    getOvewView(endpoint:string,payload:any): Observable<any>{

    return this.http.post<any>('https://cryptoprice-vr5c.onrender.com/api/overview',{endpoint,payload})
  }

  getOverViewPage(endpoint:string,payload:any):Observable<any>{
    return this.http.post<any>('https://cryptoprice-vr5c.onrender.com/api/overview',{endpoint,payload});

  }

}
