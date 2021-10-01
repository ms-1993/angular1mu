import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from "./user";
import {Group} from "./group";
import {Role} from "./role";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://127.0.0.1:8000';
  // httpHeaders=new HttpHeaders({'Content-Type':'application/json', 'Authorization': 'JWT ' + this.access })
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'})


  constructor(private http: HttpClient) { }


// ==============================================================
  //get all Userss
  getUsersList(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + '/users/',{headers:this.httpHeaders});
  }

    //get all groups
  getGroupList(): Observable<Group[]>{
    return this.http.get<Group[]>(this.baseUrl + '/groups/',{headers:this.httpHeaders});
  }

  //get all groups
  getRoleList(): Observable<Role[]>{
    return this.http.get<Role[]>(this.baseUrl + '/roles/',{headers:this.httpHeaders});
  }

   //get single User
  getUser(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl+ '/users/'+id+'/',{headers:this.httpHeaders});
  }
 //create User
  createUser(user:any): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/users/', user,{headers:this.httpHeaders});
  }



 //get and upadate User
  updateUser(id: number, value:any): Observable<User[]> {
    return this.http.put<User[]>(this.baseUrl+ '/users/'+id +'/', value,{headers:this.httpHeaders});
  }
 //get and delete User
  deleteUser(id: number): Observable<User[]> {
    return this.http.delete<User[]>(this.baseUrl+ '/users/'+id+'/', {headers:this.httpHeaders});
  }
}
