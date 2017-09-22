import * as querystring from 'querystring';
import { SearchResult } from './service/search-result';
import { ImageQueryService } from './service/image-query.service';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchResults: SearchResult[];

  constructor(private imageQuery: ImageQueryService) {
  }

  search(queryString: string): void {
    this.imageQuery.search(queryString)
    .subscribe(sr => this.searchResults = sr,
       err => console.error(err));
  }

}
