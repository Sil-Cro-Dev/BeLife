import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModelGeneratorService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public generateModel(inputDto: any): Observable<any> {
    return this.httpClient.post("http://localhost:8080/api/model", inputDto);
  }

}
