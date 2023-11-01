import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessangerService {
    private messages: string[] = [];

    constructor(private http: Http) { }

    getMessages(){

        return this.http.get('http://localhost:3000/message')
        .map((response: Response) => response.json())
        .catch((response: Response) => Observable.throw(response.json()));

        // return this.messages ? this.messages.slice() : [];
    }

    addMessage(message: string){
        this.messages.push(message);

        const messageObj = 
        { 
            mensagem: message 
        }; 

        const bodyReq = JSON.stringify(messageObj);

        const headersReq = new Headers({'Content-Type' : 'application/json'});

        return this.http.post('http://localhost:3000/message', bodyReq, {headers: headersReq})
        .map((response: Response) => response.json())
        .catch((err: Response) => Observable.throw(err.json()));
        
    }

    deleteMessage(message: string){
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}