import { environment } from './../../environments/environment';
import { AppService } from '@services/app.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  backendUrl: string = environment.baseUrl;

  constructor(private appService: AppService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.appService.getToken();

    const httpReq = request.clone({
      url: this.backendUrl + request.url,
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return next.handle(httpReq).pipe(tap(()=>{},(err: any)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status !== 401){
          return;
        }

        this.appService.logout();
        this.router.navigate(['login']);
      }
    }));
  }
}
