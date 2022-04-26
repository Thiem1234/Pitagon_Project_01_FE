import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://localhost:5248/api';

  constructor(private http: HttpClient) {}

  getValueInputAPI(val: any) {
    return this.http.post<any>(this.APIUrl + '/InputData', val);
  }
}
