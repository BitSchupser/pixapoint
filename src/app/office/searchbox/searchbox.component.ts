import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-office-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {

  @Output()
  performSearch = new EventEmitter<string>();
  queryString: string;

  constructor() { }

  ngOnInit() {
  }

  public onPerformSearch() {
    console.info('searching: ' + this.queryString);
    this.performSearch.emit(this.queryString);
  }
}
