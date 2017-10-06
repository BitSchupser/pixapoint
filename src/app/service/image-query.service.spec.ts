import { SearchResultCollection } from './search-result-collection';
import * as querystring from 'querystring';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Base64coder } from './base64coder';
import { MockBackend } from '@angular/http/testing';
import { DESCRIPTOR_VISIBILITIES } from 'tslint/lib/rules/completedDocsRule';
import { Config } from './../config';
import { BaseRequestOptions, Http, ResponseOptions } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { ImageQueryService } from './image-query.service';

describe('image-query-service', () => {
  let imageQueryService: ImageQueryService;
  let httpMock: HttpTestingController;
  let config: Config;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ImageQueryService,
        Config,
        Base64coder
      ]
    });

    imageQueryService = TestBed.get(ImageQueryService);
    httpMock = TestBed.get(HttpTestingController);
    config = TestBed.get(Config);
  });

  const defaultResult = {
    total: 1,
    hits: [{
      largeImageURL: 'largeImageURL',
      previewURL: 'thumNailURL',
      user: 'user'
    }]
  };

  it('search returns correct search results', (done) => {
    const queryString = 'cat';
        imageQueryService.search(queryString)
      .subscribe((results: SearchResultCollection) => {
        expect(results.totalResults).toBe(defaultResult.total);
        expect(results.results[0].imageURL).toBe(defaultResult.hits[0].largeImageURL);
        expect(results.results[0].thumbNailURL).toBe(defaultResult.hits[0].previewURL);
        expect(results.results[0].user).toBe(defaultResult.hits[0].user);
        done();
      });
      const query = httpMock.expectOne({ method: 'GET', url: getQueryUrl(queryString) });
      query.flush(defaultResult);
  });

  it('should cache results of a query', (done) => {
    const queryString = 'cat';
    imageQueryService.search(queryString)
      .subscribe((res: any) => {
        imageQueryService.search(queryString)
          .subscribe((res2: any) => {
            done();
          });
      });
    httpMock.expectOne({ method: 'GET' }).flush(defaultResult);
    httpMock.verify();
  });

  function getQueryUrl(queryString: string, page: number = 1): string {
    const key = config.pixabayApiKey;
    return 'https://pixabay.com/api/?key=' + key + '&q="' + queryString + '"&response_group=high_resolution&page=' + page;
  }

});


