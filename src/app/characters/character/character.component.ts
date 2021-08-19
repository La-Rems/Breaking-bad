import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Character} from "../character";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character: Character;
  id: number;
  constructor(private route: ActivatedRoute, private characterService: CharacterService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharactersById(this.id).subscribe((data: Character[]) => {
      this.character = data[0];
      console.log(this.character)
    });
  }
  ngOnInit(): void {

  }

}
