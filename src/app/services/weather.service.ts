import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
    url:string = "https://api.weather.gov/gridpoints/DTX/65,33/forecast";

    fetchWeather():Observable<any>{
        return this.http.get<any>(this.url);

    }


}
