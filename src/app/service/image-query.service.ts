import * as querystring from 'querystring';
import { SearchResultCollection } from './search-result-collection';
import { Base64coder } from './base64coder';
import { Config } from './../config';
import { Observable, Subject } from 'rxjs/Rx';
import { SearchResult } from './search-result';
import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable()
export class ImageQueryService {

  private baseURL = 'https://pixabay.com/api/?key=' + this.config.pixabayApiKey;

  constructor(private config: Config, private http: HttpClient, private base64: Base64coder) { }

  search(queryString: string, page: number = 1): Observable<SearchResultCollection> {
    const resultsPerPage = 20;
    return this.http.get(this.baseURL + '&q="' + queryString + '"&response_group=high_resolution&page=' + page, {responseType: 'json'})
      .map(result => this.createSearchResults(result, page, resultsPerPage, queryString));
  }

  getAsBase64(toDownload: SearchResult): Observable<string> {
    const url = toDownload.imageURL;

     return this.http.get(url, {responseType: 'arraybuffer'})
    .map(result => {
      return this.base64.encode(result);
    });
  }

  private createSearchResults(apiResponse: any, page: number, resultsPerPage: number, queryString: string): SearchResultCollection {
    const searchResults = apiResponse.hits.map(r => new SearchResult(
      { imageURL: r.largeImageURL,
        thumbNailURL: r.previewURL,
        user: r.user}));
    const totalResults = apiResponse.total;
    return new SearchResultCollection(searchResults, queryString, totalResults, page, resultsPerPage);
  }
}
