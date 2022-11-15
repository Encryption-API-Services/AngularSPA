import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private authGuard: AuthGuardService
    ) { }

  public get(url: string) {
    return this.http.get(url);
  }

  public getAuthenticated(url: string) {
    return this.http.get(url, this.getAuthHeader())
  }

  public post(url: string, body: object) {
    return this.http.post(url, body);
  }

  public put(url: string, body: object) {
    return this.http.put(url, body);
  }

  public delete(url: string, body: object) {
    return this.http.delete(url, body);
  }

  private getAuthHeader(): any {
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.authGuard.getToken()}`)
    }
    return header;
  }
}
