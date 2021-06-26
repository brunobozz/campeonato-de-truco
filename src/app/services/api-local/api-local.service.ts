import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiLocalService {
  readonly apiUrl: string = environment.LOCAL_API;

  constructor(private http: HttpClient) {}

  public getInfo(info: string): Observable<any> {
    return this.http.get(this.apiUrl + info);
  }

  public deleteItem(id: number, onde: string) {
    return this.http.delete(this.apiUrl + onde + id);
  }

  public postItem(info: string, data: any) {
    return this.http.post(this.apiUrl + info, data);
  }

  public patchItem(info: string, id: number, data: any) {
    return this.http.patch(this.apiUrl + info + '/' + id, data);
  }
  
}
