import { Injectable } from '@angular/core';

declare const Office: any;

@Injectable()
export class OfficeService {

  constructor() { }

  public insertImage(imgData: string): void {

    console.info('inserting ' + imgData);
    Office.context.document.setSelectedDataAsync(
      imgData, { coercionType: Office.CoercionType.Image },
      function (asyncResult) {
        if (asyncResult.status === Office.AsyncResultStatus.Failed) {
          console.error('Error: ' + asyncResult.error.message);
        }
      });
  }

}
