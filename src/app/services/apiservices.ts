import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Playlist} from '../models/list-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private serviceEndPoint = "https://rickandmortyapi.com/api/character/";
  private filterSubject = new BehaviorSubject<any>(null);
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<Playlist[]>{
    return this.httpClient.get<Playlist[]>(this.serviceEndPoint);
  }
  getSearchByName(query:string): Observable<Playlist[]>{
    return this.httpClient.get<Playlist[]>(this.serviceEndPoint + '?' + query);
  }
  getFilteredByVal(query:string): Observable<Playlist[]>{
    return this.httpClient.get<Playlist[]>(this.serviceEndPoint + '?' + query);
  }
  setFilterSubject(value):void {
    this.filterSubject.next(value);
  }
  getFilterSubject():Observable<any>{
    return this.filterSubject.asObservable();
  }
}