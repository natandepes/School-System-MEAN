import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessangerService } from '../../../services/messanger.service';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls:['./input.component.css']
})
export class InputComponent {
    messageForm: FormGroup;
    @Output() enviar = new EventEmitter();
    
    constructor
    (
        private formBuilder: FormBuilder,
        private messangerService: MessangerService
    ) 
    {
        this.messageForm = this.formBuilder.group({
            mensagem: ['']
        });
    }

    addMessage(msg: string){
        this.messangerService.addMessage(msg)
        .subscribe
        (
            dadosSucesso => console.log('Dados sucesso:', dadosSucesso),
            dadosErro => console.log('Dados Erro:', dadosErro)
        );
    }

    onSubmit(){
        const form = this.messageForm.value;
        this.addMessage(form.mensagem);
        this.enviar.emit();
    }
}