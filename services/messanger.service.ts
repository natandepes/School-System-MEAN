import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessangerService {
    private messages: string[] = [];

    constructor(private http: Http) { }

    getMessages(){
        return this.messages ? this.messages.slice() : [];
    }

    addMessage(message: string){
        this.messages.push(message);

        let body = JSON.stringify(message);

        return this.http.post('http://localhost:3000/message', body)
        .map((response: Response) => response.json())
        .catch((err: Response) => Observable.throw(err.json()));
        
    }

    deleteMessage(message: string){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}