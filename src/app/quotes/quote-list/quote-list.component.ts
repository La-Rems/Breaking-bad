import { Component, OnInit } from '@angular/core';
import {QuoteService} from "../quote.service";
import {Quote} from "../quote";

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.scss']
})
export class QuoteListComponent implements OnInit {

  quotesList: Quote[];
  constructor(private quoteService: QuoteService) {
    this.quoteService.getAllQuotes().subscribe((data: Quote[]) => {
      this.quotesList = data;
    })
  }

  ngOnInit(): void {
  }

}
