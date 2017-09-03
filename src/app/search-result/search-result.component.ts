import { SearchResult } from '../service/search-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  model: SearchResult;

  previewURL()  {
    return this.model.thumbNailURL;
  }
  constructor() { }

  ngOnInit() {
  }

}
