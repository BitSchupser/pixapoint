import { OfficeService } from './../service/office.service';
import { ImageQueryService } from '../service/image-query.service';
import { SearchResult } from '../service/search-result';
import { Component, Input, OnInit } from '@angular/core';
// import { Office } from 'office-js';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  model: SearchResult;
  public debugstring = 'debug';

  previewURL() {
    return this.model.thumbNailURL;
  }

  constructor(private images: ImageQueryService, private office: OfficeService) { }

  ngOnInit() {
  }

  insertImage() {
    console.debug('inserting ' + this.model.thumbNailURL);

    this.images.getAsBase64(this.model).subscribe(imgData => {
      console.info(imgData);

      this.office.insertImage(imgData);
    },
    error => console.error(JSON.stringify(error)));
  }
}
