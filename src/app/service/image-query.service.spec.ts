import { Config } from './../config';
import { Http } from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';

import { ImageQueryService } from './image-query.service';

describe('ImageQueryService', () => {

  const httpStub = { };
  const configStub = { pixabayApiKey: 'apikeydummyfortests' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ImageQueryService,
        { provide: Http, useValue: httpStub },
        { provide: Config, useValue: configStub}
      ]
    });
  });

  it('should be created', inject([ImageQueryService], (service: ImageQueryService) => {
    expect(service).toBeTruthy();
  }));
});
