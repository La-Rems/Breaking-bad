import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {Quote} from "./quote";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  urlQuotes = "https://breakingbadapi.com/api/quotes";

  constructor(private httpClient: HttpClient) { }

  getAllQuotes(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(this.urlQuotes)
  }
}


