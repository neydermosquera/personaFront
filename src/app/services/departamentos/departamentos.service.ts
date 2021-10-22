import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  private API_SERVER = "http://localhost:8080/"

  constructor(
    private HttpClient: HttpClient
  ) {}

  public getAllDepartamentos(): Observable<any>{
    return this.HttpClient.get(this.API_SERVER);
  }
}
