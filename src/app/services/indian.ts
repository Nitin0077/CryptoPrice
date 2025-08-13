import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Indian {
  
constructor(private http:HttpClient){};


getIndianIpo(endpoint:string):Observable<any>{
return this.http.get('https://cryptoprice-vr5c.onrender.com/api/indian/ipo',{
  params:{endpoint}
})
}


getIndiaTrending():Observable<any>{
  return this.http.get('https://cryptoprice-vr5c.onrender.com/api/indian/trending')
}
}
