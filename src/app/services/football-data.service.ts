import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import { LeagueData, StandingsResponse } from '../models/league.model';
import { FixturesResponse } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class FootballDataService {
  constructor(private http: HttpClient, private apiConfig: ApiConfigService) {}

  private dataSubject: BehaviorSubject<LeagueData> =
    new BehaviorSubject<LeagueData>({ leagueId: 0, teamId: 0 });
  public data = this.dataSubject.asObservable();

  getStandings(leagueId: number): Observable<StandingsResponse> {
    const apiUrl = `${this.apiConfig.getApiUrl()}standings?league=${leagueId}&season=${this.apiConfig.getSeason()}`;
    const requestOptions = this.getApiRequestOptions();
    return this.http.get<StandingsResponse>(apiUrl, requestOptions);
  }

  getFixtures(leagueId: number, teamId: number): Observable<FixturesResponse> {
    const apiUrl = `${this.apiConfig.getApiUrl()}fixtures?league=${leagueId}&season=${this.apiConfig.getSeason()}&team=${teamId}`;
    const requestOptions = this.getApiRequestOptions();
    return this.http.get<FixturesResponse>(apiUrl, requestOptions);
  }

  dataShare(data: LeagueData) {
    this.dataSubject.next(data);
  }

  private getApiRequestOptions(): { headers: HttpHeaders } {
    const headers = new HttpHeaders()
      .set('x-rapidapi-key', this.apiConfig.getApiKey())
      .set('x-rapidapi-host', this.apiConfig.getApiHost());

    return { headers };
  }
}
