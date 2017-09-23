import { SearchResult } from './search-result';
export class SearchResultCollection {
  constructor(public results: SearchResult[],
    private totalResults: number,
    private page: number,
    private resultsPerPage: number) {}

  hasPreviousPage(): boolean {
    return this.page > 1;
  }

  hasNextPage(): boolean {
    const lastVisibleItemNumber = this.resultsPerPage * (this.page - 1) + this.results.length;
    return lastVisibleItemNumber  < this.totalResults;
  }
}
