import { AuthUser } from './../models/authUser';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gatekeeper } from 'gatekeeper-client-sdk';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public user: any = null;

  constructor(private router: Router, private toastr: ToastrService, private http: HttpClient) { }



  async loginByAuth({ email, password }) {
    try {
      // const token = await Gatekeeper.loginByAuth(email, password);
      // localStorage.setItem('token', token);
      // await this.getProfile();
      // this.router.navigate(['/']);
      // this.toastr.success('Login success');
      const authUser$ = this.http.post('login', { email, password });
      //const authUser: AuthUser = await firstValueFrom(authUser$) as AuthUser;

      authUser$.subscribe((authUser: AuthUser) => {
        if (authUser) {
          this.user = { id: authUser.user.id, name: authUser.user.name, token: authUser.token }
          localStorage.setItem('user', JSON.stringify(this.user));
          this.router.navigate(['/']);
          this.toastr.success('Login success');
        }
      });

    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async registerByAuth({ email, password }) {
    try {
      const token = await Gatekeeper.registerByAuth(email, password);
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Register success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async loginByGoogle() {
    try {
      const token = await Gatekeeper.loginByGoogle();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Login success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async registerByGoogle() {
    try {
      const token = await Gatekeeper.registerByGoogle();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Register success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async loginByFacebook() {
    try {
      const token = await Gatekeeper.loginByFacebook();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Login success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async registerByFacebook() {
    try {
      const token = await Gatekeeper.registerByFacebook();
      localStorage.setItem('token', token);
      await this.getProfile();
      this.router.navigate(['/']);
      this.toastr.success('Register success');
    } catch (error) {
      this.toastr.error(error.message);
    }
  }

  async getProfile() {
    try {
      this.user = JSON.parse(localStorage.getItem('user'));//await Gatekeeper.getProfile();
      if (this.user == null) {
        throw new Error("Not logged");

      }
    } catch (error) {
      this.logout();
      throw error;
    }
  }

  getToken() {
    if(this.user && this.user.token){
      return this.user.token;
    }
    else{
      this.user = JSON.parse(localStorage.getItem('user'));
      if(this.user){
        return this.user.token;
      }
      else {
        return '';
      }

    }
  }

  logout() {
    localStorage.removeItem('user');
    //localStorage.removeItem('gatekeeper_token');
    this.user = null;
    this.router.navigate(['/login']);
  }
}

