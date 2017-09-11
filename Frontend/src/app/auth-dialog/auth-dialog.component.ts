import {Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.css']
})
export class AuthDialogComponent implements OnInit {

  @Input('auth-mode') authMode: '登入' | '註冊' = '登入';
  @Output() signedResult = new EventEmitter<any>();
  modalActions = new EventEmitter<string|MaterializeAction>();
  constructor() {

  }
    onLoginFormResult(e){   
        if(e.signedIn){
            this.closeDialog();
            this.signedResult.emit({signed: true});
        }
        else{
            alert(e.err.json().errors[0])
        }
    }
    
    onRegisterFormResult(e){
        if(e.signedUp){
            this.closeDialog();
            this.signedResult.emit({signed: true});
        }
        else{
          alert(e.err.json().errors.full_messages[0])
        }
    }
    openDialog(mode: '登入' | '註冊' = '登入'){
        this.authMode = mode;
        this.modalActions.emit({action:"modal", params:['open']});
    }
    
    closeDialog(){
        this.modalActions.emit({action:"modal", params:['close']});
    }

    ngOnInit() {
    }

    isLoginMode(){return this.authMode == '登入'}
    isRegisterMode(){return this.authMode == '註冊'}


}