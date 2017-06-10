import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AppStateService {

  // Observable string sources
  private searchStartedSource = new Subject<string>();	
  private getReposSource = new Subject<string>();

  // Observable string streams
  searchStarted$ = this.searchStartedSource.asObservable();
  getRepos$ = this.getReposSource.asObservable();

  // Sertvice message commands
  startSearch(prompt: string): void {
  	this.searchStartedSource.next(prompt);
  }

  getRepos(userName: string): void {
  	this.getReposSource.next(userName);
  }
  
}
