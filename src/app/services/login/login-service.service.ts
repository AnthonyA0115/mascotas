import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url: string = environment.api_url;
  constructor(private http:HttpClient) { }


  loginByEmail(form): Observable<any>{
    let direccion = this.url + "";
    console.log(direccion,form);
    return this.http.post<any>(direccion,form);
  }

  post(form,keys): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 
        'key':"g0kBt5p0sG2o0OEmHf1a0g==",
        'token':"a1d7854d8eda8e91d7e454b88eb506c67148979ccf6afacbe970c755a221159e97962d43a6de3c35d6ac27e4465b2ff431d6",
      })
    };
    let direccion = this.url + "";
    console.log(direccion,form);
    return this.http.post<any>(direccion,form,httpOptions);
  }
}

