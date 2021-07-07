import { RootObject } from 'src/app/model/Rootobject';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    // return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1');
    return this.http.get<any>('https://jsonplaceholder.typicode.com/comments?postId=1');
  }

  updatepassword(obj:any):Observable<any>{
    return this.http.post<any>(environment.url+"/users/updatepassword",{obj})
  }

  login(obj:any):Observable<any>{
    return this.http.post<any>(environment.url+"/users/login",{obj})
  }

  register(obj:any):Observable<any>{
    return this.http.post<any>(environment.url+"/users/register",{obj})
  }

  adminregister(obj:any):Observable<any>{
    return this.http.post<any>(environment.url+"/users/adminRegister",{obj})
  }
}
