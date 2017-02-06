import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

    private _username: string;

    // client id and secret are outdated ;-)
    private client_id = '153969478c65dc3d7d8d';
    private client_secret = 'b04a54af58b96626acfd44da63f1ada05b80d8d9';

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
