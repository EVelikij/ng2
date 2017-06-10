import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
  providers: [GithubService]
})
export class RepoDetailsComponent implements OnInit {

	repos = [];

  constructor(private githubService: GithubService,
    private appState: AppStateService) {

    appState.searchStarted$.subscribe(() => {
      this.repos = [];
    });

  	appState.getRepos$.subscribe(userName => {
  		githubService.searchRepos(userName)
  			.then(data => {
  				this.repos = data;
  			});
  	});
  }

  ngOnInit() {
  }

}
