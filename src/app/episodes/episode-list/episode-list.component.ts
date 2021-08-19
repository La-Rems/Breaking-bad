import { Component, OnInit } from '@angular/core';
import {Character} from "../../characters/character";
import {HttpClient} from "@angular/common/http";
import {CharacterService} from "../../characters/character.service";
import {Episode} from "../episode";
import {EpisodeService} from "../episode.service";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {
  episodes: Episode[];
  constructor(private httpClient: HttpClient, private episodeService: EpisodeService) {
    this.episodes = []
  }

  ngOnInit(): void {
    this.episodeService.getAllEpisodes().subscribe((data: Episode[]) => {
      this.episodes = data;
    });
  }

  allEpisodes(){
    this.episodeService.getAllEpisodes().subscribe((data: Episode[]) => {
      this.episodes = data;
    });
  }

  episodesBCS(){
    this.episodeService.getAllEpisodesBetterCallSaul().subscribe((data: Episode[]) => {
      this.episodes = data;
    })
  }

  episodesBB(){
    this.episodeService.getAllEpisodesBreakingBad().subscribe((data: Episode[]) => {
      this.episodes = data;
    })
  }

}
