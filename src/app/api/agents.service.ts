import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AgentData {
  AgentType: 'MortgageBroker' | string;
  AgentProfileID: number;
  AgentTitle: string;
  AgentName: string;
  AgentFirstName: string;
  AgentCode: string;
  Theme: {
    CoverImage: string;
    BannerImage: string;
    AvatarImage: string;
  };
  ReviewCount: number;
  About: {
    Summary: string;
    Phone: string;
    Mobile: string;
    Video:
      | { Provider: string }
      | {
          Provider: 'Youtube';
          Code: string;
        };
    Facebook: string | null;
    Twitter: string | null;
    LinkedIn: string | null;
    Website: string | null;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AgentsService {
  private AGENTS_API_URL = '/api/agents';

  constructor(private httpClient: HttpClient) {}

  public getAgent(agentCode: string): Observable<AgentData> {
    return this.httpClient.get<AgentData>(
      `${this.AGENTS_API_URL}/Code-${agentCode}`
    );
  }
}
