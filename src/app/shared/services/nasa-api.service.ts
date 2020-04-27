import { Injectable } from '@angular/core';
import { Apod } from '../model/apod';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'BIrmDzK8NGGgBCRWQT71Z0i4V4DQ6uGgjjfqpftJ';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private readonly DATA: Apod={
    date:"2017-11-08",
    explanation: "loremmjufsdbsc asfdbncawijdbfwajfbpdj cwdibfwifebwaiebf",
    hdurl: "",
    media_type:"",
    service_version:"",
    title:"Este es el titulo",
    url:"https://e00-co-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/04/08/15863722547602.jpg"
  };

  //Dependendy injection
  constructor(private httpClient: HttpClient ) { }

  getApod(): Observable<Apod> {
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }
}


