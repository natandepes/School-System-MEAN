import { Component, Input, OnInit } from '@angular/core';
import { MessangerService } from '../../../services/messanger.service';

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls:['./message-list.component.css']
})
export class MessageListComponent {
    
    @Input() listMessages: any;

}