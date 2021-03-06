import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserFormComponent } from './user-form.component';
import { FormsModule }   from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { EqualValidator } from './equal-validator.directive';
import { AppComponent }   from './app.component';

@NgModule({
  imports: [ BrowserModule ,  FormsModule,HttpModule,JsonpModule],
  declarations: [ AppComponent,UserFormComponent,EqualValidator ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
