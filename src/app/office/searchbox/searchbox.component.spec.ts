import { NO_ERRORS_SCHEMA, trigger } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchboxComponent } from './searchbox.component';

describe('SearchboxComponent', () => {
  let component: SearchboxComponent;
  let fixture: ComponentFixture<SearchboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchboxComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('emmits the perfromSearch event onPerformSearch', (done) => {
    const expectedPayload = 'epxected payload';
    component.performSearch.subscribe((pl: string) => {
      expect(pl).toBe(expectedPayload);
      done();
    });
    component.queryString = expectedPayload;
    component.onPerformSearch();
  });
});
