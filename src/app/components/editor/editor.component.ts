import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  @Input() styles = { height: '200px', width: '100%'}
  @Input() editorBody = '';
  @Input() placeholder = 'Edit passages here...'
  @Input() modules = { toolbar: [ 
    ['bold', 'italic'],
    [],
    ['blockquote', 'code-block'],
    [{'list':'ordered'},{'list':'bullet'}],
    ['image', 'video'],
  ]}; // Quill editor
  constructor() { }


}
