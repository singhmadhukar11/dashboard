import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  api = 'https://jsonplaceholder.typicode.com/todos';

  getTableData() {
    return this.http.get(this.api);
  }



}
