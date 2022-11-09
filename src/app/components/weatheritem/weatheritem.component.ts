import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatheritem',
  templateUrl: './weatheritem.component.html',
  styleUrls: ['./weatheritem.component.css']
})
export class WeatheritemComponent implements OnInit {
  @Input() weather:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
