import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {Character} from "./character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  listCharacters = 'https://breakingbadapi.com/api/characters';

  constructor(private httpClient: HttpClient) {
  }

  getAllCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.listCharacters)
  }

  getCharactersById(id: number): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.listCharacters + '/' + id);
  }

}
