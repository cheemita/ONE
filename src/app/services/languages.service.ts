import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserResult } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) {
    
   }

  getLanguages() {
    return this.http.get<any>("http://localhost:3000/languages");
  }
}
