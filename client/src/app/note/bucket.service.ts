import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { Bucket } from '../note/bucket';
import { User } from '../user/user';


@Injectable()
export class BucketService {

  constructor(private _http:Http) { }

  getauth(callback,errorback) {
    this._http.get('/author').subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }
  getItemId(id, callback, errorback){
    this._http.get('/author/' + id).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }

  addItem(obj, callback, errorback) {
    this._http.post("/author", obj).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }

  updateItem(obj, callback, errorback) {
    this._http.post("/status", obj).subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }

}
