import { OfficeService } from './../service/office.service';
import { ImageQueryService } from '../service/image-query.service';
import { SearchResult } from '../service/search-result';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  model: SearchResult;

  previewURL() {
    return this.model.thumbNailURL;
  }

  user() {
    return this.model.user;
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
