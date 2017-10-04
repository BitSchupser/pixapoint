import { IPixabayAPIResult } from './search-result';
export interface IPixabayAPIResult {
  thumbNailURL: string;
  imageURL: string;
  user: string;
}

export class SearchResult {

  public imageURL: string;
  public thumbNailURL: string;
  public user: string;

  constructor(apiResult: IPixabayAPIResult) {
    this.imageURL = apiResult.imageURL;
    this.thumbNailURL = apiResult.thumbNailURL;
    this.user = apiResult.user;
  }
}
