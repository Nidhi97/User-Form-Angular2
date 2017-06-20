import { Component } from '@angular/core';
import {UserService} from './user-form.service';

@Component({
    selector: 'my-app',
    template: `
      
      <user-form></user-form>
    `,
     providers: [UserService]
})
export class AppComponent { }
