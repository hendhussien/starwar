import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PeopleApiService {
  // searchWord:string ;
  searchUrl: string = `//swapi.dev/api/people/?search=`;
  constructor(private _HttpClient: HttpClient) {}

  //method to get all data of people Api
  getPeopleData(): Observable<any> {
    return this._HttpClient.get('//swapi.dev/api/people/');
  }

  //method to search in all pages
  searchAllPeople(searchWord): Observable<any> {
    return this._HttpClient.get(`${this.searchUrl}+${searchWord}`);
  }
}
