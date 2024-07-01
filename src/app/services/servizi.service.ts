import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album, Img } from '../models/album';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiziService {

  constructor(private http: HttpClient) { }



  getCall(): Observable<Album[]> {
    return this.http.get<Album[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getCallById(id: string): Observable<Album> {
    return this.http.get<Album>("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
  }

  getImg(): Observable<Img[]> {
    return this.http.get<Img[]>("https://jsonplaceholder.typicode.com/photos?albumId=")
  }

  getImgById(id: string): Observable<Img> {
    return this.http.get<Img>("https://jsonplaceholder.typicode.com/photos?albumId=" + id)
  }
}
