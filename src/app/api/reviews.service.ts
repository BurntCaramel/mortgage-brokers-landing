import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MortgageBrokerReview {
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
  Coords: Record<'Lat' | 'Lon', number>;
  ResultPrice: number | null;
  ResultDate: string | null;
  StarRatings: {
    OverallStarRating: number;
  };
}

export interface MortgageBrokerReviewsData {
  IsSuccessful: boolean;
  Result: {
    Total: number;
    Take: number;
    Skip: number;
    Results: Array<MortgageBrokerReview>;
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
  ): Observable<MortgageBrokerReviewsData> {
    return this.httpClient.post<MortgageBrokerReviewsData>(
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
