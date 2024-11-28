import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FarmerService } from '../../services/farmer.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Farmer } from '../../entity/farmer';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  createAccount=false;
  message:string='';

  farmer:Farmer=new Farmer();
  constructor(private service:FarmerService,
     private activateRoute:ActivatedRoute,
    private router:Router){

  }

  ngOnInit(): void {
    let id=this.activateRoute.snapshot.params['id'];
    if(id){
      this.getFarmer(id);
    }
  
  }

 

  title = 'Farmer App';

  onSubmit() {
    console.log(this.farmer)
    const isConfirmed=window.confirm('Are you sure you want to Submit')
    if(isConfirmed){
    if(this.farmer.id){
      this.service.updateFarmer(this.farmer).subscribe(data=>{
        this.message=data;
        this.createAccount=true;
        setTimeout(()=>{
          this.goToList();
        },6000);
    })
  }else{
    this.service.saveFarmer(this.farmer).subscribe(data=>{
      this.message=data;
        this.createAccount=true;
        setTimeout(()=>{
          this.goToList();
        },6000);
    })

  }
    }
    }
  goToList() {
    this.router.navigate(['/list']);
  }
getFarmer(id:number){
  this.service.findFarmerById(id).subscribe({
    next: (data)=>this.farmer=data
  })
}
}
