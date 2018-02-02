import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bucket } from '../bucket';
import { BucketService } from '../bucket.service';
import { User } from '../../user/user';
import { UserService } from '../../user/user.service';



@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class AddComponent implements OnInit {

  userbuck: User;
  names: User[];
  newitem: Bucket;
  loggedUser: User;
  owner2;

  constructor(private _bucketService: BucketService, private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this.loggedUser = this._userService.currentUser;
    this.names = [];
    this.newitem = new Bucket();
    this.newitem._creator = this.loggedUser.name;
    this.owner2 = this.loggedUser._id;
    this.userbuck = new User();
    this.getBuckets();
    this.getNames();
  }

  getBuckets() {
    this._bucketService.getItemId(this._userService.currentUser._id,
      (user_buckets) => {
        this.userbuck = user_buckets;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getNames() {
    this._bucketService.getauth(
      (names) => {
        for(var i = 0; i < names.length; i++){
          if(names[i]._id != this.loggedUser._id){
            this.names.push(names[i]);
          }
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addBucket() {
    let obj = {owner: this.owner2, bucket: this.newitem};
    this._bucketService.addItem(obj,
      (buckets) => {
        this.newitem = new Bucket();
        this.userbuck = buckets;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateCompleted(id, index) {
    let obj = { id: id, completed: this.userbuck.buckets[index].done };
    this._bucketService.updateItem(obj,
      (buckets) => {
        this.userbuck = buckets;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewList(id) {
    this._router.navigate(['view', id]);
    this.names = [];
  }
}
