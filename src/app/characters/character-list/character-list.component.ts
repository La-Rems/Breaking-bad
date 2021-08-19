import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CharacterService} from "../character.service";
import {Character} from "../character";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[];
  charactersViews: Character[];
  inputName: string = "";
  constructor(private httpClient: HttpClient, private characterService: CharacterService) {
    this.characterService.getAllCharacters().subscribe((data: Character[]) => {
      this.characters = data;
      this.charactersViews = data;
    });
  }

  ngOnInit(): void {

  }

  search(){
    this.charactersViews = this.characters.filter(value => value.name.toLocaleLowerCase().includes(this.inputName.toLocaleLowerCase()));
  }

}
