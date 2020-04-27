import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {


  usuario={
    nombre:'Kapoc'
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.usuario.nombre = 'kapoc master';
    }, 2000);
  }

  onKeyUp($event):void{
    console.log('keyUp', $event);

  }

  onBlur($event):void{
    console.log('onBlur', $event);

  }
}
