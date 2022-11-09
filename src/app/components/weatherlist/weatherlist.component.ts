import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weatherlist',
  templateUrl: './weatherlist.component.html',
  styleUrls: ['./weatherlist.component.css']
})
export class WeatherlistComponent implements OnInit {
  weatherInfo:any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

    this.weatherService.fetchWeather().subscribe(
      (response:any) => {
        
        console.log(response);
        const {properties:{periods=[]}} = response;
        this.weatherInfo = periods;
        }, 
        //error handling
        (err) =>{
          console.log(err);
        }
    )
  }

}
