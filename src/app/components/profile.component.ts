import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
export class ProfileComponent  {
    username: string;
    user:any;
    repos:any[];

    constructor(private _githubService: GithubService){
        this.user = false;
    }

    searchUser(){
        this._githubService.setUsername(this.username);

        this._githubService.getUser().subscribe(
            user => {
                this.user = user;
            }
        );

        this._githubService.getRepos().subscribe(
            repos => {
                this.repos = repos;
            }
        );
    }
}
