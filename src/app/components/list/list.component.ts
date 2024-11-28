import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../services/farmer.service';
import { Farmer } from '../../entity/farmer';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,RouterModule,],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  constructor(private farmerService:FarmerService,private router:Router){}

  flag:boolean=false;
  message:string='';

  farmers:Farmer[]=[];

  ngOnInit(): void {
    this.getAllFarmers();
  }
  getAllFarmers() {
  this.farmerService.getAllFarmer().subscribe(data=>{
    this.farmers=data;
  })
  }

  editFarmer(id:number){   
this.router.navigate(['/edit',id]);
  }

  deleteFarmer(id:number){
    const isConfirm=window.confirm('Are you sure want to Delete');
    if(isConfirm){
    this.flag=true;
this.farmerService.deleteFarmer(id).subscribe(data=>{
this.message=data;
setTimeout(()=>{
window.location.reload();
},4000);
});
    }
  }
}
