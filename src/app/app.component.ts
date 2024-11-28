import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FarmerService } from './services/farmer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private service:FarmerService){

  }

  countryList:Country[]=[
    new Country('1','India'),
    new Country('2','Russia'),
    new Country('3','Israel'),
    new Country('4','Other'),
  ]
  title = 'tdf';

}


export class Country{
  constructor(public id:String,public name:String){}
}