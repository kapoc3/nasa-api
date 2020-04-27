import { Component, OnInit } from '@angular/core';
import { Apod } from 'src/app/shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api.service';



@Component({
  selector: 'ed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  apod: Apod;
  error: string;
  constructor(private nasaApi: NasaApiService) { }

  ngOnInit(): void {
    this.nasaApi.getApod().subscribe((data: Apod)=> {
        setTimeout(() => {
          this.apod = data;
        }, 3000);
    }, error => {
        setTimeout(()=>{
          this.error = 'Error en la conexion del servidor';
          console.log('Error en la conexion del servidor');
        }, 2000);
    });
  }
}
