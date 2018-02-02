import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';

import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { AddComponent } from './note/note-add/note-add.component';
import { BucketService } from './note/bucket.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    NoteComponent,
    NoteListComponent,
    UserLogoutComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, BucketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
