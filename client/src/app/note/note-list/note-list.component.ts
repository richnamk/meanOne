import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Bucket } from '../bucket';
import { BucketService } from '../bucket.service';
import { User } from '../../user/user';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent implements OnInit {
  user_id: string;
  userbuck: User;
  itemcompleted: Bucket[];
  itempending: Bucket[];

  constructor(private _router:Router, private _active: ActivatedRoute, private _buckServ: BucketService ) { }

  ngOnInit() {
    this.user_id ='';
    this.userbuck = new User();
    this.itemcompleted = [];
    this.itempending = [];
    this._active.paramMap.subscribe( params => {
      this.user_id = params.get('id');
    });
    this._buckServ.getItemId(this.user_id,
      (user_buckets) => {
        for(let i = 0; i < user_buckets.buckets.length; i++){
          if(user_buckets.buckets[i].completed){
            this.itemcompleted.push(user_buckets.buckets[i]);
          }
          else{
            this.itempending.push(user_buckets.buckets[i]);
          }
          this.userbuck = user_buckets;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

