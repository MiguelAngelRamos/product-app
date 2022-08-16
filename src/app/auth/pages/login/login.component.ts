import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuth } from '../../interfaces/IAuth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forma!: FormGroup;
  messageError: String = '';
  usuarioLogeado!: IAuth;
  constructor( private router: Router,
               private fb: FormBuilder,
               private authService: AuthService ) { 

                this.crearFormulario();
               }

  ngOnInit(): void {
  }

  get correoNoValido(): boolean {
    // let email = this.forma.get('email')!.invalid;
    // let touched = this.forma.get('email')!.touched;
    // return email && touched;
    return this.forma.get('email')!.invalid && this.forma.get('email')!.touched;
  }

  get passNoValido(): boolean {
    return this.forma.get('password')!.invalid && this.forma.get('password')!.touched;
  }

  crearFormulario(): void {
    this.forma = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.authService.login().subscribe( resp => {
      console.log(resp); //* el objeto del usuario
      if(resp.email == this.forma.value.email && resp.password == this.forma.value.password) {
        console.log('CREDENCIALES CORRECTAS');
        this.usuarioLogeado = resp;
        localStorage.setItem('identity', JSON.stringify(this.usuarioLogeado));
        this.router.navigate(['/products']);
      } else {
        console.log('CREDENCIALES INCORRECTAS');
        this.messageError = 'Crendeciales incorrectas';
      }
    })
  }

}
