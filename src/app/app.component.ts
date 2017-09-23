import { SearchResultCollection } from './service/search-result-collection';
import * as querystring from 'querystring';
import { SearchResult } from './service/search-result';
import { ImageQueryService } from './service/image-query.service';
import { Component, PACKAGE_ROOT_URL } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private result: SearchResultCollection = undefined;

  get searchPerformed(): boolean { return this.result !== undefined; }
  get hasPreviousPage(): boolean { return this.result.hasPreviousPage(); }
  get hasNextPage(): boolean { return this.result.hasNextPage(); }
  get searchResults(): SearchResult[] { return this.result.results; }
  get totalResults(): number { return this.result.totalResults; }

  constructor(private imageQuery: ImageQueryService) {
  }

  search(queryString: string, page: number = 1): void {
    this.imageQuery.search(queryString, page)
      .subscribe(sr => {
        this.result = sr;
      },
      err => console.error(err));
  }

  gotoNextPage() {
    this.search(this.result.queryString, this.result.page + 1);
  }

  gotoPreviousPage() {
    this.search(this.result.queryString, this.result.page - 1);
  }

}
