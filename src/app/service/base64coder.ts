import { toArray } from 'rxjs/operator/toArray';
import { ArrayBuffer } from '@angular/http/src/static_request';
import { fromByteArray } from 'base64-js';

export class Base64coder {

  public encode(toEncode: ArrayBuffer): string {
    const encoded = new Uint8Array(toEncode);
    const b64Encoded = fromByteArray(encoded);
    return b64Encoded;
  }
}
