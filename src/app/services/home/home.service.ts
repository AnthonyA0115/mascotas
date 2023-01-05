import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = environment.api_url;
  constructor(private http:HttpClient) { }

  get(f,keys): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
        'key':keys.key,
        'token':keys.token,
      })
    };
    let direccion = this.url + "?function="+f.function+"&param="+f.param+"&table="+f.table;
    if(f.param2!="" && f.param2!=null){
      if (f.param3!="" && f.param3!=null) {
        let direccion = this.url + "?function="+f.function+"&param="+f.param+"&param2="+f.param2+"&param3="+f.param3+"&table="+f.table;
        console.log(direccion,f);
        return this.http.get<any>(direccion,httpOptions);
      }else{
        let direccion = this.url + "?function="+f.function+"&param="+f.param+"&param2="+f.param2+"&table="+f.table;
        console.log(direccion,f);
        return this.http.get<any>(direccion,httpOptions);
      }
    }else{
      console.log(direccion,f);
      return this.http.get<any>(direccion,httpOptions);
    }
  }

  
  post(form,keys): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
        'key':keys.key,
        'token':keys.token,
      })
    };
    let direccion = this.url + "";
    console.log(direccion,form);
    return this.http.post<any>(direccion,form,httpOptions);
  }

  put(form,keys): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
        'key':keys.key,
        'token':keys.token,
      })
    };
    let direccion = this.url + "";
    console.log(direccion,form);
    return this.http.put<any>(direccion,form,httpOptions);
  }
}
