import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styles: ['.blue-bg{background-color:blue;}']
})

export class AppComponent  {
  private username:string = 'Yoseph'
  private currentUser:User = { username: 'Jobson', email: 'job@son.com' }

  private hideEmail:boolean = false
  private disabledInput:boolean = true
  private isBlueBg:boolean= true
  private bgColor:string = 'red'

  private getUsername():string {
    return this.currentUser.username
  }

  private isDisabled():boolean {
    return this.disabledInput
  }

  private toogleLeave():void {
    this.bgColor = 'yellow'
  }

  private toogle():void {
    this.bgColor = 'green'
  }

  private toogleEmail() {
    this.hideEmail = !this.hideEmail
  }

  private changeEmail(newMail:string) {
    this.currentUser.email = newMail
  }

  private keyPress(event:KeyboardEvent) {
    if(event.keyCode == 13) {
      var inputElem = <HTMLInputElement>event.target
      this.changeEmail(inputElem.value)
    }
  }
}

interface User {
  username: string,
  email:string
}
