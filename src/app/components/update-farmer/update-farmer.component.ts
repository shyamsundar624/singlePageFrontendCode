import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../services/farmer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-farmer',
  standalone: true,
  imports: [],
  templateUrl: './update-farmer.component.html',
  styleUrl: './update-farmer.component.css'
})
export class UpdateFarmerComponent implements OnInit{

  constructor(private service:FarmerService,
    private activateRoute:ActivatedRoute,
    private router:Router
  ){

  }
  ngOnInit(): void {
   let id=this.activateRoute.snapshot.params['id'];
   
  }

}
