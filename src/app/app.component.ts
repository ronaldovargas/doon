import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MentionModule } from 'angular-mentions/mention';
import * as $ from 'jquery';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PerguntasComponent } from './perguntas/perguntas.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  names : any;
  id:any;
  keyupHandlerFunction:any;
  result: string;
  @ViewChild('sidenav') sidenav: MatSidenav;
  dialogResult = "";
  reason = '';
  pessoaFisica = [];

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  constructor(public dialog: MatDialog) {

  }

  public ngOnInit() {

  }

  openDialog() {
    let dialogRef = this.dialog.open(PerguntasComponent, {
      width: '600px',
      height: '250px',
      data: {name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
       this.dialogResult = result;
      this.pessoaFisica.push(this.dialogResult );
    });
  }
}
