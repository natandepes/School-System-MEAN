import { Component } from "@angular/core";
import { MessangerService } from "../../services/messanger.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent{

    messages: string[];

    constructor(
        private messangerService: MessangerService
    ){}

    
    ngOnInit(){
       this.getMessages();
    }

    getMessages(){
        this.messages = this.messangerService.getMessages();
    }
}