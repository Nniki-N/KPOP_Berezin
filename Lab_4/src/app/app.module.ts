import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
    declarations: [ AppComponent, ChildComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }