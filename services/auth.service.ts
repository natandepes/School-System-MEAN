import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthService {

    constructor(private http: Http) { }


    getUsers()
    {

    }

    createUser(username: string, password: string){

        let body = JSON.stringify({username, password});
        
        return this.http.post('http://localhost:3000/sign-up', body)
        .map((response: Response) => response.json())
        .catch((err: Response) => Observable.throw(err.json()));

    }
}