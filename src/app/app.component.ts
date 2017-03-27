import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent  {
  private username:string = 'Yoseph'
  private currentUser:User = { username: 'Jobson', email: 'job@son.com' }

  private getUsername():string {
    return this.currentUser.username
  }
}

interface User {
  username: string,
  email:string
}
