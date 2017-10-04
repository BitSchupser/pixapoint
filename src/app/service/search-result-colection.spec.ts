import { SearchResult } from './search-result';
import { SearchResultCollection } from './search-result-collection';

describe('SearchResultCollection', () => {

  it('has no previous page when on first page', () => {
    const page = 1;
    const sut = new SearchResultCollection([], 'query', 123, page, 20);

    expect(sut.hasPreviousPage()).toBeFalsy();
  });

  it('has a previous page when on second page', () => {
    const page = 2;
    const sut = new SearchResultCollection([], 'query', 123, page, 20);

    expect(sut.hasPreviousPage()).toBeTruthy();
  });

  it('has a next page when the last search result was not displayed on current page', () => {
    const page = 2;
    const resultsPerPage = 20;
    const totalResults = 100;
    const sut = new SearchResultCollection([], 'query', totalResults, page, resultsPerPage);

    expect(sut.hasNextPage()).toBeTruthy();
  });

  it('does not have a next page when the last search result was displayed on current page', () => {
    const page = 5;
    const resultsPerPage = 20;
    const totalResults = 81;
    const results = [new SearchResult('abc', 'xyz')];
    const sut = new SearchResultCollection(results, 'query', totalResults, page, resultsPerPage);

    expect(sut.hasNextPage()).toBeFalsy();
  });
});
