import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegistrationService} from './services/registration.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

    constructor(private register : RegistrationService) {}

    intercept(request : HttpRequest < unknown >, next : HttpHandler): Observable < HttpEvent < unknown >> {
        console.log(request, 'request');
        
        if (this.register.getToken()) {
            request = request.clone({
              headers : request.headers.set('x-auth-token', this.register.getToken())
            })
        }


        return next.handle(request);
    }
}
