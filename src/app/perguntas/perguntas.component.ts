import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { inject } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.component.html',
  styleUrls: ['./perguntas.component.css']
})
export class PerguntasComponent {
  constructor(public thisDialogRef: MatDialogRef<PerguntasComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

 
  onSave() {
    this.thisDialogRef.close(this.data);
  }

  onCancel() {
    this.thisDialogRef.close('Cancel');
  }

}