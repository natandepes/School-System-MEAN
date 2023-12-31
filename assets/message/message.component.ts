import { Component, OnInit } from "@angular/core";
import { MessangerService } from "../../services/messanger.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    messages: any;

    constructor(
        private messangerService: MessangerService
    ){}

    
    ngOnInit(){
       this.getMessages();
    }

    getMessages(){
        this.messangerService.getMessages()
        .subscribe
        (
            dadosSucesso => this.messages = dadosSucesso.messages,
            dadosErro => console.log('Erro Get Msgs Front:', dadosErro)
        )
        
    }
}