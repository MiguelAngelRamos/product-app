import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth } from '../interfaces/IAuth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(): Observable<IAuth>{
    return this.http.get<IAuth>(`${this.baseUrl}/users/1`);
  }

  getIdentity(): any {
    const identity = JSON.parse(localStorage.getItem('identity')!);
    if(identity != 'undefined' && identity != null) {
      return identity;
    }
  }
}
