import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiConfigService {
  private apiUrl = 'https://v3.football.api-sports.io/';
  private season = '2023';

  getApiKey(): string {
    return environment.FOOTBALL_API_KEY;
  }

  getApiHost(): string {
    return environment.FOOTBALL_API_HOST;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  getSeason(): string {
    return this.season;
  }
}
