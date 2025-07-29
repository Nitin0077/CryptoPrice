import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Indian {
  
constructor(private http:HttpClient){};


getIndianIpo(endpoint:string):Observable<any>{
return this.http.get('http://localhost:3000/api/indian/ipo',{
  params:{endpoint}
})
}


getIndiaTrending():Observable<any>{
  return this.http.get('http://localhost:3000/api/indian/trending')
}
}
