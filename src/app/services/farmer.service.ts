import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from '../entity/farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {
private baseUrl='http://localhost:9090/v1/api/farmer';
  constructor(private http:HttpClient) { }

  saveFarmer(farmer: Object):Observable<any>{
    return this.http.post(`${this.baseUrl}/save`,farmer,{ responseType: 'text'})
  }

  getAllFarmer():Observable<Farmer[]>{
    return this.http.get<Farmer[]>(`${this.baseUrl}/list`);
  }

  findFarmerById(id:number):Observable<Farmer>{
    return this.http.get<Farmer>(`${this.baseUrl}/find/${id}`);
  }

  updateFarmer(farmer:Farmer):Observable<any>{
    return this.http.put(`${this.baseUrl}/update`,farmer,{responseType:'text'})
  }

  deleteFarmer(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{responseType:'text'})
  }
}
