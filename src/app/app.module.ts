import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TinymceComponent } from './tinymce/tinymce.component';
import { PerguntasComponent } from './perguntas/perguntas.component';

import { MentionModule } from 'angular-mentions/mention';
import * as $ from 'jquery/dist/jquery.min.js';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    TinymceComponent,
    PerguntasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MentionModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    PerguntasComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
