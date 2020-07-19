import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StagePayload} from '../stage/stage.payload';
import {map} from 'rxjs/operators';
import {StageActorPayload} from '../stageactor/stageActor.payload';

@Injectable({
  providedIn: 'root'
})
export class StageActorService {
  serverUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
  }

  // get all stages list from server
  getAllStages(): Observable<Array<StageActorPayload>> {
    return this.httpClient.get<Array<StageActorPayload>>(this.serverUrl + 'api/stage');
  }

  create(stageActorModel: StageActorPayload): Observable<boolean> {
    return this.httpClient.post<StageActorPayload>(this.serverUrl + 'api/stage/', stageActorModel)
      .pipe(map(data => {
        return true;
      }));
  }
}
