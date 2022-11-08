import { PreloadingStrategy, Route } from "@angular/router";
import { flatMap, Observable, of, timer } from "rxjs";

export class AppPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        const loadRoute = (delay: any) => delay
            ? timer(delay).pipe(flatMap(_ => fn()))
            : fn();
        
        if (route.data && route.data["preload"]) {
            return loadRoute(route.data["delay"]);
        }
        else {
            return of(null);
        }
    }

}