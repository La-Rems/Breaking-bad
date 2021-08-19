import { Injectable } from '@angular/core';
import {Character} from "../characters/character";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Episode} from "./episode";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  listEpisodes = 'https://breakingbadapi.com/api/episodes';
  episodesBCS = 'https://breakingbadapi.com/api/episodes?series=Better+Call+Saul';
  episodesBB = 'https://breakingbadapi.com/api/episodes?series=Breaking+Bad'

  constructor(private httpClient: HttpClient) {
  }

  getAllEpisodes(): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(this.listEpisodes)
  }

  getAllEpisodesBetterCallSaul(): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(this.episodesBCS)
  }

  getAllEpisodesBreakingBad(): Observable<Episode[]> {
    return this.httpClient.get<Episode[]>(this.episodesBB)
  }
}
