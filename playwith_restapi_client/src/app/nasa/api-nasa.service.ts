import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiNasaService {

  Id = 'NASA';

  constructor(private http: HttpClient) {
   }

  public getPOD(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/nasa/pod`);
   }

  public getNOTIF(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/nasa/notif`);}

  public getEARTH(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/nasa/earth`);}
}
