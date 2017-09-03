import { SearchResult } from './service/search-result';
import { ImageQueryService } from './service/image-query.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString: string;
  searchResults: SearchResult[];

  constructor(private imageQuery: ImageQueryService) {
  }

  search(): void {
    this.imageQuery.search(this.searchString)
    .subscribe(sr => this.searchResults = sr);
  }

}
