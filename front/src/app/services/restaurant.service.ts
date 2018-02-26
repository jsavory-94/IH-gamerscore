import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';

@Injectable()
export class RestaurantService {

  API_URL = 'http://localhost:3000'

  constructor(private http: Http) { }
  
  getList(): Promise<any> {
    return this.http.get(`${this.API_URL}/restaurants`)
      .toPromise()
      .then((res: Response) => res.json())
  }
}
