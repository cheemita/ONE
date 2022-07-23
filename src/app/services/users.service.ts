import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResult } from '../interfaces/user';
import { LanguageResult } from '../interfaces/language';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
    
   }

  getUsers() {
    return this.http.get<UserResult>("https://reqres.in/api/users?page=1");
  }

  getLanguages() {
    return this.http.get<LanguageResult>("http://localhost:3000/languages");
  }
}
