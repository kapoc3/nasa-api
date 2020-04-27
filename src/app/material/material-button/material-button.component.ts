import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.css']
})
export class MaterialButtonComponent implements OnInit {

  formulario = {
    valido :true
  };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.formulario.valido = false;
    }, 2000);

  }

  onClick($event):void{
    console.log("Evento de click", $event);

  }


}
