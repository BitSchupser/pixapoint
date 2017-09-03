import { Config } from './../config';
import { Observable } from 'rxjs/Rx';
import { SearchResult } from './search-result';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ImageQueryService {

  private baseURL = 'https://pixabay.com/api/?key=' + this.config.pixabayApiKey;

  constructor(private config: Config, private http: Http) { }

  search(queryString: string): Observable<SearchResult[]> {

    return this.http.get(this.baseURL + '&q="' + queryString + '"')
      .map(res => this.createSearchResults(res.json()));
  }

  createSearchResults(apiResponse: any): any {
    return apiResponse.hits.map(r => new SearchResult(r.previewURL));
  }
}
