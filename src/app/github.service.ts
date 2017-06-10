import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private url: string;

  constructor(private http: Http) { 
  	this.url = 'https://api.github.com/search';
  }
  
  searchUsers(name: string): Promise<any> {
  	return this.http.get(`${this.url}/users?q=${name}`)
  	  .map(res => res.json())
  	  .toPromise();
  }

  searchRepos(userName: string): Promise<any> {
  	return this.http.get(`https://api.github.com/users/${userName}/repos`)
  		.map(res => res.json())
  	  .toPromise();
  }

}
