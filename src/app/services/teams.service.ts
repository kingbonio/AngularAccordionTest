import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as teamsData from '../data/teams.json';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  /**
   * Returns observable of data from JSON
   */
  public getTeamsData(): Observable<any> {
    return of(teamsData);
  }
}
