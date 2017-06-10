import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { AppStateService } from '../app-state.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [GithubService]
})
export class UsersListComponent implements OnInit {

  users = [];
  selectedUserId = 0;

  constructor(private githubService: GithubService,
    private appState: AppStateService) {

    appState.searchStarted$.subscribe(prompt => {
      this.githubService.searchUsers(prompt)
        .then(data => {
          this.users = data.items;
        });
    });
  }

  ngOnInit() {
  }

  selectUser(user: any): void {
    this.selectedUserId = user.id;
    this.appState.getRepos(user.login);
  }

}
