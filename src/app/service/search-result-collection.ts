import { SearchResult } from './search-result';
export class SearchResultCollection {
  constructor(public results: SearchResult[],
    public queryString: string,
    public totalResults: number,
    public page: number,
    private resultsPerPage: number) {}

  hasPreviousPage(): boolean {
    return this.page > 1;
  }

  hasNextPage(): boolean {
    if (this.results == null) {
      return false;
    }
    const lastVisibleItemNumber = this.resultsPerPage * (this.page - 1) + this.results.length;
    return lastVisibleItemNumber  < this.totalResults;
  }
}
