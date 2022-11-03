import { EventEmitter, Injectable } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarEmitterService {

  public emitter: EventEmitter<any> = new EventEmitter();

  constructor(private authGuard: AuthGuardService) { }

  public navbarEvents(event: string): void {
    this.emitter.emit(event);
  }
}
