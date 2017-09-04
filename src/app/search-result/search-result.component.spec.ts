import { ImageQueryService } from '../service/image-query.service';
import { SearchResult } from './../service/search-result';
import { Observable } from 'rxjs/Rx';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    const queryServiceStub = { getAsBase64: (toDownload: SearchResult) => Observable.empty<string>() };

    TestBed.configureTestingModule({
      declarations: [ SearchResultComponent ],
      providers: [ { provide: ImageQueryService, useValue: queryServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  xit('should be created', () => {
    expect(component).toBeFalsy();
  });
});
