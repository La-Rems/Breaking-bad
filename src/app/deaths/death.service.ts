import { Injectable } from '@angular/core';
import {Character} from "../characters/character";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Death} from "./death";

@Injectable({
  providedIn: 'root'
})
export class DeathService {

  listDeaths = 'https://breakingbadapi.com/api/deaths';

  constructor(private httpClient: HttpClient) {
  }

  getAllDeaths(): Observable<Death[]> {
    return this.httpClient.get<Death[]>(this.listDeaths)
  }
}
