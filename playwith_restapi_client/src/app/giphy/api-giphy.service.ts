import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGiphyService {
  Id = 'GIPHY';

  constructor(private http: HttpClient) {
   }

  public getRandomGif(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/giphy/randomGIF`);
  }

  public getRandomSticker(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/giphy/randomSticker`);
  }
}
