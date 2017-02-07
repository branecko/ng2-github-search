import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

    private _username: string;

    // add your keys
    private client_id = '';
    private client_secret = '';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this._username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this._username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    setUsername(username: string) {
        this._username = username;
    }
}
