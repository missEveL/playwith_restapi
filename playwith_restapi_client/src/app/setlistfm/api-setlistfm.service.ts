import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiSetlistfmService {

  constructor(private http: HttpClient) {
   }

  public getArtists(artistName: string): Observable<any> {
   const headers = new HttpHeaders();
   //headers.set('Accept', 'application/json');
   return this.http.get<any>(`http://localhost:8080/api/setlistfm/search/artists/${artistName}`);
  }

  public getSetlists(mbid: any): Observable<any> {
    const headers = new HttpHeaders();
    //headers.set('Accept', 'application/json');
    return this.http.get<any>(`http://localhost:8080/api/setlistfm/search/setlists/${mbid}`);
   }
}
