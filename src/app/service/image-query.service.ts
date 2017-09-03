import { Observable } from 'rxjs/Rx';
import { SearchResult } from './search-result';
import { Injectable } from '@angular/core';

@Injectable()
export class ImageQueryService {

  constructor() { }

  search(queryString: string): Observable<SearchResult[]> {
    return Observable.from([[new SearchResult('/assets/logo-filled.png'), new SearchResult('/assets/icon-80.png')]])
  }
}
