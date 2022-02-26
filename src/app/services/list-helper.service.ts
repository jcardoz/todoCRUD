import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListHelperService {

  constructor(private http: HttpClient) { }

  public fetchListItems(): Observable<any> {
    return this.http.get(`${environment.apiBaseURL}${environment.todoEndpoint}`);
  }
}
