import { Component, OnInit } from '@angular/core';
import {Death} from "../death";
import {DeathService} from "../death.service";

@Component({
  selector: 'app-death-list',
  templateUrl: './death-list.component.html',
  styleUrls: ['./death-list.component.scss']
})
export class DeathListComponent implements OnInit {

  deathsList: Death[];
  constructor(private deathService: DeathService) {
    this.deathService.getAllDeaths().subscribe((data: Death[]) => {
      this.deathsList = data;
    })
  }

  ngOnInit(): void {
  }

}
