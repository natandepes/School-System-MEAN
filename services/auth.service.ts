import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Student } from "../models-ts/student";

@Injectable()
export class AuthService {

    constructor(private http: Http) { }


    getUsers()
    {

    }

    createUser(student: Student){

        const bodyReq = JSON.stringify(student);

        const headersReq = new Headers({'Content-Type' : 'application/json'});
        
        return this.http.post('http://localhost:3000/register', bodyReq, {headers: headersReq})
        .map((response: Response) => response.json())
        .catch((err: Response) => Observable.throw(err.json()));

    }
}