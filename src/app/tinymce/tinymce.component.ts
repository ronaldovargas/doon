import {  Component,  OnDestroy,  AfterViewInit,  EventEmitter,  Input,  Output} from '@angular/core';

 import * as jquery from 'jquery';
 window['jQuery'] = window['$'] = jquery;

declare let tinymce: any;


@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input()  pessoaFisica :[{ name: string}]; 
  @Output() onEditorKeyup = new EventEmitter<any>();
 
 
  editor;

  constructor(){
    
    this.pessoaFisica = [
          {name : "@Nome"},
          {name : "@Data Nascimento"},
          {name : "@Sexo"},
          {name : "@Estado Civil"},
          {name : "@Nacionalidade"},
          {name : "@RG"},
          {name : "@UF RG"},
          {name : "@Profissao"},
          {name : "@Email"},
          {name : "@Celular"},
          {name : "@Telefone Fixo"},
          {name : "@Telefone Contato"},
          {name : "@Logradouro"},
          {name : "@Numero"},
          {name : "@Complemento"},
          {name : "@Bairro"},
          {name : "@UF"},
          {name : "@Municipio"},
          {name : "@Nome(Representante)"},
          {name : "@CPF(Representante)"},
          {name : "@Data Nascimento(Representante)"},
          {name : "@Sexo(Representante)"},
          {name : "@Estado Civil (Representante)"},
          {name : "@Nacionalidade(Representante)"},
          {name : "@RG(Representante)"},
          {name : "@UF RG(Representante)"},
          {name : "@Profissao(Representante)"},
          {name : "@Observacoes"},
        
        
        
        
        
        ];

  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table','mention'   ],
      skin_url: 'assets/skins/lightgray',
      menubar: false,
      height : "400",      
       mentions: {
        source: this.pessoaFisica
        
        
        // source: this.pessoaFisica
    }, 
    
    toolbar: 'undo | redo | formatselect fontselect fontsizeselect |  bold italic underline strikethrough | forecolor  |fullscreen codeview | help',
  
    
    
    
    setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
        });
        editor.on('init', () => {
          editor.setContent('');
          console.log('init');
        });
        
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}