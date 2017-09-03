import { TestBed, inject } from '@angular/core/testing';

import { ImageQueryService } from './image-query.service';

describe('ImageQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageQueryService]
    });
  });

  it('should be created', inject([ImageQueryService], (service: ImageQueryService) => {
    expect(service).toBeTruthy();
  }));
});
