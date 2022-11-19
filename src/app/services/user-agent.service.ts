import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAgentService {

  constructor() { }

  public getUserAgent(): string {
    return window.navigator.userAgent;
  }
}
