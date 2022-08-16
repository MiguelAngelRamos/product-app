import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";
import { IAuth } from "../interfaces/IAuth.interface";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const identity: IAuth = this.authService.getIdentity();
    console.log(identity);
    if(identity) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}