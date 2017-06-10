import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http';

import { AppStateService } from './app-state.service';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SearchComponent } from './search/search.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    SearchComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AppStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
