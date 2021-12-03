import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import {Observable,throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private _url : string='/assets/employees.json'
  constructor(private http:HttpClient) { }
  
  getEmployee():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandle));
  }
  errorHandle(error:HttpErrorResponse){
    return throwError(error.message || "server error."); 
    
  }
}
