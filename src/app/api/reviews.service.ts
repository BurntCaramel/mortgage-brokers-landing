import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MortgageBrokerReviews {
  IsSuccessful: boolean;
  Result: {
    Total: number;
    Take: number;
    Skip: number;
    Results: Array<{
      ReviewUrl: string;
      Title: string;
      Description: string;
      IsRecommended: boolean;
      ReviewedOn: string;
      ReviewerName: string;
      ReviewerType: string;
      Status: string;
      PropertyCoverImage: string;
      StreetAddress: string;
      Suburb: string;
      State: string;
      Postcode: string;
      SuburbUrl: string;
      Coords: Record<'Lat' | 'Lot', number>;
    }>;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private REVIEWS_API_URL = '/api/reviews';

  constructor(private httpClient: HttpClient) {}

  public getReviewsForMortgageBroker(
    agentCode: string
  ): Observable<MortgageBrokerReviews> {
    return this.httpClient.post<MortgageBrokerReviews>(
      `${this.REVIEWS_API_URL}`,
      {
        AgentCode: agentCode,
        Skip: 0,
        Take: 24,
        AgentType: 'MortgageBroker',
        ShowPromotedFirst: true,
        IsProfileOwner: false,
      }
    );
  }
}
